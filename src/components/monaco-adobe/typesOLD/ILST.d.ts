/**
 * Illustrator CC 2019
 * ver.0.0.2
 */

/**
 * The screen mode.
 */
declare enum ScreenMode {
  /**
   * Full screen with menu bar.
   */
  DESKTOP = 2,

  /**
   * Full screen without menu bar.
   */
  FULLSCREEN = 3,

  /**
   * Display multiple windows.
   */
  MULTIWINDOW = 1
}

/**
 * The color model.
 */
declare enum ColorType {
  /**
   *
   */
  CMYK = 1,

  /**
   *
   */
  GRADIENT = 4,

  /**
   *
   */
  GRAY = 0,

  /**
   *
   */
  None = 6,

  /**
   *
   */
  PATTERN = 2,

  /**
   *
   */
  RGB = 5,

  /**
   *
   */
  SPOT = 3
}

/**
 * The color spaces available for documents.
 */
declare enum DocumentColorSpace {
  /**
   * CMYK document color space.
   */
  CMYK = 2,

  /**
   * RGB document color space.
   */
  RGB = 1
}

/**
 * The preset types available for new documents.
 */
declare enum DocumentPresetType {
  /**
   * The default CMYK document preset.
   */
  BasicCMYK = 5,

  /**
   * The default RGB document preset.
   */
  BasicRGB = 6,

  /**
   * The default Mobile document preset.
   */
  Mobile = 3,

  /**
   * The default Print document preset.
   */
  Print = 1,

  /**
   * The default Video and Film document preset.
   */
  Video = 4,

  /**
   * The default Web document preset.
   */
  Web = 2
}

/**
 * The raster resolutions available when creating a new document.
 */
declare enum DocumentRasterResolution {
  /**
   * High raster resolution, 300 PPI.
   */
  HighResolution = 3,

  /**
   * Medium raster resolution, 150 PPI.
   */
  MediumResolution = 2,

  /**
   * Low raster resolution, 72 PPI.
   */
  ScreenResolution = 1
}

/**
 * The transparency grid for the new document, in video presets.
 */
declare enum DocumentTransparencyGrid {
  /**
   * Blue grids.
   */
  TransparencyGridBlue = 7,

  /**
   * Dark color grids.
   */
  TransparencyGridDark = 3,

  /**
   * Green grids.
   */
  TransparencyGridGreen = 6,

  /**
   * Light grid colors.
   */
  TransparencyGridLight = 1,

  /**
   * Medium grid colors.
   */
  TransparencyGridMedium = 2,

  /**
   * No grids.
   */
  TransparencyGridNone = 0,

  /**
   * Orange grids.
   */
  TransparencyGridOrange = 5,

  /**
   * Purple grids.
   */
  TransparencyGridPurple = 8,

  /**
   * Red grids.
   */
  TransparencyGridRed = 4
}

/**
 * The preview modes available when creating a new document.
 */
declare enum DocumentPreviewMode {
  /**
   * Default Preview mode.
   */
  DefaultPreview = 1,

  /**
   * Overprint Preview Mode.
   */
  OverprintPreview = 3,

  /**
   * Pixel Preview mode.
   */
  PixelPreview = 2
}

/**
 * The layout of artboards in document.
 */
declare enum DocumentArtboardLayout {
  /**
   * Arrange artboards in a single column.
   */
  Column = 4,

  /**
   * Arrange artboards in Grid by Column pattern.
   */
  GridByCol = 2,

  /**
   * Arrange artboards in Grid by Row pattern.
   */
  GridByRow = 1,

  /**
   * Arrange artboards in Grid by Column pattern from right-to-left.
   */
  RLGridByCol = 6,

  /**
   * Arrange artboards in Grid by Row pattern from right-to-left.
   */
  RLGridByRow = 5,

  /**
   * Arrange artboards in a single row from right-to-left.
   */
  RLRow = 7,

  /**
   * Arrange artboards in a single row.
   */
  Row = 3
}

/**
 * The color space.
 */
declare enum ImageColorSpace {
  /**
   * CMYK color space.
   */
  CMYK = 3,

  /**
   * DeviceN color space.
   */
  DeviceN = 6,

  /**
   * Gray color space.
   */
  GrayScale = 1,

  /**
   * Indexed color space.
   */
  Indexed = 7,

  /**
   * LAB color space.
   */
  LAB = 4,

  /**
   * RGB color space.
   */
  RGB = 2,

  /**
   * Separation color space.
   */
  Separation = 5
}

/**
 * The stroke cap.
 */
declare enum StrokeCap {
  /**
   * Butted cap.
   */
  BUTTENDCAP = 1,

  /**
   * Projecting cap.
   */
  PROJECTINGENDCAP = 3,

  /**
   * Rounded cap.
   */
  ROUNDENDCAP = 2
}

/**
 * The stroke joint.
 */
declare enum StrokeJoin {
  /**
   * Beveled joints.
   */
  BEVELENDJOIN = 3,

  /**
   * Mitered joints.
   */
  MITERENDJOIN = 1,

  /**
   * Rounded joints.
   */
  ROUNDENDJOIN = 2
}

/**
 * The path point selection state.
 */
declare enum PathPointSelection {
  /**
   * Anchor point selected.
   */
  ANCHORPOINT = 2,

  /**
   * Left direction point selected.
   */
  LEFTDIRECTION = 3,

  /**
   * Left and right direction points selected.
   */
  LEFTRIGHTPOINT = 5,

  /**
   * Path point not selected.
   */
  NOSELECTION = 1,

  /**
   * Right direction point selected.
   */
  RIGHTDIRECTION = 4
}

/**
 * The path point type: smooth/corner.
 */
declare enum PointType {
  /**
   * Corner point.
   */
  CORNER = 2,

  /**
   * Smooth path point.
   */
  SMOOTH = 1
}

/**
 * The type of text art.
 */
declare enum TextType {
  /**
   * Text within an area.
   */
  AREATEXT = 1,

  /**
   * Text on a path.
   */
  PATHTEXT = 2,

  /**
   * Text from a point.
   */
  POINTTEXT = 0
}

/**
 * The type of text antialiasing.
 */
declare enum TextAntialias {
  /**
   * Text on a path.
   */
  CRISP = 3,

  /**
   * Text from a point.
   */
  NONE = 1,

  /**
   * Text within an area.
   */
  SHARP = 2,

  /**
   * Text on a path.
   */
  STRONG = 4
}

/**
 * The gradient type.
 */
declare enum GradientType {
  /**
   * Linear gradient.
   */
  LINEAR = 1,

  /**
   *
   */
  RADIAL = 2
}

/**
 * The orientation.
 */
declare enum TextOrientation {
  /**
   * Horizontal orientation.
   */
  HORIZONTAL = 0,

  /**
   * Vertical orientation.
   */
  VERTICAL = 1
}

/**
 * The crop style.
 */
declare enum CropOptions {
  /**
   * Japanese crop style.
   */
  Japanese = 2,

  /**
   * Standard crop style.
   */
  Standard = 1
}

/**
 * The raster link state.
 */
declare enum RasterLinkState {
  /**
   * Image data is from the linked file.
   */
  DATAFROMFILE = 2,

  /**
   * Image data has been modified.
   */
  DATAMODIFIED = 3,

  /**
   * Image data is not set.
   */
  NODATA = 1
}

/**
 * The tab alignment.
 */
declare enum TabStopAlignment {
  /**
   *
   */
  Center = 1,

  /**
   *
   */
  Decimal = 3,

  /**
   *
   */
  Left = 0,

  /**
   *
   */
  Right = 2
}

/**
 * The paragraph alignment.
 */
declare enum Justification {
  /**
   *
   */
  CENTER = 2,

  /**
   *
   */
  FULLJUSTIFY = 6,

  /**
   *
   */
  FULLJUSTIFYLASTLINECENTER = 5,

  /**
   *
   */
  FULLJUSTIFYLASTLINELEFT = 3,

  /**
   *
   */
  FULLJUSTIFYLASTLINERIGHT = 4,

  /**
   *
   */
  LEFT = 0,

  /**
   *
   */
  RIGHT = 1
}

/**
 * The transformation type.
 */
declare enum Transformation {
  /**
   * Transform relative to the object's bottom edge.
   */
  BOTTOM = 7,

  /**
   * Transform relative to the object's bottom left corner.
   */
  BOTTOMLEFT = 4,

  /**
   * Transform relative to the object's bottom right corner.
   */
  BOTTOMRIGHT = 10,

  /**
   * Transform relative to the object's center.
   */
  CENTER = 6,

  /**
   * Transform relative to the illustration's page origin.
   */
  DOCUMENTORIGIN = 1,

  /**
   * Transform relative to the object's left edge.
   */
  LEFT = 3,

  /**
   * Transform relative to the object's right edge.
   */
  RIGHT = 9,

  /**
   * Transform relative to the object's top edge.
   */
  TOP = 5,

  /**
   * Transform relative to the object's top left corner.
   */
  TOPLEFT = 2,

  /**
   * Transform relative to the object's top right corner.
   */
  TOPRIGHT = 8
}

/**
 * Illustrator library types.
 */
declare enum LibraryType {
  /**
   * Illustrator brushes library.
   */
  BRUSHES = 3,

  /**
   * Illustrator graphic styles library.
   */
  GRAPHICSTYLES = 4,

  /**
   * Illustrator artwork.
   */
  ILLUSTRATORARTWORK = 1,

  /**
   * Illustrator swatches library.
   */
  SWATCHES = 2,

  /**
   * Illustrator symbols library.
   */
  SYMBOLS = 5
}

/**
 * Savable document types.
 */
declare enum DocumentType {
  /**
   * EPS file format.
   */
  EPS = 2,

  /**
   * FXG file format.
   */
  FXG = 4,

  /**
   * Illustrator file format.
   */
  ILLUSTRATOR = 1,

  /**
   * Acrobat PDF file format.
   */
  PDF = 3
}

/**
 * Export for screens scale type.
 */
declare enum ExportForScreensScaleType {
  /**
   * Scale artwork by factors like 1x, 2x, 3x and so on, where 1x means 72 ppi.
   */
  SCALEBYFACTOR = 0,

  /**
   * Scale artwork by specifying artwork height in pixels like 100px, 124px etc. Width of the artwork is adjusted automatically to maintain the aspect ratio.
   */
  SCALEBYHEIGHT = 2,

  /**
   * Scale artwork by specifying resolution in ppi like 72 ppi, 100 ppi, 144 ppi etc.
   */
  SCALEBYRESOLUTION = 3,

  /**
   * Scale artwork by specifying artwork width in pixels like 100px, 124px etc. Height of the artwork is adjusted automatically to maintain the aspect ratio.
   */
  SCALEBYWIDTH = 1
}

/**
 * Export for screens type.
 */
declare enum ExportForScreensType {
  /**
   * Export file in JPEG (100% quality) format.
   */
  SE_JPEG100 = 1,

  /**
   * Export file in JPEG (20% quality) format.
   */
  SE_JPEG20 = 4,

  /**
   * Export file in JPEG (50% quality) format.
   */
  SE_JPEG50 = 3,

  /**
   * Export file in JPEG (80% quality) format.
   */
  SE_JPEG80 = 2,

  /**
   * Export file in Acrobat PDF format.
   */
  SE_PDF = 8,

  /**
   * Export file in PNG 24-bit format.
   */
  SE_PNG24 = 7,

  /**
   * Export file in PNG 8-bit format.
   */
  SE_PNG8 = 6,

  /**
   * Export file in SVG format.
   */
  SE_SVG = 5
}

/**
 * Export file types.
 */
declare enum ExportType {
  /**
   * AutoCAD export file format.
   */
  AUTOCAD = 8,

  /**
   * Flash export file format.
   */
  FLASH = 7,

  /**
   * GIF export file format.
   */
  GIF = 6,

  /**
   * JPEG export file format.
   */
  JPEG = 1,

  /**
   * Photoshop export file format.
   */
  PHOTOSHOP = 2,

  /**
   * PNG 24-bit export file format.
   */
  PNG24 = 5,

  /**
   * PNG 8-bit export file format.
   */
  PNG8 = 4,

  /**
   * SVG export file format.
   */
  SVG = 3,

  /**
   * TIFF export file format.
   */
  TIFF = 9,

  /**
   * Web Optimized SVG export file format.
   */
  WOSVG = 10
}

/**
 * Method used to reduce color for PNG8 and GIF export formats.
 */
declare enum ColorReductionMethod {
  /**
   *
   */
  ADAPTIVE = 0x41647074,

  /**
   *
   */
  PERCEPTUAL = 0x50726370,

  /**
   *
   */
  SELECTIVE = 0x536c7476,

  /**
   *
   */
  WEB = 0x57656220
}

/**
 * Method used to dither colors for PNG8 and GIF export formats.
 */
declare enum ColorDitherMethod {
  /**
   *
   */
  DIFFUSION = 0x4466736e,

  /**
   *
   */
  NOISE = 0x424e6f69,

  /**
   * No dithering.
   */
  NOREDUCTION = 0x4e6f6e65,

  /**
   *
   */
  PATTERNDITHER = 0x5074726e
}

/**
 * The compatibility type.
 */
declare enum Compatibility {
  /**
   *
   */
  ILLUSTRATOR10 = 10,

  /**
   *
   */
  ILLUSTRATOR11 = 11,

  /**
   *
   */
  ILLUSTRATOR12 = 12,

  /**
   *
   */
  ILLUSTRATOR13 = 13,

  /**
   *
   */
  ILLUSTRATOR14 = 14,

  /**
   *
   */
  ILLUSTRATOR15 = 15,

  /**
   *
   */
  ILLUSTRATOR16 = 16,

  /**
   *
   */
  ILLUSTRATOR17 = 17,

  /**
   *
   */
  ILLUSTRATOR3 = 3,

  /**
   *
   */
  ILLUSTRATOR8 = 8,

  /**
   *
   */
  ILLUSTRATOR9 = 9,

  /**
   *
   */
  JAPANESEVERSION3 = 3
}

/**
 * This provides a means for matching the color characteristics of a PDF document.
 */
declare enum PDFXStandard {
  /**
   * Supports only a CMYK and spot color workflow, targeted to a specific output device.
   */
  PDFX1A2001 = 2,

  /**
   * Supports only a CMYK and spot color workflow, targeted to a specific output device.
   */
  PDFX1A2003 = 3,

  /**
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
   */
  PDFX32001 = 4,

  /**
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
   */
  PDFX32002 = 4,

  /**
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
   */
  PDFX32003 = 5,

  /**
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.
   */
  PDFX42007 = 6,

  /**
   * The user isn't complying with any PDF standard.
   */
  PDFXNONE = 1
}

/**
 * The PDF compatibility type.
 */
declare enum PDFCompatibility {
  /**
   * Acrobat version 4.
   */
  ACROBAT4 = 4,

  /**
   * Acrobat version 5.
   */
  ACROBAT5 = 5,

  /**
   * Acrobat version 6.
   */
  ACROBAT6 = 6,

  /**
   * Acrobat version 7.
   */
  ACROBAT7 = 7,

  /**
   * Acrobat version 8.
   */
  ACROBAT8 = 8
}

/**
 * The Photoshop compatibility type.
 */
declare enum PhotoshopCompatibility {
  /**
   * Photoshop version 6.
   */
  PHOTOSHOP6 = 2,

  /**
   * Photoshop version 8.
   */
  PHOTOSHOP8 = 1
}

/**
 * The compression type.
 */
declare enum CompressionQuality {
  /**
   * Automatic JPEG2000 compression high.
   */
  AUTOMATICJPEG2000HIGH = 18,

  /**
   * Automatic JPEG2000 compression lossless.
   */
  AUTOMATICJPEG2000LOSSLESS = 20,

  /**
   * Automatic JPEG2000 compression low.
   */
  AUTOMATICJPEG2000LOW = 16,

  /**
   * Automatic JPEG2000 compression maximum.
   */
  AUTOMATICJPEG2000MAXIMUM = 19,

  /**
   * Automatic JPEG2000 compression medium.
   */
  AUTOMATICJPEG2000MEDIUM = 17,

  /**
   * Automatic JPEG2000 compression minimum.
   */
  AUTOMATICJPEG2000MINIMUM = 15,

  /**
   * Automatic JPEG compression high.
   */
  AUTOMATICJPEGHIGH = 13,

  /**
   * Automatic JPEG compression low.
   */
  AUTOMATICJPEGLOW = 11,

  /**
   * Automatic JPEG compression maximum.
   */
  AUTOMATICJPEGMAXIMUM = 14,

  /**
   * Automatic JPEG compression medium.
   */
  AUTOMATICJPEGMEDIUM = 12,

  /**
   * Automatically choose between JPEG and ZIP performing minimum compression depending on images.
   */
  AUTOMATICJPEGMINIMUM = 10,

  /**
   *
   */
  JPEG2000HIGH = 24,

  /**
   *
   */
  JPEG2000LOSSLESS = 26,

  /**
   *
   */
  JPEG2000LOW = 22,

  /**
   *
   */
  JPEG2000MAXIMUM = 25,

  /**
   *
   */
  JPEG2000MEDIUM = 23,

  /**
   *
   */
  JPEG2000MINIMUM = 21,

  /**
   *
   */
  JPEGHIGH = 6,

  /**
   *
   */
  JPEGLOW = 4,

  /**
   *
   */
  JPEGMAXIMUM = 7,

  /**
   *
   */
  JPEGMEDIUM = 5,

  /**
   *
   */
  JPEGMINIMUM = 3,

  /**
   * Automatic compression.
   */
  None = 1,

  /**
   *
   */
  ZIP4BIT = 8,

  /**
   *
   */
  ZIP8BIT = 9
}

/**
 * PDF color conversion policy.
 */
declare enum ColorConversion {
  /**
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
   */
  COLORCONVERSIONREPURPOSE = 2,

  /**
   * Converts all colors to the profile selected for Destination.
   */
  COLORCONVERSIONTODEST = 1,

  /**
   * Preserves color data as is.
   */
  None = 0
}

/**
 * PDF destination profile.
 */
declare enum ColorDestination {
  /**
   * Converts all colors to the profile selected for Destination.
   */
  COLORDESTINATIONDOCCMYK = 1,

  /**
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
   */
  COLORDESTINATIONDOCRGB = 3,

  /**
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
   */
  COLORDESTINATIONPROFILE = 5,

  /**
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
   */
  COLORDESTINATIONWORKINGCMYK = 2,

  /**
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
   */
  COLORDESTINATIONWORKINGRGB = 4,

  /**
   * N/A.
   */
  None = 0
}

/**
 * PDF ICC profile inclusion.
 */
declare enum ColorProfile {
  /**
   * Everything gets tagged (embedProfile == true)
   */
  INCLUDEALLPROFILE = 1,

  /**
   * Everything ends up tagged with the destination profile.
   */
  INCLUDEDESTPROFILE = 4,

  /**
   * Tag all RGB, leave CMYK unchanged.
   */
  INCLUDERGBPROFILE = 3,

  /**
   * Leave tagged items tagged, untagged items untagged.
   */
  LEAVEPROFILEUNCHANGED = 2,

  /**
   * All profiles removed (embedProfile == false)
   */
  None = 0
}

/**
 * The monochrome compression type.
 */
declare enum MonochromeCompression {
  /**
   * CCITT Group 3 compression.
   */
  CCIT3 = 1,

  /**
   * CCITT Group 4 compression.
   */
  CCIT4 = 2,

  /**
   * ZIP compression.
   */
  MONOZIP = 3,

  /**
   * Automatic compression.
   */
  None = 0,

  /**
   * RLE compression.
   */
  RUNLENGTH = 4
}

/**
 * Pdf trim mark weight options.
 */
declare enum PDFTrimMarkWeight {
  /**
   *
   */
  TRIMMARKWEIGHT0125 = 1,

  /**
   *
   */
  TRIMMARKWEIGHT025 = 2,

  /**
   *
   */
  TRIMMARKWEIGHT05 = 3
}

/**
 * Pdf overprint options.
 */
declare enum PDFOverprint {
  /**
   * Discard overprint.
   */
  DISCARDPDFOVERPRINT = 2,

  /**
   * Preserve overprint.
   */
  PRESERVEPDFOVERPRINT = 1
}

/**
 * Pdf print permissions.
 */
declare enum PDFPrintAllowedEnum {
  /**
   * Print high resolution allowed - 128bit.
   */
  PRINT128HIGHRESOLUTION = 3,

  /**
   * Print allowed only in low resolution - 128bit.
   */
  PRINT128LOWRESOLUTION = 2,

  /**
   * Printing allowed none - 128bit.
   */
  PRINT128NONE = 1,

  /**
   * Print high resolution allowed - 40bit.
   */
  PRINT40HIGHRESOLUTION = 5,

  /**
   * Printing allowed none - 40bit.
   */
  PRINT40NONE = 4
}

/**
 * Options available for making changes to a pdf document.
 */
declare enum PDFChangesAllowedEnum {
  /**
   * Any changes allowed except extracting of pages- 128bit.
   */
  CHANGE128ANYCHANGES = 5,

  /**
   * Comment allowed - 128bit.
   */
  CHANGE128COMMENTING = 4,

  /**
   * Editing page allowed - 128bit.
   */
  CHANGE128EDITPAGE = 2,

  /**
   * Filling in of form field and signing allowed - 128bit.
   */
  CHANGE128FILLFORM = 3,

  /**
   * No changes allowed - 128bit.
   */
  CHANGE128NONE = 1,

  /**
   * Any changes allowed except extracting of pages- 40bit.
   */
  CHANGE40ANYCHANGES = 9,

  /**
   * Comment allowed - 40bit.
   */
  CHANGE40COMMENTING = 7,

  /**
   * No changes allowed - 40bit.
   */
  CHANGE40NONE = 6,

  /**
   * Page layout allowed - 40bit.
   */
  CHANGE40PAGELAYOUT = 8
}

/**
 * The resample type.
 */
declare enum DownsampleMethod {
  /**
   * Average Downsampling.
   */
  AVERAGEDOWNSAMPLE = 1,

  /**
   * Bicubic Downsampling.
   */
  BICUBICDOWNSAMPLE = 3,

  /**
   * Downsampling.
   */
  NODOWNSAMPLE = 0,

  /**
   * Subsampling.
   */
  SUBSAMPLE = 2
}

/**
 * The preview type.
 */
declare enum EPSPreview {
  /**
   * Black and white Macintosh preview.
   */
  BWMACINTOSH = 2,

  /**
   * Black and white PC preview.
   */
  BWTIFF = 4,

  /**
   * Color Macintosh preview.
   */
  COLORMACINTOSH = 3,

  /**
   * Color PC preview.
   */
  COLORTIFF = 6,

  /**
   * No preview.
   */
  None = 1,

  /**
   * Transparent color PC preview (8 or later)
   */
  TRANSPARENTCOLORTIFF = 5
}

/**
 * The PostScript levels available when saving EPS files.
 */
declare enum EPSPostScriptLevelEnum {
  /**
   * PostScript Level 2.
   */
  LEVEL2 = 2,

  /**
   * PostScript Level 3.
   */
  LEVEL3 = 3
}

/**
 * The PostScript levels supported by various printers.
 */
declare enum PrinterPostScriptLevelEnum {
  /**
   * PostScript Level 1.
   */
  PSLEVEL1 = 1,

  /**
   * PostScript Level 2.
   */
  PSLEVEL2 = 2,

  /**
   * PostScript Level 3.
   */
  PSLEVEL3 = 3
}

/**
 * The options that may be applied when saving a file.
 */
declare enum SaveOptions {
  /**
   * Do not save changes.
   */
  DONOTSAVECHANGES = 2,

  /**
   * Ask the user whether to save.
   */
  PROMPTTOSAVECHANGES = 3,

  /**
   * Save changes.
   */
  SAVECHANGES = 1
}

/**
 *
 */
declare enum RulerUnits {
  /**
   * Ruler units are measured in centimeters.
   */
  Centimeters = 3,

  /**
   * Ruler units are unknown.
   */
  Inches = 2,

  /**
   * Ruler units are measured in millimeters.
   */
  Millimeters = 6,

  /**
   * Ruler units are measured in picas.
   */
  Picas = 5,

  /**
   * Ruler units are measured in pixels.
   */
  Pixels = 8,

  /**
   * Ruler units are measured in points.
   */
  Points = 4,

  /**
   * Ruler units are measured in Qs.
   */
  Qs = 7,

  /**
   * Ruler units are unknown.
   */
  Unknown = 1
}

/**
 * Blend modes used when compositing an object.
 */
declare enum BlendModes {
  /**
   *
   */
  COLORBLEND = 14,

  /**
   *
   */
  COLORBURN = 7,

  /**
   *
   */
  COLORDODGE = 6,

  /**
   *
   */
  DARKEN = 8,

  /**
   *
   */
  DIFFERENCE = 10,

  /**
   *
   */
  EXCLUSION = 11,

  /**
   *
   */
  HARDLIGHT = 5,

  /**
   *
   */
  HUE = 12,

  /**
   *
   */
  LIGHTEN = 9,

  /**
   *
   */
  LUMINOSITY = 15,

  /**
   *
   */
  MULTIPLY = 1,

  /**
   *
   */
  NORMAL = 0,

  /**
   *
   */
  OVERLAY = 3,

  /**
   *
   */
  SATURATIONBLEND = 13,

  /**
   *
   */
  SCREEN = 2,

  /**
   *
   */
  SOFTLIGHT = 4
}

/**
 * Knockout state of a page item.
 */
declare enum KnockoutState {
  /**
   * Knockout off.
   */
  DISABLED = 0,

  /**
   * Knockout off.
   */
  ENABLED = 1,

  /**
   * Knockout state inherited from group?
   */
  INHERITED = 2,

  /**
   * Unknown/uninitialized knockout state.
   */
  Unknown = -1
}

/**
 * How to re-arrange the art item.
 */
declare enum ZOrderMethod {
  /**
   * Move art one step forward in it's group or layer.
   */
  BRINGFORWARD = 2,

  /**
   * Move art to front of it's group or layer.
   */
  BRINGTOFRONT = 1,

  /**
   * Move art one step backwards in it's group or layer.
   */
  SENDBACKWARD = 3,

  /**
   * Move art to back of it's group or layer.
   */
  SENDTOBACK = 4
}

/**
 * The version of the SVG DTD.
 */
declare enum SVGDTDVersion {
  /**
   * SVG 1.0.
   */
  SVG1_0 = 1,

  /**
   * SVG 1.1.
   */
  SVG1_1 = 2,

  /**
   * SVG Basic 1.1.
   */
  SVGBASIC1_1 = 5,

  /**
   * SVG Tiny 1.1.
   */
  SVGTINY1_1 = 3,

  /**
   * SVG Tiny 1.1 Plus.
   */
  SVGTINY1_1PLUS = 4,

  /**
   * SVG Tiny 1.2.
   */
  SVGTINY1_2 = 6
}

/**
 * What font type to include with the file?
 */
declare enum SVGFontType {
  /**
   *
   */
  OUTLINEFONT = 3,

  /**
   *
   */
  SVGFONT = 2
}

/**
 * What fonts to include with the file?
 */
declare enum SVGFontSubsetting {
  /**
   *
   */
  ALLGLYPHS = 7,

