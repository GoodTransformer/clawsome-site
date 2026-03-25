import AppKit
import Foundation

struct IconSpec {
  let size: Int
  let path: String
}

let workspace = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let sourceURL = workspace.appendingPathComponent("public/brand/clawsome-mark-small-light.svg")
let outputSpecs = [
  IconSpec(size: 16, path: "public/favicons/favicon-16x16.png"),
  IconSpec(size: 32, path: "public/favicons/favicon-32x32.png"),
  IconSpec(size: 180, path: "public/favicons/apple-touch-icon.png"),
  IconSpec(size: 192, path: "public/favicons/favicon-192x192.png"),
  IconSpec(size: 512, path: "public/favicons/favicon-512x512.png")
]

let background = NSColor(calibratedRed: 178 / 255, green: 38 / 255, blue: 36 / 255, alpha: 1)
let backgroundInsetRatio: CGFloat = 0.0
let iconPaddingRatio: CGFloat = 0.16
let opticalYOffsetRatio: CGFloat = -0.01
let cornerRadiusRatio: CGFloat = 0.22

guard
  let sourceImage = NSImage(contentsOf: sourceURL),
  let tiffData = sourceImage.tiffRepresentation,
  let bitmap = NSBitmapImageRep(data: tiffData)
else {
  fputs("Unable to load source image at \(sourceURL.path)\n", stderr)
  exit(1)
}

func alphaBounds(for bitmap: NSBitmapImageRep, threshold: CGFloat = 0.01) -> NSRect? {
  var minX = bitmap.pixelsWide
  var minY = bitmap.pixelsHigh
  var maxX = -1
  var maxY = -1

  for y in 0 ..< bitmap.pixelsHigh {
    for x in 0 ..< bitmap.pixelsWide {
      guard let color = bitmap.colorAt(x: x, y: y), color.alphaComponent > threshold else {
        continue
      }

      minX = min(minX, x)
      minY = min(minY, y)
      maxX = max(maxX, x)
      maxY = max(maxY, y)
    }
  }

  guard maxX >= minX, maxY >= minY else {
    return nil
  }

  return NSRect(
    x: CGFloat(minX),
    y: CGFloat(minY),
    width: CGFloat(maxX - minX + 1),
    height: CGFloat(maxY - minY + 1)
  )
}

guard let cropRect = alphaBounds(for: bitmap) else {
  fputs("Source image does not contain any visible pixels.\n", stderr)
  exit(1)
}

func croppedImage(from image: NSImage, cropRect: NSRect) -> NSImage {
  let cropped = NSImage(size: cropRect.size)
  cropped.lockFocus()
  image.draw(
    in: NSRect(origin: .zero, size: cropRect.size),
    from: cropRect,
    operation: .copy,
    fraction: 1
  )
  cropped.unlockFocus()
  return cropped
}

func pngData(for image: NSImage, size: Int) -> Data? {
  guard
    let bitmap = NSBitmapImageRep(
      bitmapDataPlanes: nil,
      pixelsWide: size,
      pixelsHigh: size,
      bitsPerSample: 8,
      samplesPerPixel: 4,
      hasAlpha: true,
      isPlanar: false,
      colorSpaceName: .deviceRGB,
      bitmapFormat: [],
      bytesPerRow: 0,
      bitsPerPixel: 0
    )
  else {
    return nil
  }

  bitmap.size = NSSize(width: size, height: size)

  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)

  let canvasRect = NSRect(x: 0, y: 0, width: size, height: size)
  let inset = CGFloat(size) * backgroundInsetRatio
  let backgroundRect = canvasRect.insetBy(dx: inset, dy: inset)
  let backgroundPath = NSBezierPath(
    roundedRect: backgroundRect,
    xRadius: CGFloat(size) * cornerRadiusRatio,
    yRadius: CGFloat(size) * cornerRadiusRatio
  )
  background.setFill()
  backgroundPath.fill()

  let availableRect = canvasRect.insetBy(dx: CGFloat(size) * iconPaddingRatio, dy: CGFloat(size) * iconPaddingRatio)
  let imageAspectRatio = image.size.width / image.size.height
  let targetWidth: CGFloat
  let targetHeight: CGFloat

  if availableRect.width / availableRect.height > imageAspectRatio {
    targetHeight = availableRect.height
    targetWidth = targetHeight * imageAspectRatio
  } else {
    targetWidth = availableRect.width
    targetHeight = targetWidth / imageAspectRatio
  }

  let targetRect = NSRect(
    x: (CGFloat(size) - targetWidth) / 2,
    y: (CGFloat(size) - targetHeight) / 2 + (CGFloat(size) * opticalYOffsetRatio),
    width: targetWidth,
    height: targetHeight
  )

  image.draw(
    in: targetRect,
    from: NSRect(origin: .zero, size: image.size),
    operation: .sourceOver,
    fraction: 1
  )

  NSGraphicsContext.restoreGraphicsState()
  return bitmap.representation(using: .png, properties: [:])
}

func writePNG(_ data: Data, to url: URL) throws {
  let directory = url.deletingLastPathComponent()
  try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
  try data.write(to: url)
}

func writeICO(images: [(size: Int, data: Data)], to url: URL) throws {
  var file = Data()
  let count = UInt16(images.count)

  func appendUInt16(_ value: UInt16) {
    var littleEndian = value.littleEndian
    withUnsafeBytes(of: &littleEndian) { file.append(contentsOf: $0) }
  }

  func appendUInt32(_ value: UInt32) {
    var littleEndian = value.littleEndian
    withUnsafeBytes(of: &littleEndian) { file.append(contentsOf: $0) }
  }

  appendUInt16(0)
  appendUInt16(1)
  appendUInt16(count)

  let directorySize = 6 + (images.count * 16)
  var offset = directorySize

  for image in images {
    let clampedSize = image.size == 256 ? 0 : image.size
    file.append(UInt8(clampedSize))
    file.append(UInt8(clampedSize))
    file.append(0)
    file.append(0)
    appendUInt16(1)
    appendUInt16(32)
    appendUInt32(UInt32(image.data.count))
    appendUInt32(UInt32(offset))
    offset += image.data.count
  }

  for image in images {
    file.append(image.data)
  }

  let directory = url.deletingLastPathComponent()
  try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
  try file.write(to: url)
}

let cropped = croppedImage(from: sourceImage, cropRect: cropRect)
var icoImages: [(size: Int, data: Data)] = []

for spec in outputSpecs {
  guard let data = pngData(for: cropped, size: spec.size) else {
    fputs("Unable to render favicon at \(spec.size)x\(spec.size).\n", stderr)
    exit(1)
  }

  let outputURL = workspace.appendingPathComponent(spec.path)
  try writePNG(data, to: outputURL)

  if [16, 32].contains(spec.size) {
    icoImages.append((size: spec.size, data: data))
  }
}

guard let ico48Data = pngData(for: cropped, size: 48) else {
  fputs("Unable to render favicon at 48x48.\n", stderr)
  exit(1)
}

icoImages.append((size: 48, data: ico48Data))

let icoURL = workspace.appendingPathComponent("public/favicon.ico")
try writeICO(images: icoImages, to: icoURL)