  /**
   *
   */
  COMMONENGLISH = 3,

  /**
   *
   */
  COMMONROMAN = 5,

  /**
   *
   */
  GLYPHSUSED = 2,

  /**
   *
   */
  GLYPHSUSEDPLUSENGLISH = 4,

  /**
   *
   */
  GLYPHSUSEDPLUSROMAN = 6,

  /**
   * Use system fonts.
   */
  None = 1
}

/**
 *
 */
declare enum SVGDocumentEncoding {
  /**
   * ISO 8859-1.
   */
  ASCII = 1,

  /**
   *
   */
  UTF16 = 3,

  /**
   *
   */
  UTF8 = 2
}

/**
 *
 */
declare enum SVGCSSPropertyLocation {
  /**
   * Style attributes with entity reference.
   */
  ENTITIES = 2,

  /**
   *
   */
  PRESENTATIONATTRIBUTES = 4,

  /**
   *
   */
  STYLEATTRIBUTES = 1,

  /**
   *
   */
  STYLEELEMENTS = 3
}

/**
 * Type of SVG Id.
 */
declare enum SVGIdType {
  /**
   * Style attributes with entity reference.
   */
  SVGIDMINIMAL = 0,

  /**
   *
   */
  SVGIDREGULAR = 1,

  /**
   *
   */
  SVGIDUNIQUE = 2
}

/**
 * Decide where the raster images will be stored.
 */
declare enum RasterImageLocation {
  /**
   * Embed the raster images in the svg file.
   */
  EMBED = 0,

  /**
   *
   */
  LINK = 1,

  /**
   *
   */
  PRESERVE = 2
}

/**
 * How should transparency be flattened for pre-AI9 file formats.
 */
declare enum OutputFlattening {
  /**
   *
   */
  PRESERVEAPPEARANCE = 1,

  /**
   * Discard transparency.
   */
  PRESERVEPATHS = 0
}

/**
 * Color model of the custom color.
 */
declare enum ColorModel {
  /**
   * Process color (mixed ink)
   */
  PROCESS = 1,

  /**
   * Registration color (prints on in all separations)
   */
  REGISTRATION = 0,

  /**
   * Spot color (separate ink)
   */
  SPOT = 2
}

/**
 * Custom color kind of the spot color.
 */
declare enum SpotColorKind {
  /**
   * Solid ink, expressed in four CMYK values.
   */
  SPOTCMYK = 0,

  /**
   * Lab color. Only valid for spot colors.
   */
  SPOTLAB = 2,

  /**
   * Solid color, expressed as three RGB values.
   */
  SPOTRGB = 1
}

/**
 *
 */
declare enum FlashExportStyle {
  /**
   * Illustrator Artboards to Flash Files.
   */
  ARTBOARDSTOFILES = 5,

  /**
   * Illustrator file to Flash file.
   */
  ASFLASHFILE = 1,

  /**
   * Illustrator layers to Flash files.
   */
  LAYERSASFILES = 3,

  /**
   * Illustrator layers to Flash frames.
   */
  LAYERSASFRAMES = 2,

  /**
   * Illustrator layers to Flash Symbols.
   */
  LAYERSASSYMBOLS = 4
}

/**
 * How the arts should be clipped.
 */
declare enum ArtClippingOption {
  /**
   * Output size is the size of the artboard.
   */
  OUTPUTARTBOARDBOUNDS = 2,

  /**
   * Output size is the size of the artwork.
   */
  OUTPUTARTBOUNDS = 1,

  /**
   * Output size is the size of the crop area.
   */
  OUTPUTCROPRECTBOUNDS = 3
}

/**
 * Version of the SWF File to be exported.
 */
declare enum FlashExportVersion {
  /**
   * SWF Version 1.
   */
  FLASHVERSION1 = 1,

  /**
   * SWF Version 2.
   */
  FLASHVERSION2 = 2,

  /**
   * SWF Version 3.
   */
  FLASHVERSION3 = 3,

  /**
   * SWF Version 4.
   */
  FLASHVERSION4 = 4,

  /**
   * SWF Version 5.
   */
  FLASHVERSION5 = 5,

  /**
   * SWF Version 6.
   */
  FLASHVERSION6 = 6,

  /**
   * SWF Version 7.
   */
  FLASHVERSION7 = 7,

  /**
   * SWF Version 8.
   */
  FLASHVERSION8 = 8,

  /**
   * SWF Version 9.
   */
  FLASHVERSION9 = 9
}

/**
 *
 */
declare enum FlashImageFormat {
  /**
   *
   */
  LOSSLESS = 1,

  /**
   *
   */
  LOSSY = 2
}

/**
 *
 */
declare enum LayerOrderType {
  /**
   *
   */
  BOTTOMUP = 1,

  /**
   *
   */
  TOPDOWN = 2
}

/**
 *
 */
declare enum BlendAnimationType {
  /**
   *
   */
  INBUILD = 2,

  /**
   *
   */
  INSEQUENCE = 1,

  /**
   * No blend animation.
   */
  NOBLENDANIMATION = 0
}

/**
 *
 */
declare enum FlashJPEGMethod {
  /**
   *
   */
  Optimized = 2,

  /**
   *
   */
  Standard = 1
}

/**
 *
 */
declare enum FlashPlaybackSecurity {
  /**
   *
   */
  PlaybackLocal = 1,

  /**
   *
   */
  PlaybackNetwork = 2
}

/**
 *
 */
declare enum VariableKind {
  /**
   *
   */
  GRAPH = 5,

  /**
   *
   */
  IMAGE = 4,

  /**
   *
   */
  TEXTUAL = 3,

  /**
   *
   */
  Unknown = 1,

  /**
   *
   */
  VISIBILITY = 2
}

/**
 *
 */
declare enum AutoCADExportFileFormat {
  /**
   *
   */
  DWG = 1,

  /**
   *
   */
  DXF = 0
}

/**
 *
 */
declare enum AutoCADCompatibility {
  /**
   *
   */
  AutoCADRelease13 = 0,

  /**
   *
   */
  AutoCADRelease14 = 1,

  /**
   *
   */
  AutoCADRelease15 = 2,

  /**
   *
   */
  AutoCADRelease18 = 3,

  /**
   *
   */
  AutoCADRelease21 = 4,

  /**
   *
   */
  AutoCADRelease24 = 5
}

/**
 *
 */
declare enum AutoCADUnit {
  /**
   *
   */
  Centimeters = 4,

  /**
   *
   */
  Inches = 2,

  /**
   *
   */
  Millimeters = 3,

  /**
   *
   */
  Picas = 1,

  /**
   *
   */
  Pixels = 5,

  /**
   *
   */
  Points = 0
}

/**
 *
 */
declare enum AutoCADColors {
  /**
   *
   */
  Max16Colors = 1,

  /**
   *
   */
  Max256Colors = 2,

  /**
   *
   */
  Max8Colors = 0,

  /**
   *
   */
  TrueColors = 3
}

/**
 *
 */
declare enum AutoCADRasterFormat {
  /**
   *
   */
  JPEG = 1,

  /**
   *
   */
  PNG = 0
}

/**
 *
 */
declare enum AutoCADExportOption {
  /**
   *
   */
  MaximumEditability = 1,

  /**
   *
   */
  PreserveAppearance = 0
}

/**
 *
 */
declare enum AutoCADGlobalScaleOption {
  /**
   *
   */
  FitArtboard = 1,

  /**
   *
   */
  OriginalSize = 0,

  /**
   *
   */
  ScaleByValue = 2
}

/**
 * Byte Order of TIFF file.
 */
declare enum TIFFByteOrder {
  /**
   *
   */
  IBMPC = 0,

  /**
   *
   */
  MACINTOSH = 1
}

/**
 * COM user interaction enumeration.
 */
declare enum UserInteractionLevel {
  /**
   *
   */
  DISPLAYALERTS = 2,

  /**
   *
   */
  DONTDISPLAYALERTS = -1
}

/**
 *
 */
declare enum PolarityValues {
  /**
   *
   */
  NEGATIVE = -1,

  /**
   *
   */
  POSITIVE = 1
}

/**
 * When should a JavaScript debugger be shown.
 */
declare enum JavaScriptExecutionMode {
  /**
   * Show the JavaScript debugger at the first line of the JavaScript.
   */
  BeforeRunning = 3,

  /**
   * Show the JavaScript debugger is a runtime error occurs.
   */
  OnRuntimeError = 2,

  /**
   * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
   */
  never = 1
}

/**
 * The artwork layers/objects to be printed.
 */
declare enum PrintArtworkDesignation {
  /**
   * Print all layers.
   */
  ALLLAYERS = 2,

  /**
   * Print visible layers.
   */
  VISIBLELAYERS = 1,

  /**
   * Print visible printable layers.
   */
  VISIBLEPRINTABLELAYERS = 0
}

/**
 * The printing bounds type.
 */
declare enum PrintingBounds {
  /**
   * Use artboard bounds.
   */
  ARTBOARDBOUNDS = 0,

  /**
   * Use artwork bounds.
   */
  ARTWORKBOUNDS = 1,

  /**
   * Use crop bounds.
   */
  CROPBOUNDS = 2
}

/**
 * The color separation mode.
 */
declare enum PrintColorSeparationMode {
  /**
   * The composite mode.
   */
  COMPOSITE = 0,

  /**
   * The host based color separation mode.
   */
  HOSTBASEDSEPARATION = 1,

  /**
   * The InRIP color separation mode.
   */
  INRIPSEPARATION = 2
}

/**
 * The artwork printing orientation.
 */
declare enum PrintOrientation {
  /**
   * Auto Rotate.
   */
  AUTOROTATE = 4,

  /**
   * Landscape.
   */
  LANDSCAPE = 1,

  /**
   * Portrait.
   */
  PORTRAIT = 0,

  /**
   * Reverse landscape.
   */
  REVERSELANDSCAPE = 3,

  /**
   * Reverse portrait.
   */
  REVERSEPORTRAIT = 2
}

/**
 * The artwork printing position on media.
 */
declare enum PrintPosition {
  /**
   * Translate to the bottom center of media.
   */
  TRANSLATEBOTTOM = 8,

  /**
   * Translate to the bottom left of media.
   */
  TRANSLATEBOTTOMLEFT = 7,

  /**
   * Translate to the bottom right of media.
   */
  TRANSLATEBOTTOMRIGHT = 9,

  /**
   * Translate to the center of media.
   */
  TRANSLATECENTER = 5,

  /**
   * Translate to the left center of media.
   */
  TRANSLATELEFT = 4,

  /**
   * Translate to the right center of media.
   */
  TRANSLATERIGHT = 6,

  /**
   * Translate to the top center of media.
   */
  TRANSLATETOP = 2,

  /**
   * Translate to the top left of media.
   */
  TRANSLATETOPLEFT = 1,

  /**
   * Translate to the top right of media.
   */
  TRANSLATETOPRIGHT = 3
}

/**
 * The page tiling type.
 */
declare enum PrintTiling {
  /**
   * Tile full pages.
   */
  TILEFULLPAGES = 1,

  /**
   * Tile imageable areas.
   */
  TILEIMAGEABLEAREAS = 2,

  /**
   * Tile single full page.
   */
  TILESINGLEFULLPAGE = 0
}

/**
 * The page marks style type.
 */
declare enum PageMarksTypes {
  /**
   * Japanese page marks style.
   */
  Japanese = 1,

  /**
   * Roman page marks style.
   */
  Roman = 0
}

/**
 * The printer font download mode.
 */
declare enum PrintFontDownloadMode {
  /**
   * Download complete.
   */
  DOWNLOADCOMPLETE = 2,

  /**
   * Download none.
   */
  DOWNLOADNONE = 0,

  /**
   * Download subset.
   */
  DOWNLOADSUBSET = 1
}

/**
 * The font substitution policy.
 */
declare enum FontSubstitutionPolicy {
  /**
   * Substitute device font.
   */
  SUBSTITUTEDEVICE = 2,

  /**
   * Substitute oblique font.
   */
  SUBSTITUTEOBLIQUE = 0,

  /**
   * Substitute tint font.
   */
  SUBSTITUTETINT = 1
}

/**
 * The PostScript image compression type.
 */
declare enum PostScriptImageCompressionType {
  /**
   * No image compression.
   */
  IMAGECOMPRESSIONNONE = 0,

  /**
   * JPEG image compression.
   */
  JPEG = 2,

  /**
   * RLE image compression.
   */
  RLE = 1
}

/**
 * The color profile type.
 */
declare enum PrintColorProfile {
  /**
   * Use custom color profile.
   */
  CUSTOMPROFILE = 3,

  /**
   * Use old style AI color profile.
   */
  OLDSTYLEPROFILE = 0,

  /**
   * Same as printer color profile.
   */
  PRINTERPROFILE = 2,

  /**
   * Same as source color profile.
   */
  SOURCEPROFILE = 1
}

/**
 * The color intent type.
 */
declare enum PrintColorIntent {
  /**
   * Absolute colorimetric.
   */
  ABSOLUTECOLORIMETRIC = 3,

  /**
   * Perceptual color intent.
   */
  PERCEPTUALINTENT = 0,

  /**
   * Relative colorimetric.
   */
  RELATIVECOLORIMETRIC = 2,

  /**
   * Saturation color intent.
   */
  SATURATIONINTENT = 1
}

/**
 * The printer type.
 */
declare enum PrinterTypeEnum {
  /**
   * Non PostScript printer.
   */
  NONPOSTSCRIPTPRINTER = 2,

  /**
   * PostScript printer.
   */
  POSTSCRIPTPRINTER = 1,

  /**
   * Unknown printer type.
   */
  Unknown = 0
}

/**
 * The printer color mode.
 */
declare enum PrinterColorMode {
  /**
   * Black and white printer.
   */
  BLACKANDWHITEPRINTER = 2,

  /**
   * Color printer.
   */
  COLORPRINTER = 0,

  /**
   * Grayscale printer.
   */
  GRAYSCALEPRINTER = 1
}

/**
 * The ink printing status.
 */
declare enum InkPrintStatus {
  /**
   * Convert to process color during print.
   */
  CONVERTINK = 2,

  /**
   * Disable the ink during print.
   */
  DISABLEINK = 0,

  /**
   * Enable the ink during print.
   */
  ENABLEINK = 1
}

/**
 * The ink type.
 */
declare enum InkType {
  /**
   * Black color ink.
   */
  BLACKINK = 3,

  /**
   * Custom color ink.
   */
  CUSTOMINK = 4,

  /**
   * Cyan color ink.
   */
  CYANINK = 0,

  /**
   * Magenta color ink.
   */
  MAGENTAINK = 1,

  /**
   * Yellow color ink.
   */
  YELLOWINK = 2
}

/**
 * The trapping type.
 */
declare enum TrappingType {
  /**
   * Ignore opaque trapping type.
   */
  IGNOREOPAQUE = 3,

  /**
   * Normal trapping type.
   */
  NORMALTRAPPING = 0,

  /**
   * Opaque trapping type.
   */
  OPAQUE = 2,

  /**
   * Transparent trapping type.
   */
  TRANSPARENT = 1
}

/**
 * The auto kern type.
 */
declare enum AutoKernType {
  /**
   * Auto kerning.
   */
  AUTO = 1,

  /**
   * Metrics roman only.
   */
  METRICSROMANONLY = 3,

  /**
   * No auto kerning.
   */
  NOAUTOKERN = 0,

  /**
   * Optical kerning.
   */
  OPTICAL = 2
}

/**
 * The auto leading type.
 */
declare enum AutoLeadingType {
  /**
   * Roman leading type.
   */
  BOTTOMTOBOTTOM = 0,

  /**
   * Japanese leading type.
   */
  TOPTOTOP = 1
}

/**
 * The case change type.
 */
declare enum CaseChangeType {
  /**
   * Change to lower case.
   */
  LOWERCASE = 1,

  /**
   * Change to sentence case.
   */
  SENTENCECASE = 3,

  /**
   * Change to title case.
   */
  TITLECASE = 2,

  /**
   * Change to upper case.
   */
  UPPERCASE = 0
}

/**
 * The font capitalization option.
 */
declare enum FontCapsOption {
  /**
   * All caps.
   */
  ALLCAPS = 2,

  /**
   * All small caps.
   */
  ALLSMALLCAPS = 3,

  /**
   * Normal caps.
   */
  NORMALCAPS = 0,

  /**
   * Small caps.
   */
  SMALLCAPS = 1
}

/**
 * The font baseline option.
 */
declare enum FontBaselineOption {
  /**
   * Normal baseline.
   */
  NORMALBASELINE = 0,

  /**
   * Fauxed subscript baseline.
   */
  SUBSCRIPT = 2,

  /**
   * Fauxed superscript baseline.
   */
  SUPERSCRIPT = 1
}

/**
 * The OpenType font position option.
 */
declare enum FontOpenTypePositionOption {
  /**
   * OpenType denominator position.
   */
  DENOMINATOR = 4,

  /**
   * OpenType numerator position.
   */
  NUMERATOR = 3,

  /**
   * Default position.
   */
  OPENTYPEDEFAULT = 0,

  /**
   * OpenType subscript position.
   */
  OPENTYPESUBSCRIPT = 2,

  /**
   * OpenType superscript position.
   */
  OPENTYPESUPERSCRIPT = 1
}

/**
 * The figure style type.
 */
declare enum FigureStyleType {
  /**
   * Default figure style.
   */
  DEFAULTFIGURESTYLE = 0,

  /**
   * Proportional lining style.
   */
  PROPORTIONAL = 3,

  /**
   * Proportional oldstyle.
   */
  PROPORTIONALOLDSTYLE = 2,

  /**
   * Tabular lining style.
   */
  TABULAR = 1,

  /**
   * Tabular oldstyle.
   */
  TABULAROLDSTYLE = 4
}

/**
 * The baseline direction type.
 */
declare enum BaselineDirectionType {
  /**
   *
   */
  Standard = 1,

  /**
   *
   */
  TateChuYoko = 3,

  /**
   *
   */
  VerticalRotated = 2
}

/**
 * The language of text.
 */
declare enum LanguageType {
  /**
   *
   */
  ARABIC = 39,

  /**
   *
   */
  BENGALIINDIA = 51,

  /**
   *
   */
  BOKMALNORWEGIAN = 8,

  /**
   *
   */
  BRAZILLIANPORTUGUESE = 11,

  /**
   *
   */
  BULGARIAN = 20,

  /**
   *
   */
  CANADIANFRENCH = 3,

  /**
   *
   */
  CATALAN = 17,

  /**
   *
   */
  CHINESE = 29,

  /**
   *
   */
  CZECH = 22,

  /**
   *
   */
  DANISH = 16,

  /**
   *
   */
  DUTCH = 15,

  /**
   *
   */
  DUTCH2005REFORM = 43,

  /**
   *
   */
  ENGLISH = 0,

  /**
   *
   */
  FARSI = 41,

  /**
   *
   */
  FINNISH = 1,

  /**
   *
   */
  GERMAN2006REFORM = 42,

  /**
   *
   */
  GREEK = 25,

  /**
   *
   */
  GUJARATI = 53,

  /**
   *
   */
  HINDI = 49,

  /**
   *
   */
  HUNGARIAN = 28,

  /**
   *
   */
  ICELANDIC = 27,

  /**
   *
   */
  ITALIAN = 7,

  /**
   *
   */
  JAPANESE = 30,

  /**
   *
   */
  KANNADA = 57,

  /**
   *
   */
  MALAYALAM = 58,

  /**
   *
   */
  MARATHI = 50,

  /**
   * Nynorsk Norwegian.
   */
  NYNORSKNORWEGIAN = 9,

  /**
   *
   */
  OLDGERMAN = 5,

  /**
   *
   */
  ORIYA = 54,

  /**
   *
   */
  POLISH = 23,

  /**
   *
   */
  PUNJABI = 52,

  /**
   *
   */
  RUMANIAN = 24,

  /**
   *
   */
  RUSSIAN = 18,

  /**
   *
   */
  SERBIAN = 21,

  /**
   *
   */
  SPANISH = 12,

  /**
   *
   */
  STANDARDFRENCH = 2,

  /**
   *
   */
  STANDARDGERMAN = 4,

  /**
   *
   */
  STANDARDPORTUGUESE = 10,

  /**
   *
   */
  SWEDISH = 13,

  /**
   *
   */
  SWISSGERMAN = 6,

  /**
   *
   */
  SWISSGERMAN2006REFORM = 44,

  /**
   *
   */
  TAMIL = 55,

  /**
   *
   */
  TELUGU = 56,

  /**
   *
   */
  TURKISH = 26,

  /**
   *
   */
  UKENGLISH = 14,

  /**
   *
   */
  UKRANIAN = 19
}

/**
 * The alternate glyphs form of text.
 */
declare enum AlternateGlyphsForm {
  /**
   *
   */
  DEFAULTFORM = 0,

  /**
   *
   */
  EXPERT = 2,

  /**
   *
   */
  FULLWIDTH = 8,

  /**
   *
   */
  HALFWIDTH = 5,

  /**
   *
   */
  JIS04FORM = 11,

  /**
   *
   */
  JIS78FORM = 3,

  /**
   *
   */
  JIS83FORM = 4,

  /**
   *
   */
  JIS90FORM = 10,

  /**
   *
   */
  PROPORTIONALWIDTH = 9,

  /**
   *
   */
  QUARTERWIDTH = 7,

  /**
   *
   */
  THIRDWIDTH = 6,

  /**
   *
   */
  TRADITIONAL = 1
}

/**
 * The style run alignment.
 */
declare enum StyleRunAlignmentType {
  /**
   *
   */
  ROMANBASELINE = 2,

  /**
   *
   */
  bottom = 0,

  /**
   *
   */
  center = 3,

  /**
   *
   */
  icfBottom = 1,

  /**
   *
   */
  icfTop = 4,

  /**
   *
   */
  top = 5
}

/**
 * The Wari-Chu alignment type.
 */
declare enum WariChuJustificationType {
  /**
   *
   */
  Center = 2,

  /**
   *
   */
  Left = 0,

  /**
   *
   */
  Right = 1,

  /**
   *
   */
  WARICHUAUTOJUSTIFY = 7,

  /**
   *
   */
  WARICHUFULLJUSTIFY = 6,

  /**
   *
   */
  WARICHUFULLJUSTIFYLASTLINECENTER = 5,

  /**
   *
   */
  WARICHUFULLJUSTIFYLASTLINELEFT = 3,

  /**
   *
   */
  WARICHUFULLJUSTIFYLASTLINERIGHT = 4
}

/**
 * The kashida type constants.
 */
declare enum KashidasType {
  /**
   *
   */
  DEFAULT_KASHIDAS = 0,

  /**
   *
   */
  KASHIDAS_OFF = 1,

  /**
   *
   */
  KASHIDAS_ON = 0
}

/**
 * Direction override type constants.
 */
declare enum DirOverrideType {
  /**
   *
   */
  DEFAULT_DIRECTION = 0,

  /**
   *
   */
  LEFT_TO_RIGHT_DIRECTION = 1,

  /**
   *
   */
  RIGHT_TO_LEFT_DIRECTION = 2
}

/**
 * Digit set type constants.
 */
declare enum DigitSetType {
  /**
   *
   */
  ARABIC_DIGITS = 1,

  /**
   *
   */
  DEFAULT_DIGITS = 0,

  /**
   *
   */
  FARSI_DIGITS = 3,

  /**
   *
   */
  HINDI_DIGITS = 2
}

/**
 * Diacritic vertical position type constants.
 */
declare enum DiacVPosType {
  /**
   *
   */
  DEFAULT_POSITION = 0,

  /**
   *
   */
  LOOSE_POSITION = 1,

  /**
   *
   */
  MEDIUM_POSITION = 2,

  /**
   *
   */
  OPENTYPE_POSITION = 4,

  /**
   *
   */
  TIGHT_POSITION = 3
}

/**
 * The kashida width type constants.
 */
declare enum KashidaWidthType {
  /**
   *
   */
  kashidaLong = 3,

  /**
   *
   */
  kashidaMedium = 2,

  /**
   *
   */
  kashidaNone = 0,

  /**
   *
   */
  kashidaSmall = 1,

  /**
   *
   */
  kashidaStylistic = 4
}

/**
 * The composer type constants.
 */
declare enum ComposerEngineType {
  /**
   *
   */
  adornment = 2,

  /**
   *
   */
  latinCJKComposer = 0,

  /**
   *
   */
  optycaComposer = 1
}

/**
 * The composer type constants.
 */
declare enum ParagraphDirectionType {
  /**
   *
   */
  LEFT_TO_RIGHT_DIRECTION = 0,

  /**
   *
   */
  RIGHT_TO_LEFT_DIRECTION = 1
}

/**
 * The Burasagari type.
 */
declare enum BurasagariTypeEnum {
  /**
   *
   */
  Forced = 2,

  /**
   *
   */
  None = 0,

  /**
   *
   */
  Standard = 1
}

/**
 * The preferred Kinsoku order.
 */
declare enum KinsokuOrderEnum {
  /**
   *
   */
  PUSHIN = 0,

  /**
   *
   */
  PUSHOUTFIRST = 1,

  /**
   *
   */
  PUSHOUTONLY = 2
}

/**
 * Crop box.
 */
declare enum PDFBoxType {
  /**
   * Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator.
   */
  PDFARTBOX = 0,

  /**
   * Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment.
   */
  PDFBLEEDBOX = 3,

  /**
   * Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page.
   */
  PDFBOUNDINGBOX = 5,

  /**
   * Crop to CropBox. The crop box is the region of the page to display and to print.
   */
  PDFCROPBOX = 1,

  /**
   * Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper.
   */
  PDFMEDIABOX = 4,

  /**
   * Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition.
   */
  PDFTRIMBOX = 2
}

/**
 * The tracing method: abutting and overlapping.
 */
declare enum TracingMethodType {
  /**
   * Tracing abutting method.
   */
  TRACINGMETHODABUTTING = 0,

  /**
   * Tracing overlapping method.
   */
  TRACINGMETHODOVERLAPPING = 1
}

/**
 * The tracing mode: color, grayscale, black and white.
 */
declare enum TracingModeType {
  /**
   * Black and white tracing mode.
   */
  TRACINGMODEBLACKANDWHITE = 2,

  /**
   * Color tracing mode.
   */
  TRACINGMODECOLOR = 0,

  /**
   * Grayscale tracing mode.
   */
  TRACINGMODEGRAY = 1
}

/**
 * The input color type Full Color or Limited colors.
 */
declare enum TracingColorType {
  /**
   * Use Full colors for Tracing.
   */
  TRACINGFULLCOLOR = 1,

  /**
   * Use Limited colors for Tracing.
   */
  TRACINGLIMITEDCOLOR = 0
}

/**
 * Controls the type of vector view.
 */
declare enum ViewType {
  /**
   * View Source Image.
   */
  TRACINGVIEWIMAGE = 4,

  /**
   * View just the paths.
   */
  TRACINGVIEWVECTOROUTLINES = 2,

  /**
   * View paths and transparent fills.
   */
  TRACINGVIEWVECTOROUTLINESWITHTRACING = 1,

  /**
   * View artwork.
   */
  TRACINGVIEWVECTORTRACINGRESULT = 0,

  /**
   * View Outlines with Transparent Image.
   */
  TRACINGVIEWVECTORWITHTRANSPARENTIMAGE = 3
}

/**
 * Controls the color model for the rasterization.
 */
declare enum RasterizationColorModel {
  /**
   * Rasterize as 1-bit bitmap.
   */
  BITMAP = 3,

  /**
   * Rasterize in the default document color space.
   */
  DEFAULTCOLORMODEL = 1,

  /**
   * Rasterize as grayscale image.
   */
  GRAYSCALE = 2
}

/**
 * Controls the type of antialiasing method used in the rasterization.
 */
declare enum AntiAliasingMethod {
  /**
   * Optimize for the art object.
   */
  ARTOPTIMIZED = 1,

  /**
   * No anti-aliasing allowed.
   */
  None = 0,

  /**
   * Optimize for the type object.
   */
  TYPEOPTIMIZED = 2
}

/**
 * Denotes the purpose of color conversion using ConvertSmapleColor method.
 */
declare enum ColorConvertPurpose {
  /**
   * Do standard conversion, without black preservation.
   */
  defaultpurpose = 0,

  /**
   * Dummy option.
   */
  dummypurpose = 4,

  /**
   * Conversion options appropriate to creating an image for print or export.
   */
  exportpurpose = 2,

  /**
   * Conversion options appropriate to creating an image for screen display.
   */
  previewpurpose = 1
}

/**
 * The FXG file format version.
 */
declare enum FXGVersion {
  /**
   * FXG version 1.0.
   */
  VERSION1PT0 = 1,

  /**
   * FXG version 2.0.
   */
  VERSION2PT0 = 2
}

/**
 * Filters preserve policy used by FXG file format.
 */
declare enum FiltersPreservePolicy {
  /**
   * Preserve the appearance of filters by expanding it.
   */
  EXPANDFILTERS = 1,

  /**
   * Preserve the editability of filters.
   */
  KEEPFILTERSEDITABLE = 3,

  /**
   * Preserve the appearance of filters by rasterizing it.
   */
  RASTERIZEFILTERS = 2
}

/**
 * Text preserve policy used by FXG file format.
 */
declare enum TextPreservePolicy {
  /**
   * Automatically convert text.
   */
  AUTOMATICALLYCONVERTTEXT = 4,

  /**
   * Preserve the editability of text.
   */
  KEEPTEXTEDITABLE = 3,

  /**
   * Preserve the appearance of text by outlining it.
   */
  OUTLINETEXT = 1,

  /**
   * Preserve the appearance of text by rasterizing it.
   */
  RASTERIZETEXT = 2
}

/**
 * Gradients preserve policy used by FXG file format.
 */
declare enum GradientsPreservePolicy {
  /**
   * Automatically Convert Gradients.
   */
  AUTOMATICALLYCONVERTGRADIENTS = 4,

  /**
   * Preserve the editability of gradients.
   */
  KEEPGRADIENTSEDITABLE = 3
}

/**
 * Blends Expand policy used by FXG file format.
 */
declare enum BlendsExpandPolicy {
  /**
   * Automatically Convert Blends.
   */
  AUTOMATICALLYCONVERTBLENDS = 1,

  /**
   * Expand Blends by Rasterizing.
   */
  RASTERIZEBLENDS = 2
}

/**
 * Coordinate system used by Illustrator.
 */
declare enum CoordinateSystem {
  /**
   * Artboard coordinate system.
   */
  ARTBOARDCOORDINATESYSTEM = 1,

  /**
   * Document coordinate system.
   */
  DOCUMENTCOORDINATESYSTEM = 0
}

/**
 * The symbol registration point.
 */
declare enum SymbolRegistrationPoint {
  /**
   * Bottom left point of symbol bounding box.
   */
  SYMBOLBOTTOMLEFTPOINT = 7,

  /**
   * Bottom middle point of symbol bounding box.
   */
  SYMBOLBOTTOMMIDDLEPOINT = 8,

  /**
   * Bottom right point of symbol bounding box.
   */
  SYMBOLBOTTOMRIGHTPOINT = 9,

  /**
   * Center point of symbol bounding box.
   */
  SYMBOLCENTERPOINT = 5,

  /**
   * Middle left point of symbol bounding box.
   */
  SYMBOLMIDDLELEFTPOINT = 4,

  /**
   * Middle right point of symbol bounding box.
   */
  SYMBOLMIDDLERIGHTPOINT = 6,

  /**
   * Top left point of symbol bounding box.
   */
  SYMBOLTOPLEFTPOINT = 1,

  /**
   * Top middle point of symbol bounding box.
   */
  SYMBOLTOPMIDDLEPOINT = 2,

  /**
   * Top right point of symbol bounding box.
   */
  SYMBOLTOPRIGHTPOINT = 3
}

/**
 * Perspective grid plane types.
 */
declare enum PerspectiveGridPlaneType {
  /**
   * Perspective Grid Floor Plane Type.
   */
  FLOORPLANE = 3,

  /**
   * Perspective Grid Left Plane Type.
   */
  LEFTPLANE = 1,

  /**
   * Invalid Perspective Grid Plane Type.
   */
  NOPLANE = 0,

  /**
   * Perspective Grid Right Plane Type.
   */
  RIGHTPLANE = 2
}

/**
 * Text Item First baseline types.
 */
declare enum FirstBaselineType {
  /**
   * First Baseline Ascent Type.
   */
  BASELINEASCENT = 0,

  /**
   * First baseline Cap Height Type.
   */
  BASELINECAPHEIGHT = 1,

  /**
   * First Baseline Em Box Height Type.
   */
  BASELINEEMBOXHEIGHT = 4,

  /**
   * First Baseline Fixed Type.
   */
  BASELINEFIXED = 5,

  /**
   * First Baseline Leading Type.
   */
  BASELINELEADING = 2,

  /**
   * First Baseline Legacy Type.
   */
  BASELINELEGACY = 6,

  /**
   * First Baseline x Height Type.
   */
  BASELINEXHEIGHT = 3
}

/**
 * Document layout style types.
 */
declare enum DocumentLayoutStyle {
  /**
   * Arranges document in cascaded style.
   */
  CASCADE = 0,

  /**
   * Consolidates all documents.
   */
  CONSOLIDATEALL = 4,

  /**
   * Arranges all documents floating layout.
   */
  FLOATALL = 3,

  /**
   * Arranges documents as horizontal tiles.
   */
  HORIZONTALTILE = 1,

  /**
   * Arranges documents as vertical tiles.
   */
  VERTICALTILE = 2
}

/**
 * JPEG Compression Method type.
 */
declare enum JPEGCompressionMethodType {
  /**
   * Select Baseline Optimized for optimized color and a slightly smaller file size. Not supported by all web browsers.
   */
  BASELINEOPTIMIZED = 1,

  /**
   * Select Baseline (Standard) to use a format recognized by most web browsers.
   */
  BASELINESTANDARD = 0,

  /**
   * Select Progressive to display a series of increasingly detailed scans (you specify how many in ProgressiveScan) as the image downloads. Not supported by all web browsers.
   */
  PROGRESSIVE = 2
}

/**
 * A collection of assets.
 */
declare class Assets {
  /**
   * Number of elements in the collection.
   */
  length: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Creates an asset from the given art(s)
   * @param sourceArt The page item(s) to apply to.
   */
  add(sourceArt: any): Asset;

  /**
   * Creates an asset from the selected arts.
   */
  addFromSelection(): Asset;

  /**
   * Gets the asset with the specified AssetID.
   * @param assetID The UID of the asset.
   */
  getByID(assetID: number): Asset;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Asset;

  /**
   * Gets the first asset with specified name.
   * @param assetName Name of the asset.
   */
  getByName(assetName: string): Asset;

  /**
   * Deletes the asset with specified id.
   * @param assetID UID of the asset to be deleted.
   */
  remove(assetID: number): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of artboards.
 */
declare class Artboards {
  /**
   * Number of elements in the collection.
   */
  length: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Add artboard object.
   * @param artboardRect Size and position of artboard.
   */
  add(artboardRect: Rect): Artboard;

  /**
   * Retrieves the index position of the active artboard in the document's list.
   */
  getActiveArtboardIndex(): number;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Artboard;

  /**
   * Get the first Artboard with specified name.
   * @param artboardName The name of the artboard.
   */
  getByName(artboardName: string): Artboard;

  /**
   * Insert an Artboard at specified location.
   * @param artboardRect Size and position of artboard.
   * @param index Index position where artboard should be inserted.
   */
  insert(artboardRect: Rect, index: number): void;

  /**
   * Delete artboard object.
   * @param index Index of the crop area to be deleted.
   */
  remove(index: number): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;

  /**
   * Makes a specific artboard active, and makes it current in the iteration order.
   * @param index The 0-based index position of the artboard in the document list.
   */
  setActiveArtboardIndex(index: number): void;
}

/**
 * A collection of documents.
 */
declare class Documents {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Document;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * A document.
   * @param documentColorSpace The color model used for the document.
   * @param width Width of the artboard.
   * @param height Height of the artboard.
   * @param numArtboards Number of artboards for new document.Range (1:100).
   * @param artboardLayout Layout of artboards for new document.
   * @param artboardSpacing Spacing between artboards for new document.
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   */
  add(
    documentColorSpace?: DocumentColorSpace,
    width?: number,
    height?: number,
    numArtboards?: number,
    artboardLayout?: DocumentArtboardLayout,
    artboardSpacing?: number,
    artboardRowsOrCols?: number
  ): Document;

  /**
   * Create a new document from a preset.
   * @param startupPreset The name of a startup document preset.
   * @param presetSettings Custom settings to apply to the preset.
   * @param showOptionsDialog If false, do not show Options dialog.
   */
  addDocument(
    startupPreset: string,
    presetSettings?: DocumentPreset,
    showOptionsDialog?: boolean
  ): Document;

  /**
   * Create a document from the preset with option to throw dialog to customize present settings.
   * @param startupPreset The name of startup document preset.
   * @param showOptionsDialog Argument controls if options Dialog is shown or not.
   */
  addDocumentWithDialogOption(
    startupPreset: string,
    showOptionsDialog?: boolean
  ): Document;

  /**
   * Arranges the documents in the specified style.
   * @param layoutStyle The document layout style.
   */
  arrange(layoutStyle: DocumentLayoutStyle): boolean;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Document;
}

/**
 * A collection of layers.
 */
declare class Layers {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Layer;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a layer.
   */
  add(): Layer;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Layer;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of group items.
 */
declare class GroupItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: GroupItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a group item.
   */
  add(): GroupItem;

  /**
   * Create a group item from a vector graphics file.
   * @param imageFile The vector graphics file to be embedded.
   */
  createFromFile(imageFile: File): GroupItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): GroupItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of page items.
 */
declare class PageItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: PageItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): PageItem;
}

/**
 * A collection of path items.
 */
declare class PathItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: PathItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a path.
   */
  add(): PathItem;

  /**
   * Create an elliptical path item.
   * @param top The ellipse's bounds.
   * @param left The ellipse's bounds.
   * @param width The ellipse's bounds.
   * @param height The height of the ellipse.
   * @param reversed Is the ellipse path reversed?
   * @param inscribed Is the ellipse path inscribed?
   */
  ellipse(
    top?: number,
    left?: number,
    width?: number,
    height?: number,
    reversed?: boolean,
    inscribed?: boolean
  ): PathItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): PathItem;

  /**
   * Used to create a regular polygon path item. Not for path item access.
   * @param radius The radius of the polygon points.
   * @param sides The number of sides on the polygon.
   * @param reversed Is the polygon path reversed?
   */
  polygon(
    centerX?: number,
    centerY?: number,
    radius?: number,
    sides?: number,
    reversed?: boolean
  ): PathItem;

  /**
   * Used to create a rectangular path item. Not for path item access.
   * @param top The top coordinate of the rectangle's bounds.
   * @param left The left coordinate of the rectangle's bounds.
   * @param width The width of the rectangle.
   * @param height The height of the rectangle.
   * @param reversed Is the rectangle path reversed?
   */
  rectangle(
    top: number,
    left: number,
    width: number,
    height: number,
    reversed?: boolean
  ): PathItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;

  /**
   * Used to create a rounded-corner rectangular path item. Not for path item access.
   * @param horizontalRadius Horizontal corner radius.
   * @param verticalRadius Vertical corner radius.
   * @param reversed Is the rectangle path reversed?
   */
  roundedRectangle(
    top: number,
    left: number,
    width: number,
    height: number,
    horizontalRadius?: number,
    verticalRadius?: number,
    reversed?: boolean
  ): PathItem;

  /**
   * Used to create a star-shaped path item. Not for path item access.
   * @param radius The outside radius of the star points.
   * @param innerRadius The inside radius of the star points.
   * @param points The number of points on the star.
   * @param reversed Is the star path reversed?
   */
  star(
    centerX?: number,
    centerY?: number,
    radius?: number,
    innerRadius?: number,
    points?: number,
    reversed?: boolean
  ): PathItem;
}

/**
 * A collection of path points.
 */
declare class PathPoints {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: PathPoint;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a path point.
   */
  add(): PathPoint;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): PathPoint;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of compound path items.
 */
declare class CompoundPathItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: CompoundPathItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a compound path item.
   */
  add(): CompoundPathItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): CompoundPathItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of stories.
 */
declare class Stories {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Story;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Story;
}

/**
 * A collection of text frame items.
 */
declare class TextFrameItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: TextFrameItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a point text frame item.
   */
  add(): TextFrameItem;

  /**
   * Create an area text frame item.
   * @param textPath The path item associated with the text frame.
   * @param orientation The orientation of the text.
   * @param baseFrame The base text frame if it has one.
   * @param postFix Whether to postfix/prefix the new text frame to the specified base text frame.
   */
  areaText(
    textPath: PathItem,
    orientation?: TextOrientation,
    baseFrame?: TextFrameItem,
    postFix?: boolean
  ): TextFrameItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextFrameItem;

  /**
   * Create an on-path text frame item.
   * @param textPath The path item associated with the text frame.
   * @param startTValue The start position of text along a path, as a value relative to the path's segments (path text only)
   * @param endTValue The end position of text along a path, as a value relative to the path's segments (path text only)
   * @param orientation The orientation of the text.
   * @param baseFrame The base text frame if it has one.
   * @param postFix Whether to postfix/prefix the new text frame to the specified base text frame.
   */
  pathText(
    textPath: PathItem,
    startTValue?: number,
    endTValue?: number,
    orientation?: TextOrientation,
    baseFrame?: TextFrameItem,
    postFix?: boolean
  ): TextFrameItem;

  /**
   * Create a point text frame item.
   * @param anchor The position (coordinates) of the anchor point.
   * @param orientation The orientation of the text.
   */
  pointText(anchor: Point, orientation?: TextOrientation): TextFrameItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of legacy text items.
 */
declare class LegacyTextItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: LegacyTextItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create text frames from all legacy text items. The original legacy text items will be deleted.
   */
  convertToNative(): boolean;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): LegacyTextItem;
}

/**
 * A collection of text range items.
 */
declare class TextRanges {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: TextRange;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextRange;
}

/**
 * A collection of insertion points.
 */
declare class InsertionPoints {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: InsertionPoint;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): InsertionPoint;
}

/**
 * A collection of characters.
 */
declare class Characters {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Character;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a character.
   * @param contents The text string.
   */
  add(contents: string): TextRange;

  /**
   *
   * @param contents The text string.
   */
  addBefore(contents: string): TextRange;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextRange;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of words.
 */
declare class Words {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Word;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a word.
   * @param contents The text string.
   */
  add(contents: string): TextRange;

  /**
   *
   * @param contents The text string.
   */
  addBefore(contents: string): TextRange;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextRange;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of lines.
 */
declare class Lines {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Line;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextRange;
}

/**
 * A collection of Paragraphs.
 */
declare class Paragraphs {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Paragraph;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a text art item.
   * @param contents The text string.
   */
  add(contents: string): TextRange;

  /**
   *
   * @param contents The text string.
   */
  addBefore(contents: string): TextRange;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextRange;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of character styles.
 */
declare class CharacterStyles {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: CharacterStyle;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a named character style.
   * @param name The character style name.
   */
  add(name: string): CharacterStyle;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): CharacterStyle;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of paragraph styles.
 */
declare class ParagraphStyles {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: ParagraphStyle;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a named paragraph style.
   * @param name The paragraph style name.
   */
  add(name: string): ParagraphStyle;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): ParagraphStyle;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of custom spot colors.
 */
declare class Spots {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Spot;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a spot color.
   */
  add(): Spot;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Spot;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of swatches.
 */
declare class Swatches {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Swatch;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a swatch.
   */
  add(): Swatch;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Swatch;

  /**
   * Get selected swatches in the document.
   * @param includeSwatchInGroup The selected element should include swatches in group.
   */
  getSelected(includeSwatchInGroup?: boolean): Swatch[];

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of Swatch groups.
 */
declare class SwatchGroups {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: SwatchGroup;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a Swatch group.
   */
  add(): SwatchGroup;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): SwatchGroup;

  /**
   * Get selected swatchGroups in the document.
   */
  getSelected(): SwatchGroup[];

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of gradients.
 */
declare class Gradients {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Gradient;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a gradient.
   */
  add(): Gradient;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Gradient;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of gradient stops.
 */
declare class GradientStops {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: GradientStop;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a gradient stop.
   */
  add(): GradientStop;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): GradientStop;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of patterns.
 */
declare class Patterns {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Pattern;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a pattern.
   */
  add(): Pattern;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Pattern;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of symbols.
 */
declare class Symbols {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Symbol;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a symbol.
   * @param sourceArt The art item from which to make this symbol.
   * @param registrationPoint The symbol registration point.
   */
  add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Symbol;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of symbol items.
 */
declare class SymbolItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: SymbolItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * An instance of a symbol item.
   * @param symbol The symbol to make an instance of.
   */
  add(symbol: Symbol): SymbolItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): SymbolItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of brushes.
 */
declare class Brushes {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Brush;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a brush.
   * @param brushDefinition The brush definition from which the brush would be created.
   * @param brushName The name of the brush.
   */
  add(brushDefinition: File, brushName?: string): Brush;

  /**
   * Create a brush, select the brush tool and load the created brush in the brush tool.
   * @param brushDefinition The brush definition from which the brush would be created.
   */
  addAndLoad(brushDefinition: File): Brush;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Brush;
}

/**
 * A collection of art styles.
 */
declare class ArtStyles {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Style;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): ArtStyle;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of fonts.
 */
declare class TextFonts {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: TextFont;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): TextFont;

  /**
   * Returns the current font name.
   */
  getCurrentFont(): string;

  /**
   * Get the Text Font with the font name , if not avaiable it will create the substitute font.
   * @param fontName The name of the font to find or create substitute.
   */
  getFontByName(fontName: string): TextFont;

  /**
   * Check if any original font is present with the given name.
   * @param fontName The name of the font to find.
   */
  isFontAvailable(fontName: string): boolean;
}

/**
 * The collection of tags associated with a page item.
 */
declare class Tags {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Tag;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a tag.
   */
  add(): Tag;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Tag;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 *
 */
declare class RasterItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: RasterItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): RasterItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 *
 */
declare class PlacedItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: PlacedItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a placed item.
   */
  add(): PlacedItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): PlacedItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * EmbeddedItems Collection.
 */
declare class EmbeddedItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: EmbeddedItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create an embedded item.
   */
  add(): EmbedItem;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): EmbedItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 *
 */
declare class MeshItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: MeshItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): MeshItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 *
 */
declare class GraphItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: GraphItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): GraphItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 *
 */
declare class PluginItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: PluginItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): PluginItem;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 *
 */
declare class NonNativeItems {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: NonNativeItem;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): NonNativeItem;
}

/**
 * A collection of views.
 */
declare class Views {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: View;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): View;
}

/**
 * A collection of variables.
 */
declare class Variables {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: Variable;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a variable.
   */
  add(): Variable;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): Variable;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A collection of datasets.
 */
declare class DataSets {
  /**
   * Number of elements in the collection.
   */
  length: number;

  [n: number]: DataSet;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Create a data set.
   */
  add(): DataSet;

  /**
   * Get the first element in the collection with the provided name.
   */
  getByName(name: string): DataSet;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * Options which may be supplied when opening a file.
 */
declare class OpenOptions {
  /**
   * Add this file to the list of recently opened files.
   */
  addToRecentFiles: boolean;

  /**
   * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.
   */
  convertCropAreaToArtboard: boolean;

  /**
   * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.
   */
  convertTilesToArtboard: boolean;

  /**
   * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.
   */
  createArtboardWithArtworkBoundingBox: boolean;

  /**
   * Open the file as library.
   */
  openAs: LibraryType;

  /**
   * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.
   */
  preserveLegacyArtboard: boolean;

  /**
   * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)
   */
  updateLegacyGradientMesh: boolean;

  /**
   * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)
   */
  updateLegacyText: boolean;
}

/**
 * Options which may be supplied when saving a document as an FXG file.
 */
declare class FXGSaveOptions {
  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * The policy used by FXG to expand blends.
   */
  blendsPolicy: BlendsExpandPolicy;

  /**
   * Choose to downsample the linked images(72ppi)
   */
  downsampleLinkedImages: boolean;

  /**
   * The policy used by FXG to preserve filters.
   */
  filtersPolicy: FiltersPreservePolicy;

  /**
   * The policy used by FXG to preserve gradients.
   */
  gradientsPolicy: GradientsPreservePolicy;

  /**
   * Choose to include metadata (XMP)
   */
  includeMetadata: boolean;

  /**
   * Choose to include unused symbols.
   */
  includeUnusedSymbols: boolean;

  /**
   * Choose to preserve the editing capabilities of FXG.
   */
  preserveEditingCapabilities: boolean;

  /**
   * All the artboards or range of the artboards will be saved.
   */
  saveMultipleArtboards: boolean;

  /**
   * The policy used by FXG to preserve text.
   */
  textPolicy: TextPreservePolicy;

  /**
   * The version of the FXG file format to create.
   */
  version: FXGVersion;
}

/**
 * Options which may be supplied when saving a document as an Illustrator EPS file.
 */
declare class EPSSaveOptions {
  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * Use CMYK PostScript.
   */
  cmykPostScript: boolean;

  /**
   * What Illustrator file format version to create.
   */
  compatibility: Compatibility;

  /**
   * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.
   */
  compatibleGradientPrinting: boolean;

  /**
   * Embed all fonts used by the document in the saved file (version 7 or later)
   */
  embedAllFonts: boolean;

  /**
   * Are linked image files to be included in the saved document.
   */
  embedLinkedFiles: boolean;

  /**
   * How should transparency be flattened for older file format versions (pre-version 9)
   */
  flattenOutput: OutputFlattening;

  /**
   * Include thumbnail image of the EPS artwork.
   */
  includeDocumentThumbnails: boolean;

  /**
   *
   */
  overprint: PDFOverprint;

  /**
   * PostScript level to use (level 1 valid for file format version 8 or older)
   */
  postScript: EPSPostScriptLevelEnum;

  /**
   * EPS preview format.
   */
  preview: EPSPreview;

  /**
   * All the artboards or range of the artboards will be saved.
   */
  saveMultipleArtboards: boolean;
}

/**
 * Options which may be supplied when saving a document as a PDF file.
 */
declare class PDFSaveOptions {
  /**
   * Create acrobat layers from top-level layers - acrobat 6 only option.
   */
  acrobatLayers: boolean;

  /**
   * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * Link 4 bleed values.
   */
  bleedLink: boolean;

  /**
   * The bleed offset rect.
   */
  bleedOffsetRect: Rect;

  /**
   * Draw color bars.
   */
  colorBars: boolean;

  /**
   * How should color bitmap images be compressed.
   */
  colorCompression: CompressionQuality;

  /**
   * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.
   */
  colorConversionID: ColorConversion;

  /**
   * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.
   */
  colorDestinationID: ColorDestination;

  /**
   * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.
   */
  colorDownsampling: number;

  /**
   * Downsample if the image's resolution is above this value.
   */
  colorDownsamplingImageThreshold: number;

  /**
   * How should color bitmap images be resampled.
   */
  colorDownsamplingMethod: DownsampleMethod;

  /**
   * If CMS is off, Don't Include Profiles is set.
   */
  colorProfileID: ColorProfile;

  /**
   * Tile size when compressing with JPEG2000.
   */
  colorTileSize: number;

  /**
   * The version of the Acrobat file format to create.
   */
  compatibility: PDFCompatibility;

  /**
   * Should line art and text be compressed?
   */
  compressArt: boolean;

  /**
   * A password string to open the document.
   */
  documentPassword: string;

  /**
   * Enable accessing 128-bit.
   */
  enableAccess: boolean;

  /**
   * Enable copying of text 128-bit.
   */
  enableCopy: boolean;

  /**
   * Enable copying and accessing 40-bit.
   */
  enableCopyAccess: boolean;

  /**
   * Enable plaintext metadata 128-bit - available only for acrobat 6.
   */
  enablePlainText: boolean;

  /**
   * The printing flattener options.
   */
  flattenerOptions: PrintFlattenerOptions;

  /**
   * The transparency flattener preset name.
   */
  flattenerPreset: string;

  /**
   * Include a subset of fonts when less than this percentage of characters are used.
   */
  fontSubsetThreshold: number;

  /**
   * Generate thumbnails for the saved document.
   */
  generateThumbnails: boolean;

  /**
   * How should grayscale bitmap images be compressed.
   */
  grayscaleCompression: CompressionQuality;

  /**
   * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.
   */
  grayscaleDownsampling: number;

  /**
   * Downsample if the image's resolution is above this value.
   */
  grayscaleDownsamplingImageThreshold: number;

  /**
   * How should grayscale bitmap images be resampled.
   */
  grayscaleDownsamplingMethod: DownsampleMethod;

  /**
   * Tile size when compressing with JPEG2000.
   */
  grayscaleTileSize: number;

  /**
   * How should monochrome bitmap images be compressed.
   */
  monochromeCompression: MonochromeCompression;

  /**
   * If zero, no downsampling, otherwise, the resolution to downsample images to.
   */
  monochromeDownsampling: number;

  /**
   * Downsample if the image's resolution is above this value.
   */
  monochromeDownsamplingImageThreshold: number;

  /**
   * How should monochrome bitmap images be resampled.
   */
  monochromeDownsamplingMethod: DownsampleMethod;

  /**
   * Custom offset (in points) for using the custom paper.
   */
  offset: number;

  /**
   * Should the PDF document be optimized for fast web viewing.
   */
  optimization: boolean;

  /**
   * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.
   */
  outputCondition: string;

  /**
   * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.
   */
  outputConditionID: string;

  /**
   * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.
   */
  outputIntentProfile: string;

  /**
   * PDF security printing permission.
   */
  pDFAllowPrinting: PDFPrintAllowedEnum;

  /**
   * PDF security changes allowed.
   */
  pDFChangesAllowed: PDFChangesAllowedEnum;

  /**
   * The max string length is 255 bytes. Name of PDF preset to use.
   */
  pDFPreset: string;

  /**
   * This control includes the None option for when the user is not complying with any PDF standard.
   */
  pDFXStandard: PDFXStandard;

  /**
   * This displays the description from the selected preset.
   */
  pDFXStandardDescription: string;

  /**
   * Draw page information.
   */
  pageInformation: boolean;

  /**
   * The page marks style.
   */
  pageMarksType: PageMarksTypes;

  /**
   * A password string to restrict editing security settings.
   */
  permissionPassword: string;

  /**
   * Preserve Illustrator editing capabilities when saving the document.
   */
  preserveEditability: boolean;

  /**
   * Flattening printer resolution.
   */
  printerResolution: number;

  /**
   * Draw registration marks.
   */
  registrationMarks: boolean;

  /**
   * URL to the site where the specified output condition is registered. No validation is performed on the URL.
   */
  registryName: string;

  /**
   * Require a password to open the document.
   */
  requireDocumentPassword: boolean;

  /**
   * Use a password to restrict editing security settings.
   */
  requirePermissionPassword: boolean;

  /**
   * This indicates if manual trapping has been prepared in the document.
   */
  trapped: boolean;

  /**
   * Trim mark weight.
   */
  trimMarkWeight: PDFTrimMarkWeight;

  /**
   * Draw trim marks.
   */
  trimMarks: boolean;

  /**
   * View PDF after saving.
   */
  viewAfterSaving: boolean;
}

/**
 * Options which may be supplied when saving a document as an Illustrator file.
 */
declare class IllustratorSaveOptions {
  /**
   * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * What Illustrator file format version to create.
   */
  compatibility: Compatibility;

  /**
   * Should the saved file be compressed (version 10 or later)
   */
  compressed: boolean;

  /**
   * Embed the document's ICC profile in the saved file (version 9 or later)
   */
  embedICCProfile: boolean;

  /**
   * Are linked image files to be included in the saved document (versions 7 or later)
   */
  embedLinkedFiles: boolean;

  /**
   * How should transparency be flattened for older file format versions (pre-version 9)
   */
  flattenOutput: OutputFlattening;

  /**
   * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)
   */
  fontSubsetThreshold: number;

  /**
   * Save as a PDF compatible file (version 10 or later)
   */
  pdfCompatible: boolean;

  /**
   * All the artboards or range of the artboards will be saved.
   */
  saveMultipleArtboards: boolean;
}

/**
 *
 */
declare class Matrix {
  /**
   *
   */
  mValueA: number;

  /**
   *
   */
  mValueB: number;

  /**
   *
   */
  mValueC: number;

  /**
   *
   */
  mValueD: number;

  /**
   *
   */
  mValueTX: number;

  /**
   *
   */
  mValueTY: number;
}

/**
 * An item that needs to be exported; for example, a document, artboard, or asset.
 */
declare class ExportForScreensItemToExport {
  /**
   * Range of artboards to export [possible values: '', 'all'(default), range]
   */
  artboards: string;

  /**
   * Array of asset id to export (default:empty)
   */
  assets: number[];

  /**
   * Whether to export the document or not.
   */
  document: boolean;
}

/**
 * Options which may be provided when exporting a document as a JPEG100 file.
 */
declare class ExportForScreensOptionsJPEG {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: AntiAliasingMethod;

  /**
   * Should the image be compressed.
   */
  compressionMethod: JPEGCompressionMethodType;

  /**
   * Embed an ICC profile when exporting.
   */
  embedICCProfile: boolean;

  /**
   * Specify the number of detailed scans when downloading a JPEG file using the Progressive option as the CompressionMethod.
   */
  progressiveScan: number;

  /**
   * How should the resulting image be scaled.
   */
  scaleType: ExportForScreensScaleType;

  /**
   * The value by which the resulting image should be scaled.
   */
  scaleTypeValue: number;
}

/**
 * Options which may be provided when exporting a document as an 8 bit PNG file.
 */
declare class ExportForScreensOptionsPNG8 {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: AntiAliasingMethod;

  /**
   * Number of colors in exported color table.
   */
  colorCount: number;

  /**
   * Should the resulting image be interlaced.
   */
  interlaced: boolean;

  /**
   * Should the artboard be matted with a color.
   */
  matte: boolean;

  /**
   * The color to use when matting the artboard (default: white)
   */
  matteColor: RGBColor;

  /**
   * How should the resulting image be scaled.
   */
  scaleType: ExportForScreensScaleType;

  /**
   * The value by which the resulting image should be scaled.
   */
  scaleTypeValue: number;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;
}

/**
 * Options which may be provided when exporting a document as an 24 bit PNG file.
 */
declare class ExportForScreensOptionsPNG24 {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: AntiAliasingMethod;

  /**
   * Should the resulting image rasterize against a black background (with value true) or white background(with value false) if it doesn't use transparency.
   */
  backgroundBlack: boolean;

  /**
   * Should the resulting image be interlaced.
   */
  interlaced: boolean;

  /**
   * How should the resulting image be scaled.
   */
  scaleType: ExportForScreensScaleType;

  /**
   * The value by which the resulting image should be scaled.
   */
  scaleTypeValue: number;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;
}

/**
 * Options which may be provided when exporting a document as a web optimized SVG file.
 */
declare class ExportForScreensOptionsWebOptimizedSVG {
  /**
   * Decimal precision for element coordinate values.
   */
  coordinatePrecision: number;

  /**
   * How should the CSS properties of the document be included in the document.
   */
  cssProperties: SVGCSSPropertyLocation;

  /**
   * The type of font that should be included in the exported file.
   */
  fontType: SVGFontType;

  /**
   * Should the raster images in the exported file be included.
   */
  rasterImageLocation: RasterImageLocation;

  /**
   * How object names (IDs) are generated in exported SVG.
   */
  svgId: SVGIdType;

  /**
   * Reduces the size of the svg.
   */
  svgMinify: boolean;

  /**
   * Makes the SVG Responsive.
   */
  svgResponsive: boolean;
}

/**
 * Options which may be provided when exporting a document as a PDF file.
 */
declare class ExportForScreensPDFOptions {
  /**
   * The max string length is 255 bytes. Name of PDF preset to use.
   */
  pdfPreset: string;
}

/**
 * Options which may be supplied when exporting a document as a JPEG file.
 */
declare class ExportOptionsJPEG {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * Should the resulting image be clipped to the artboard.
   */
  artBoardClipping: boolean;

  /**
   * Blur the resulting image this much.
   */
  blurAmount: number;

  /**
   * Horizontal scaling factor.
   */
  horizontalScale: number;

  /**
   * Should the artboard be matted with a color.
   */
  matte: boolean;

  /**
   * The color to use when matting the artboard (default: white)
   */
  matteColor: RGBColor;

  /**
   * Should the image be optimized for web viewing.
   */
  optimization: boolean;

  /**
   * Quality of resulting image.
   */
  qualitySetting: number;

  /**
   * Should the resulting image be saved as HTML.
   */
  saveAsHTML: boolean;

  /**
   * Vertical scaling factor.
   */
  verticalScale: number;
}

/**
 * Options which may be supplied when exporting a document as an 8 bit PNG file.
 */
declare class ExportOptionsPNG8 {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * Should the resulting image be clipped to the artboard.
   */
  artBoardClipping: boolean;

  /**
   * Number of colors in exported color table.
   */
  colorCount: number;

  /**
   * Method used to dither colors.
   */
  colorDither: ColorDitherMethod;

  /**
   * Method used to reduce the number of colors.
   */
  colorReduction: ColorReductionMethod;

  /**
   * How much should the colors be dithered.
   */
  ditherPercent: number;

  /**
   * Horizontal scaling factor.
   */
  horizontalScale: number;

  /**
   * Should the resulting image be interlaced.
   */
  interlaced: boolean;

  /**
   * Should the artboard be matted with a color.
   */
  matte: boolean;

  /**
   * The color to use when matting the artboard (default: white)
   */
  matteColor: RGBColor;

  /**
   * Should the resulting image be saved as HTML.
   */
  saveAsHTML: boolean;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;

  /**
   * Vertical scaling factor.
   */
  verticalScale: number;

  /**
   * How much should the color table be changed to match the web palette.
   */
  webSnap: number;
}

/**
 * Options which may be supplied when exporting a document as an 24 bit PNG file.
 */
declare class ExportOptionsPNG24 {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * Should the resulting image be clipped to the artboard.
   */
  artBoardClipping: boolean;

  /**
   * Dimensions in which to contain the resulting raster.
   */
  dimensions: Dimensions;

  /**
   * Horizontal scaling factor.
   */
  horizontalScale: number;

  /**
   * Should the artboard be matted with a color.
   */
  matte: boolean;

  /**
   * The color to use when matting the artboard (default: white)
   */
  matteColor: RGBColor;

  /**
   * Should the resulting image be saved as HTML.
   */
  saveAsHTML: boolean;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;

  /**
   * Vertical scaling factor.
   */
  verticalScale: number;
}

/**
 * Options which may be supplied when exporting a document as a GIF file.
 */
declare class ExportOptionsGIF {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * Should the resulting image be clipped to the artboard.
   */
  artBoardClipping: boolean;

  /**
   * Number of colors in exported color table.
   */
  colorCount: number;

  /**
   * Method used to dither colors.
   */
  colorDither: ColorDitherMethod;

  /**
   * Method used to reduce the number of colors.
   */
  colorReduction: ColorReductionMethod;

  /**
   * How much should the colors be dithered.
   */
  ditherPercent: number;

  /**
   * Horizontal scaling factor.
   */
  horizontalScale: number;

  /**
   * Level of information loss during compression.
   */
  infoLossPercent: number;

  /**
   * Should the resulting image be interlaced.
   */
  interlaced: boolean;

  /**
   * Should the artboard be matted with a color.
   */
  matte: boolean;

  /**
   * The color to use when matting the artboard (default: white)
   */
  matteColor: RGBColor;

  /**
   * Should the resulting image be saved as HTML.
   */
  saveAsHTML: boolean;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;

  /**
   * Vertical scaling factor.
   */
  verticalScale: number;

  /**
   * How much should the color table be changed to match the web pallet.
   */
  webSnap: number;
}

/**
 * Options which may be supplied when exporting a document as a Photoshop file.
 */
declare class ExportOptionsPhotoshop {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * Export text objects as editable text layers.
   */
  editableText: boolean;

  /**
   * Embed an ICC profile when exporting.
   */
  embedICCProfile: boolean;

  /**
   * The color space of the exported file.
   */
  imageColorSpace: ImageColorSpace;

  /**
   * Preserve as much of the original document's structure as possible when exporting.
   */
  maximumEditability: boolean;

  /**
   * The resolution of the exported file.
   */
  resolution: number;

  /**
   * All the artboards or range of the artboards will be exported.
   */
  saveMultipleArtboards: boolean;

  /**
   * Should a warning dialog be displayed because of conflicts in the export settings.
   */
  warnings: boolean;

  /**
   * Preserve document layers when exporting.
   */
  writeLayers: boolean;
}

/**
 * Options which may be supplied when exporting a document as an SVG file.
 */
declare class ExportOptionsSVG {
  /**
   * The version of DTD that the exported file should be conforming to.
   */
  DTD: SVGDTDVersion;

  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * Should the exported file be compressed.
   */
  compressed: boolean;

  /**
   * Decimal precision for element coordinate values.
   */
  coordinatePrecision: number;

  /**
   * How should the CSS properties of the document be included in the document.
   */
  cssProperties: SVGCSSPropertyLocation;

  /**
   * How should the text in the document be encoded.
   */
  documentEncoding: SVGDocumentEncoding;

  /**
   * Should the raster images in the exported file be included.
   */
  embedRasterImages: boolean;

  /**
   * What font glyphs should be included in the exported file.
   */
  fontSubsetting: SVGFontSubsetting;

  /**
   * The type of font that should be included in the exported file.
   */
  fontType: SVGFontType;

  /**
   *
   */
  includeFileInfo: boolean;

  /**
   *
   */
  includeUnusedStyles: boolean;

  /**
   *
   */
  includeVariablesAndDatasets: boolean;

  /**
   *
   */
  optimizeForSVGViewer: boolean;

  /**
   * Preserve Illustrator editing capabilities when exporting the document.
   */
  preserveEditability: boolean;

  /**
   * Is SVG auto kerning allowed?
   */
  sVGAutoKerning: boolean;

  /**
   * Is SVG text-on-path construct allowed?
   */
  sVGTextOnPath: boolean;

  /**
   * All the artboards or range of the artboards will be saved.
   */
  saveMultipleArtboards: boolean;

  /**
   * Preserve slice data in exported document.
   */
  slices: boolean;
}

/**
 * Options which may be supplied when exporting a document as a Web optimized SVG file.
 */
declare class ExportOptionsWebOptimizedSVG {
  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * Decimal precision for element coordinate values.
   */
  coordinatePrecision: number;

  /**
   * How should the CSS properties of the document be included in the document.
   */
  cssProperties: SVGCSSPropertyLocation;

  /**
   * The type of font that should be included in the exported file.
   */
  fontType: SVGFontType;

  /**
   * Should the raster images in the exported file be included.
   */
  rasterImageLocation: RasterImageLocation;

  /**
   * All the artboards or range of the artboards will be saved.
   */
  saveMultipleArtboards: boolean;

  /**
   * How object names (IDs) are generated in exported SVG.
   */
  svgId: SVGIdType;

  /**
   * Reduces the size of the svg.
   */
  svgMinify: boolean;

  /**
   * Makes the SVG Responsive.
   */
  svgResponsive: boolean;
}

/**
 * Options which may be supplied when exporting a document as an Flash (.SWF) file.
 */
declare class ExportOptionsFlash {
  /**
   * How should the arts be clipped during the output.
   */
  artClipping: ArtClippingOption;

  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * The background color.
   */
  backgroundColor: RGBColor;

  /**
   * A list of layers to be included as the background in all exported Flash frames.
   */
  backgroundLayers: Layer[];

  /**
   * Controls how the blend art objects are animated when export to Flash frames.
   */
  blendAnimation: BlendAnimationType;

  /**
   * Should the exported file be compressed.
   */
  compressed: boolean;

  /**
   * Should all text be converted to outlines.
   */
  convertTextToOutlines: boolean;

  /**
   * How much curve information should be preserved.
   */
  curveQuality: number;

  /**
   * Should all symbol definitions in the palette be exported to the SWF File.
   */
  exportAllSymbols: boolean;

  /**
   * How should the Flash file be created.
   */
  exportStyle: FlashExportStyle;

  /**
   * Which version of SWF to export.
   */
  exportVersion: FlashExportVersion;

  /**
   * When exporting layers to Flash frames.
   */
  frameRate: number;

  /**
   * Should the kerning information for text objects be ignored.
   */
  ignoreTextKerning: boolean;

  /**
   * How should the images in the exported Flash file be compressed.
   */
  imageFormat: FlashImageFormat;

  /**
   * If true, include minimal XMP metadata in the exported file.
   */
  includeMetadata: boolean;

  /**
   * What method to use.
   */
  jpegMethod: FlashJPEGMethod;

  /**
   * Level of compression.
   */
  jpegQuality: number;

  /**
   * The order in which the layers will be exported to Flash frames.
   */
  layerOrder: LayerOrderType;

  /**
   * Should the Flash file be set to loop when run.
   */
  looping: boolean;

  /**
   * What access should the SWF file have - local or network access.
   */
  playbackAccess: FlashPlaybackSecurity;

  /**
   * Choose whether to preserve artwork appearance or editability (default) during export.
   */
  preserveAppearance: boolean;

  /**
   * Prevent the exported file from being imported by other applications.
   */
  readOnly: boolean;

  /**
   * If a file with the same name already exists, should it be replaced?
   */
  replacing: SaveOptions;

  /**
   * Pixels per inch.
   */
  resolution: number;

  /**
   * All the artboards or range of the artboards will be exported.
   */
  saveMultipleArtboards: boolean;
}

/**
 * Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)
 */
declare class ExportOptionsAutoCAD {
  /**
   * Alter paths for appearance.
   */
  alterPathsForAppearance: boolean;

  /**
   * Number of colors to export into the AutoCAD file.
   */
  colors: AutoCADColors;

  /**
   * Whether to convert text to outlines.
   */
  convertTextToOutlines: boolean;

  /**
   * Which format to export the file as.
   */
  exportFileFormat: AutoCADExportFileFormat;

  /**
   * Whether to preserve appearance or editability during export.
   */
  exportOption: AutoCADExportOption;

  /**
   * Export selected art only.
   */
  exportSelectedArtOnly: boolean;

  /**
   * Raster format in which to export raster art.
   */
  rasterFormat: AutoCADRasterFormat;

  /**
   * Whether to scale lineweights by the same amount as rest of the drawing.
   */
  scaleLineweights: boolean;

  /**
   * Units from which to map.
   */
  unit: AutoCADUnit;

  /**
   * Ratio by which to scale the output.
   */
  unitScaleRatio: number;

  /**
   * Release of AutoCAD to export to.
   */
  version: AutoCADCompatibility;
}

/**
 * Options which may be supplied when exporting a document as a TIFF file.
 */
declare class ExportOptionsTIFF {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: AntiAliasingMethod;

  /**
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   */
  artboardRange: string;

  /**
   * Mac or PC byte order when exporting.
   */
  byteOrder: TIFFByteOrder;

  /**
   * Embed an ICC profile when exporting.
   */
  embedICCProfile: boolean;

  /**
   * The color space of the exported file.
   */
  imageColorSpace: ImageColorSpace;

  /**
   * Compress TIFF file with LZW Compression when exporting.
   */
  lZWCompression: boolean;

  /**
   * The resolution of the exported file.
   */
  resolution: number;

  /**
   * All the artboards or range of the artboards will be exported.
   */
  saveMultipleArtboards: boolean;
}

/**
 * The parent class for all color values used in Illustrator. See the specific color classes for more information.
 */
declare class Color {}

/**
 * An Lab color specification.
 */
declare class LabColor extends Color {
  /**
   * The a color value (between -128.0 and 127.0)
   */
  a: number;

  /**
   * The b color value (between -128.0 and 127.0)
   */
  b: number;

  /**
   * The L color value (between 0.0 and 100.0)
   */
  l: number;
}

/**
 * Dimensions (height and width)
 */
declare class Dimensions {
  /**
   * The Height parameter.
   */
  height: number;

  /**
   * The Width parameter.
   */
  width: number;
}

/**
 * An RGB color specification.
 */
declare class RGBColor extends Color {
  /**
   * The blue color value (between 0.0 and 255.0)
   */
  blue: number;

  /**
   * The green color value (between 0.0 and 255.0)
   */
  green: number;

  /**
   * The red color value (between 0.0 and 255.0)
   */
  red: number;
}

/**
 * A CMYK color specification.
 */
declare class CMYKColor extends Color {
  /**
   * The black color value (between 0.0 and 100.0)
   */
  black: number;

  /**
   * The cyan color value (between 0.0 and 100.0)
   */
  cyan: number;

  /**
   * The magenta color value (between 0.0 and 100.0)
   */
  magenta: number;

  /**
   * The yellow color value (between 0.0 and 100.0)
   */
  yellow: number;
}

/**
 * A gray color specification.
 */
declare class GrayColor extends Color {
  /**
   * The gray value (between 0.0 and 100.0)
   */
  gray: number;
}

/**
 * Represents the 'none' color.
 */
declare class NoColor extends Color {}

/**
 * Information about the spot color.
 */
declare class SpotColor extends Color {
  /**
   *
   */
  spot: Spot;

  /**
   * Percentage level of tint to be applied to the spot color.
   */
  tint: number;
}

/**
 * A Pattern color specification.
 */
declare class PatternColor extends Color {
  /**
   * Additional transformation arising from manipulating the path.
   */
  matrix: Matrix;

  /**
   *
   */
  pattern: Pattern;

  /**
   * Whether or not the prototype is reflected before filling.
   */
  reflect: boolean;

  /**
   * The axis around which to reflect.
   */
  reflectAngle: number;

  /**
   * The angle to rotate the before filling.
   */
  rotation: number;

  /**
   * The fraction to scale the prototype before filling.
   */
  scaleFactor: Point;

  /**
   * The angle to slant the shear by.
   */
  shearAngle: number;

  /**
   * The axis to shear with respect to.
   */
  shearAxis: number;

  /**
   * The angle to translate the (unscaled) prototype before filling.
   */
  shiftAngle: number;

  /**
   * The distance to translate the (unscaled) prototype before filling.
   */
  shiftDistance: number;
}

/**
 * A Gradient color specification.
 */
declare class GradientColor extends Color {
  /**
   * The gradient vector angle.
   */
  angle: number;

  /**
   * Reference to the object defining the gradient.
   */
  gradient: Gradient;

  /**
   * The gradient hilite vector angle.
   */
  hiliteAngle: number;

  /**
   * The gradient hilite vector length.
   */
  hiliteLength: number;

  /**
   * The gradient vector length.
   */
  length: number;

  /**
   * Additional transformation arising from manipulating the path.
   */
  matrix: Matrix;

  /**
   * The gradient vector origin.
   */
  origin: Point;
}

/**
 * Tab stop information (returned by tab stops from a paragraph object)
 */
declare class TabStopInfo {
  /**
   * The alignment of the tab stop.
   */
  alignment: TabStopAlignment;

  /**
   * The character used for decimal tab stops.
   */
  decimalCharacter: string;

  /**
   * The leader dot.
   */
  leader: string;

  /**
   * The position of the tab stop expressed in points.
   */
  position: number;
}

/**
 * An installed printer.
 */
declare class Printer {
  /**
   * The printer name.
   */
  name: string;

  /**
   * The printer information.
   */
  printerInfo: PrinterInfo;
}

/**
 * Printer information.
 */
declare class PrinterInfo {
  /**
   * Does the printer support binary printing?
   */
  binaryPrintingSupport: boolean;

  /**
   * The printer color capability.
   */
  colorSupport: PrinterColorMode;

  /**
   * Does the printer support custom paper size?
   */
  customPaperSupport: boolean;

  /**
   * Does the printer support custom paper transverse?
   */
  customPaperTransverseSupport: boolean;

  /**
   * The printer default resolution.
   */
  deviceResolution: number;

  /**
   * Does the printer support InRIP color separation?
   */
  inRIPSeparationSupport: boolean;

  /**
   * The printer maximum device resolution.
   */
  maxDeviceResolution: number;

  /**
   * Custom paper's maximum height.
   */
  maxPaperHeight: number;

  /**
   * Custom paper's maximum height offset.
   */
  maxPaperHeightOffset: number;

  /**
   * Custom paper's maximum width.
   */
  maxPaperWidth: number;

  /**
   * Custom paper's maximum width offset.
   */
  maxPaperWidthOffset: number;

  /**
   * Custom paper's minimum height.
   */
  minPaperHeight: number;

  /**
   * Custom paper's minimum height offset.
   */
  minPaperHeightOffset: number;

  /**
   * Custom paper's minimum width.
   */
  minPaperWidth: number;

  /**
   * Custom paper's minimum width offset.
   */
  minPaperWidthOffset: number;

  /**
   * The list of supported paper sizes.
   */
  paperSizes: Paper[];

  /**
   * The PostScript level.
   */
  postScriptLevel: PrinterPostScriptLevelEnum;

  /**
   * The printer type.
   */
  printerType: PrinterTypeEnum;
}

/**
 * A PPD file.
 */
declare class PPDFile {
  /**
   * The PPD file information.
   */
  PPDInfo: PPDFileInfo;

  /**
   * The PPD model name.
   */
  name: string;
}

/**
 * PPD file information.
 */
declare class PPDFileInfo {
  /**
   * Path specification for the PPD file.
   */
  PPDFilePath: File;

  /**
   * The PostScript language level.
   */
  languageLevel: string;

  /**
   * List of color separation screens.
   */
  screenList: Screen[];

  /**
   * List of color separation screen spot functions.
   */
  screenSpotFunctionList: ScreenSpotFunction[];
}

/**
 * Paper size.
 */
declare class Paper {
  /**
   * The paper name.
   */
  name: string;

  /**
   * The paper information.
   */
  paperInfo: PaperInfo;
}

/**
 * Paper information.
 */
declare class PaperInfo {
  /**
   * Is it a custom paper?
   */
  customPaper: boolean;

  /**
   * The paper's height (in points)
   */
  height: number;

  /**
   * The imageable area.
   */
  imageableArea: Rect;

  /**
   * The paper's width (in points)
   */
  width: number;
}

/**
 * Color separation screen.
 */
declare class Screen {
  /**
   * The color separation screen name.
   */
  name: string;

  /**
   * The color separation screen information.
   */
  screenInfo: ScreenInfo;
}

/**
 * Screen information.
 */
declare class ScreenInfo {
  /**
   * The screen's angle (in degrees)
   */
  angle: number;

  /**
   * Is it the default screen?
   */
  defaultScreen: boolean;

  /**
   * The screen's frequency.
   */
  frequency: number;
}

/**
 * Color separation screen spot function.
 */
declare class ScreenSpotFunction {
  /**
   * The color separation screen spot function name.
   */
  name: string;

  /**
   * The spot function in terms of the PostScript commands.
   */
  spotFunction: string;
}

/**
 * Printer's ink.
 */
declare class Ink {
  /**
   * The ink information.
   */
  inkInfo: InkInfo;

  /**
   * The ink's name.
   */
  name: string;
}

/**
 * Ink information.
 */
declare class InkInfo {
  /**
   * The ink's screen angle (in degrees)
   */
  angle: number;

  /**
   * The color of the custom ink.
   */
  customColor: Color;

  /**
   * The neutral density.
   */
  density: number;

  /**
   * The dot shape name.
   */
  dotShape: string;

  /**
   * The ink's frequency.
   */
  frequency: number;

  /**
   * The ink type.
   */
  kind: InkType;

  /**
   * The ink printing status.
   */
  printingStatus: InkPrintStatus;

  /**
   * The trapping type.
   */
  trapping: TrappingType;

  /**
   * The order of trapping for the ink.
   */
  trappingOrder: number;
}

/**
 * The new document preset to use for creating a new document.
 */
declare class DocumentPreset {
  /**
   * Layout for artboards.
   */
  artboardLayout: DocumentArtboardLayout;

  /**
   * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   */
  artboardRowsOrCols: number;

  /**
   * Spacing between artboards.
   */
  artboardSpacing: number;

  /**
   * The color mode for the new document.
   */
  colorMode: DocumentColorSpace;

  /**
   * Document link for bleed values.
   */
  documentBleedLink: boolean;

  /**
   * Document bleed offset rect.
   */
  documentBleedOffset: Rect;

  /**
   * The height for the new document.
   */
  height: number;

  /**
   * Number of artboards for new document.Range (1:100).
   */
  numArtboards: number;

  /**
   * The preview mode for the new document.
   */
  previewMode: DocumentPreviewMode;

  /**
   * The raster resolution for the new document.
   */
  rasterResolution: DocumentRasterResolution;

  /**
   * The title for the new document.
   */
  title: string;

  /**
   * The transparency grid for the new document.
   */
  transparencyGrid: DocumentTransparencyGrid;

  /**
   * The units for the new document.
   */
  units: RulerUnits;

  /**
   * The width for the new document.
   */
  width: number;
}

/**
 * The print options.
 */
declare class PrintOptions {
  /**
   * The name of the PPD to use.
   */
  PPDName: string;

  /**
   * The printing color management options.
   */
  colorManagementOptions: PrintColorManagementOptions;

  /**
   * The printing color separation options.
   */
  colorSeparationOptions: PrintColorSeparationOptions;

  /**
   * The printing coordinate options.
   */
  coordinateOptions: PrintCoordinateOptions;

  /**
   * The printing flattener options.
   */
  flattenerOptions: PrintFlattenerOptions;

  /**
   * The transparency flattener preset name.
   */
  flattenerPreset: string;

  /**
   * The printing font options.
   */
  fontOptions: PrintFontOptions;

  /**
   * The printing job options.
   */
  jobOptions: PrintJobOptions;

  /**
   * The printing page marks options.
   */
  pageMarksOptions: PrintPageMarksOptions;

  /**
   * The paper options.
   */
  paperOptions: PrintPaperOptions;

  /**
   * The printing PostScript options.
   */
  postScriptOptions: PrintPostScriptOptions;

  /**
   * The name of a print preset to use.
   */
  printPreset: string;

  /**
   * The name of the printer to print to.
   */
  printerName: string;
}

/**
 * The paper options.
 */
declare class PrintPaperOptions {
  /**
   * The custom height (in points) for using the custom paper.
   */
  height: number;

  /**
   * The paper's name.
   */
  name: string;

  /**
   * Custom offset (in points) for using the custom paper.
   */
  offset: number;

  /**
   * Whether to transverse the artwork (rotate 90 degrees) on the custom paper.
   */
  transverse: boolean;

  /**
   * The custom width (in points) for using the custom paper.
   */
  width: number;
}

/**
 * The print job options.
 */
declare class PrintJobOptions {
  /**
   * Artboard Range to be printed if PrintAllArtboards is false.
   */
  artboardRange: string;

  /**
   * The bitmap resolution.
   */
  bitmapResolution: number;

  /**
   * Whether to collate print pages.
   */
  collate: boolean;

  /**
   * The number of copies to print.
   */
  copies: number;

  /**
   * The layers/objects to be printed.
   */
  designation: PrintArtworkDesignation;

  /**
   * The file to be printed to.
   */
  file: File;

  /**
   * The print job name.
   */
  name: string;

  /**
   * Whether to print all artboards.
   */
  printAllArtboards: boolean;

  /**
   * The printing bounds.
   */
  printArea: PrintingBounds;

  /**
   * Whether to print as bitmap.
   */
  printAsBitmap: boolean;

  /**
   * Print pages in reverse order.
   */
  reversePages: boolean;
}

/**
 * Print color separation options.
 */
declare class PrintColorSeparationOptions {
  /**
   * The color separation type.
   */
  colorSeparationMode: PrintColorSeparationMode;

  /**
   * Whether to convert all spot colors to process colors.
   */
  convertSpotColors: boolean;

  /**
   * The list of inks for color separation.
   */
  inkList: Ink[];

  /**
   * Whether to overprint in black.
   */
  overPrintBlack: boolean;
}

/**
 * The print coordinate options.
 */
declare class PrintCoordinateOptions {
  /**
   * Whether to flip artwork horizontally.
   */
  emulsion: boolean;

  /**
   * Whether to proportionally scale the artwork to fit on the page.
   */
  fitToPage: boolean;

  /**
   * The horizontal scaling factor expressed as a percentage (100 = 100%)
   */
  horizontalScale: number;

  /**
   * The artwork orientation.
   */
  orientation: PrintOrientation;

  /**
   * The artwork position on media.
   */
  position: PrintPosition;

  /**
   * The page tiling mode.
   */
  tiling: PrintTiling;

  /**
   * The vertical scaling factor expressed as a percentage (100 = 100%)
   */
  verticalScale: number;
}

/**
 * The page marks options.
 */
declare class PrintPageMarksOptions {
  /**
   * The bleed offset rect.
   */
  bleedOffsetRect: Rect;

  /**
   * Whether to enable color bars printing.
   */
  colorBars: boolean;

  /**
   * The page marks offset rect.
   */
  marksOffsetRect: Rect;

  /**
   * Whether to enable page info marks printing.
   */
  pageInfoMarks: boolean;

  /**
   * The page marks style.
   */
  pageMarksType: PageMarksTypes;

  /**
   * Whether to enable registration marks printing.
   */
  registrationMarks: boolean;

  /**
   * Whether to enable trim marks printing.
   */
  trimMarks: boolean;

  /**
   * Stroke weight of trim marks.
   */
  trimMarksWeight: number;
}

/**
 * The font options for printing.
 */
declare class PrintFontOptions {
  /**
   * The font download mode.
   */
  downloadFonts: PrintFontDownloadMode;

  /**
   * The font substitution policy.
   */
  fontSubstitution: FontSubstitutionPolicy;
}

/**
 * The PostScript options.
 */
declare class PrintPostScriptOptions {
  /**
   * Whether to print in binary mode.
   */
  binaryPrinting: boolean;

  /**
   * Use PostScript level 1 compatible gradient and gradient mesh printing.
   */
  compatibleShading: boolean;

  /**
   * Whether to force continuous tone.
   */
  forceContinuousTone: boolean;

  /**
   * The image compression type.
   */
  imageCompression: PostScriptImageCompressionType;

  /**
   * Whether to print in negative mode.
   */
  negativePrinting: boolean;

  /**
   * The PostScript language level.
   */
  postScriptLevel: PrinterPostScriptLevelEnum;

  /**
   * The shading resolution.
   */
  shadingResolution: number;
}

/**
 * The color management options.
 */
declare class PrintColorManagementOptions {
  /**
   * The color management profile mode.
   */
  colorProfileMode: PrintColorProfile;

  /**
   * The color management intent type.
   */
  intent: PrintColorIntent;

  /**
   * The color management profile name.
   */
  name: string;
}

/**
 * The transparency flattening options.
 */
declare class PrintFlattenerOptions {
  /**
   * Whether to clip complex regions.
   */
  clipComplexRegions: boolean;

  /**
   * Whether to convert all strokes to outlines.
   */
  convertStrokesToOutlines: boolean;

  /**
   * Whether to convert all text to outlines.
   */
  convertTextToOutlines: boolean;

  /**
   * The flattening balance.
   */
  flatteningBalance: number;

  /**
   * The gradient resolution.
   */
  gradientResolution: number;

  /**
   * Overprint.
   */
  overprint: PDFOverprint;

  /**
   * The rasterization resolution.
   */
  rasterizationResolution: number;
}

/**
 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.
 */
declare class ImageCaptureOptions {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * Should the artboard be matted with a color.
   */
  matte: boolean;

  /**
   * The color to use when matting the artboard (default: white)
   */
  matteColor: RGBColor;

  /**
   * The resolution of the captured image file.
   */
  resolution: number;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;
}

/**
 * The document raster effects settings.
 */
declare class RasterEffectOptions {
  /**
   * Should the resulting image be antialiased.
   */
  antiAliasing: boolean;

  /**
   * Should a clipping mask be created for the resulting image.
   */
  clippingMask: boolean;

  /**
   * The color model for the rasterization.
   */
  colorModel: RasterizationColorModel;

  /**
   * Whether to convert all spot colors to process colors in the resulting image.
   */
  convertSpotColors: boolean;

  /**
   * The amount of white space (in points) to be added around the object during rasterization.
   */
  padding: number;

  /**
   * The rasterization resolution in dots-per-inch (dpi)
   */
  resolution: number;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;
}

/**
 * Options which may be supplied when rasterizing the artwork.
 */
declare class RasterizeOptions {
  /**
   * The type of antialiasing method.
   */
  antiAliasingMethod: AntiAliasingMethod;

  /**
   * Should rasterize against a black background instead of white.
   */
  backgroundBlack: boolean;

  /**
   * Should a clipping mask be created for the resulting image.
   */
  clippingMask: boolean;

  /**
   * The color model for the rasterization.
   */
  colorModel: RasterizationColorModel;

  /**
   * Whether to convert all spot colors to process colors in the resulting image.
   */
  convertSpotColors: boolean;

  /**
   * Should all text be converted to outlines before rasterization.
   */
  convertTextToOutlines: boolean;

  /**
   * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)
   */
  includeLayers: boolean;

  /**
   * The amount of white space (in points) to be added around the object during rasterization.
   */
  padding: number;

  /**
   * The rasterization resolution in dots-per-inch (dpi)
   */
  resolution: number;

  /**
   * Should the resulting image use transparency.
   */
  transparency: boolean;
}

/**
 * The Adobe Illustrator application.
 */
declare class Application {
  /**
   * The list of PDF preset names currently available for use.
   */
  PDFPresetsList: string[];

  /**
   * The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file.
   */
  PPDFileList: PPDFile[];

  /**
   * The active document.
   */
  activeDocument: Document;

  /**
   * Is a web browser available?
   */
  browserAvailable: boolean;

  /**
   * The build number of the Adobe Illustrator application.
   */
  buildNumber: string;

  /**
   * The list of color settings files currently available for use.
   */
  colorSettingsList: File[];

  /**
   * Coordinate System used by script.
   */
  coordinateSystem: CoordinateSystem;

  /**
   * The default color settings file for the current application locale.
   */
  defaultColorSettings: File;

  /**
   * The open documents.
   */
  documents: Documents;

  /**
   * The list of flattener style names currently available for use.
   */
  flattenerPresetsList: string[];

  /**
   * The amount of unused memory within the Adobe Illustrator partition.
   */
  freeMemory: number;

  /**
   * The Locale of the Adobe Illustrator application.
   */
  locale: string;

  /**
   * The application's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Does paste operation remember layers structure?
   */
  pasteRemembersLayers: boolean;

  /**
   * Path specification for the application.
   */
  path: File;

  /**
   * Preferences for Illustrator.
   */
  preferences: Preferences;

  /**
   * The list of print preset names currently available for use.
   */
  printPresetsList: string[];

  /**
   * The list of installed printers.
   */
  printerList: Printer[];

  /**
   * The version of the Scripting plugin.
   */
  scriptingVersion: string;

  /**
   * The selection visible to the user.
   */
  selection: any;

  /**
   * The list of presets available for creating a new document.
   */
  startupPresetsList: string[];

  /**
   * Installed fonts.
   */
  textFonts: TextFonts;

  /**
   * The list of tracing preset names currently available for use.
   */
  tracingPresetsList: string[];

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The current users adobe id.
   */
  userAdobeID: string;

  /**
   * The current user's GUID.
   */
  userGUID: string;

  /**
   * What level of interaction with the user should be allowed when handling script commands.
   */
  userInteractionLevel: UserInteractionLevel;

  /**
   * The version of the Adobe Illustrator application.
   */
  version: string;

  /**
   * Is the application visible.
   */
  visible: boolean;

  /**
   * Add the specified to the sequencer.
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param destinationSequenceID The UID for the owning sequence.
   * @param destinationIndex The item UID where to insert.
   * @param srcItemIDData The item ID of the item to construct.
   * @param type The source of the item to construct.
   */
  aATAddItem(
    sessionIndex: number,
    destinationSequenceID: number,
    destinationIndex: number,
    srcItemIDData: string,
    type: string
  ): string;

  /**
   * Clear the sequencer.
   */
  aATClear(): string;

  /**
   * Duplicates the specified item(s) from the sequencer.
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param item The item UID(s)
   */
  aATDuplicateItem(sessionIndex: number, item: string): string;

  /**
   * Opens the specified item from the sequencer in the item editor.
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param item The item UID.
   */
  aATEditItem(sessionIndex: number, item: string): string;

  /**
   * Retrieves a boolean indicating the presence of errors in the last script to execute.
   */
  aATErrorsExist(): boolean;

  /**
   * Executes the active session in the sequencer.
   */
  aATExecuteSession(): void;

  /**
   * Executes the active session in the sequencer.
   * @param file Execute a session file.
   */
  aATExecuteSessionFromFile(file: File): void;

  /**
   * Switches a files relative token and path.
   * @param path The path relative to the folder specified by Relative.
   * @param relative The current relative path token.
   * @param newRelative The new relative path token.
   */
  aATFileRelativeChanged(
    path: string,
    relative: string,
    newRelative: string
  ): string;

  /**
   * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.
   * @param path The path relative to the folder specified by Relative.
   * @param relative The current relative path token.
   * @param type The type of dialog to show in string format.
   */
  aATFileSaveDialog(path: string, relative: string, type: string): string;

  /**
   * Retrieves a file path to the AAT editor swf.
   */
  aATGetEditorDialogFile(): File;

  /**
   * Retrieves a file path to the AAT error dialog swf.
   */
  aATGetErrorDialogFile(): File;

  /**
   * Gets an XML string listing the relative paths and the UI strings to display them.
   */
  aATGetListOfRelativePaths(): string;

  /**
   * Get the active session for the sequncer.
   */
  aATGetSession(): string;

  /**
   * Loads a session file as an extension to the editor.
   */
  aATLoadLibExtension(): string;

  /**
   * Loads the aat model to the editor.
   */
  aATLoadModel(): string;

  /**
   * Loads a session into the sequencer.
   */
  aATLoadSessionFile(): string;

  /**
   * Loads a UI description as an extension to the editor.
   */
  aATLoadUIExtension(): string;

  /**
   * Moves the specified in the sequencer.
   * @param sessionIndex The index in the session of the top-most sequence for the item to move.
   * @param moveThisID The UID of the item to replace.
   * @param newSessionIndex The index in the session of the destination top-most sequence.
   * @param destinationSequenceID The UID for the owning sequence.
   * @param destinationIndex The index where to insert.
   */
  aATMoveItem(
    sessionIndex: number,
    moveThisID: string,
    newSessionIndex: number,
    destinationSequenceID: string,
    destinationIndex: number
  ): string;

  /**
   * Removes the specified item from the sequencer.
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param item The item UID.
   */
  aATRemoveItem(sessionIndex: number, item: string): string;

  /**
   * Replaces the specified to the sequencer.
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param replaceThisID The UID of the item to replace.
   * @param srcItemIDData The item ID of the item to construct.
   * @param type The source of the item to construct.
   */
  aATReplaceItem(
    sessionIndex: number,
    replaceThisID: number,
    srcItemIDData: string,
    type: string
  ): string;

  /**
   * Saves the active session in the sequencer to a new file.
   */
  aATSaveAsSession(): string;

  /**
   * Saves the active session in the sequencer to a file.
   */
  aATSaveSession(): string;

  /**
   * Applies the data used in the item editor to the item.
   * @param sessionIndex The index in the session of the top-most sequence for the item to edit.
   * @param item The item UID.
   * @param data The data to apply in XML format.
   */
  applyDataToItem(sessionIndex: number, item: string, data: string): string;

  /**
   * Applies data to the specified item from the sequencer in the item editor.
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.
   * @param item The item UID.
   * @param dataID The data to apply in XML format.
   * @param data The data to apply in XML format.
   */
  applySingleDataPointToItem(
    sessionIndex: number,
    item: string,
    dataID: string,
    data: string
  ): boolean;

  /**
   *
   */
  beep(): void;

  /**
   * Starts the automation tests for the Sync Settings feature.
   */
  beginSyncSettingsAutomationTest(): boolean;

  /**
   * Starts the automation tests for the Typekit Font feature.
   */
  beginTypekitFontAutomationTest(): boolean;

  /**
   * Concatenate two transformation matrices.
   * @param matrix The matrix that is to be added to.
   * @param secondMatrix Second transformation matrix.
   */
  concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix;

  /**
   * Concatenate a rotation matrix to a transformation matrix.
   * @param matrix The matrix that is to be added to.
   * @param angle Angle of rotation (in degrees)
   */
  concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix;

  /**
   * Concatenate a scale matrix to a transformation matrix.
   * @param matrix The matrix that is to be added to.
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)
   */
  concatenateScaleMatrix(
    matrix: Matrix,
    scaleX?: number,
    scaleY?: number
  ): Matrix;

  /**
   * Concatenate a translation to a transformation matrix.
   * @param matrix The matrix that is to be added to.
   * @param deltaX Horizontal transformation.
   * @param deltaY Vertical transformation.
   */
  concatenateTranslationMatrix(
    matrix: Matrix,
    deltaX?: number,
    deltaY?: number
  ): Matrix;

  /**
   * Converts a sample-component color from one color space to another.
   * @param sourceColorSpace The source color space.
   * @param sourceColor The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.
   * @param destColorSpace The destination color space.
   * @param colorConvertPurpose The parameter which passes the purpose of conversion.
   * @param sourceHasAlpha True if alpha channel is present in source color.
   * @param destHasAlpha True if alpha channel is present in destination color.
   */
  convertSampleColor(
    sourceColorSpace: ImageColorSpace,
    sourceColor: number[],
    destColorSpace: ImageColorSpace,
    colorConvertPurpose: ColorConvertPurpose,
    sourceHasAlpha?: boolean,
    destHasAlpha?: boolean
  ): number[];

  /**
   * Copy current selection to the clipboard.
   */
  copy(): void;

  /**
   * Cut current selection to the clipboard.
   */
  cut(): void;

  /**
   * Deletes an existing workspace.
   * @param workspaceName Workspace Name.
   */
  deleteWorkspace(workspaceName: string): boolean;

  /**
   * Play an action from the Actions Palette.
   * @param action The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
   * @param from The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
   * @param dialogs Are dialog boxes associated with the action to be presented?
   */
  doScript(action: string, from: string, dialogs?: boolean): void;

  /**
   * Dump the PGF portion of ai file to txt file.
   * @param file The AI file to be opened.
   * @param documentColorSpace Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
   * @param pGFFile Folder to save the output PGF file.
   */
  dumpPGFFile(
    file: File,
    documentColorSpace?: DocumentColorSpace,
    pGFFile?: File
  ): boolean;

  /**
   * Executes a menu command using the menu shortcut string.
   * @param menuCommandString Menu command shortcut.
   */
  executeMenuCommand(menuCommandString: string): void;

  /**
   * Returns the JSON Data required by CCX Welcome.
   * @param mode Mode for which the data is to be provided.
   */
  getCCXUserJSONData(mode?: string): string;

  /**
   * Retrieves a string containing the results of the last script to execute.
   */
  getExecutionOutput(): string;

  /**
   * Returns the JSON Data required by Hello.
   */
  getHelloJSONData(): string;

  /**
   * Returns an identity matrix.
   */
  getIdentityMatrix(): Matrix;

  /**
   * Returns if the specified filePath is open.
   * @param filePath The filePath to be checked.
   */
  getIsFileOpen(filePath: string): boolean;

  /**
   * Get detailed info from the specified PPD file.
   * @param name The model name of the PPD file.
   */
  getPPDFileInfo(name: string): PPDFileInfo;

  /**
   * Given a preset type, returns the full path to the application's default document profile for the type.
   * @param presetType The preset type.
   */
  getPresetFileOfType(presetType: DocumentPresetType): File;

  /**
   * Given a preset name, tries and retrieves the settings from the preset template.
   * @param preset The name of the preset.
   */
  getPresetSettings(preset: string): DocumentPreset;

  /**
   * Returns a rotation transformation matrix.
   * @param angle Angle of rotation (in degrees)
   */
  getRotationMatrix(angle?: number): Matrix;

  /**
   * Returns a scale transformation matrix.
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)
   */
  getScaleMatrix(scaleX?: number, scaleY?: number): Matrix;

  /**
   * Get the scriptable help group object that represents the search widget in the app bar.
   */
  getScriptableHelpGroup(): any;

  /**
   * Returns a translation matrix.
   * @param deltaX Horizontal transformation.
   * @param deltaY Vertical transformation.
   */
  getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix;

  /**
   * Retrieves a string representing the AAT version.
   */
  getVersionString(): string;

  /**
   * Invert a matrix.
   * @param matrix The matrix to invert.
   */
  invertMatrix(matrix: Matrix): Matrix;

  /**
   * Compares two matrices for equality.
   * @param matrix First transformation matrix to compare.
   * @param secondMatrix Second transformation matrix.
   */
  isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean;

  /**
   * Checks if fill is active or not.
   */
  isFillActive(): boolean;

  /**
   * Tests if a matrix is singular (cannot be inverted)
   * @param matrix The matrix to check.
   */
  isSingularMatrix(matrix: Matrix): boolean;

  /**
   * Checks if stroke is active or not.
   */
  isStrokeActive(): boolean;

  /**
   * Is In Touch Workspace.
   */
  isTouchWorkspace(): boolean;

  /**
   * Is user sharing the application usage data.
   */
  isUserSharingAppUsageData(): boolean;

  /**
   * Launch cep Extension given its ID.
   * @param extensionID Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.
   */
  launchExtension(extensionID: string): number;

  /**
   * Load an action into action palette.
   * @param actionFilePath The path on the system of the action file to be loaded.
   */
  loadAction(actionFilePath: File): void;

  /**
   * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.
   * @param fileSpec File spec for the color settings.
   */
  loadColorSettings(fileSpec: File): void;

  /**
   * Open the specified document file.
   * @param file The file to be opened.
   * @param documentColorSpace Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
   * @param options Options for opening a particular type of file.
   */
  open(
    file: File,
    documentColorSpace?: DocumentColorSpace,
    options?: any
  ): Document;

  /**
   * For Internal Use.
   * @param assetURL For Internal use.
   * @param thumbnailURL For Internal use.
   * @param assetType For internal use.
   * @param options For internal use.
   */
  openCloudLibraryAssetForEditing(
    assetURL: File,
    thumbnailURL: File,
    assetType: string,
    options?: any
  ): Document;

  /**
   * Paste clipboard into the current document.
   */
  paste(): void;

  /**
   * Quit the application.
   */
  quit(): void;

  /**
   * Redo the last transaction.
   */
  redo(): void;

  /**
   * Force Illustrator to redraw its window(s)
   */
  redraw(): void;

  /**
   * Generate Creative Suite ActionScript Wrappers in specified directory.
   * @param outputFolder Location for the output files.
   */
  reflectCSAW(outputFolder: File): void;

  /**
   * Resets the current workspace.
   */
  resetWorkspace(): boolean;

  /**
   * Runs API Tests from the TestAPI Plug-in.
   * @param testName Arguments for Running Tests - eg. Name of Test/Suite.
   */
  runAPITest(testName: string): void;

  /**
   * Saves a new workspace.
   * @param workspaceName Workspace Name.
   */
  saveWorkspace(workspaceName: string): boolean;

  /**
   * Sends the script message to the required plugin.
   * @param pluginName Plugin to which message needs to be sent.
   * @param messageSelector Functionality that is to be executed.
   * @param inputString Pass any data encoded in a string.
   */
  sendScriptMessage(
    pluginName: string,
    messageSelector: string,
    inputString: string
  ): string;

  /**
   * For Internal Use.
   * @param options Options for the PNG24 export.
   */
  setThumbnailOptionsForCloudLibrary(options: any): void;

  /**
   * Invokes application's color picker.
   * @param color The color to load in the color picker initially.
   */
  showColorPicker(color: Color): Color;

  /**
   * Get presets from the file.
   * @param fileSpec File spec to import from.
   */
  showPresets(fileSpec: File): string[];

  /**
   * Switches between workspaces.
   * @param workspaceName Workspace Name.
   */
  switchWorkspace(workspaceName: string): boolean;

  /**
   * Translate the placeholder text to regular text. A method to enter unicode points in hex values.
   * @param text The placeholder text to be translated.
   */
  translatePlaceholderText(text: string): string;

  /**
   * Returns a string translated from the key and source data passed in.
   * @param key The string to translate.
   * @param source The plugin name from the source of the key.
   */
  translateString(key: string, source: string): string;

  /**
   * Undo the last transaction.
   */
  undo(): void;

  /**
   * Unloads an action into action palette.
   * @param setName Name of the set to be unloaded.
   * @param actionName Name of the action to be unloaded.
   */
  unloadAction(setName: string, actionName: string): void;
}

/**
 * A document.
 */
declare class Document {
  /**
   * The XMP packet string associated with the document.
   */
  XMPString: string;

  /**
   * The active data set.
   */
  activeDataSet: DataSet;

  /**
   * The active layer.
   */
  activeLayer: Layer;

  /**
   * The document's current view.
   */
  activeView: View;

  /**
   * All artboards in the document.
   */
  artboards: Artboards;

  /**
   * All assets in the document.
   */
  assets: Assets;

  /**
   * The brushes defined in this document.
   */
  brushes: Brushes;

  /**
   * The list of character styles in this document.
   */
  characterStyles: CharacterStyles;

  /**
   * The name of the color profile of the document.
   */
  colorProfileName: string;

  /**
   * The compound path artwork in this collection.
   */
  compoundPathItems: CompoundPathItems;

  /**
   *
   */
  cropBox: Rect;

  /**
   *
   */
  cropStyle: CropOptions;

  /**
   * The data sets defined in this document.
   */
  dataSets: DataSets;

  /**
   * Default fill color.
   */
  defaultFillColor: Color;

  /**
   * Will art beneath a filled object be overprinted by default?
   */
  defaultFillOverprint: boolean;

  /**
   * Should a new path be filled?
   */
  defaultFilled: boolean;

  /**
   * Default type of line capping.
   */
  defaultStrokeCap: StrokeCap;

  /**
   * Default stroke color.
   */
  defaultStrokeColor: Color;

  /**
   * The default distance into the dash pattern at which the pattern should be started.
   */
  defaultStrokeDashOffset: number;

  /**
   * Default dash lengths (set to {} for a solid line)
   */
  defaultStrokeDashes: number[];

  /**
   * Default type of joints.
   */
  defaultStrokeJoin: StrokeJoin;

  /**
   * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.
   */
  defaultStrokeMiterLimit: number;

  /**
   * Will art beneath a stroked object be overprinted by default?
   */
  defaultStrokeOverprint: boolean;

  /**
   * Default width of stroke.
   */
  defaultStrokeWidth: number;

  /**
   * Should a new path be stroked?
   */
  defaultStroked: boolean;

  /**
   * The color space used for the document.
   */
  documentColorSpace: DocumentColorSpace;

  /**
   * The embedded art items in this layer.
   */
  embeddedItems: EmbeddedItems;

  /**
   * The file associated with the document.
   */
  fullName: File;

  /**
   * The bounds of the illustration excluding stroke width.
   */
  geometricBounds: [Number, Number, Number, Number];

  /**
   * The gradients available in this document.
   */
  gradients: Gradients;

  /**
   * The graph art items in this document.
   */
  graphItems: GraphItems;

  /**
   * The graphic styles defined in this document.
   */
  graphicStyles: ArtStyles;

  /**
   * The group items in this document.
   */
  groupItems: GroupItems;

  /**
   *
   */
  height: number;

  /**
   * The list of inks in this document.
   */
  inkList: Ink[];

  /**
   * The Kinsoku set.
   */
  kinsokuSet: string[];

  /**
   * The layers in this document.
   */
  layers: Layers;

  /**
   * The text frame items in this story.
   */
  legacyTextItems: LegacyTextItems;

  /**
   * The mesh art items in this document.
   */
  meshItems: MeshItems;

  /**
   * The Mojikumi set.
   */
  mojikumiSet: string[];

  /**
   * The document's name.
   */
  name: string;

  /**
   * The non-native art items in this document.
   */
  nonNativeItems: NonNativeItems;

  /**
   *
   */
  outputResolution: number;

  /**
   * All the artwork in this document.
   */
  pageItems: PageItems;

  /**
   *
   */
  pageOrigin: Point;

  /**
   * The list of paragraph styles in this document.
   */
  paragraphStyles: ParagraphStyles;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Path specification for the document.
   */
  path: File;

  /**
   * The path artwork in this document.
   */
  pathItems: PathItems;

  /**
   * The patterns available in this document.
   */
  patterns: Patterns;

  /**
   * The placed art items in this document.
   */
  placedItems: PlacedItems;

  /**
   * The plugin art items in this document.
   */
  pluginItems: PluginItems;

  /**
   *
   */
  printTiles: boolean;

  /**
   * The document raster effects settings.
   */
  rasterEffectSettings: RasterEffectOptions;

  /**
   * The raster art items in this document.
   */
  rasterItems: RasterItems;

  /**
   *
   */
  rulerOrigin: Point;

  /**
   *
   */
  rulerUnits: RulerUnits;

  /**
   * Has the document been saved?
   */
  saved: boolean;

  /**
   * The selection within the document.
   */
  selection: any;

  /**
   *
   */
  showPlacedImages: boolean;

  /**
   *
   */
  splitLongPaths: boolean;

  /**
   * The custom spot colors available in this document.
   */
  spots: Spots;

  /**
   * Is the file a stationery file?
   */
  stationery: boolean;

  /**
   * The story items in this document.
   */
  stories: Stories;

  /**
   * The Swatch Groups in this document.
   */
  swatchGroups: SwatchGroups;

  /**
   * The swatches in this document.
   */
  swatches: Swatches;

  /**
   * The symbol items in this document.
   */
  symbolItems: SymbolItems;

  /**
   * The symbols defined in this document.
   */
  symbols: Symbols;

  /**
   * The tags in this document.
   */
  tags: Tags;

  /**
   * The text frame items in this document.
   */
  textFrames: TextFrameItems;

  /**
   *
   */
  tileFullPages: boolean;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   *
   */
  useDefaultScreen: boolean;

  /**
   * The variables defined in this document.
   */
  variables: Variables;

  /**
   * The locked variables.
   */
  variablesLocked: boolean;

  /**
   * The views in this document.
   */
  views: Views;

  /**
   * The visible bounds of the illustration including stroke width.
   */
  visibleBounds: [Number, Number, Number, Number];

  /**
   *
   */
  width: number;

  /**
   * Activate the first window associated with the document.
   */
  activate(): void;

  /**
   * Close the specified document(s)
   * @param saving Specifies whether changes should be saved before closing.
   */
  close(saving?: SaveOptions): void;

  /**
   * Converts the coordinate system of a single point from one coordinate system to another.
   * @param coordinate The Coordinate to convert.
   * @param source The source coordinate system.
   * @param destination The destination coordinate system.
   */
  convertCoordinate(
    coordinate: Point,
    source: CoordinateSystem,
    destination: CoordinateSystem
  ): Point;

  /**
   * Export the specified document(s)
   * @param exportFile The file to export the document to.
   * @param exportFormat The file type to export the document as.
   * @param options Options for the file type specified.
   */
  exportFile(exportFile: File, exportFormat: ExportType, options?: any): void;

  /**
   * Export the specified document/asset(s)/artboard(s)
   * @param exportFolder The folder where the exported documents/assets/artboards are saved.
   * @param exportFormat The file type in which the document is exported.
   * @param options Options for the file type specified.
   * @param itemToExport What to export.
   * @param fileNamePrefix String prepended to each file name.
   */
  exportForScreens(
    exportFolder: File,
    exportFormat: ExportForScreensType,
    options?: any,
    itemToExport?: ExportForScreensItemToExport,
    fileNamePrefix?: string
  ): void;

  /**
   * Save all PDF presets to a file.
   * @param file File to export to.
   */
  exportPDFPreset(file: File): void;

  /**
   * Saves all perspective grid presets to a file.
   * @param file File to export to.
   */
  exportPerspectiveGridPreset(file: File): void;

  /**
   * Export the current print setting to the preset file.
   * @param file File to export to.
   */
  exportPrintPreset(file: File): void;

  /**
   * Export the selection as Ai file.
   * @param exportFile The file to export the selection to.
   */
  exportSelectionAsAi(exportFile: File): void;

  /**
   * Export the selection as PNG file.
   * @param exportFile The file to export the selection to.
   * @param options Options for the PNG24 export.
   */
  exportSelectionAsPNG(exportFile: File, options?: any): void;

  /**
   * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
   * @param file File spec to export to.
   */
  exportVariables(file: File): void;

  /**
   * Change the artboard to selected art bounds.
   * @param index The index of the artboard to update.
   */
  fitArtboardToSelectedArt(index?: number): boolean;

  /**
   * Gets the active plane of the active perspective grid of the document.
   */
  getPerspectiveActivePlane(): PerspectiveGridPlaneType;

  /**
   * Hides the current active perspective grid for the document, if there is visible perspective grid.
   */
  hidePerspectiveGrid(): boolean;

  /**
   * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
   * @param imageFile The file to which the captured image should be written.
   * @param clipBounds The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
   * @param options Describes the image capture options.
   */
  imageCapture(
    imageFile: File,
    clipBounds?: Rect,
    options?: ImageCaptureOptions
  ): void;

  /**
   * Load the character styles from the Illustrator file.
   * @param fileSpec File spec to import from.
   */
  importCharacterStyles(fileSpec: File): void;

  /**
   * Import the file into current Ai document.
   * @param importFile The file to import in the current document.
   * @param isLinked Is AssetLiveLinked.
   * @param libraryName For Internal Use.
   * @param itemName For Internal Use.
   * @param elementRef For Internal Use.
   * @param modifiedTime For Internal Use.
   * @param creationTime For Internal Use.
   * @param adobeStockId For Internal Use.
   * @param adobeStockLicense For Internal Use.
   * @param shouldLoadToPlaceGun Whether or not to load the imported file to placegun.
   */
  importFile(
    importFile: File,
    isLinked: boolean,
    libraryName?: string,
    itemName?: string,
    elementRef?: string,
    modifiedTime?: number,
    creationTime?: number,
    adobeStockId?: string,
    adobeStockLicense?: string,
    shouldLoadToPlaceGun?: boolean
  ): void;

  /**
   * Load all PDF presets from a file.
   * @param fileSpec File to import from.
   * @param replacingPreset Should existing editable presets be replaced?
   */
  importPDFPreset(fileSpec: File, replacingPreset?: boolean): void;

  /**
   * Load the paragraph styles from the Illustrator file.
   * @param fileSpec File spec to import from.
   */
  importParagraphStyles(fileSpec: File): void;

  /**
   * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
   * @param fileSpec File to import from.
   * @param perspectivePreset Name of perspective grid preset.
   */
  importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void;

  /**
   * Apply the named print preset from the file to the current print setting.
   * @param printPreset The name of a print preset to import.
   * @param fileSpec File to import from.
   */
  importPrintPreset(printPreset: string, fileSpec: File): void;

  /**
   * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
   * @param fileSpec File spec to import from.
   */
  importVariables(fileSpec: File): void;

  /**
   * Print the document.
   * @param options Print options.
   */
  print(options?: PrintOptions): void;

  /**
   * Process a gesture based on input points.
   * @param gesturePointsFile File Path containing points constituting the gesture.
   */
  processGesture(gesturePointsFile: string): void;

  /**
   * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
   * @param sourceArt The page item(s) to be rasterized.
   * @param clipBounds The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
   * @param options Describes the rasterization options.
   */
  rasterize(
    sourceArt: any,
    clipBounds?: Rect,
    options?: RasterizeOptions
  ): PageItem;

  /**
   * Rearrange Artboards in the document.
   * @param artboardLayout Layout of artboards for rearrangement.
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @param artboardSpacing Spacing between artboards.
   * @param artboardMoveArtwork Whether to move artwork with artboards.
   */
  rearrangeArtboards(
    artboardLayout?: DocumentArtboardLayout,
    artboardRowsOrCols?: number,
    artboardSpacing?: number,
    artboardMoveArtwork?: boolean
  ): boolean;

  /**
   * Save the document.
   */
  save(): void;

  /**
   * Save the document with specific save options.
   * @param saveIn The file to save the document in.
   * @param options Options for the file type specified.
   */
  saveAs(saveIn: File, options?: any): void;

  /**
   * Select art objects in active artboard.
   */
  selectObjectsOnActiveArtboard(): boolean;

  /**
   * Selects a predefined preset to define grid for the current document.
   * @param perspectivePreset Name of perspective grid preset.
   */
  selectPerspectivePreset(perspectivePreset: string): boolean;

  /**
   * Sets the active perspective plane for the active grid of the document.
   * @param perspectiveGridPlane Type of perspective grid plane.
   */
  setPerspectiveActivePlane(
    perspectiveGridPlane: PerspectiveGridPlaneType
  ): boolean;

  /**
   * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
   */
  showPerspectiveGrid(): boolean;

  /**
   * Capture the current document window to the target TIFF image file.
   * @param imageFile The TIFF file to which the captured image should be written.
   * @param windowSize The size to make the window before capture.
   */
  windowCapture(imageFile: File, windowSize: Point): void;
}

/**
 * A layer.
 */
declare class Layer {
  /**
   * The absolute drawing order of the layer.
   */
  absoluteZOrderPosition: number;

  /**
   * Is the artwork used to create a knockout.
   */
  artworkKnockout: KnockoutState;

  /**
   * The mode used when compositing an object.
   */
  blendingMode: BlendModes;

  /**
   * Color used when outlining artwork in this layer.
   */
  color: RGBColor;

  /**
   * The compound path artwork in this layer.
   */
  compoundPathItems: CompoundPathItems;

  /**
   * Is rendered as dimmed in this layer?
   */
  dimPlacedImages: boolean;

  /**
   * The graph art items in this layer.
   */
  graphItems: GraphItems;

  /**
   * The group items in this layer.
   */
  groupItems: GroupItems;

  /**
   * Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer.
   */
  hasSelectedArtwork: boolean;

  /**
   * Is the artwork isolated.
   */
  isIsolated: boolean;

  /**
   * Nested layers.
   */
  layers: Layers;

  /**
   * The text frame items in this story.
   */
  legacyTextItems: LegacyTextItems;

  /**
   * Is the layer editable?
   */
  locked: boolean;

  /**
   * The mesh art items in this layer.
   */
  meshItems: MeshItems;

  /**
   * The layer's name.
   */
  name: string;

  /**
   * The non-native art items in this layer.
   */
  nonNativeItems: NonNativeItems;

  /**
   * The layer's opacity (between 0.0 and 100.0)
   */
  opacity: number;

  /**
   * All the artwork in this layer.
   */
  pageItems: PageItems;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The path artwork in this layer.
   */
  pathItems: PathItems;

  /**
   * The placed art items in this layer.
   */
  placedItems: PlacedItems;

  /**
   * The plugin art items in this layer.
   */
  pluginItems: PluginItems;

  /**
   * Is the layer rendered in preview mode?
   */
  preview: boolean;

  /**
   * Is the layer printable?
   */
  printable: boolean;

  /**
   * The raster art items in this layer.
   */
  rasterItems: RasterItems;

  /**
   * Is the layer sliced (default: false)
   */
  sliced: boolean;

  /**
   * The symbol items in this layer.
   */
  symbolItems: SymbolItems;

  /**
   * The text frame items in this layer.
   */
  textFrames: TextFrameItems;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Is the layer visible?
   */
  visible: boolean;

  /**
   * The drawing order of the layer.
   */
  zOrderPosition: number;

  /**
   * Move the object.
   */
  move(relativeObject: object, insertionLocation: ElementPlacement): Layer;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;

  /**
   * Arranges the layer relative to other layers.
   * @param zOrderCmd How to arrange the layer.
   */
  zOrder(zOrderCmd: ZOrderMethod): void;
}

/**
 * A view.
 */
declare class View {
  /**
   * The bounding rectangle of this view.
   */
  bounds: Rect;

  /**
   * The center point of this view.
   */
  centerPoint: Point;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The mode of display.
   */
  screenMode: ScreenMode;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The zoom factor of this view.
   */
  zoom: number;
}

/**
 * A gradient.
 */
declare class Gradient {
  /**
   * The stops in this gradient.
   */
  gradientStops: GradientStops;

  /**
   * The gradient's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The gradient type.
   */
  type: GradientType;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A gradient stop.
 */
declare class GradientStop {
  /**
   * The color linked to this gradient stop.
   */
  color: Color;

  /**
   * Midpoint key value in percent.
   */
  midPoint: number;

  /**
   * The opacity (between 0.0 and 100.0) value for the gradient stop.
   */
  opacity: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Location of color in the blend (in percent)
   */
  rampPoint: number;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * Preferences for Illustrator.
 */
declare class Preferences {
  /**
   * Options to use when opening or placing a AutoCAD file.
   */
  AutoCADFileOptions: OpenOptionsAutoCAD;

  /**
   * Options to use when opening or placing a PDF file.
   */
  PDFFileOptions: OpenOptionsPDF;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Options to use when opening or placing a Photoshop file.
   */
  photoshopFileOptions: OpenOptionsPhotoshop;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Retrieve the value of the application preference key as boolean.
   * @param key The preference key.
   */
  getBooleanPreference(key: string): boolean;

  /**
   * Retrieve the value of the application preference key as integer.
   * @param key The preference key.
   */
  getIntegerPreference(key: string): number;

  /**
   * Retrieve the value of the application preference key as real number.
   * @param key The preference key.
   */
  getRealPreference(key: string): number;

  /**
   * Retrieve the value of the application preference key as string type.
   * @param key The preference key.
   */
  getStringPreference(key: string): string;

  /**
   * Checks whether the application preference key exists.
   * @param key The preference key.
   */
  preferenceExists(key: string): boolean;

  /**
   * Delete the application preference key.
   * @param key The preference key.
   */
  removePreference(key: string): void;

  /**
   * Set the value of the application preference key as boolean.
   * @param key The preference key.
   * @param value The boolean value of the preference key.
   */
  setBooleanPreference(key: string, value: boolean): void;

  /**
   * Set the value of the application preference key as integer.
   * @param key The preference key.
   * @param value The boolean value of the preference key.
   */
  setIntegerPreference(key: string, value: number): void;

  /**
   * Set the value of the application preference key as real number.
   * @param key The preference key.
   * @param value The real value of the preference key.
   */
  setRealPreference(key: string, value: number): void;

  /**
   * Set the value of the application preference key as string type.
   * @param key The preference key.
   * @param value The string value of the preference key.
   */
  setStringPreference(key: string, value: string): void;
}

/**
 * A custom color.
 */
declare class Spot {
  /**
   *
   */
  color: Color;

  /**
   * Type of the custom color.
   */
  colorType: ColorModel;

  /**
   * The custom color's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot.
   */
  spotKind: SpotColorKind;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Gets the internal color of a spot.
   */
  getInternalColor(): number[];

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * Dynamic object used to create data-driven graphics.
 */
declare class Variable {
  /**
   * The variable's type.
   */
  kind: VariableKind;

  /**
   * The name of this variable.
   */
  name: string;

  /**
   * All the artwork in this document.
   */
  pageItems: PageItems;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A set of variables and their associated dynamic data which will be used for dynamic publishing.
 */
declare class DataSet {
  /**
   * The name of this dataset.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Displays the dynamic data that has been captured in the dataset.
   */
  display(): void;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;

  /**
   * Re-apply the dynamic data of the active dataset to the artboard.
   */
  update(): void;
}

/**
 * A color swatch.
 */
declare class Swatch {
  /**
   * The color information of the swatch.
   */
  color: Color;

  /**
   * The swatch's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A Swatch group.
 */
declare class SwatchGroup {
  /**
   * Name of the swatch group.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Add a spot swatch to the group.
   * @param spot The spot swatch to be added to the group.
   */
  addSpot(spot: Spot): void;

  /**
   * Add a swatch to the group.
   * @param swatch The swatch to be added to the group.
   */
  addSwatch(swatch: Swatch): void;

  /**
   * Get all swatches in the swatch group.
   */
  getAllSwatches(): Swatch[];

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A pattern.
 */
declare class Pattern {
  /**
   * The pattern's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A symbol.
 */
declare class Symbol {
  /**
   * The symbol's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Duplicate this object.
   */
  duplicate(
    relativeObject: object,
    insertionLocation: ElementPlacement
  ): Symbol;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A brush.
 */
declare class Brush {
  /**
   * The brush's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Apply a brush or art style to object(s)
   * @param artItem The page item(s) to apply to.
   */
  applyTo(artItem: any): void;
}

/**
 * An art style.
 */
declare class ArtStyle {
  /**
   * The art style's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Apply a brush or art style to object(s)
   * @param artItem The page item(s) to apply to.
   */
  applyTo(artItem: any): void;

  /**
   * Merge an art style to object(s) current style(s)
   * @param artItem The page item(s) to merge to.
   */
  mergeTo(artItem: any): void;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * An installed font.
 */
declare class TextFont {
  /**
   * The font's Axis Vector.
   */
  axisVector: number[];

  /**
   * The font's family name.
   */
  family: string;

  /**
   * The font's full name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The font's style name.
   */
  style: string;

  /**
   * The class name of the object.
   */
  typename: string;
}

/**
 * A page item object.
 */
declare class PageItem {
  /**
   * The value of the Adobe URL tag assigned to this artwork item.
   */
  URL: string;

  /**
   * The absolute drawing order of the layer.
   */
  absoluteZOrderPosition: number;

  /**
   * Is the artwork used to create a knockout.
   */
  artworkKnockout: KnockoutState;

  /**
   * The mode used when compositing an object.
   */
  blendingMode: BlendModes;

  /**
   * The bounds of the artwork including stroke width and controls.
   */
  controlBounds: [Number, Number, Number, Number];

  /**
   * Can the art item be modified.
   */
  editable: boolean;

  /**
   * The bounds of the artwork excluding stroke width.
   */
  geometricBounds: [Number, Number, Number, Number];

  /**
   * The height of the art item.
   */
  height: number;

  /**
   * Is this artwork item hidden?
   */
  hidden: boolean;

  /**
   * Is the artwork isolated.
   */
  isIsolated: boolean;

  /**
   * The layer to which this artwork belongs.
   */
  layer: Layer;

  /**
   * The left position of the art item.
   */
  left: number;

  /**
   * Is this artwork item locked?
   */
  locked: boolean;

  /**
   * The item's name.
   */
  name: string;

  /**
   * The note assigned to this artwork item.
   */
  note: string;

  /**
   * The object's opacity (between 0.0 and 100.0)
   */
  opacity: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Is this artwork item aligned to Pixel Grid?
   */
  pixelAligned: boolean;

  /**
   * The position of the top left corner of the art item.
   */
  position: Point;

  /**
   * Is this artwork item selected?
   */
  selected: boolean;

  /**
   * Is the art item sliced (default: false)
   */
  sliced: boolean;

  /**
   * The collection of tags associated with this page item.
   */
  tags: Tags;

  /**
   * The top position of the art item.
   */
  top: number;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The visibility variable bound to this page item.
   */
  visibilityVariable: any;

  /**
   * The visible bounds of the artwork including stroke width.
   */
  visibleBounds: [Number, Number, Number, Number];

  /**
   * The width of the art item.
   */
  width: number;

  /**
   * Should the text frame object be wrapped inside this object?
   */
  wrapInside: boolean;

  /**
   * Use this offset when wrapping text around this object.
   */
  wrapOffset: number;

  /**
   * Wrap text frame objects around this object (text frame must be above the object)
   */
  wrapped: boolean;

  /**
   * The drawing order of the art within it's group or layer.
   */
  zOrderPosition: number;

  /**
   * Apply effect to selected artItem.
   */
  applyEffect(liveEffectXML: string): void;

  /**
   * Place art object(s)in perspective grid at spedified perspective plane and coordinate.
   * @param positionX Position towards X direction of specified or active perspective grid plane.
   * @param positionY Position towards Y direction of specified or active perspective grid plane.
   * @param perspectiveGridPlane Type of perspective grid plane.
   */
  bringInPerspective(
    positionX: number,
    positionY: number,
    perspectiveGridPlane: PerspectiveGridPlaneType
  ): void;

  /**
   * Duplicate this object.
   */
  duplicate(
    relativeObject: object,
    insertionLocation: ElementPlacement
  ): PageItem;

  /**
   * Move the object.
   */
  move(relativeObject: object, insertionLocation: ElementPlacement): PageItem;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;

  /**
   * Scale art object(s)
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)
   * @param changePositions Are art object positions and orientations effected?
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?
   * @param changeLineWidths The amount line widths are to be scaled (expressed as a percentage)
   * @param scaleAbout The point on the art item's bounding box to which the scale is applied.
   */
  resize(
    scaleX: number,
    scaleY: number,
    changePositions?: boolean,
    changeFillPatterns?: boolean,
    changeFillGradients?: boolean,
    changeStrokePattern?: boolean,
    changeLineWidths?: number,
    scaleAbout?: Transformation
  ): void;

  /**
   * Rotate art object(s)
   * @param angle Angle of rotation (in degrees). Rotation is performed counter-clock wise.
   * @param changePositions Are art object positions and orientations effected?
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?
   * @param rotateAbout The point on the art item's bounding box to which the rotation is applied.
   */
  rotate(
    angle: number,
    changePositions?: boolean,
    changeFillPatterns?: boolean,
    changeFillGradients?: boolean,
    changeStrokePattern?: boolean,
    rotateAbout?: Transformation
  ): void;

  /**
   * Sends the script message to the required plugin.
   * @param pluginName Plugin to which message needs to be sent.
   * @param messageSelector Functionality that is to be executed.
   * @param inputString Pass any data encoded in a string.
   */
  sendScriptMessage(
    pluginName: string,
    messageSelector: string,
    inputString: string
  ): string;

  /**
   * Transform art object(s) using a transformation matrix.
   * @param transformationMatrix The transformation matrix to be applied to the objects.
   * @param changePositions Are art object positions and orientations effected?
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?
   * @param changeLineWidths The amount line widths are to be scaled (expressed as a percentage)
   * @param transformAbout The point on the art item's bounding box to which scale and rotation operations apply.
   */
  transform(
    transformationMatrix: Matrix,
    changePositions?: boolean,
    changeFillPatterns?: boolean,
    changeFillGradients?: boolean,
    changeStrokePattern?: boolean,
    changeLineWidths?: number,
    transformAbout?: Transformation
  ): void;

  /**
   * Reposition art object(s)
   * @param deltaX Horizontal transformation.
   * @param deltaY Vertical transformation.
   * @param transformObjects Are art object positions and orientations affected?
   * @param transformFillPatterns Are the fill patterns assigned to paths to be transformed?
   * @param transformFillGradients Are the fill gradients assigned to paths to be transformed?
   * @param transformStrokePattern Are the stroke patterns assigned to paths to be transformed?
   */
  translate(
    deltaX?: number,
    deltaY?: number,
    transformObjects?: boolean,
    transformFillPatterns?: boolean,
    transformFillGradients?: boolean,
    transformStrokePattern?: boolean
  ): void;

  /**
   * Arranges the art relative to other art in the group or layer.
   * @param zOrderCmd How to arrange the art.
   */
  zOrder(zOrderCmd: ZOrderMethod): void;
}

/**
 * Compound path artwork item.
 */
declare class CompoundPathItem extends PageItem {
  /**
   * The path artwork in this compound path.
   */
  pathItems: PathItems;
}

/**
 * A tag associated with a piece of artwork.
 */
declare class Tag {
  /**
   * The tag's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The data stored in this tag.
   */
  value: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * An artwork path item.
 */
declare class PathItem extends PageItem {
  /**
   * The area of this path in square points.
   */
  area: number;

  /**
   * Should this be used as a clipping path?
   */
  clipping: boolean;

  /**
   * Is this path closed?
   */
  closed: boolean;

  /**
   * Should the even-odd rule be used to determine insideness?
   */
  evenodd: boolean;

  /**
   * Fill color.
   */
  fillColor: Color;

  /**
   * Will art beneath a filled object be overprinted?
   */
  fillOverprint: boolean;

  /**
   * Should the path be filled?
   */
  filled: boolean;

  /**
   * Is this path a guide object?
   */
  guides: boolean;

  /**
   * The length of this path in points.
   */
  length: number;

  /**
   *
   */
  pathPoints: PathPoints;

  /**
   * The polarity the path.
   */
  polarity: PolarityValues;

  /**
   * The resolution of the path.
   */
  resolution: number;

  /**
   * All the selected points in the path.
   */
  selectedPathPoints: any[];

  /**
   * Type of line capping.
   */
  strokeCap: StrokeCap;

  /**
   * Stroke color.
   */
  strokeColor: Color;

  /**
   * The default distance into the dash pattern at which the pattern should be started.
   */
  strokeDashOffset: number;

  /**
   * Dash lengths (set to {} for a solid line)
   */
  strokeDashes: number[];

  /**
   * Type of joints.
   */
  strokeJoin: StrokeJoin;

  /**
   * Whether a join is mitered (pointed) or beveled (squared-off)
   */
  strokeMiterLimit: number;

  /**
   * Will art beneath a stroked object be overprinted?
   */
  strokeOverprint: boolean;

  /**
   * Width of stroke.
   */
  strokeWidth: number;

  /**
   * Should the path be stroked?
   */
  stroked: boolean;

  /**
   * Set the path using the provided array of path point (x, y) coordinate pairs.
   * @param pathPoints Array of (x, y) coordinate pairs for the path points.
   */
  setEntirePath(pathPoints: any[]): void;
}

/**
 * A point on a path.
 */
declare class PathPoint {
  /**
   * The position (coordinates) of the anchor point.
   */
  anchor: Point;

  /**
   * Location of the left direction point (in position)
   */
  leftDirection: Point;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The type of point: smooth/corner.
   */
  pointType: PointType;

  /**
   * Location of the right direction point (out position)
   */
  rightDirection: Point;

  /**
   * The path point selected state.
   */
  selected: PathPointSelection;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * Raster artwork item.
 */
declare class RasterItem extends PageItem {
  /**
   * The number of bits per channel.
   */
  bitsPerChannel: number;

  /**
   * Dimensions of raster art object regardless of transformations.
   */
  boundingBox: Rect;

  /**
   * The number of image channels.
   */
  channels: number;

  /**
   * List of colorant names.
   */
  colorants: string[];

  /**
   * Is the raster art a colorized grayscale image?
   */
  colorizedGrayscale: boolean;

  /**
   * The content variable bound to this raster art object.
   */
  contentVariable: any;

  /**
   * Is the raster art embedded within the illustration?
   */
  embedded: boolean;

  /**
   * The file containing the raster artwork.
   */
  file: File;

  /**
   * The color space of the raster image.
   */
  imageColorSpace: ImageColorSpace;

  /**
   * The transformation matrix of the raster art object.
   */
  matrix: Matrix;

  /**
   * Is the raster art overprinting?
   */
  overprint: boolean;

  /**
   * Status of the linked image.
   */
  status: RasterLinkState;

  /**
   * Is the raster art transparent?
   */
  transparent: boolean;

  /**
   * Colorize the RasterItem with a CMYK or RGB Color.
   * @param rasterColor The color to use for coloring the TIFF image.
   */
  colorize(rasterColor: Color): void;

  /**
   * Trace this raster object using default options. Reorders this raster to the source art.
   */
  trace(): PluginItem;
}

/**
 * Placed artwork item.
 */
declare class PlacedItem extends PageItem {
  /**
   * Dimensions of placed art object, regardless of transformations.
   */
  boundingBox: Rect;

  /**
   * The content variable bound to this placed art object.
   */
  contentVariable: any;

  /**
   * The file containing the placed artwork.
   */
  file: File;

  /**
   * The transformation matrix of the placed art object.
   */
  matrix: Matrix;

  /**
   * Embed the placed art within the illustration.
   */
  embed(): void;

  /**
   * Relink the placed art with supplied art from file.
   * @param fileSpec File spec to relink from.
   */
  relink(fileSpec: File): void;

  /**
   * Trace this raster object using default options. Reorders this placed to the source art.
   */
  trace(): PluginItem;
}

/**
 * Embedded artwork item.
 */
declare class EmbedItem extends PageItem {
  /**
   * The file containing the placed artwork.
   */
  file: File;
}

/**
 * Graph artwork item.
 */
declare class GraphItem extends PageItem {
  /**
   * The content variable bound to this graph.
   */
  contentVariable: any;
}

/**
 * Non-native artwork item.
 */
declare class NonNativeItem extends PageItem {}

/**
 * Mesh artwork item.
 */
declare class MeshItem extends PageItem {}

/**
 * Plugin artwork item.
 */
declare class PluginItem extends PageItem {
  /**
   * Is the plugin group a tracing?
   */
  isTracing: boolean;

  /**
   * The tracing object associated with this plugin item.
   */
  tracing: TracingObject;
}

/**
 * An artwork group item.
 */
declare class GroupItem extends PageItem {
  /**
   * Are the group elements clipped to the clipping path?
   */
  clipped: boolean;

  /**
   * The compound path artwork in this group.
   */
  compoundPathItems: CompoundPathItems;

  /**
   * The graph art items in this group.
   */
  graphItems: GraphItems;

  /**
   * The group items in this group.
   */
  groupItems: GroupItems;

  /**
   * The text frame items in this story.
   */
  legacyTextItems: LegacyTextItems;

  /**
   * The mesh art items in this group.
   */
  meshItems: MeshItems;

  /**
   * The non-native art items in this group.
   */
  nonNativeItems: NonNativeItems;

  /**
   * All the artwork in this group.
   */
  pageItems: PageItems;

  /**
   * The path artwork in this group.
   */
  pathItems: PathItems;

  /**
   * The placed art items in this group.
   */
  placedItems: PlacedItems;

  /**
   * The plugin art items in this group.
   */
  pluginItems: PluginItems;

  /**
   * The raster art items in this group.
   */
  rasterItems: RasterItems;

  /**
   * The symbol items in this group.
   */
  symbolItems: SymbolItems;

  /**
   * The text frame items in this group.
   */
  textFrames: TextFrameItems;
}

/**
 * An instance of a Symbol.
 */
declare class SymbolItem extends PageItem {
  /**
   * The symbol that was used to create this symbol item.
   */
  symbol: Symbol;

  /**
   * Break link to the symbol.
   */
  breakLink(): void;
}

/**
 * A text path item.
 */
declare class TextPath {
  /**
   * The area of this path in square points.
   */
  area: number;

  /**
   * The mode used when compositing an object.
   */
  blendingMode: BlendModes;

  /**
   * Should this be used as a clipping path?
   */
  clipping: boolean;

  /**
   * Is this path closed?
   */
  closed: boolean;

  /**
   * Can the text path be modified.
   */
  editable: boolean;

  /**
   * Should the even-odd rule be used to determine insideness?
   */
  evenodd: boolean;

  /**
   * Fill color.
   */
  fillColor: Color;

  /**
   * Will art beneath a filled object be overprinted?
   */
  fillOverprint: boolean;

  /**
   * Should the path be filled?
   */
  filled: boolean;

  /**
   * Is this path a guide object?
   */
  guides: boolean;

  /**
   * The height of the text path.
   */
  height: number;

  /**
   * The left position of the text path.
   */
  left: number;

  /**
   * Note assigned to the path.
   */
  note: string;

  /**
   * The object's opacity (between 0.0 and 100.0)
   */
  opacity: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   *
   */
  pathPoints: PathPoints;

  /**
   * The polarity the path.
   */
  polarity: PolarityValues;

  /**
   * The position of the top left corner of the text path.
   */
  position: Point;

  /**
   * The resolution of the path.
   */
  resolution: number;

  /**
   * All the selected points in the path.
   */
  selectedPathPoints: any[];

  /**
   * Type of line capping.
   */
  strokeCap: StrokeCap;

  /**
   * Stroke color.
   */
  strokeColor: Color;

  /**
   * The default distance into the dash pattern at which the pattern should be started.
   */
  strokeDashOffset: number;

  /**
   * Dash lengths (set to {} for a solid line)
   */
  strokeDashes: number[];

  /**
   * Type of joints.
   */
  strokeJoin: StrokeJoin;

  /**
   * Whether a join is mitered (pointed) or beveled (squared-off)
   */
  strokeMiterLimit: number;

  /**
   * Will art beneath a stroked object be overprinted?
   */
  strokeOverprint: boolean;

  /**
   * Width of stroke.
   */
  strokeWidth: number;

  /**
   * Should the path be stroked?
   */
  stroked: boolean;

  /**
   * The top position of the text path.
   */
  top: number;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The width of the text path.
   */
  width: number;

  /**
   * Set the path using the provided array of anchor points.
   * @param pathPoints Array of anchor values for the path points.
   */
  setEntirePath(pathPoints: any[]): void;
}

/**
 * A contiguous block of text.
 */
declare class Story {
  /**
   * All the characters in this text range.
   */
  characters: Characters;

  /**
   * All the insertion points in this text range.
   */
  insertionPoints: InsertionPoints;

  /**
   * The number of characters in the story.
   */
  length: number;

  /**
   * All the lines in this text range.
   */
  lines: Lines;

  /**
   * All the paragraphs in this text range.
   */
  paragraphs: Paragraphs;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The text frame items in this story.
   */
  textFrames: TextFrameItems;

  /**
   * The text range of the story.
   */
  textRange: TextRange;

  /**
   * All the text in this text range.
   */
  textRanges: TextRanges;

  /**
   * The selected text (ranges) in the story.
   */
  textSelection: TextRange[];

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * All the words in this text range.
   */
  words: Words;
}

/**
 * Text frame item.
 */
declare class TextFrameItem extends PageItem {
  /**
   * The position of the anchor point (start of base line for point text)
   */
  anchor: Point;

  /**
   * The type of a text anti-aliasing on text frame item.
   */
  antialias: TextAntialias;

  /**
   * All the characters in this text range.
   */
  characters: Characters;

  /**
   * The column count in the text frame (area text only)
   */
  columnCount: number;

  /**
   * The column gutter in the text frame (area text only)
   */
  columnGutter: number;

  /**
   * The content variable bound to this text art item.
   */
  contentVariable: any;

  /**
   * The text contents of this text frame.
   */
  contents: string;

  /**
   * The end position of text along a path, as a value relative to the path's segments (path text only)
   */
  endTValue: number;

  /**
   * The first baseline offset type for text frame item (for Area Text only)
   */
  firstBaseline: FirstBaselineType;

  /**
   * The first baseline offset minimum value for text frame item (for Area Text only)
   */
  firstBaselineMin: number;

  /**
   * Flow text between linked frame horizontally first. (area text only)
   */
  flowLinksHorizontally: boolean;

  /**
   * All the insertion points in this text range.
   */
  insertionPoints: InsertionPoints;

  /**
   * The type of a text frame item.
   */
  kind: TextType;

  /**
   * All the lines in this text range.
   */
  lines: Lines;

  /**
   * The transformation matrix of the text frame object.
   */
  matrix: Matrix;

  /**
   * The linked text frame following this one.
   */
  nextFrame: TextFrameItem;

  /**
   * Is the optical alignment active?
   */
  opticalAlignment: boolean;

  /**
   * The orientation of the text in the frame.
   */
  orientation: TextOrientation;

  /**
   * All the paragraphs in this text range.
   */
  paragraphs: Paragraphs;

  /**
   * The linked text frame preceding this one.
   */
  previousFrame: TextFrameItem;

  /**
   * The row count in the text frame (area text only)
   */
  rowCount: number;

  /**
   * The row gutter in the text frame (area text only)
   */
  rowGutter: number;

  /**
   * The amount of spacing (path text only)
   */
  spacing: number;

  /**
   * The start position of text along a path, as a value relative to the path's segments (path text only)
   */
  startTValue: number;

  /**
   * The story of the text frame.
   */
  story: Story;

  /**
   * The path for the text frame (area and path text)
   */
  textPath: TextPath;

  /**
   * The text range of the text frame.
   */
  textRange: TextRange;

  /**
   * All the text in this text range.
   */
  textRanges: TextRanges;

  /**
   * The selected text (ranges) in the story.
   */
  textSelection: TextRange[];

  /**
   * All the words in this text range.
   */
  words: Words;

  /**
   * Convert Area Type Text Object To Point Type Object.
   */
  convertAreaObjectToPointObject(): TextFrameItem;

  /**
   * Convert Point Type Text Object To Area Type Object.
   */
  convertPointObjectToAreaObject(): TextFrameItem;

  /**
   * Convert text item to path items.
   */
  createOutline(): GroupItem;

  /**
   * Generates the thumbnail with the properties of first character in the text frame.
   * @param textString The text string which is to be used in the thumbnail generation.
   * @param fontSize The size in points of the text string.
   * @param textColor The color of the text string.
   * @param destinationPath The location at which the thumbnail is to be stored.
   */
  generateThumbnailWithTextFrameProperties(
    textString: string,
    fontSize: number,
    textColor: Color,
    destinationPath: File
  ): void;
}

/**
 * Unconverted legacy text items from documents in pre-version 11 formats.
 */
declare class LegacyTextItem extends PageItem {
  /**
   * Has the legacy text item been updated to a native text frame item?
   */
  converted: boolean;

  /**
   * Create a native text frame from a legacy text item. The original legacy text item is deleted.
   */
  convertToNative(): GroupItem;
}

/**
 * A range of characters from a text item.
 */
declare class TextRange {
  /**
   * The character properties for the text range.
   */
  characterAttributes: CharacterAttributes;

  /**
   * Offset of the first character of the range from the beginning of the story, in characters.
   */
  characterOffset: number;

  /**
   * List of referenced character styles in the text range.
   */
  characterStyles: CharacterStyles;

  /**
   * All the characters in this text range.
   */
  characters: Characters;

  /**
   * The text string.
   */
  contents: string;

  /**
   * End index of the text range.
   */
  end: number;

  /**
   * All the insertion points in this text range.
   */
  insertionPoints: InsertionPoints;

  /**
   * Controls the spacing between two characters (in milli-ems)
   */
  kerning: number;

  /**
   * Length of text range.
   */
  length: number;

  /**
   * All the lines in this text range.
   */
  lines: Lines;

  /**
   * The paragraph properties for the text range.
   */
  paragraphAttributes: ParagraphAttributes;

  /**
   * List of referenced paragraph styles in the text range.
   */
  paragraphStyles: ParagraphStyles;

  /**
   * All the paragraphs in this text range.
   */
  paragraphs: Paragraphs;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Start index of the text range.
   */
  start: number;

  /**
   * The story of the text range.
   */
  story: Story;

  /**
   * All the text in this text range.
   */
  textRanges: TextRanges;

  /**
   * The selected text (ranges) in the text range.
   */
  textSelection: TextRange[];

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * All the words in this text range.
   */
  words: Words;

  /**
   * Change the capitalization of text.
   * @param type The type of case.
   */
  changeCaseTo(type: CaseChangeType): void;

  /**
   * Deselect the text range.
   */
  deSelect(): void;

  /**
   * Duplicate this object.
   */
  duplicate(
    relativeObject: object,
    insertionLocation: ElementPlacement
  ): TextRange;

  /**
   * Get the length of the first paragraph.
   */
  getParagraphLength(): number;

  /**
   * Get the length of the first text run.
   */
  getTextRunLength(): number;

  /**
   * Move the object.
   */
  move(relativeObject: object, insertionLocation: ElementPlacement): TextRange;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;

  /**
   * Select the text range.
   * @param addToDocument Whether to add the text range to the document text selection.
   */
  select(addToDocument?: boolean): void;
}

/**
 * A location between characters, used to insert new text objects.
 */
declare class InsertionPoint {
  /**
   * All the characters in this text range.
   */
  characters: Characters;

  /**
   * All the lines in this text range.
   */
  lines: Lines;

  /**
   * All the paragraphs in this text range.
   */
  paragraphs: Paragraphs;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The story of the text range.
   */
  story: Story;

  /**
   * All the text in this text range.
   */
  textRanges: TextRanges;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * All the words in this text range.
   */
  words: Words;
}

/**
 * A named style that remembers character attributes.
 */
declare class CharacterStyle {
  /**
   * The character properties for the text range.
   */
  characterAttributes: CharacterAttributes;

  /**
   * The character style's name.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Adds an element.
   */
  add(): CharacterStyle;

  /**
   * Apply the character style to text object(s)
   * @param textItem The text object(s) to apply the style to.
   * @param clearingOverrides Whether to clear any text attributes before apply the style.
   */
  applyTo(textItem: any, clearingOverrides?: boolean): void;

  /**
   * Remove all the attributes from this character style.
   */
  clear(): void;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * A named style that remembers paragraph attributes.
 */
declare class ParagraphStyle {
  /**
   * The character properties for the text range.
   */
  characterAttributes: CharacterAttributes;

  /**
   * The paragraph style's name.
   */
  name: string;

  /**
   * The paragraph properties for the text range.
   */
  paragraphAttributes: ParagraphAttributes;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Adds an element.
   */
  add(): ParagraphStyle;

  /**
   * Apply the paragraph style to text object(s)
   * @param textItem The text object(s) to apply the style to.
   * @param clearingOverrides Whether to clear any text attributes before apply the style.
   */
  applyTo(textItem: any, clearingOverrides?: boolean): void;

  /**
   * Remove all the attributes from this paragraph style.
   */
  clear(): void;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * Properties of a character.
 */
declare class CharacterAttributes {
  /**
   * The percentage of space reduction around a Japanese character (100 = 100%)
   */
  Tsume: number;

  /**
   * The em amount of left aki.
   */
  akiLeft: number;

  /**
   * The em amount of right aki amount.
   */
  akiRight: number;

  /**
   * The character alignment type.
   */
  alignment: StyleRunAlignmentType;

  /**
   * The alternate glyphs form.
   */
  alternateGlyphs: AlternateGlyphsForm;

  /**
   * Whether to use automatic leading.
   */
  autoLeading: boolean;

  /**
   * The Japanese text baseline direction.
   */
  baselineDirection: BaselineDirectionType;

  /**
   * The baseline position of text.
   */
  baselinePosition: FontBaselineOption;

  /**
   * The amount of shift (in points) of the text baseline.
   */
  baselineShift: number;

  /**
   * The case of text.
   */
  capitalization: FontCapsOption;

  /**
   * Whether the OpenType connection forms should be used.
   */
  connectionForms: boolean;

  /**
   * Whether the contextual ligature should be used.
   */
  contextualLigature: boolean;

  /**
   * Diacritics positioning attribute.
   */
  diacVPos: DiacVPosType;

  /**
   * Diacritics x offset attribute.
   */
  diacXOffset: number;

  /**
   * Diacritics y offset attribute.
   */
  diacYOffset: number;

  /**
   * Digit set attribute.
   */
  digitSet: DigitSetType;

  /**
   * Direction override attribute.
   */
  dirOverride: DirOverrideType;

  /**
   * Whether the discretionary ligature should be used.
   */
  discretionaryLigature: boolean;

  /**
   * Which figure style to use in OpenType font.
   */
  figureStyle: FigureStyleType;

  /**
   * The color of the text fill.
   */
  fillColor: Color;

  /**
   * Whether the OpenType fractions should be used.
   */
  fractions: boolean;

  /**
   * Character horizontal scaling factor expressed as a percentage (100 = 100%)
   */
  horizontalScale: number;

  /**
   * Does the Japanese OpenType support italics?
   */
  italics: boolean;

  /**
   * Justification alternates attribute.
   */
  justificationAlternates: boolean;

  /**
   * Does the Japanese OpenType support kana?
   */
  kana: boolean;

  /**
   * Kashidas attribute.
   */
  kashidas: KashidasType;

  /**
   * The automatic kerning method to use.
   */
  kerningMethod: AutoKernType;

  /**
   * The language of text.
   */
  language: LanguageType;

  /**
   * The amount of space between two lines of text (in points)
   */
  leading: number;

  /**
   * Whether the ligature should be used.
   */
  ligature: boolean;

  /**
   * Whether line breaks are allowed.
   */
  noBreak: boolean;

  /**
   * The OpenType baseline position.
   */
  openTypePosition: FontOpenTypePositionOption;

  /**
   * Whether the OpenType ordinals should be used.
   */
  ordinals: boolean;

  /**
   * Whether the OpenType ornaments should be used.
   */
  ornaments: boolean;

  /**
   * Whether to overprint the fill of the text.
   */
  overprintFill: boolean;

  /**
   * Whether to overprint the stroke of the text.
   */
  overprintStroke: boolean;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Does the Japanese OpenType support proportional font?
   */
  proportionalMetrics: boolean;

  /**
   * The character rotation angle (in degrees)
   */
  rotation: number;

  /**
   * Font size in points.
   */
  size: number;

  /**
   * Whether to draw a strike through line over the text.
   */
  strikeThrough: boolean;

  /**
   * The color of the text stroke.
   */
  strokeColor: Color;

  /**
   * Line width of stroke.
   */
  strokeWeight: number;

  /**
   * Whether the OpenType stylistic alternates should be used.
   */
  stylisticAlternates: boolean;

  /**
   * Stylistic sets attribute.
   */
  stylisticSets: number;

  /**
   * Whether the OpenType swash should be used.
   */
  swash: boolean;

  /**
   * The Tate-Chu-Yoko horizontal adjustment in points.
   */
  tateChuYokoHorizontal: number;

  /**
   * The Tate-Chu-Yoko vertical adjustment in points.
   */
  tateChuYokoVertical: number;

  /**
   * The text font.
   */
  textFont: TextFont;

  /**
   * Whether the OpenType titling alternates should be used.
   */
  titling: boolean;

  /**
   * The tracking or range kerning amount in thousands of an em.
   */
  tracking: number;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Whether to underline the text.
   */
  underline: boolean;

  /**
   * Character vertical scaling factor expressed as a percentage (100 = 100%)
   */
  verticalScale: number;

  /**
   *
   */
  wariChuCharactersAfterBreak: number;

  /**
   *
   */
  wariChuCharactersBeforeBreak: number;

  /**
   * Whether WariChu is enabled.
   */
  wariChuEnabled: boolean;

  /**
   *
   */
  wariChuJustification: WariChuJustificationType;

  /**
   * The Wari-Chu line gap.
   */
  wariChuLineGap: number;

  /**
   * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.
   */
  wariChuLines: number;

  /**
   * The Wari-Chu scale.
   */
  wariChuScale: number;
}

/**
 * Properties of a paragraph.
 */
declare class ParagraphAttributes {
  /**
   * Auto leading amount (in percentage)
   */
  autoLeadingAmount: number;

  /**
   * Is BunriKinshi enabled?
   */
  bunriKinshi: boolean;

  /**
   * The Burasagari type.
   */
  burasagariType: BurasagariTypeEnum;

  /**
   * Composer engine attribute.
   */
  composerEngine: ComposerEngineType;

  /**
   * Desired glyph scaling expressed as a percentage.
   */
  desiredGlyphScaling: number;

  /**
   * Desired letter spacing expressed as a percentage.
   */
  desiredLetterSpacing: number;

  /**
   * Desired word spacing expressed as a percentage.
   */
  desiredWordSpacing: number;

  /**
   * Whether to enable every line composer (as opposed to single line composer)?
   */
  everyLineComposer: boolean;

  /**
   * First line left indent expressed in points.
   */
  firstLineIndent: number;

  /**
   * Is hyphenation enabled for the capitalized words?
   */
  hyphenateCapitalizedWords: boolean;

  /**
   * Is hyphenation enabled for the paragraph?
   */
  hyphenation: boolean;

  /**
   * Hyphenation preference scale for better spacing (0) or fewer hyphens (1)
   */
  hyphenationPreference: number;

  /**
   * Size of the hyphenation zone.
   */
  hyphenationZone: number;

  /**
   * Paragraph justification.
   */
  justification: Justification;

  /**
   * The Kashida Width attribute.
   */
  kashidaWidth: KashidaWidthType;

  /**
   * The Kinsoku Shori name.
   */
  kinsoku: string;

  /**
   * The preferred Kinsoku order.
   */
  kinsokuOrder: KinsokuOrderEnum;

  /**
   * Is KurikaeshiMojiShori enabled?
   */
  kurikaeshiMojiShori: boolean;

  /**
   * Auto leading type.
   */
  leadingType: AutoLeadingType;

  /**
   * Left indent of margin expressed in points.
   */
  leftIndent: number;

  /**
   * Maximum number of consecutive hypenated lines.
   */
  maximumConsecutiveHyphens: number;

  /**
   * Maximum glyph scaling expressed as a percentage.
   */
  maximumGlyphScaling: number;

  /**
   * Maximum letter spacing expressed as a percentage.
   */
  maximumLetterSpacing: number;

  /**
   * Maximum word spacing expressed as a percentage.
   */
  maximumWordSpacing: number;

  /**
   * Minimum number of characters after a hyphen.
   */
  minimumAfterHyphen: number;

  /**
   * Minimum number of characters before a hyphen.
   */
  minimumBeforeHyphen: number;

  /**
   * Minimum glyph scaling expressed as a percentage.
   */
  minimumGlyphScaling: number;

  /**
   * Minimum hyphenated word size.
   */
  minimumHyphenatedWordSize: number;

  /**
   * Minimum letter spacing expressed as a percentage.
   */
  minimumLetterSpacing: number;

  /**
   * Minimum word spacing expressed as a percentage.
   */
  minimumWordSpacing: number;

  /**
   * The Mojikumi name.
   */
  mojikumi: string;

  /**
   * Main writing direction attribute.
   */
  paragraphDirection: ParagraphDirectionType;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Right indent of margin expressed in points.
   */
  rightIndent: number;

  /**
   * Is Roman hanging punctuation enabled?
   */
  romanHanging: boolean;

  /**
   * Single word justification.
   */
  singleWordJustification: Justification;

  /**
   * Spacing after paragraph in points.
   */
  spaceAfter: number;

  /**
   * Spacing before paragraph in points.
   */
  spaceBefore: number;

  /**
   * Tab stop settings.
   */
  tabStops: TabStopInfo[];

  /**
   * The class name of the object.
   */
  typename: string;
}

/**
 * Options which are applied when opening or placing a Photoshop file.
 */
declare class OpenOptionsPhotoshop {
  /**
   * Should use the specified LayerComp.
   */
  layerComp: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Should hidden layers be preserved when the document is converted (default: false)
   */
  preserveHiddenLayers: boolean;

  /**
   * Should image maps be preserved when the document is converted (default: true)
   */
  preserveImageMaps: boolean;

  /**
   * Should layers be Preserve when the document is converted (default: true)
   */
  preserveLayers: boolean;

  /**
   * Should slices be preserved when the document is converted (default: true)
   */
  preserveSlices: boolean;

  /**
   * The class name of the object.
   */
  typename: string;
}

/**
 * Options which may be supplied when opening a PDF file.
 */
declare class OpenOptionsPDF {
  /**
   * What box should be used when placing a multipage document (default: PDF media box)
   */
  pDFCropToBox: PDFBoxType;

  /**
   * Range of pages when opening a multipage document [possible values: 'all', range(for example: '1,2,3-5,8')]
   */
  pageRangeToOpen: string;

  /**
   * What page should be used when opening a multipage document (default: 1)
   */
  pageToOpen: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Import PDF pages as links for optimal performance (default: true for PageRangeToOpen=all; false otherwise)
   */
  placeAsLinks: boolean;

  /**
   * The class name of the object.
   */
  typename: string;
}

/**
 * Options which may be supplied when opening a AutoCAD file.
 */
declare class OpenOptionsAutoCAD {
  /**
   * To center the created artwork on the artboard (default: true)
   */
  centerArtwork: boolean;

  /**
   * How to scale the AutoCAD drawing on import (default: Fit Artboard)
   */
  globalScaleOption: AutoCADGlobalScaleOption;

  /**
   * Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0)
   */
  globalScalePercent: number;

  /**
   * To merge the layers of the artwork (default: false)
   */
  mergeLayers: boolean;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * To scale lineweights by the same amount as rest of the drawing (default: false)
   */
  scaleLineweights: boolean;

  /**
   * Name of layout in the AutoCAD drawing to import.
   */
  selectedLayoutName: string;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Units to which to map (default: Millimeters)
   */
  unit: AutoCADUnit;

  /**
   * Ratio by which to scale while mapping the units (default: 1.0)
   */
  unitScaleRatio: number;
}

/**
 * Tracing options that guide the tracing process.
 */
declare class TracingOptions {
  /**
   * ColorFidelity when TracingColorTypeValue is TracingFullColor.
   */
  colorFidelity: number;

  /**
   * The color group name used for tracing. Use 'All' or any color group name available in color Palette (library).
   */
  colorGroup: string;

  /**
   * Corner fidelity for tracing.
   */
  cornerFidelity: number;

  /**
   * Tracing with fills. Fills, Strokes or both must be on.
   */
  fills: boolean;

  /**
   * The gray levels for a grayscale mode tracing..
   */
  grayLevels: number;

  /**
   * Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white.
   */
  ignoreWhite: boolean;

  /**
   * Maximum stroke weight (stroke only).
   */
  maxStrokeWeight: number;

  /**
   * Specifies minimum area of pixels to be vectorized.
   */
  noiseFidelity: number;

  /**
   * The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name.
   */
  palette: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Path fidelity for tracing.
   */
  pathFidelity: number;

  /**
   * The name of the preset in use. Read-only.
   */
  preset: string;

  /**
   * Controls whether to snap curve to lines.
   */
  snapCurveToLines: boolean;

  /**
   * Tracing with strokes. Fills, Strokes or both must be on.
   */
  strokes: boolean;

  /**
   * The threshold value for a black and white mode tracing.
   */
  threshold: number;

  /**
   * Color Type used for tracing, TracingLimitedColor or TracingFullColor .
   */
  tracingColorTypeValue: TracingColorType;

  /**
   * Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor.
   */
  tracingColors: number;

  /**
   * Method for tracing, either abutting or adjoining paths.
   */
  tracingMethod: TracingMethodType;

  /**
   * The tracing mode: color, gray, black and white.
   */
  tracingMode: TracingModeType;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The visualization mode.
   */
  viewMode: ViewType;

  /**
   * Load options from preset.
   * @param presetName The name of the preset.
   */
  loadFromPreset(presetName: string): boolean;

  /**
   * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.
   * @param presetName The name of the preset.
   */
  storeToPreset(presetName: string): boolean;
}

/**
 * A tracing object.
 */
declare class TracingObject {
  /**
   * The number of anchors in the tracing result.
   */
  anchorCount: number;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The number of paths in the tracing result.
   */
  pathCount: number;

  /**
   * The source art used when creating a new tracing object.
   */
  sourceArt: PageItem;

  /**
   * The options used when tracing the artwork.
   */
  tracingOptions: TracingOptions;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * The number of colors used in the tracing result.
   */
  usedColorCount: number;

  /**
   * Expand the tracing to paths. Deletes this tracing object.
   * @param viewed Expand as viewed with the raster and vector view modes.
   */
  expandTracing(viewed?: boolean): GroupItem;

  /**
   * Release the source artwork for the tracing object. Deletes this tracing object.
   */
  releaseTracing(): PageItem;
}

/**
 * An (exportable) asset.
 */
declare class Asset {
  /**
   * The UID for the asset which is unique within a document.
   */
  assetID: number;

  /**
   * Name of the asset.
   */
  assetName: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Gets the normalized name without special characters, such that it can be used as a file name.
   */
  getNormalizedName(): string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * An artboard object.
 */
declare class Artboard {
  /**
   * Size and position of artboard.
   */
  artboardRect: Rect;

  /**
   * The name of the artboard.
   */
  name: string;

  /**
   * The object's container.
   */
  parent: object;

  /**
   * Ruler origin of artboard.It is relative to left-bottom corner of the Artboard.
   */
  rulerOrigin: Point;

  /**
   * Pixel aspect ratio, used in ruler visualization if the units are pixels.
   */
  rulerPAR: number;

  /**
   * Show center mark.
   */
  showCenter: boolean;

  /**
   * Show cross hairs.
   */
  showCrossHairs: boolean;

  /**
   * Show title and action safe areas (for video)
   */
  showSafeAreas: boolean;

  /**
   * The class name of the object.
   */
  typename: string;

  /**
   * Deletes this object.
   */
  remove(): void;

  /**
   * Deletes all elements.
   */
  removeAll(): void;
}

/**
 * Describes a point. This class is also a two-element collection.
 */
declare class Point {
  /**
   * The left coordinate.
   */
  left: number;

  /**
   * The array length.
   */
  length: number;

  /**
   * The top coordinate.
   */
  top: number;

  /**
   * The left coordinate.
   */
  x: number;

  /**
   * The top coordinate.
   */
  y: number;
}

/**
 * Describes a rectangle. This class is also a four-element collection.
 */
declare class Rectangle {
  /**
   * The bottom coordinate.
   */
  bottom: number;

  /**
   * The height.
   */
  height: number;

  /**
   * The left coordinate.
   */
  left: number;

  /**
   * The array length.
   */
  length: number;

  /**
   * The right coordinate.
   */
  right: number;

  /**
   * The top coordinate.
   */
  top: number;

  /**
   * The width.
   */
  width: number;

  /**
   * The left coordinate.
   */
  x: number;

  /**
   * The top coordinate.
   */
  y: number;
}

declare class Rect {
  bottom: number;
  height: number;
  left: number;
  length: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

declare enum ElementPlacement {
  INSIDE = 0,
  PLACEATBEGINNING = 1,
  PLACEATEND = 2,
  PLACEBEFORE = 3,
  PLACEAFTER = 4
}

declare enum PerspectiveGridType {
  OnePointPerspectiveGridType = 0,
  TwoPointPerspectiveGridType = 1,
  ThreePointPerspectiveGridType = 2,
  InvalidPerspectiveGridType = 3
}

declare enum ViewRasterType {
  TRACINGVIEWRASTERADJUSTEDIMAGE = 0,
  TRACINGVIEWRASTERNOIMAGE = 1,
  TRACINGVIEWRASTERORIGINALIMAGE = 2,
  TRACINGVIEWRASTERTRANSPARENTIMAGE = 3
}

declare enum ViewVectorType {
  TRACINGVIEWVECTORNOTRACINGRESULT = 0,
  TRACINGVIEWVECTOROUTLINES = 1,
  TRACINGVIEWVECTOROUTLINESWITHTRACING = 2,
  TRACINGVIEWVECTORTRACINGRESULT = 3
}

declare module aiMenu {
  let file: {
    new: "New";
    newFromTemplate: "newFromTemplate";
    open: "open";
    browseInBridge: "Adobe Bridge Browse";
    close: "close";
    save: "save";
    saveAs: "saveas";
    saveACopy: "saveacopy";
    saveAsTemplate: "saveastemplate";
    saveSelectedSlices: "Adobe AI Save Selected Slices";
    revert: "revert";
    searchAdobeStock: "Search Adobe Stock";
    place: "AI Place";
    export: {
      export: "export";
      exportForScreens: "exportForScreens";
      saveForWebAndDevices: "Adobe AI Save For Web";
    };
    exportSelection: "exportSelection";
    packageMenuItem: "Package Menu Item";
    scripts: {
      otherScript: "ai_browse_for_script";
    };
    documentSetup: "document";
    documentColorMode: {
      cmykColor: "doc-color-cmyk";
      rgbColor: "doc-color-rgb";
    };
    fileInfo: "File Info";
    print: "Print";
    exit: "quit";
  };
  let edit: {
    undo: "undo";
    redo: "redo";
    cut: "cut";
    copy: "copy";
    paste: "paste";
    pasteInFront: "pasteFront";
    pasteInBack: "pasteBack";
    pasteInPlace: "pasteInPlace";
    pasteOnAllArtboards: "pasteInAllArtboard";
    clear: "clear";
    findAndReplace: "Find and Replace";
    findNext: "Find Next";
    checkSpelling: "Check Spelling";
    definePattern: "Define Pattern Menu Item";
    editColors: {
      recolorArtwork: "Recolor Art Dialog";
      adjustColorBalance: "Adjust3";
      blendFrontToBack: "Colors3";
      blendHorizontally: "Colors4";
      blendVertically: "Colors5";
      convertToCMYK: "Colors8";
      convertToGrayscale: "Colors7";
      convertToRGB: "Colors9";
      invertColors: "Colors6";
      overprintBlack: "Overprint2";
      saturate: "Saturate3";
    };
    editOriginal: "EditOriginal Menu Item";
    transparencyFlattenerPresets: "Transparency Presets";
    tracingPresets: "TracingPresets";
    printPresets: "Print Presets";
    adobePDFPresets: "PDF Presets";
    sWFPresets: "SWFPresets";
    perspectiveGridPresets: "PerspectiveGridPresets";
    colorSettings: "color";
    assignProfile: "assignprofile";
    keyboardShortcuts: "KBSC Menu Item";
    preferences: {
      general: "preference";
      selectionAndAnchorDisplay: "selectPref";
      type: "keyboardPref";
      units: "unitundoPref";
      guidesAndGrid: "guidegridPref";
      smartGuides: "snapPref";
      slices: "slicePref";
      hyphenation: "hyphenPref";
      pluginsAndScratchDisks: "pluginPref";
      userInterface: "UIPref";
      fileHandlingAndClipboard: "FileClipboardPref";
      appearanceOfBlack: "BlackPref";
    };
  };
  let preferences: {
    general: "preference";
    selectionAndAnchorDisplay: "selectPref";
    type: "keyboardPref";
    units: "unitundoPref";
    guidesAndGrid: "guidegridPref";
    smartGuides: "snapPref";
    slices: "slicePref";
    hyphenation: "hyphenPref";
    pluginsAndScratchDisks: "pluginPref";
    userInterface: "UIPref";
    fileHandlingAndClipboard: "FileClipboardPref";
    appearanceOfBlack: "BlackPref";
  };
  let object: {
    transform: {
      transformAgain: "transformagain";
      move: "transformmove";
      rotate: "transformrotate";
      reflect: "transformreflect";
      scale: "transformscale";
      shear: "transformshear";
      transformEach: "Transform v23";
      resetBoundingBox: "AI Reset Bounding Box";
    };
    arrange: {
      bringToFront: "sendToFront";
      bringForward: "sendForward";
      sendBackward: "sendBackward";
      sendToBack: "sendToBack";
      sendToCurrentLayer: "Selection Hat 2";
    };
    group: "group";
    ungroup: "ungroup";
    lock: {
      selection: "lock";
      allArtworkAbove: "Selection Hat 5";
      otherLayers: "Selection Hat 7";
    };
    unlockAll: "unlockAll";
    hide: {
      selection: "hide";
      allArtworkAbove: "Selection Hat 4";
      otherLayers: "Selection Hat 6";
    };
    showAll: "showAll";
    expand: "Expand3";
    expandAppearance: "expandStyle";
    flattenTransparency: "FlattenTransparency1";
    rasterize: "Rasterize 8 menu item";
    createGradientMesh: "make mesh";
    createObjectMosaic: "AI Object Mosaic Plug-in4";
    createTrimMarks: "TrimMark v25";
    slice: {
      make: "AISlice Make Slice";
      release: "AISlice Release Slice";
      createFromGuides: "AISlice Create from Guides";
      createFromSelection: "AISlice Create from Selection";
      duplicateSlice: "AISlice Duplicate";
      combineSlices: "AISlice Combine";
      divideSlices: "AISlice Divide";
      deleteAll: "AISlice Delete All Slices";
      sliceOptions: "AISlice Slice Options";
      clipToArtboard: "AISlice Clip to Artboard";
    };
    path: {
      join: "join";
      average: "average";
      outlineStroke: "OffsetPath v22";
      offsetPath: "OffsetPath v23";
      simplify: "simplify menu item";
      addAnchorPoints: "Add Anchor Points2";
      removeAnchorPoints: "Remove Anchor Points menu";
      divideObjectsBelow: "Knife Tool2";
      splitIntoGrid: "Rows and Columns….";
      cleanUp: "cleanup menu item";
    };
    blend: {
      make: "Path Blend Make";
      release: "Path Blend Release";
      expand: "Path Blend Expand";
      blendOptions: "Path Blend Options";
      replaceSpine: "Path Blend Replace Spine";
      reverseSpine: "Path Blend Reverse Spine";
      reverseFrontToBack: "Path Blend Reverse Stack";
    };
    envelopeDistort: {
      makeWithWarp: "Make Warp";
      makeWithMesh: "Create Envelope Grid";
      makeWithTopObject: "Make Envelope";
      release: "Release Envelope";
      envelopeOptions: "Envelope Options";
      expand: "Expand Envelope";
      editContents: "Edit Envelope Contents";
    };
    perspective: {
      attachToActivePlane: "Attach to Active Plane";
      releaseWithPerspective: "Release with Perspective";
      movePlaneToMatchObject: "Show Object Grid Plane";
      editText: "Edit Original Object";
    };
    livePaint: {
      make: "Make Planet X";
      merge: "Marge Planet X";
      release: "Release Planet X";
      gapOptions: "Planet X Options";
      expand: "Expand Planet X";
    };
    textWrap: {
      make: "Make Text Wrap";
      release: "Release Text Wrap";
      textWrapOptions: "Text Wrap Options…";
    };
    clippingMask: {
      make: "makeMask";
      release: "releaseMask";
      editContents: "editMask";
    };
    compoundPath: {
      make: "compoundPath";
      release: "noCompoundPath";
    };
    artboards: {
      convertToArtboards: "setCropMarks";
      rearrange: "ReArrange Artboards";
      fitToArtworkBounds: "Fit Artboard to artwork bounds";
      fitToSelectedArt: "Fit Artboard to selected Art";
    };
    graph: {
      type: "setGraphStyle";
      data: "editGraphData";
      design: "graphDesigns";
      column: "setBarDesign";
      marker: "setIconDesign";
    };
    cropImage: "Crop Image";
    makeMesh: "make mesh";
  };
  let type: {
    glyphs: "alternate glyph palette plugin";
    areaTypeOptions: "area-type-options";
    typeOnAPath: {
      rainbow: "Rainbow";
      threeDRibbon: "3D ribbon";
      skew: "Skew";
      stairStep: "Stair Step";
      gravity: "Gravity";
      typeOnAPathOptions: "typeOnPathOptions";
      updateLegacyTypeOnAPath: "updateLegacyTOP";
    };
    threadedText: {
      create: "threadTextCreate";
      releaseSelection: "releaseThreadedTextSelection";
      removeThreading: "removeThreading";
    };
    compositeFonts: "Adobe internal composite font plugin";
    kinsokuShoriSettings: "Adobe Kinsoku Settings";
    mojikumiSettings: "Adobe MojiKumi Settings";
    fitHeadline: "fitHeadline";
    createOutlines: "outline";
    findFont: "Adobe Illustrator Find Font Menu Item";
    changeCase: {
      upperCase: "UpperCase Change Case Item";
      lowerCase: "LowerCase Change Case Item";
      titleCase: "Title Case Change Case Item";
      sentenceCase: "Sentence case Change Case Item";
    };
    smartPunctuation: "Adobe Illustrator Smart Punctuation Menu Item";
    opticalMarginAlignment: "Adobe Optical Alignment Item";
    showHiddenCharacters: "showHiddenChar";
    typeOrientation: {
      horizontal: "type-horizontal";
      vertical: "type-vertical";
    };
  };
  let select: {
    all: "selectall";
    allOnActiveArtboard: "selectallinartboard";
    deselect: "deselectall";
    globalEdit: "SmartEdit Menu Item";
    reselect: "Find Reselect menu item";
    inverse: "Inverse menu item";
    nextObjectAbove: "Selection Hat 8";
    nextObjectBelow: "Selection Hat 9";
    same: {
      appearance: "Find Appearance menu item";
      appearanceAttribute: "Find Appearance Attributes menu item";
      blendingMode: "Find Blending Mode menu item";
      fillAndStroke: "Find Fill & Stroke menu item";
      fillColor: "Find Fill Color menu item";
      opacity: "Find Opacity menu item";
      strokeColor: "Find Stroke Color menu item";
      strokeWeight: "Find Stroke Weight menu item";
      graphicStyle: "Find Style menu item";
      symbolInstance: "Find Symbol Instance menu item";
      linkBlockSeries: "Find Link Block Series menu item";
    };
    object: {
      allOnSameLayers: "Selection Hat 3";
      directionHandles: "Selection Hat 1";
      notAlignedToPixelGrid: "Selection Hat 12";
      bristleBrushStrokes: "Bristle Brush Strokes menu item";
      brushStrokes: "Brush Strokes menu item";
      clippingMasks: "Clipping Masks menu item";
      strayPoints: "Stray Points menu item";
      textObjects: "Text Objects menu item";
      flashDynamicText: "Dynamic Text";
      flashInputText: "Input Text";
    };
    saveSelection: "Selection Hat 10";
    editSelection: "Selection Hat 11";
  };
  let effect: {
    applyLastEffect: "Adobe Apply Last Effect";
    lastEffect: "Adobe Last Effect";
    documentRasterEffectsSettings: "Live Rasterize Effect Setting";
    live3D: {
      extrudeAndBevel: "Live 3DExtrude";
      revolve: "Live 3DRevolve";
      rotate: "Live 3DRotate";
    };
    convertTo: {
      rectangle: "Live Rectangle";
      roundedRectangle: "Live Rounded Rectangle";
      ellipse: "Live Ellipse";
    };
    cropMarks: "Live Trim Marks";
    distortAndTransform: {
      freeDistort: "Live Free Distort";
      puckerAndBloat: "Live Pucker & Bloat";
      roughen: "Live Roughen";
      transform: "Live Transform";
      tweak: "Live Scribble and Tweak";
      twist: "Live Twist";
      zigZag: "Live Zig Zag";
    };
    path: {
      offsetPath: "Live Offset Path";
      outlineObject: "Live Outline Object";
      outlineStroke: "Live Outline Stroke";
    };
    pathfinder: {
      add: "Live Pathfinder Add";
      intersect: "Live Pathfinder Intersect";
      exclude: "Live Pathfinder Exclude";
      subtract: "Live Pathfinder Subtract";
      minusBack: "Live Pathfinder Minus Back";
      divide: "Live Pathfinder Divide";
      trim: "Live Pathfinder Trim";
      merge: "Live Pathfinder Merge";
      crop: "Live Pathfinder Crop";
      outline: "Live Pathfinder Outline";
      hardMix: "Live Pathfinder Hard Mix";
      softMix: "Live Pathfinder Soft Mix";
      trap: "Live Pathfinder Trap";
    };
    rasterize: "Live Rasterize";
    stylize: {
      dropShadow: "Live Adobe Drop Shadow";
      feather: "Live Feather";
      innerGlow: "Live Inner Glow";
      outerGlow: "Live Outer Glow";
      roundCorners: "Live Adobe Round Corners";
      scribble: "Live Scribble Fill";
      glowingEdges: "Live PSAdapter_plugin_GlwE";
    };
    svgFilters: {
      applySVGFilter: "Live SVG Filters";
      importSVGFilter: "SVG Filter Import";
    };
    warp: {
      arc: "Live Deform Arc";
      arcLower: "Live Deform Arc Lower";
      arcUpper: "Live Deform Arc Upper";
      arch: "Live Deform Arch";
      bulge: "Live Deform Bulge";
      shellLower: "Live Deform Shell Lower";
      shellUpper: "Live Deform Shell Upper";
      flag: "Live Deform Flag";
      wave: "Live Deform Wave";
      fish: "Live Deform Fish";
      rise: "Live Deform Rise";
      fisheye: "Live Deform Fisheye";
      inflate: "Live Deform Inflate";
      squeeze: "Live Deform Squeeze";
      twist: "Live Deform Twist";
    };
    effectGallery: "Live PSAdapter_plugin_GEfc";
    artistic: {
      coloredPencil: "Live PSAdapter_plugin_ClrP";
      cutout: "Live PSAdapter_plugin_Ct";
      dryBrush: "Live PSAdapter_plugin_DryB";
      filmGrain: "Live PSAdapter_plugin_FlmG";
      fresco: "Live PSAdapter_plugin_Frsc";
      neonGlow: "Live PSAdapter_plugin_NGlw";
      paintDaubs: "Live PSAdapter_plugin_PntD";
      paletteKnife: "Live PSAdapter_plugin_PltK";
      plasticWrap: "Live PSAdapter_plugin_PlsW";
      posterEdges: "Live PSAdapter_plugin_PstE";
      roughPastels: "Live PSAdapter_plugin_RghP";
      smudgeStick: "Live PSAdapter_plugin_SmdS";
      sponge: "Live PSAdapter_plugin_Spng";
      underpainting: "Live PSAdapter_plugin_Undr";
      watercolor: "Live PSAdapter_plugin_Wtrc";
    };
    blur: {
      gaussianBlur: "Live PSAdapter_plugin_GblR";
      radialBlur: "Live PSAdapter_plugin_RdlB";
      smartBlur: "Live PSAdapter_plugin_SmrB";
    };
    brushStrokes: {
      accentedEdges: "Live PSAdapter_plugin_AccE";
      angledStrokes: "Live PSAdapter_plugin_AngS";
      crosshatch: "Live PSAdapter_plugin_Crsh";
      darkStrokes: "Live PSAdapter_plugin_DrkS";
      inkOutlines: "Live PSAdapter_plugin_InkO";
      spatter: "Live PSAdapter_plugin_Spt";
      sprayedStrokes: "Live PSAdapter_plugin_SprS";
      sumiE: "Live PSAdapter_plugin_Smie";
    };
    distort: {
      diffuseGlow: "Live PSAdapter_plugin_DfsG";
      glass: "Live PSAdapter_plugin_Gls";
      oceanRipple: "Live PSAdapter_plugin_OcnR";
    };
    pixelate: {
      colorHalftone: "Live PSAdapter_plugin_ClrH";
      crystallize: "Live PSAdapter_plugin_Crst";
      mezzotint: "Live PSAdapter_plugin_Mztn";
      pointillize: "Live PSAdapter_plugin_Pntl";
    };
    sharpen: {
      unsharpMask: "Live PSAdapter_plugin_USMk";
    };
    sketch: {
      basRelief: "Live PSAdapter_plugin_BsRl";
      chalkAndCharcoal: "Live PSAdapter_plugin_ChlC";
      charcoal: "Live PSAdapter_plugin_Chrc";
      chrome: "Live PSAdapter_plugin_Chrm";
      contCrayon: "Live PSAdapter_plugin_CntC";
      graphicPen: "Live PSAdapter_plugin_GraP";
      halftonePattern: "Live PSAdapter_plugin_HlfS";
      notePaper: "Live PSAdapter_plugin_NtPr";
      photocopy: "Live PSAdapter_plugin_Phtc";
      plaster: "Live PSAdapter_plugin_Plst";
      reticulation: "Live PSAdapter_plugin_Rtcl";
      stamp: "Live PSAdapter_plugin_Stmp";
      tornEdges: "Live PSAdapter_plugin_TrnE";
      waterPaper: "Live PSAdapter_plugin_WtrP";
    };
    stylize: {
      glowingEdges: "Live PSAdapter_plugin_GlwE";
    };
    texture: {
      craquelure: "Live PSAdapter_plugin_Crql";
      grain: "Live PSAdapter_plugin_Grn";
      mosaicTiles: "Live PSAdapter_plugin_MscT";
      patchwork: "Live PSAdapter_plugin_Ptch";
      stainedGlass: "Live PSAdapter_plugin_StnG";
      texturizer: "Live PSAdapter_plugin_Txtz";
    };
    video: {
      deInterlace: "Live PSAdapter_plugin_Dntr";
      nTSCColors: "Live PSAdapter_plugin_NTSC";
    };
  };
  let view: {
    preview: "preview";
    overprintPreview: "ink";
    pixelPreview: "raster";
    proofSetup: {
      cmyk: "proof-document";
      macRgb: "proof-mac-rgb";
      sRgb: "proof-win-rgb";
      monitorRgb: "proof-monitor-rgb";
      colorBlindnessPType: "proof-colorblindp";
      colorBlindnessDType: "proof-colorblindd";
      customize: "proof-custom";
    };
    proofColors: "proofColors";
    zoomIn: "zoomin";
    zoomOut: "zoomout";
    fitArtboardInWindow: "fitin";
    fitAllInWindow: "fitall";
    actualSize: "actualsize";
    hideEdges: "edge";
    hideArtboards: "artboard";
    hidePrintTiling: "pagetiling";
    showSlices: "AISlice Feedback Menu";
    lockSlices: "AISlice Lock Menu";
    showTemplate: "showtemplate";
    showGradientGuide: "Gradient Feedback";
    rulers: {
      showRulers: "ruler";
      showVideoRulers: "videoruler";
      changeToGlobalRulers: "rulerCoordinateSystem";
    };
    hideBoundingBox: "AI Bounding Box Toggle";
    showTransparencyGrid: "TransparencyGrid Menu Item";
    showTextThreads: "textthreads";
    hideGradientAnnotator: "Gradient Feedback";
    showLivePaintGaps: "Show Gaps Planet X";
    guides: {
      hideGuides: "showguide";
      lockGuides: "lockguide";
      makeGuides: "makeguide";
      releaseGuides: "releaseguide";
      clearGuides: "clearguide";
    };
    smartGuides: "Snapomatic on-off menu item";
    perspectiveGrid: {
      showGrid: "Show Perspective Grid";
      showRulers: "Show Ruler";
      snapToGrid: "Snap to Grid";
      lockGrid: "Lock Perspective Grid";
      lockStationPoint: "Lock Station Point";
      defineGrid: "Define Perspective Grid";
      saveGridAsPreset: "Save Perspective Grid as Preset";
    };
    showGrid: "showgrid";
    snapToGrid: "snapgrid";
    snapToPoint: "snappoint";
    newView: "newview";
    editViews: "editview";
  };
  let window: {
    newWindow: "newwindow";
    arrange: {
      cascade: "cascade";
      tile: "tile";
      floatInWindow: "floatInWindow";
      floatAllInWindows: "floatAllInWindows";
      consolidateAllWindows: "consolidateAllWindows";
    };
    workspace: {
      saveWorkspace: "Adobe Save Workspace";
      newWorkspace: "Adobe New Workspace";
      manageWorkspaces: "Adobe Manage Workspace";
    };
    cssMenu: "CSS Menu Item";
    tools: "AdobeBuiltInToolbox1";
    actions: "Adobe Action Palette";
    align: "AdobeAlignObjects2";
    appearance: "Style Palette";
    artboards: "Adobe Artboard Palette";
    attributes: "internal palettes posing as plug-in menus-attributes";
    brushes: "Adobe BrushManager Menu Item";
    color: "Adobe Color Palette";
    colorGuide: "Adobe Harmony Palette";
    kulerPanel: "Adobe Illustrator Kuler Panel";
    documentInfo: "DocInfo1";
    flattenerPreview: "Adobe Flattening Preview";
    gradient: "Adobe Gradient Palette";
    graphicStyles: "Adobe Style Palette";
    info: "internal palettes posing as plug-in menus-info";
    layers: "AdobeLayerPalette1";
    links: "Adobe LinkPalette Menu Item";
    magicWand: "AI Magic Wand";
    navigator: "AdobeNavigator";
    pathfinder: "Adobe PathfinderUI";
    separationsPreview: "Adobe Separation Preview Panel";
    stroke: "Adobe Stroke Palette";
    svgInteractivity: "Adobe SVG Interactivity Palette";
    swatches: "Adobe Swatches Menu Item";
    symbols: "Adobe Symbol Palette";
    transform: "AdobeTransformObjects1";
    transparency: "Adobe Transparency Palette Menu Item";
    variables: "Adobe Variables Palette Menu Item";
    character: "internal palettes posing as plug-in menus-character";
    characterStyles: "Character Styles";
    glyphs: "alternate glyph palette plugin 2";
    openType: "internal palettes posing as plug-in menus-opentype";
    paragraph: "internal palettes posing as plug-in menus-paragraph";
    paragraphStyles: "Adobe Paragraph Styles Palette";
    tabs: "internal palettes posing as plug-in menus-tab";
    otherArtStyleLibrary: "Adobe Art Style Plugin Other libraries menu item";
    otherSymbolLibrary: "Adobe Symbol Palette Plugin Other libraries menu item";
  };
  let help: {
    illustratorHelp: "helpcontent";
    aboutIllustrator: "about";
    systemInfo: "System Info";
  };
  let panels: {
    newSymbol: "Adobe New Symbol Shortcut";
    showColorPanel_Secondary: "Adobe Color Palette Secondary";
    actionsBatch: "Adobe Actions Batch";
    addNewFill: "Adobe New Fill Shortcut";
    addNewStroke: "Adobe New Stroke Shortcut";
    newGraphicStyle: "Adobe New Style Shortcut";
    newLayer: "AdobeLayerPalette2";
    newLayerWithDialog: "AdobeLayerPalette3";
    updateLink: "Adobe Update Link Shortcut";
    navigatorOptions: "AdobeNavigator2";
    newSwatch: "Adobe New Swatch Shortcut Menu";
  };
}
