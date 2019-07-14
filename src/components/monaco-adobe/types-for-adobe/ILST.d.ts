/**
 * The $ object provides a number of debugging facilities and informational methods.
 */
interface $ {
  /**
   * The ExtendScript build information.
   */
  readonly build: string;

  /**
   * The ExtendScript build date.
   */
  readonly buildDate: Date;

  /**
   * The character used as the decimal point character in formatted numeric output.
   */
  decimalPoint: string;

  /**
   * The name of the current ExtendScript engine, if set.
   */
  readonly engineName: string;

  /**
   * The most recent run-time error information.
   * Assigning error text to this property generates a run-time error; however, the preferred way to generate a run-time error is to throw an Error object.
   */
  error: Error;

  /**
   * The file name of the current script.
   */
  readonly fileName: string;

  /**
   * Gets or sets low-level debug output flags.
   * A logical AND of bit flag values:
   * 0x0002 (2): Displays each line with its line number as it is executed.
   * 0x0040 (64): Enables excessive garbage collection. Usually, garbage collection starts when the number of objects has increased by a certain amount since the last garbage collection. This flag causes ExtendScript to garbage collect after almost every statement. This impairs performance severely, but is useful when you suspect that an object gets released too soon.
   * 0x0080 (128): Displays all calls with their arguments and the return value.
   * 0x0100 (256): Enables extended error handling (see strict).
   * 0x0200 (512): Enables the localization feature of the toString method. Equivalent to the localize property.
   */
  flags: number;

  /**
   * A reference to the global object, which contains the JavaScript global namespace.
   */
  readonly global: any;

  /**
   * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
   * initialized during the application startup sequence. Every read access resets the timer to Zero.
   */
  readonly hiresTimer: number;

  /**
   * The path for include files for the current script.
   */
  readonly includePath: string;

  /**
   * The current debugging level, which enables or disables the JavaScript debugger.
   * One of 0 (no debugging), 1 (break on runtime errors), or 2 (full debug mode).
   */
  level: number;

  /**
   * The current line number of the currently executing script.
   */
  readonly line: number;

  /**
   * Gets or sets the current locale.
   * The string contains five characters in the form LL_RR, where LL is an ISO 639 language specifier, and RR is an ISO 3166 region specifier.Initially, this is the value that the application or the platform returns for the current user. You can set it to temporarily change the locale for testing. To return to the application or platform setting, set to undefined, null, or the empty string.
   */
  locale: string;

  /**
   * Set to true to enable the extended localization features of the built-in toString() method.
   */
  localize: boolean;

  /**
   * The ExtendScript memory cache size, in bytes.
   */
  memCache: number;

  /**
   * The current operating system version information.
   */
  readonly os: string;

  /**
   * An array of objects containing information about the display screens attached to your computer.
   * Each object has the properties left, top, right, bottom, which contain the four corners of each screen in global coordinates.A property primary is true if that object describes the primary display.
   */
  readonly screens: object[];

  /**
   * The current stack trace.
   */
  readonly stack: string;

  /**
   * Sets or clears strict mode for object modification.
   * When true, any attempt to write to a read-only property causes a runtime error. Some objects do not permit the creation of new properties when true.
   */
  strict: any;

  /**
   * The version number of the ExtendScript engine.
   * Formatted as a three-part number and description; for example: "3.92.95 (debug)".
   */
  readonly version: string;

  /**
   * Shows an About box for the ExtendScript component, and returns the text for the box.
   */
  about(): string;

  /**
   * Breaks execution at the current position.
   * @param condition A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
   */
  bp(condition?: any): void;

  /**
   * Invokes the platform-specific color selection dialog, and returns the selected color.
   * @param color The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
   */
  colorPicker(color: number): number;

  /**
   * Loads and evaluates a file.
   * @param file The file to load.
   * @param timeout An optional timeout in milliseconds.
   */
  evalFile(file: File, timeout?: number): any;

  /**
   * Initiates garbage collection in the ExtendScript engine.
   */
  gc(): void;

  /**
   * Retrieves the value of an environment variable.
   * @param name The name of the variable.
   */
  getenv(name: string): string;

  /**
   * Sets the value of an environment variable.
   * @param name The name of the variable.
   * @param value The value of the variable.
   */
  setenv(name: string, value: string): void;

  /**
   * Suspends the calling thread for a number of milliseconds.
   * During a sleep period, checks at 100 millisecond intervals to see whether the sleep should be terminated. This can happen if there is a break request, or if the script timeout has expired.
   * @param msecs Number of milliseconds to sleep.
   */
  sleep(msecs: number): void;

  /**
   * Converts this object to a string.
   */
  toString(): string;

  /**
   * Prints text to the Console.
   * @param text The text to print. All arguments are concatenated.
   */
  write(text: any): void;

  /**
   * Prints text to the Console, and adds a newline character.
   * @param text The text to print. All arguments are concatenated.
   */
  writeln(text: any): void;
}
declare const $: $;

/**
 * The global BridgeTalk object.
 */
declare var BridgeTalk: any;

/**
 * The Infinity global property is a predefined variable with the value for infinity.
 */
declare var Infinity: number;

/**
 * The NaN global property is a predefined variable with the value NaN (Not-a-Number), as specified by the IEEE-754 standard.
 */
declare var NaN: number;

/**
 * The application object
 */
declare var app: Application;
declare interface Application {}

/**
 * Displays an alert box
 * @param message The text to display
 * @param title The title of the alert; ignored on the Macintosh
 * @param errorIcon Display an Error icon; ignored on the Macintosh
 */
declare function alert(
  message: string,
  title?: string,
  errorIcon?: boolean
): void;

/**
 * Displays an alert box with Yes and No buttons; returns true for Yes
 * @param message The text to display
 * @param noAsDefault Set to true to set the No button as the default button
 * @param title The title of the alert; ignored on the Macintosh
 */
declare function confirm(
  message: string,
  noAsDefault?: boolean,
  title?: string
): boolean;

/**
 * Decodes a string created with encodeURI().
 * @param uri The text to decode.
 */
declare function decodeURI(uri: string): string;

/**
 * Decodes a string created with encodeURIComponent().
 * @param uri The text to decode.
 */
declare function decodeURIComponent(uri: string): string;

/**
 * Encodes a string after RFC2396.
 * Create an UTF-8 ASCII encoded version of this string. The string is converted into UTF-8. Every non-alphanumeric character is encoded as a percent escape
 * character of the form %xx, where xx is the hex value of the character. After the conversion to UTF-8 encoding and escaping, it is guaranteed that the string does not contain characters codes greater than 127. The list of characters not to be encoded is -_.!~*'();/?:@&=+$,#. The method returns false on errors.
 * @param text The text to encode.
 */
declare function encodeURI(text: string): string;

/**
 * Encodes a string after RFC2396.
 * Create an UTF-8 ASCII encoded version of this string. The string is converted into UTF-8. Every non-alphanumeric character is encoded as a percent escape
 * character of the form %xx, where xx is the hex value of the character. After the conversion to UTF-8 encoding and escaping, it is guaranteed that the string does not contain characters codes greater than 127. The list of characters not to be encoded is -_.!~*'(). The method returns false on errors.
 * @param text The text to encode.
 */
declare function encodeURIComponent(text: string): string;

/**
 * Creates a URL-encoded string from aString.
 * In the new string, characters of aString that require URL encoding are replaced with the format %xx, where xx is the hexadecimal value of the character code in the Unicode character set.This format is used to transmit information appended to a URL during, for example, execution of the GET method.Use the unescape() global function to translate the string back into its original format. Returns a string which is aString URL-encoded.
 * @param aString The string to be encoded.
 */
declare function escape(aString: string): string;

/**
 * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
 * You can pass the result of an object's toSource() method to reconstruct that object.
 * @param stringExpression The string to evaluate.
 */
declare function eval(stringExpression: string): any;

/**
 * Evaluates an expression and reports whether the result is a finite number.
 * Returns true if the expression is a finite number, false otherwise. False if the value is infinity or negative infinity.
 * @param expression Any valid JavaScript expression.
 */
declare function isFinite(expression: number): boolean;

/**
 * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
 * Returns true if the result of evaluation is not a number (NaN), false if the value is a number.
 * @param expression Any valid JavaScript expression.
 */
declare function isNaN(expression: number): boolean;

/**
 * Returns true if the supplied string is a valid XML name.
 * @param name The XML name to test.
 */
declare function isXMLName(name: string): boolean;

/**
 * Localizes a ZString-encoded string and merges additional arguments into the string.
 * @param what The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
 * @param arguments Optional argument(s) to be merged into the string. There may be more than one argument.
 */
declare function localize(what: string, ...arguments: any[]): string;

/**
 * Extracts a floating-point number from a string.
 * Parses a string to find the first set of characters that can be converted to a floating point number, and returns that number, or NaN if it does not encounter characters that it can converted to a number.The function supports exponential notation.
 * @param text The string from which to extract a floating point number.
 */
declare function parseFloat(text: string): number;

/**
 * Extracts an integer from a string.
 * Parses a string to find the first set of characters, in a specified base, that can be converted to an integer, and returns that integer, or NaN if it does not encounter characters that it can convert to a number.
 * @param text The string from which to extract an integer.
 * @param base The base of the string to parse (from base 2 to base 36). If not supplied, base is determined by the format of string.
 */
declare function parseInt(text: string, base?: number): number;

/**
 * Displays a dialog allowing the user to enter text
 * Returns null if the user cancelled the dialog, the text otherwise
 * @param prompt The text to display
 * @param default_ The default text to preset the edit field with
 * @param title The title of the dialog;
 */
declare function prompt(
  prompt: string,
  default_?: string,
  title?: string
): string;

/**
 * Defines the default XML namespace.
 * This is a replacement function for the standard JavaScript statement set default xml namespace.
 * @param namespace The namespace to use. Omit this parameter to return to the empty namespace. This is either a Namespace object or a string.
 */
declare function setDefaultXMLNamespace(namespace: Namespace): void;

/**
 * Translates URL-encoded string into a regular string, and returns that string.
 * Use the escape() global function to URL-encode strings.
 * @param stringExpression The URL-encoded string to convert.
 */
declare function unescape(stringExpression: string): string;

/**
 * Creates a source code representation of the supplied argument, and returns it as a string.
 * @param what The object to uneval.
 */
declare function uneval(what: any): string;

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

/**
 * The $ object provides a number of debugging facilities and informational methods.
 */
interface $ {
  /**
   * The ExtendScript build information.
   */
  readonly build: string;

  /**
   * The ExtendScript build date.
   */
  readonly buildDate: Date;

  /**
   * The character used as the decimal point character in formatted numeric output.
   */
  decimalPoint: string;

  /**
   * The name of the current ExtendScript engine, if set.
   */
  readonly engineName: string;

  /**
   * The most recent run-time error information.
   * Assigning error text to this property generates a run-time error; however, the preferred way to generate a run-time error is to throw an Error object.
   */
  error: Error;

  /**
   * The file name of the current script.
   */
  readonly fileName: string;

  /**
   * Gets or sets low-level debug output flags.
   * A logical AND of bit flag values:
   * 0x0002 (2): Displays each line with its line number as it is executed.
   * 0x0040 (64): Enables excessive garbage collection. Usually, garbage collection starts when the number of objects has increased by a certain amount since the last garbage collection. This flag causes ExtendScript to garbage collect after almost every statement. This impairs performance severely, but is useful when you suspect that an object gets released too soon.
   * 0x0080 (128): Displays all calls with their arguments and the return value.
   * 0x0100 (256): Enables extended error handling (see strict).
   * 0x0200 (512): Enables the localization feature of the toString method. Equivalent to the localize property.
   */
  flags: number;

  /**
   * A reference to the global object, which contains the JavaScript global namespace.
   */
  readonly global: any;

  /**
   * A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
   * initialized during the application startup sequence. Every read access resets the timer to Zero.
   */
  readonly hiresTimer: number;

  /**
   * The path for include files for the current script.
   */
  readonly includePath: string;

  /**
   * The current debugging level, which enables or disables the JavaScript debugger.
   * One of 0 (no debugging), 1 (break on runtime errors), or 2 (full debug mode).
   */
  level: number;

  /**
   * The current line number of the currently executing script.
   */
  readonly line: number;

  /**
   * Gets or sets the current locale.
   * The string contains five characters in the form LL_RR, where LL is an ISO 639 language specifier, and RR is an ISO 3166 region specifier.Initially, this is the value that the application or the platform returns for the current user. You can set it to temporarily change the locale for testing. To return to the application or platform setting, set to undefined, null, or the empty string.
   */
  locale: string;

  /**
   * Set to true to enable the extended localization features of the built-in toString() method.
   */
  localize: boolean;

  /**
   * The ExtendScript memory cache size, in bytes.
   */
  memCache: number;

  /**
   * The current operating system version information.
   */
  readonly os: string;

  /**
   * An array of objects containing information about the display screens attached to your computer.
   * Each object has the properties left, top, right, bottom, which contain the four corners of each screen in global coordinates.A property primary is true if that object describes the primary display.
   */
  readonly screens: object[];

  /**
   * The current stack trace.
   */
  readonly stack: string;

  /**
   * Sets or clears strict mode for object modification.
   * When true, any attempt to write to a read-only property causes a runtime error. Some objects do not permit the creation of new properties when true.
   */
  strict: any;

  /**
   * The version number of the ExtendScript engine.
   * Formatted as a three-part number and description; for example: "3.92.95 (debug)".
   */
  readonly version: string;

  /**
   * Shows an About box for the ExtendScript component, and returns the text for the box.
   */
  about(): string;

  /**
   * Breaks execution at the current position.
   * @param condition A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
   */
  bp(condition?: any): void;

  /**
   * Invokes the platform-specific color selection dialog, and returns the selected color.
   * @param color The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
   */
  colorPicker(color: number): number;

  /**
   * Loads and evaluates a file.
   * @param file The file to load.
   * @param timeout An optional timeout in milliseconds.
   */
  evalFile(file: File, timeout?: number): any;

  /**
   * Initiates garbage collection in the ExtendScript engine.
   */
  gc(): void;

  /**
   * Retrieves the value of an environment variable.
   * @param name The name of the variable.
   */
  getenv(name: string): string;

  /**
   * Sets the value of an environment variable.
   * @param name The name of the variable.
   * @param value The value of the variable.
   */
  setenv(name: string, value: string): void;

  /**
   * Suspends the calling thread for a number of milliseconds.
   * During a sleep period, checks at 100 millisecond intervals to see whether the sleep should be terminated. This can happen if there is a break request, or if the script timeout has expired.
   * @param msecs Number of milliseconds to sleep.
   */
  sleep(msecs: number): void;

  /**
   * Converts this object to a string.
   */
  toString(): string;

  /**
   * Prints text to the Console.
   * @param text The text to print. All arguments are concatenated.
   */
  write(text: any): void;

  /**
   * Prints text to the Console, and adds a newline character.
   * @param text The text to print. All arguments are concatenated.
   */
  writeln(text: any): void;
}
declare const $: $;

interface ObjectConstructor {
  readonly prototype: Object;

  /**
   * Creates and returns a new object of a given type.
   * @param what The object type.
   */
  new (what: any): Object;
  (): any;
  (what: any): any;

  /**
   * Reports whether an object is still valid.
   * @param what The object to check.
   */
  isValid(what: Object): boolean;
}
declare const Object: ObjectConstructor;

/**
 * The base class of all JavaScript objects.
 */
interface Object {
  /**
   * Points to the constructor function that created this object.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly constructor: Function;

  /**
   * Points to the prototype object for this object.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly prototype: Object;

  /**
   * Retrieves and returns the Reflection object associated with this method or a property.
   * Note that this property is treated as an XML element in the XML class.
   */
  readonly reflect: Reflection;

  /**
   * Reports whether a given property is defined with an instance or within the prototype chain.
   * @param name The name of the property to check.
   */
  hasOwnProperty(name: string): boolean;

  /**
   * Checks whether the given object is a prototype of this object.
   * @param what The object to check.
   */
  isPrototypeOf(what: Object): boolean;

  /**
   * Reports whether a given property is enumerable.
   * @param name The name of the property to check.
   */
  propertyIsEnumerable(name: string): boolean;

  /**
   * Creates and returns a string representing this object, localized for the current locale. See toString().
   */
  toLocaleString(): string;

  /**
   * Creates and returns a string representation of this object.
   * This function serializes the object, so that it can, for example, be passed between engines. Pass the returned string back to eval() to recreate the object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Creates and returns a string representing this object.
   * Many objects (such as Date) override this method in favor of their own implementation. If an object has no string value and no user-defined toString() method, the default method returns [object type], where type is the object type or the name of the constructor function that created the object.
   */
  toString(): string;

  /**
   * Removes the watch function of a property.
   * @param name The name of the property to unwatch.
   */
  unwatch(name: string): void;

  /**
   * Retrieves and returns the primitive value of this object.
   * If the object has no primitive value, returns the object itself.Note that you rarely need to call this method yourself.The JavaScript interpreter automatically invokes it when encountering an object where a primitive value is expected.
   */
  valueOf(): Object;

  /**
   * Adds a watch function to a property, which is called when the value changes.
   * This function can accept, modify, or reject a new value that the user, application, or a script has attempted to place in a property.
   * @param name The name of the property to watch.
   * @param func The function to be called when the value of this property changes. This function must three arguments, and return as its result the value to be stored in the property. The arguments are: name: the name of the property that changes. oldValue: The old property value. newValue: The new property value that was specified.
   */
  watch(name: string, func: Function): void;
}

interface ArrayConstructor {
  readonly prototype: Array<any>;

  /**
   * Creates and returns a new array.
   * Takes any number of parameters, which become the elements of the array, or a single value which becomes the length of an empty array. Note that you cannot create a one-element array, as the single parameter value is interpreted as the length. Returns the new array.
   * @param arrayLength If no other parameters are passed, the initial length of the empty array. Otherwise, the first element.
   * @param values If there is more than one parameter, the array is initialized with the given parameters.
   */
  new (arrayLength?: number): any[];
  new <T>(arrayLength: number): T[];
  new <T>(...values: T[]): T[];
  (arrayLength?: number): any[];
  <T>(arrayLength: number): T[];
  <T>(...values: T[]): T[];
}
declare const Array: ArrayConstructor;

/**
 * An array with integer indexing and a length property.
 */
interface Array<T> {
  [n: number]: T;

  /**
   * The length of the array
   */
  length: number;

  /**
   * Returns a new array created by concatenating the given values to the end of the original array.
   * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
   * @param values Any number of values to be added to the end of the array. Can also be arrays.
   */
  concat(...values: T[][]): T[];

  /**
   * Joins all elements of the array into a string; optionally, each element is separated by delimiter.
   * Returns the string containing the joined elements and delimiters.
   * @param delimiter A string used to separate each element of the array. If omitted, the array elements are separated with a comma.
   */
  join(delimiter?: string): string;

  /**
   * Removes the last element from the array, decreases the length by 1, and returns the value of the element.
   * Returns the value of the deleted array element.
   */
  pop(): T | undefined;

  /**
   * Places one or more values onto the end of the array and increases length by n.
   * Returns the new length of the array.
   * @param values Any number of values to be pushed onto the end of the array.
   */
  push(...values: T[]): number;

  /**
   * Reverses the order of the elements in the array.
   * Returns the reversed array.
   */
  reverse(): T[];

  /**
   * Removes the first element from the array, decreases the length by 1, and returns the value of the element.
   * Returns the value of the deleted array element.
   */
  shift(): T | undefined;

  /**
   * Creates a new array, which contains a subset of the original array's elements.
   * The slice begins with the index start, and continues up to, but not including the index, end.If start or end is a negative number, the indexed is resolved counting backwards from the end of the array resulting in the element array[array. length + negativeIndex]. Returns a new array containing elements array[start] through array[end-1].
   */
  slice(start?: number, end?: number): T[];

  /**
   * Sorts the elements of the array in place, using the given function to compare to elements.
   * If no function is provided, the elements are sorted alphabetically.Returns no return value.
   * @param userFunction A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.
   */
  sort(userFunction?: (a: T, b: T) => number): this;

  /**
   * Removes num elements from the array beginning with index, start.
   * Optionally insert new elements beginning at index start.To ensure contiguity, elements are moved up to fill in any gaps.Returns a new array containing any elements deleted from the original array.
   * @param start The index of the first element to remove. Negative values are relative to the end of the array.
   * @param deleteCount The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.
   * @param values A list of one or more values to be added to the array starting at index start. Must specify a value for num, to use this argument.
   */
  splice(start: number, deleteCount?: number, ...values: T[]): T[];

  /**
   * Converts an array to a string and returns the string (localized).
   */
  toLocaleString(): string;

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Converts an array to a string and returns the string.
   * Yields the same result as array. join() when called without a parameter.Returns a comma-separated list of all the elements of the array.
   */
  toString(): string;

  /**
   * Adds one or more elements to the beginning of the array.
   * Returns the new array length.
   * @param values The values of one or more elements to be added to the beginning of the array.
   */
  unshift(...values: T[]): number;
}

/**
 * A global object containing a set of math functions and constants.
 */
interface Math {
  /**
   * Euler's constant and the base of natural logarithms.
   */
  readonly E: number;

  /**
   * The natural logarithm of 10.
   */
  readonly LN10: number;

  /**
   * The natural logarithm of 2.
   */
  readonly LN2: number;

  /**
   * The base 10 logarithm of e.
   */
  readonly LOG10E: number;

  /**
   * The base 2 logarithm of e.
   */
  readonly LOG2E: number;

  /**
   * The ratio of the circumference of a circle to its diameter.
   */
  readonly PI: number;

  /**
   * The reciprocal of the square root of 1/2.
   */
  readonly SQRT1_2: number;

  /**
   * The square root of 2.
   */
  readonly SQRT2: number;

  /**
   * Returns the absolute value of a number.
   * @param x A number.
   */
  abs(x: number): number;

  /**
   * Returns the arc cosine(in radians) of a number.
   * @param x A number.
   */
  acos(x: number): number;

  /**
   * Returns the arc sin(in radians) of a number.
   * @param x A number.
   */
  asin(x: number): number;

  /**
   * Returns the arc tangent(in radians) of a number.
   * @param x A number.
   */
  atan(x: number): number;

  /**
   * Returns the arc tangent of the quotient of its arguments (y/x).
   * @param y A number.
   * @param x A number.
   */
  atan2(y: number, x: number): number;

  /**
   * Rounds the number up to the nearest integer.
   * @param x A number.
   */
  ceil(x: number): number;

  /**
   * Returns the cosine of an angle provided in radians.
   * @param x An angle, in radians.
   */
  cos(x: number): number;

  /**
   * Returns Math.E raised to the power of a number.
   * @param x A number.
   */
  exp(x: number): number;

  /**
   * Rounds a number down to the nearest integer.
   * @param x A number.
   */
  floor(x: number): number;

  /**
   * Returns the natural logarithm of a number.
   * @param x A number.
   */
  log(x: number): number;

  /**
   * Returns the largest of zero or more numbers.
   * @param rest Numbers.
   */
  max(...rest: number[]): number;

  /**
   * Returns the smallest of zero or more numbers.
   * @param rest Numbers.
   */
  min(...rest: number[]): number;

  /**
   * Returns x raised to the power of y.
   * @param x Numbers.
   * @param y
   */
  pow(x: number, y: number): number;

  /**
   * Returns a pseudo-random number from 0.0 up to but not including 1.0.
   */
  random(): number;

  /**
   * Rounds a number to the nearest integer.
   * @param x A number.
   */
  round(x: number): number;

  /**
   * Returns the sine of an angle provided in radians.
   * @param x An angle, in radians.
   */
  sin(x: number): number;

  /**
   * Returns the square root of a number.
   * @param x A number.
   */
  sqrt(x: number): number;

  /**
   * Returns the tangent of an angle provided in radians.
   * @param x An angle, in radians.
   */
  tan(x: number): number;
}
declare const Math: Math;

interface DateConstructor {
  readonly prototype: Date;

  /**
   * Returns a new Date object holding the current date and time.
   * If parameters are supplied, returns a new Date object holding the supplied date and time.
   * @param year The year expressed in four digits.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   * @param day An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param min An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param sec An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param ms An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   */
  new (): Date;
  new (value: number): Date;
  new (value: string): Date;
  new (
    year: number,
    month: number,
    day?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number
  ): Date;

  /**
   * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
   * @param text The string to parse.
   */
  parse(text: string): Date;

  /**
   * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
   * @param year The year expressed in four digits, for example, 2001. To indicate for a year from 1900 to 1999, you can specify a value from 0 to 99.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   * @param day An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param min An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param sec An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param ms An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   */
  UTC(
    year: number,
    month?: number,
    day?: number,
    hours?: number,
    min?: number,
    sec?: number,
    ms?: number
  ): Date;
}
declare const Date: DateConstructor;

/**
 * A date/time object.
 */
interface Date {
  /**
   * Returns the day of the month of the specified Date object in local time.
   */
  getDate(): number;

  /**
   * Returns the day of the week for the specified Date object in local time.
   * This is an integer from 0 (Sunday) to 6 (Saturday).Returns the day of the week for date.
   */
  getDay(): number;

  /**
   * Returns the four digit year of the specified Date object in local time.
   */
  getFullYear(): number;

  /**
   * Returns the hour of the specified Date object in local time.
   */
  getHours(): number;

  /**
   * Returns the milliseconds of the specified Date object in local time.
   */
  getMilliseconds(): number;

  /**
   * Returns the minutes of the specified Date object in local time.
   */
  getMinutes(): number;

  /**
   * Returns the month of the specified Date object in local time.
   */
  getMonth(): number;

  /**
   * Returns the seconds of the specified Date object in local time.
   */
  getSeconds(): number;

  /**
   * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
   */
  getTime(): number;

  /**
   * Returns the difference in minutes between the computer's local time and UTC.
   */
  getTimezoneOffset(): number;

  /**
   * Returns the day of the month of the specified Date object according to UTC.
   */
  getUTCDate(): number;

  /**
   * Returns the day of the week for the specified Date object according to UTC.
   */
  getUTCDay(): number;

  /**
   * Returns the four digit year of the specified Date object according to UTC.
   */
  getUTCFullYear(): number;

  /**
   * Returns the hour of the specified Date object according to UTC.
   */
  getUTCHours(): number;

  /**
   * Returns the milliseconds of the specified Date object according to UTC.
   */
  getUTCMilliseconds(): number;

  /**
   * Returns the minutes of the specified Date object according to UTC.
   */
  getUTCMinutes(): number;

  /**
   * Returns the month of the specified Date object according to UTC.
   */
  getUTCMonth(): number;

  /**
   * Returns the seconds of the specified Date object according to UTC.
   */
  getUTCSeconds(): number;

  /**
   * Returns the year of the specified Date object, as a difference from 1900, in local time.
   */
  getYear(): number;

  /**
   * Sets the day of the month of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param date An integer from 1 to 31 indicating the day of the month.
   */
  setDate(date: number): number;

  /**
   * Sets the year of a specified Date object according to local time.
   * This method can also set month and date if those arguments are specified. Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param year A four-digit integer value indicating the year to set.
   */
  setFullYear(year: number): number;

  /**
   * Sets the hours of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param hour An integer value from 0 (midnight) to 23 (11 PM).
   */
  setHours(hour: number): number;

  /**
   * Sets the milliseconds of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param ms An integer value from 0 to 999.
   */
  setMilliseconds(ms: number): number;

  /**
   * Sets the minutes of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param minutes An integer value from 0 to 59.
   */
  setMinutes(minutes: number): number;

  /**
   * Sets the month of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param month An integer value from 0 (Jan) to 11 (Dec).
   */
  setMonth(month: number): number;

  /**
   * Sets the seconds of a specified Date object according to local time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970.
   * @param seconds An integer value from 0 to 59.
   */
  setSeconds(seconds: number): number;

  /**
   * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
   * Returns the value of ms.
   * @param ms An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
   */
  setTime(ms: number): number;

  /**
   * Sets the date of a specified Date object according to universal time.
   * Returns the number of milliseconds between the new date and midnight, January 1, 1970 in UTC time.
   * @param date An integer from 1 to 31 indicating the day of the month.
   */
  setUTCDate(date: number): number;

  /**
   * Sets the year of a specified Date object according to UTC, can also set the month and date.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param year The year expressed in four digits.
   */
  setUTCFullYear(year: number): number;

  /**
   * Sets the hours of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param hours An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
   */
  setUTCHours(hours: number): number;

  /**
   * Sets the milliseconds of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param ms An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
   */
  setUTCMilliseconds(ms: number): number;

  /**
   * Sets the minutes of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param min An integer value in the range 0 to 59 indicating the number of minutes to be set.
   */
  setUTCMinutes(min: number): number;

  /**
   * Sets the month of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param month An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
   */
  setUTCMonth(month: number): number;

  /**
   * Sets the seconds of a specified Date object according to UTC.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.
   * @param sec An integer value in the range 0 to 59 indicating the number of seconds to set.
   */
  setUTCSeconds(sec: number): number;

  /**
   * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
   * Returns the number of milliseconds between the date set and midnight, January 1, 1970.
   * @param year An integer value indicating the year to set. The method interprets a 1- or 2- digit value to mean the 1900s; for example, 13 is interpreted to mean 1913.
   */
  setYear(year: number): number;

  /**
   * Returns the date as a string.
   */
  toDateString(): string;

  /**
   * Returns the date and time adjusted to GMT (UTC) as a string.
   */
  toGMTString(): string;

  /**
   * Returns the date as a localized string.
   */
  toLocaleDateString(): string;

  /**
   * Returns a string value representing the date and time stored in the Date object in human readable format (localized).
   */
  toLocaleString(): string;

  /**
   * Returns the time as a localized string.
   */
  toLocaleTimeString(): string;

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Returns a string value representing the date and time stored in the Date object in human readable format.
   * Returns the following string is an example of the format returned by this method: Mon Aug 13, 10:54:21 GMT-0700 2001.
   */
  toString(): string;

  /**
   * Returns the time as a string.
   */
  toTimeString(): string;

  /**
   * Returns the date and time adjusted to UTC as a string.
   */
  toUTCString(): string;

  /**
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   */
  valueOf(): number;
}

interface FunctionConstructor {
  readonly prototype: Function;

  /**
   * The Function constructor parses the argument list and creates a Function object.
   * @param arguments The list of formal arguments, separated by commas. The formal arguments can also be supplied one by one; in this case, the last argument to the Function constructor is considered to be the function body.
   * @param body The body of the function to create.
   */
  new (arguments: string, body: string): Function;
  (arguments: string, body: string): Function;
}
declare const Function: FunctionConstructor;

/**
 * Wraps a built-in or JavaScript function.
 */
interface Function {
  /**
   * The function arguments, packed into an array.
   * This property is deprecated; use the arguments property within the function body.
   */
  arguments: object;

  /**
   * The number of formal arguments.
   * This property is deprecated; use the length property instead.
   */
  readonly arity: number;

  /**
   * The number of formal arguments.
   */
  readonly length: number;

  /**
   * The function name.
   */
  readonly name: string;

  /**
   * Apply a this object and an argument list to a function.
   * This function is different from call(); here, the arguments are suppliedas an Array object.
   * @param thisObj The object to be used as this.
   * @param args An array of arguments.
   */
  apply(thisObj: object, args: any): any;

  /**
   * Apply a this object and arguments to a function.
   * This function is different from apply(); here, the arguments are supplied one by one.
   * @param thisObj The object to be used as this.
   * @param arguments The first agument to the function. Add as many as needed.
   */
  call(thisObj: object, ...arguments: any[]): any;

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with JavaScript functions.
   */
  toSource(): string;

  /**
   * Returns the function definition as a string.
   */
  toString(): string;
}

interface StringConstructor {
  readonly prototype: String;

  /**
   * Returns a string representation of the value given as an argument.
   * @param value A number, variable, or object to convert to a string.
   */
  new (value?: any): String;
  (value: any): string;

  /**
   * Returns a string created by concatenation one or more characters specified as ASCII values.
   * @param value1 One or more ASCII values.
   */
  fromCharCode(value1: number): string;
}
declare const String: StringConstructor;

/**
 * A character string. Each character is adressable by index.
 */
interface String {
  /**
   * The length of the string.
   */
  readonly length: number;

  /**
   * Get character at index.
   */
  readonly [index: number]: string;

  /**
   * Returns a string consisting of this string enclosed in a <a> tag.
   * @param name The text to be stored in the anchors' name attribute.
   */
  anchor(name: string): string;

  /**
   * Returns a string consisting of this string enclosed in a <big> tag.
   */
  big(): string;

  /**
   * Returns a string consisting of this string enclosed in a <blink> tag.
   */
  blink(): string;

  /**
   * Returns a string consisting of this string enclosed in a <b> tag.
   */
  bold(): string;

  /**
   * Returns the character at the specified index.
   * @param index An integer between 0 and string.length -1, specifying the character to return.
   */
  charAt(index: number): string;

  /**
   * Returns the Unicode value of the character at the given index.
   * @param index An integer between 0 and string.length -1, specifying the character.
   */
  charCodeAt(index: number): number;

  /**
   * If necessary, converts the one or more given values to strings.
   * Those values are concatenated with the original string, the result is returned. The original string is not effected.Returns the concatenated string.
   * @param value The values to be concatenated with the given string.
   */
  concat(value: string): string;

  /**
   * Returns a string consisting of this string enclosed in a <tt> tag.
   */
  fixed(): string;

  /**
   * Returns a string consisting of this string enclosed in a <font> tag.
   * @param color The value to be stored in the tag's color attribute.
   */
  fontcolor(color: string): string;

  /**
   * Returns a string consisting of this string enclosed in a <font> tag.
   * @param size The value to be stored in the tag's size attribute.
   */
  fontsize(size: number): string;

  /**
   * Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.
   * @param searchValue The string for which to search.
   * @param offset The starting offset of the search.
   */
  indexOf(searchValue: string, offset?: number): number;

  /**
   * Returns a string consisting of this string enclosed in a <i> tag.
   */
  italics(): string;

  /**
   * Returns the index within the string of the last occurrence of the specified value.
   * The string is searched backward, starting at fromIndex.Returns the index within the string where the last occurrence of searchValue was found, or -1 if it was not found.
   * @param searchValue The string for which to search.
   * @param offset The starting offset of the search.
   */
  lastIndexOf(searchValue: string, offset?: number): number;

  /**
   * Returns a string consisting of this string enclosed in a <a> tag.
   * @param href The value to be stored in the tag's href attribute.
   */
  link(href: string): string;

  /**
   * Performs a localized comparison of two strings.
   * @param what The string to compare with.
   */
  localeCompare(what: string): number;

  /**
   * Matches a string against a regular expression.
   * @param regexp The regular expression to use.
   */
  match(regexp: RegExp | string): RegExpMatchArray | null;

  /**
   *
   * @param what
   * @param with_
   */
  replace(what: any, with_: string): string;

  /**
   *
   * @param search
   */
  search(search: RegExp): number;

  /**
   * Extracts a substring of the given string and returns it as a new string.
   * The substring begins at startSlice, and includes all characters up to, but not including the character at the index endSlice. A negative value indexes from the end of the string.For example, a negative value for startSlice is resolved as: string. length + startSlice.The original string is unchanged.Returns a substring of characters from the given string, starting at startSlice and ending with endSlice-1.
   * @param startSlice The index at which to begin extraction.
   * @param endSlice The index at which to end extraction. If omitted, slice extracts to the end of the string.
   */
  slice(startSlice: number, endSlice?: number): string;

  /**
   * Returns a string consisting of this string enclosed in a <small> tag.
   */
  small(): string;

  /**
   * Splits a string into a group of substrings, places those strings in an array, and returns the array.
   * The substrings are created by breaking the original string at places that match delimiter, the delimiter characters are removed.Returns an array whose elements are the substrings.
   * @param delimiter Specifies the string to use for delimiting. If delimiter is omitted, the array returned contains one element, consisting of the entire string.
   * @param limit
   */
  split(delimiter: string, limit?: number): string[];

  /**
   * Returns a string consisting of this string enclosed in a <strike> tag.
   */
  strike(): string;

  /**
   * Returns a string consisting of this string enclosed in a <sub> tag.
   */
  sub(): string;

  /**
   * Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
   * The original string is unchanged.Returns a string containing the extracted characters.
   * @param start Location at which to begin extracting characters.
   * @param length The number of characters to extract.
   */
  substr(start: number, length?: number): string;

  /**
   * Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
   * The original string is unchanged.Returns a substring of characters from the given string, starting at indexA and ending with indexB-1.
   * @param indexA The index to begin extracting.
   * @param indexB The index at which to end extraction. If omitted, slice extracts to the end of the string.
   */
  substring(indexA: number, indexB?: number): string;

  /**
   * Returns a string consisting of this string enclosed in a <sup> tag.
   */
  sup(): string;

  /**
   * Returns a new string which contains all the characters of the original string converted to lowercase (localized).
   * The original string is unchanged.
   */
  toLocaleLowerCase(): string;

  /**
   * Returns a new string which contains all the characters of the original string converted to uppercase (localized).
   * The original string is unchanged.
   */
  toLocaleUpperCase(): string;

  /**
   * Returns a new string which contains all the characters of the original string converted to lowercase.
   * The original string is unchanged.
   */
  toLowerCase(): string;

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Returns itself.
   */
  toString(): string;

  /**
   * Returns a new string which contains all the characters of the original string converted to uppercase.
   * The original string is unchanged.
   */
  toUpperCase(): string;

  /**
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   */
  valueOf(): string;
}

interface NumberConstructor {
  readonly prototype: Number;

  /**
   * Returns a new Number object set to the value of the argument converted to a number.
   * @param value The value of the object being created.
   */
  new (value?: any): Number;
  (value: any): number;

  /**
   * A constant representing the largest representable number.
   */
  readonly MAX_VALUE: number;

  /**
   * A constant representing the smallest representable number.
   */
  readonly MIN_VALUE: number;

  /**
   * A constant representing negative infinity.
   */
  readonly NEGATIVE_INFINITY: number;

  /**
   * A constant representing the special "Not a Number" value.
   */
  readonly NaN: number;

  /**
   * A constant representing positive infinity.
   */
  readonly POSITIVE_INFINITY: number;
}
declare const Number: NumberConstructor;

/**
 * Wraps a numeric value.
 */
interface Number {
  /**
   * Converts the Number object to a string in scientific notation.
   * @param decimals The number of decimals.
   */
  toExponential(decimals: number): string;

  /**
   * Converts the Number object to a string with fixed decimals.
   * @param decimals The number of decimals.
   */
  toFixed(decimals: number): string;

  /**
   * Returns the value of a Number object converted to a string, using localized conventions.
   */
  toLocaleString(): string;

  /**
   * Converts the Number object to a string in either scientific or fixed notation, epending on its value.
   * @param decimals The number of decimals.
   */
  toPrecision(decimals: number): string;

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Returns the value of a Number object converted to a string.
   * @param radix The optional conversion radix.
   */
  toString(radix?: number): string;

  /**
   * Returns the value of a Number object as a primitive number.
   */
  valueOf(): number;
}

interface BooleanConstructor {
  readonly prototype: Boolean;

  /**
   * Creates and returns a new Boolean object set to the value of the argument converted to a boolean.
   * @param value The value to be converted to a Boolean.
   */
  new (value?: any): Boolean;
  (value: any): boolean;
}
declare const Boolean: BooleanConstructor;

/**
 * Wraps a Boolean value.
 */
interface Boolean {
  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Returns the string representation of the value of bool.
   * The method returns the string true if the primitive value of bool is true; otherwise it returns the string false.
   */
  toString(): string;

  /**
   * Returns the primitive value of bool.
   * The method returns true if the primitive value of bool is true; otherwise it returns false.
   */
  valueOf(): boolean;
}

interface RegExpConstructor {
  readonly prototype: RegExp;

  /**
   * Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.
   * @param pattern The pattern to convert.
   * @param flags Flags that control how the conversion is performed. A string containing any combination of the letters i, m, g: "i" -- ignore case in pattern matching "m" -- treat the string as multiple lines "g" -- do global pattern matching
   */
  new (pattern: string | RegExp, flags?: string): RegExp;
  (pattern: string | RegExp, flags?: string): RegExp;

  /**
   * The matched subexpression #1.
   */
  readonly $1: string;

  /**
   * The matched subexpression #2.
   */
  readonly $2: string;

  /**
   * The matched subexpression #3.
   */
  readonly $3: string;

  /**
   * The matched subexpression #4.
   */
  readonly $4: string;

  /**
   * The matched subexpression #5.
   */
  readonly $5: string;

  /**
   * The matched subexpression #6.
   */
  readonly $6: string;

  /**
   * The matched subexpression #7.
   */
  readonly $7: string;

  /**
   * The matched subexpression #8.
   */
  readonly $8: string;

  /**
   * The matched subexpression #9.
   */
  readonly $9: string;

  /**
   * Indicates whether the match is a global match.
   */
  global: boolean;

  /**
   * Indicates whether the match is not case sensitive.
   */
  ignoreCase: boolean;

  /**
   * The original input string.
   */
  input: string;

  /**
   * The last match.
   */
  readonly lastMatch: string;

  /**
   * The value of the last matched subexpression.
   */
  readonly lastParen: string;

  /**
   * The string before the match.
   */
  readonly leftContext: string;

  /**
   * Indicates whether the match matches multiple lines.
   */
  multiline: boolean;

  /**
   * The string after the match.
   */
  readonly rightContext: string;
}
declare const RegExp: RegExpConstructor;

/**
 * Wraps a regular expression.
 */
interface RegExp {
  /**
   * Compiles a string to a regular expression. Returns true if the compilation was successful.
   * @param pattern The pattern to compile.
   */
  compile(pattern: string): boolean;

  /**
   * Execute a regular expression.
   * The return value is an array of matches, with the first element containing the match, and successive elements containing the results of any matching subexpression in their order of appearance. If there is no match, the result is null.
   * @param text The string to match.
   */
  exec(text: string): RegExpExecArray | null;

  /**
   * Execute a regular expression, and return true if there is a match.
   * @param text The string to match.
   */
  test(text: string): boolean;

  /**
   * Converts this RegExp object to a string.
   */
  toString(): string;
}

interface RegExpMatchArray extends Array<string> {
  index?: number;
  input?: string;
}

interface RegExpExecArray extends Array<string> {
  index: number;
  input: string;
}

interface ErrorConstructor {
  readonly prototype: Error;

  /**
   * Creates a new Error object.
   * @param msg The error message.
   * @param file The name of the file.
   * @param line The line number.
   */
  new (msg: string, file?: string, line?: number): Error;
  (msg: string, file?: string, line?: number): Error;
}
declare const Error: ErrorConstructor;

/**
 * Wraps a runtime error.
 */
interface Error {
  /**
   * The error message.
   */
  description: string;

  /**
   * Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.
   */
  toSource(): string;

  /**
   * Convert this object to a string.
   */
  toString(): string;
}

interface FileConstructor {
  readonly prototype: File;

  /**
   * Creates and returns a new File object referring to a given file system location.
   * @param path The full or partial path name of the file,in platform-specific or URI format. The value stored in the object is the absolute path. The file that the path refers to does not need to exist.If the path refers to an existing folder: The File function returns a Folder object instead of a File object. The new operator returns a File object for a nonexisting file with the same name.
   */
  new (path?: string): File;
  (path?: string): File;

  /**
   * The name of the file system.
   * This is a class property accessed through the File constructor. Valid values are "Windows", "Macintosh", and "Unix".
   */
  readonly fs: string;

  /**
   * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
   * See also String.decodeURI().
   * @param uri The UTF-8 encoded string to decode.
   */
  decode(uri: string): string;

  /**
   * Encodes a string as required by RFC 2396, and returns the encoded string.
   * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
   * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
   * See also encodeURI().
   * @param name The string to encode.
   */
  encode(name: string): string;

  /**
   * Reports whether a given encoding is available.
   * @param name The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.
   */
  isEncodingAvailable(name: string): boolean;

  /**
   * Opens a dialog so the user can select one or more files to open.
   * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file or multiple files, and creates new File objects to represent the selected files.
   * If the user clicks OK, returns a File object for the selected file, or an array of objects if multiple files are selected.
   * If the user cancels, returns null.
   * @param prompt The prompt text, displayed if the dialog allows a prompt.
   * @param filter A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
   * @param multiSelect When true, the user can select multiple files and the return value is an array.
   */
  openDialog(prompt?: string, filter?: any, multiSelect?: boolean): File;

  /**
   * Opens a dialog so the user can select a file name to save to.
   * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file location to which to save information, and creates a new File object to represent the selected file location.
   * If the user clicks OK, returns a File object for the selected file location.
   * If the user cancels, returns null.
   * @param prompt The prompt text, displayed if the dialog allows a prompt.
   * @param filter In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.
   */
  saveDialog(prompt?: string, filter?: any): File;
}
declare const File: FileConstructor;

/**
 * Represents a file in the local file system in a platform-independent manner.
 */
interface File {
  /**
   * The full path name for the referenced file in URI notation.
   */
  readonly absoluteURI: string;

  /**
   * If true, the object refers to a file system alias or shortcut.
   */
  readonly alias: boolean;

  /**
   * The creation date of the referenced file, or null if the object does not refer to a file on disk.
   */
  readonly created: Date;

  /**
   * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
   */
  readonly creator: string;

  /**
   * The localized name of the referenced file, without the path specification.
   */
  readonly displayName: string;

  /**
   * Gets or sets the encoding for subsequent read/write operations.
   * One of the encoding constants listed in the JavaScript Tools Guide. If the value is not recognized, uses the system default encoding.A special encoder, BINARY, is used to read binary files. It stores each byte of the file as one Unicode character regardless of any encoding. When writing, the lower byte of each Unicode character is treated as a single byte to write.
   */
  encoding: string;

  /**
   * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
   */
  readonly eof: boolean;

  /**
   * A string containing a message describing the most recent file system error.
   * Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.
   */
  error: string;

  /**
   * If true, this object refers to a file or file-system alias that actually exists in the file system.
   */
  readonly exists: boolean;

  /**
   * The platform-specific full path name for the referenced file.
   */
  readonly fsName: string;

  /**
   * The full path name for the referenced file in URI notation.
   */
  readonly fullName: string;

  /**
   * When true, the file is not shown in the platform-specific file browser.
   * If the object references a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
   */
  hidden: boolean;

  /**
   * The size of the file in bytes.
   * Can be set only for a file that is not open, in which case it truncates or pads the file with 0-bytes to the new length.
   */
  length: number;

  /**
   * How line feed characters are written in the file system.
   * One of the values "Windows", "Macintosh", or "Unix".
   */
  lineFeed: string;

  /**
   * The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.
   */
  readonly modified: Date;

  /**
   * The file name portion of the absolute URI for the referenced file, without the path specification.
   */
  readonly name: string;

  /**
   * The Folder object for the folder that contains this file.
   */
  readonly parent: Folder;

  /**
   * The path portion of the absolute URI for the referenced file, without the file name.
   */
  readonly path: string;

  /**
   * When true, prevents the file from being altered or deleted.
   * If the referenced file is a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
   */
  readonly: boolean;

  /**
   * The path name for the object in URI notation, relative to the current folder.
   */
  readonly relativeURI: string;

  /**
   * The file type as a four-character string.
   * In Mac OS, the Mac OS file type.
   * In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for any other file.
   */
  readonly type: string;

  /**
   * Changes the path specification of the referenced file.
   * @param path A string containing the new path, absolute or relative to the current folder.
   */
  changePath(path: string): boolean;

  /**
   * Closes this open file.
   * Returns true if the file was closed successfully, false if an I/O error occurred.
   */
  close(): boolean;

  /**
   * Copies this object’s referenced file to the specified target location.
   * Resolves any aliases to find the source file. If a file exists at the target location, it is overwritten.
   * Returns true if the copy was successful.
   * @param target A string with the URI path to the target location, or a File object that references the target location.
   */
  copy(target: string): boolean;

  /**
   * Makes this file a file-system alias or shortcut to the specified file.
   * The referenced file for this object must not yet exist on disk. Returns true if the operation was successful.
   * @param path A string containing the path of the target file.
   */
  createAlias(path: string): void;

  /**
   * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
   * You can use this method to run scripts, launch applications, and so on.Returns true immediately if the application launch was successful.
   */
  execute(): boolean;

  /**
   * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
   * If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.
   * @param basePath A base path in URI notation.
   */
  getRelativeURI(basePath: string): string;

  /**
   * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
   * Returns true if the file was opened successfully.The method attempts to detect the encoding of the open file. It reads a few bytes at the current location and tries to detect the Byte Order Mark character 0xFFFE. If found, the current position is advanced behind the detected character and the encoding property is set to one of the strings UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character is not found, it checks for zero bytes at the current location and makes an assumption about one of the above formats (except UTF-8). If everything fails, the encoding property is set to the system encoding.
   * IMPORTANT: Be careful about opening a file more than once. The operating system usually permits you to do so, but if you start writing to the file using two different File objects, you can destroy your data.
   * @param mode The read-write mode, a single-character string. One of these characters: r (read) Opens for reading. If the file does not exist or cannot be found, the call fails. w (write) Opens a file for writing. If the file exists, its contents are destroyed. If the file does not exist, creates a new, empty file. e (edit) Opens an existing file for reading and writing. a (append) Opens an existing file for reading and writing, and moves the current position to the end of the file.
   * @param type In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
   * @param creator In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
   */
  open(mode: string, type?: string, creator?: string): boolean;

  /**
   * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
   * Differs from the class method openDialog() in that it presets the current folder to this File object’s parent folder and the current file to this object’s associated file.
   * If the user clicks OK, returns a File or Folder object for the selected file or folder, or an array of objects.
   * If the user cancels, returns null.
   * @param prompt A string containing the prompt text, if the dialog allows a prompt.
   * @param filter A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
   * @param multiSelect When true, the user can select multiple files and the return value is an array.
   */
  openDlg(prompt?: string, filter?: any, multiSelect?: boolean): File;

  /**
   * Reads the contents of the file, starting at the current position.
   * Returns a string that contains up to the specified number of characters. If a number of characters is not supplied, reads from the current position to the end of the file. If the file is encoded, multiple bytes might be read to create single Unicode characters.
   * @param chars An integer specifying the number of characters to read.
   */
  read(chars?: number): string;

  /**
   * Reads a single text character from the file at the current position.
   * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.If the file is encoded, multiple bytes might be read to create a single Unicode character. Returns a string that contains the character.
   */
  readch(): string;

  /**
   * Reads a single line of text from the file at the current position.
   * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.. If the file is encoded, multiple bytes might be read to create single Unicode characters. Returns a string that contains the text.
   */
  readln(): string;

  /**
   * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
   * Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
   * IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
   */
  remove(): boolean;

  /**
   * Renames the associated file.
   * Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the file was successfully renamed.
   * @param newName The new file name, with no path information.
   */
  rename(newName: string): boolean;

  /**
   * Attempts to resolve the file-system alias or shortcut that this object refers to.
   * If successful, creates and returns a new File object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.
   */
  resolve(): File;

  /**
   * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
   * Differs from the class method saveDialog() in that it presets the current folder to this File object’s parent folder and the file to this object’s associated file.
   * If the user clicks OK, returns a File object for the selected file.
   * If the user cancels, returns null.
   * @param prompt A string containing the prompt text, if the dialog allows a prompt.
   * @param filter In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.
   */
  saveDlg(prompt?: string, filter?: any): File;

  /**
   * Seeks to a given position in the file.
   * The new position cannot be less than 0 or greater than the current file size. Returns true if the position was changed.
   * @param pos The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.
   * @param mode The seek mode. One of: 0: Seek to absolute position, where pos=0 is the first byte of the file. This is the default. 1: Seek relative to the current position. 2. Seek backward from the end of the file.
   */
  seek(pos: number, mode?: number): boolean;

  /**
   * Retrieves the current position as a byte offset from the start of the file.
   * Returns a number, the position index.
   */
  tell(): number;

  /**
   * Creates and returns a serialized string representation of this object.
   * Pass the resulting string to eval() to recreate the object.
   */
  toSource(): string;

  /**
   * Converts this object to a string.
   */
  toString(): string;

  /**
   * Writes the specified text to the file at the current position.
   * You can supply multiple text values; the strings are concatenated to form a single string.For encoded files, writing a single Unicode character may write multiple bytes. Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
   * @param text A text string to be written.
   */
  write(text: string): boolean;

  /**
   * Writes a string to the file at the current position and appends a line-feed sequence.
   * You can supply multiple text values. The strings are concatenated into a single string, which is written in the file followed by one line-feed sequence, of the style specified by this object's linefeed property.For encoded files, writing a single Unicode character may write multiple bytes.Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
   * @param text A text string to be written.
   */
  writeln(text: string): boolean;
}

interface FolderConstructor {
  readonly prototype: Folder;

  /**
   * Creates and returns a new Folder object referring to a given file-system location.
   * If the path name refers to an already existing disk file, a File object is returned instead.Returns the new Folder object.
   * @param path The absolute or relative path to the folder associated with this object, specified in URI format. The value stored in the object is the absolute path.The path need not refer to an existing folder. If the path refers to an existing file, rather than a folder: The Folder() function returns a File object instead of a Folder object. The new operator returns a Folder object for a nonexisting folder with the same name.
   */
  new (path?: string): Folder;
  (path?: string): Folder;

  /**
   * The folder containing the application data for all users.
   * In Windows, the value of %APPDATA% (by default, C:\\Documents and Settings\\All Users\\Application Data)
   * In Mac OS, /Library/Application Support
   */
  readonly appData: Folder;

  /**
   * In Mac OS, a Folder object for the folder containing the bundle of the running application.
   */
  readonly appPackage: Folder;

  /**
   * A Folder object for the folder containing common files for all programs installed by the user.
   * In Windows, the value of %CommonProgramFiles% (by default, C:\\Program Files\\Common Files)
   * In Mac OS, /Library/Application Support
   */
  readonly commonFiles: Folder;

  /**
   * A Folder object for the current folder.
   * Assign a Folder object or a string containing the new path name to set the current folder. This is a class property accessed through the Folder constructor.
   */
  current: Folder;

  /**
   * A Folder object for the folder that contains the user’s desktop.
   * In Windows, C:\\Documents and Settings\\username\\Desktop
   * In Mac OS, ~/Desktop
   */
  readonly desktop: Folder;

  /**
   * The name of the current file system.
   * One of "Windows", "Macintosh", or "Unix".
   */
  readonly fs: string;

  /**
   * A folder pointing to the user's My Documents folder.
   * In Windows, C:\\Documents and Settings\\username\\My Documents
   * In Mac OS,~/Documents
   */
  readonly myDocuments: Folder;

  /**
   * A Folder object for the folder containing the executable image of the running application.
   */
  readonly startup: Folder;

  /**
   * A Folder object for the folder containing the operating system files.
   * In Windows, the value of %windir% (by default, C:\\Windows)
   * In Mac OS, /System
   */
  readonly system: Folder;

  /**
   * A Folder object for the default folder for temporary files.
   */
  readonly temp: Folder;

  /**
   * A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
   * folder containing a database; therefore, the property value is null on Windows.
   */
  readonly trash: Folder;

  /**
   * A Folder object for the folder containing the user's application data.
   * In Windows, the value of %USERDATA% (by default, C:\\Documents and Settings\\username\\Application Data)
   * In Mac OS,~/Library/Application Support.
   */
  readonly userData: Folder;

  /**
   * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
   * See also String.decodeURI().
   * @param uri The UTF-8 string to decode.
   */
  decode(uri: string): string;

  /**
   * Encodes a string as required by RFC 2396, and returns the encoded string.
   * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
   * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
   * See also encodeURI().
   * @param name The string to encode.
   */
  encode(name: string): string;

  /**
   * Reports whether a given encoding is available.
   * @param name The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.
   */
  isEncodingAvailable(name: string): boolean;

  /**
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
   * Differs from the object method selectDlg() in that it does not preselect a folder.
   * If the user clicks OK, returns a File or Folder object for the selected file or folder.
   * If the user cancels, returns null.
   * @param prompt The prompt text, if the dialog allows a prompt.
   */
  selectDialog(prompt?: string): Folder;
}
declare const Folder: FolderConstructor;

/**
 * Represents a file-system folder or directory in a platform-independent manner.
 */
interface Folder {
  /**
   * The full path name for the referenced folder in URI notation.
   */
  readonly absoluteURI: string;

  /**
   * When true, the object refers to a file system alias or shortcut.
   */
  readonly alias: boolean;

  /**
   * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
   */
  readonly created: Date;

  /**
   * The localized name portion of the absolute URI for the referenced folder, without the path specification.
   */
  readonly displayName: string;

  /**
   * A message describing the most recent file system error.
   * Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.
   */
  error: string;

  /**
   * When true, this object refers to a folder that currently exists in the file system.
   */
  readonly exists: boolean;

  /**
   * The platform-specific name of the referenced folder as a full path name.
   */
  readonly fsName: string;

  /**
   * The full path name for the referenced folder in URI notation. .
   */
  readonly fullName: string;

  /**
   * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
   */
  readonly modified: Date;

  /**
   * The folder name portion of the absolute URI for the referenced file, without the path specification.
   */
  readonly name: string;

  /**
   * TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
   */
  readonly parent: Folder;

  /**
   * The path portion of the object absolute URI for the referenced file, without the folder name.
   */
  readonly path: string;

  /**
   * The path name for the referenced folder in URI notation, relative to the current folder.
   */
  readonly relativeURI: string;

  /**
   * Changes the path specification of the referenced folder.
   * @param path A string containing the new path, absolute or relative to the current folder.
   */
  changePath(path: string): boolean;

  /**
   * Creates a folder at the location given by this object's path property.
   * Returns true if the folder was created.
   */
  create(): boolean;

  /**
   * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
   * Returns true immediately if the folder was opened successfully.
   */
  execute(): boolean;

  /**
   * Retrieves the contents of this folder, filtered by the supplied mask.
   * Returns an array of File and Folder objects, or null if this object's referenced folder does not exist.
   * @param mask A search mask for file names, specified as a string or a function. A mask string can contain question mark (?) and asterisk (*) wild cards. Default is "*", which matches all file names. Can also be the name of a function that takes a File or Folder object as its argument. It is called for each file or folder found in the search; if it returns true, the object is added to the return array. NOTE: In Windows, all aliases end with the extension .lnk. ExtendScript strips this from the file name when found, in order to preserve compatibility with other operating systems. You can search for all aliases by supplying the search mask "*.lnk", but note that such code is not portable.
   */
  getFiles(mask: any): Array<File | Folder>;

  /**
   * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
   * If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.
   * @param basePath A base path in URI notation.
   */
  getRelativeURI(basePath?: string): string;

  /**
   * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
   * Folders must be empty before they can be deleted. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
   * IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
   */
  remove(): boolean;

  /**
   * Renames the associated folder.
   * Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the folder was successfully renamed.
   * @param newName The new folder name, with no path information.
   */
  rename(newName: string): boolean;

  /**
   * Attempts to resolve the file-system alias or shortcut that this object refers to.
   * If successful, creates and returns a new Folder object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.
   */
  resolve(): Folder;

  /**
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
   * Differs from the class method selectDialog() in that it preselects this folder.
   * If the user clicks OK, returns a File or Folder object for the selected file or folder.
   * If the user cancels, returns null.
   * @param prompt The prompt text, if the dialog allows a prompt.
   */
  selectDlg(prompt?: string): Folder;

  /**
   * Creates and returns a serialized string representation of this object.
   * Pass the resulting string to eval() to recreate the object.
   */
  toSource(): string;

  /**
   * Converts this object to a string.
   */
  toString(): string;
}

interface SocketConstructor {
  readonly prototype: Socket;

  /**
   * Creates a new Socket object.
   */
  new (): Socket;
  (): Socket;
}
declare const Socket: SocketConstructor;

/**
 * Creates a TCP/IP connection, or establishes a TCP/IP server.
 */
interface Socket {
  /**
   * When true, the connection is active.
   */
  readonly connected: boolean;

  /**
   * Sets or retrieves the name of the encoding used to transmit data.
   * Typical values are "ASCII", "BINARY", or "UTF-8".
   */
  encoding: string;

  /**
   * When true, the receive buffer is empty.
   */
  readonly eof: boolean;

  /**
   * A message describing the most recent error. Setting this value clears any error message.
   */
  error: string;

  /**
   * The name of the remote computer when a connection is established.
   * If the connection is shut down or does not exist, the property contains the empty string.
   */
  readonly host: string;

  /**
   * The timeout in seconds to be applied to read or write operations.
   */
  timeout: number;

  /**
   * Terminates the open connection.
   * Returns true if the connection was closed, false on I/O errors.
   * Deleting the object also closes the connection, but not until JavaScript garbage-collects the object. The connection might stay open longer than you wish if you do not close it explicitly.
   */
  close(): boolean;

  /**
   * Instructs the object to start listening for an incoming connection.
   * The call to open() and the call to listen()are mutually exclusive. Call one function or the other, not both.
   * @param port The TCP/IP port number to listen on. Valid port numbers are 1 to 65535. Typical values are 80 for a Web server, 23 for a Telnet server and so on.
   * @param encoding The encoding to be used for the connection Typical values are "ASCII", "BINARY", or "UTF-8".
   */
  listen(port: number, encoding?: string): boolean;

  /**
   * Opens the connection for subsequent read/write operations.
   * The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.
   * @param host The server to connect to. This can be a DNS name, an IPv4 address, or an IPv6 address, followed by a colon and a port number.
   * @param encoding The encoding to be used for the connection Typical values are "ASCII", "binary", or "UTF-8".
   */
  open(host: string, encoding?: string): boolean;

  /**
   * Checks a listening object for a new incoming connection.
   * If a connection request was detected, the method returns a new Socket object that wraps the new connection. Use this connection object to communicate with the remote computer. After use, close the connection and delete the JavaScript object. If no new connection request was detected, the method returns null.
   */
  poll(): Socket;

  /**
   * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
   * Returns a string that contains up to the number of characters that were supposed to be read, or the number of characters read before the connection closed or timed out.
   * @param count The number of characters to read. If not supplied, the connection attempts to read as many characters it can get and returns immediately.
   */
  read(count?: number): string;

  /**
   * Reads one line of text up to the next line feed.
   * Line feeds are recognized as LF or CRLF pairs. CR characters are ignored. Returns a string containing the characters.
   */
  readln(): string;

  /**
   * Concatenates all arguments into a single string and writes that string to the connection.
   * @param text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
   */
  write(text: string): boolean;

  /**
   * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
   * @param text Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
   */
  writeln(text: string): boolean;
}

/**
 * Provides information about a method, a property or a method parameters.
 */
interface ReflectionInfo {
  /**
   * The description of method or function arguments.
   */
  readonly arguments: ReflectionInfo[];

  /**
   * The data type.
   */
  readonly dataType: string;

  /**
   * The default value.
   */
  readonly defaultValue: any;

  /**
   * The long description text.
   */
  readonly description: string;

  /**
   * The short description text.
   */
  readonly help: string;

  /**
   * Contains true if the class describes a collection class.
   */
  readonly isCollection: boolean;

  /**
   * The maximum value.
   */
  readonly max: number;

  /**
   * The minimum value.
   */
  readonly min: number;

  /**
   * The element name.
   */
  readonly name: string;

  /**
   * The class object that this element belongs to.
   */
  readonly parent: Reflection;

  /**
   * Sample code, if present.
   */
  readonly sampleCode: string;

  /**
   * A file containing sample code. May be null.
   */
  readonly sampleFile: File;

  /**
   * The element type.
   * One of unknown, readonly, readwrite, createonly, method or parameter.
   */
  readonly type: string;
}
declare const ReflectionInfo: ReflectionInfo;

/**
 * Provides information about a class.
 */
interface Reflection {
  /**
   * The long description text.
   */
  readonly description: string;

  /**
   * The short description text.
   */
  readonly help: string;

  /**
   * An array of method descriptions.
   */
  readonly methods: ReflectionInfo[];

  /**
   * The class name.
   */
  readonly name: string;

  /**
   * An array of property descriptions.
   */
  readonly properties: ReflectionInfo[];

  /**
   * Sample code, if present.
   */
  readonly sampleCode: string;

  /**
   * A file containing sample code. May be null.
   */
  readonly sampleFile: File;

  /**
   * An array of class method descriptions.
   */
  readonly staticMethods: ReflectionInfo[];

  /**
   * An array of class property descriptions.
   */
  readonly staticProperties: ReflectionInfo[];

  /**
   * Finds an element description by name.
   * @param name The name of the element to find.
   */
  find(name: string): ReflectionInfo;

  /**
   * Returns this class information as XML in OMV format.
   */
  toXML(): XML;
}
declare const Reflection: Reflection;

interface QNameConstructor {
  readonly prototype: QName;

  /**
   * Creates a QName object.
   * @param uri The URI, specified as a Namespace object, an existing QName object, or string. If this is a Namespace object, the URI is set to the namespace URI, and there is no local name. If this is a QName object, the URI and localName is set to those of that object. If this is a string, the URI is set to that string.
   * @param name The local name. Used only if URI is given as a string.
   */
  new (uri: any, name?: string): QName;
  (uri: any, name?: string): QName;
}
declare const QName: QNameConstructor;

/**
 * A qualified XML name, containing the URI and the local name.
 */
interface QName {
  /**
   * The local name part of the qualified name.
   */
  readonly localName: string;

  /**
   * The URI part of the qualified name.
   */
  readonly uri: string;
}

interface NamespaceConstructor {
  readonly prototype: Namespace;

  /**
   * Creates a Namespace object.
   * @param prefix The URIprefix, specified as an existing Namespace object, QName object, or string. If this is a Namespace or a QName object, the URI and prefix are set to that of the object. If this is a string, the prefix is set to that string, and the URI must be specified.
   * @param uri The URI if the prefix is specified as a string.
   */
  new (prefix: any, uri?: string): Namespace;
  (prefix: any, uri?: string): Namespace;
}
declare const Namespace: NamespaceConstructor;

/**
 * A XML namespace object.
 */
interface Namespace {
  /**
   * The named prefix.
   */
  readonly prefix: string;

  /**
   * The URI.
   */
  readonly uri: string;
}

interface XMLConstructor {
  readonly prototype: XML;

  /**
   * Parses an XML string. Throws an error if the XML is incorrect.
   * @param text The text to parse.
   */
  new (text: string): XML;
  (text: string): XML;

  /**
   * Controls whether XML comments should be parsed (false) or ignored (true).
   */
  ignoreComments: boolean;

  /**
   * Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).
   */
  ignoreProcessingInstructions: boolean;

  /**
   * Controls whether whitespace should be parsed (false) or ignored (true).
   */
  ignoreWhitespace: boolean;

  /**
   * The number of spaces used to indent pretty-printed XML.
   */
  prettyIndent: number;

  /**
   * When true, XML is pretty-printed when converting to a string.
   */
  prettyPrinting: boolean;

  /**
   * Returns an object containing the default parsing and print settings for XML.
   */
  defaultSettings(): object;

  /**
   * Sets the parsing and print setting for XML using an object returned by the settings() method.
   * @param obj The object containing the settings to set.
   */
  setSettings(obj: object): void;

  /**
   * Returns an object containing the current parsing and print settings for XML.
   */
  settings(): object;
}
declare const XML: XMLConstructor;

/**
 * Wraps XML into an object.
 */
interface XML {
  /**
   * Adds a namespace declaration to the node. Returns the XML object itself.
   * @param namespace The namespace to add.
   */
  addNamespace(namespace: Namespace): XML;

  /**
   * Appends the given XML to this XML as a child. Returns the XML object itself.
   * If the argument is not XML, creates a new XML element containing the argument as text. The element name of that new XML is the same as the last element in the original XML.
   * @param child The child XML to add.
   */
  appendChild(child: XML): XML;

  /**
   * Returns a list containing all attribute elements matching the given name.
   * @param name The attribute name to look for.
   */
  attribute(name: string): XML;

  /**
   * Returns a list containing all attribute elements.
   */
  attributes(): XML;

  /**
   * Returns a list containing all children of this XML matching the given element name.
   * If the argument is a number, uses the number as index into the array of children.
   * @param name The name or the index of the child element.
   */
  child(name: string): XML;

  /**
   * Returns a number representing the ordinal position of this XML object within the context of its parent.
   */
  childIndex(): number;

  /**
   * Returns an XML object containing all the properties of this XML object in order.
   */
  children(): XML;

  /**
   * Returns an XML object containing the properties of this XML object that represent XML comments.
   */
  comments(): XML;

  /**
   * Checks if this XML object contains the given XML object.
   * @param xml The XML to search for.
   */
  contains(xml: XML): boolean;

  /**
   * Creates a copy of this XML object.
   */
  copy(): XML;

  /**
   * Returns all the XML-valued descendants of this XML object with the given name.
   * If the name parameter is omitted, returns all descendants of this XML object.
   * @param name The name of the descendant to find.
   */
  descendants(name?: string): XML;

  /**
   * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
   * @param name The element name. If not supplied, gets all children that are XML elements.
   */
  elements(name?: string): XML;

  /**
   * Reports whether this XML object contains complex content.
   * An XML object is considered to contain complex content if it represents an XML element that has child elements. XML objects representing attributes, comments, processing instructions and text nodes do not have complex content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has complex content.
   */
  hasComplexContent(): boolean;

  /**
   * Reports whether this XML object contains simple content.
   * An XML object is considered to contain simple content if it represents a text node, represents an attribute node or if it represents an XML element that has no child elements. XML objects representing comments and processing instructions do not have simple content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has simple content.
   */
  hasSimpleContent(): boolean;

  /**
   * Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
   * The last element of thereturned array is the default namespace.
   */
  inScopeNamespaces(): Namespace[];

  /**
   * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
   * If child1 is null, the method inserts child2 before all children of this XML object (that is, after none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.
   * @param child1 The child to insert the other child after. If null, the method inserts child2 before all children of this XML object.
   * @param child2 The XML to insert.
   */
  insertChildAfter(child1: XML, child2: XML): void;

  /**
   * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
   * If child1 is null, the method inserts child2 after all children of this XML object (that is, before none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.
   * @param child1 The child to search for. If null, the method inserts child2 after all children of this XML object.
   * @param child2 The XML to insert.
   */
  insertChildBefore(child1: XML, child2: XML): void;

  /**
   * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
   */
  length(): number;

  /**
   * Returns the local name of this XML object.
   * This value corresponds to the element name unless the name has a namespace prefix. For example, if the element has the name "ns:tag", the return value is "tag".
   */
  localName(): string;

  /**
   * Returns a QName object containing the URI and the local name of the element.
   */
  name(): QName;

  /**
   * Returns a Namespace object containing the namespace URI of the current element.
   */
  namespace(): Namespace;

  /**
   * Returns an array containing all namespace declarations of this XML object.
   */
  namespaceDeclarations(): Namespace[];

  /**
   * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
   */
  nodeKind(): string;

  /**
   * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
   */
  normalize(): XML;

  /**
   * Returns the parent object of this XML object.
   * The root object, as returned by the XML constructor, does not have a parent and returns null. Note that the E4X standard does not define what happens if this XML object is a list containing elements with multiple parents.
   */
  parent(): XML;

  /**
   * Inserts a given child into this object before its existing XML properties, and returns this XML object.
   * @param child The XML to insert.
   */
  prependChild(child: XML): XML;

  /**
   * Returns a list of preprocessing instructions.
   * Collects processing-instructions with the given name, if supplied. Otherwise, returns an XML list containing all the children of this XML object that are processing-instructions regardless of their name.
   * @param name The name of the preprocessing instruction to return.
   */
  processingInstructions(name?: string): XML;

  /**
   * Removes the given namespace from this XML, and returns this XML.
   * @param namespace The namespace to remove.
   */
  removeNamespace(namespace: Namespace): XML;

  /**
   * Replaces the value of specified XML properties of this XML object returns this XML object.
   * This method acts like the assignment operator.
   * @param name The property name. Can be a numeric property name, a name for a set of XML elements, or the properties wildcard “*”. If this XML object contains no properties that match the name, the method returns without modifying this XML object.
   * @param value The XML with which to replace the value of the matching property. Can be an XML object, XML list or any value that can be converted to a String with toString().
   */
  replace(name: string, value: XML): XML;

  /**
   * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
   * @param value The new value, which can be a single XML object or an XML list.
   */
  setChildren(value: XML): XML;

  /**
   * Replaces the local name of this XML objectwith a string constructed from the given name
   * The local name is any part behind a colon character. If there is no colon, it is the entire name.
   * @param name The name to set.
   */
  setLocalName(name: string): void;

  /**
   * Replaces the name of this XML object with the given QName object.
   * @param name The fully qualified name.
   */
  setName(name: QName): void;

  /**
   * Sets the namespace for this XML element.
   * If the namespace has not been declared in the tree above this element, adds a namespace declaration.
   * @param namespace The namespace to set.
   */
  setNamespace(namespace: Namespace): void;

  /**
   * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
   */
  text(): XML;

  /**
   * Returns the string representation of this object.
   * For text and attribute nodes, this is the textual value of the node; for other elements, this is the result of calling the toXMLString() method. If this XML object is a list, concatenates the result of calling toString() on each element.
   */
  toString(): string;

  /**
   * Returns an XML-encoded string representation of this XML object.
   * Always includes the start tag, attributes and end tag of the XML object regardless of its content. It is provided for cases when the default XML to string conversion rules are not desired. Interprets the global settings XML.prettyPrint and XML.prettyIndent.
   */
  toXMLString(): string;

  /**
   * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
   * @param expr The XPath expression to use.
   */
  xpath(expr: string): XML;
}

/**
 * An XML list object.
 * In this implementation, an XMLList object is synonymous to the XML object. The constructor accepts an XML list, but everything else works like theXML object.
 */
interface XMLList {}
declare const XMLList: XMLList;

interface UnitValueConstructor {
  readonly prototype: UnitValue;

  /**
   * Creates a new UnitValue object.
   */
  new (value: string | UnitValue): UnitValue;
  (value: string | UnitValue): UnitValue;

  /**
   * The base unit for all conversions.
   */
  baseUnit: UnitValue;
}
declare const UnitValue: UnitValueConstructor;

/**
 * Represents a measurement as a combination of values and unit.
 * Note that this object is not available in all applications.
 */
interface UnitValue {
  /**
   * The base unit.
   */
  baseUnit: UnitValue;

  /**
   * The unit name.
   */
  readonly type: string;

  /**
   * The numeric value.
   */
  value: number;

  /**
   * Returns this instance as a different unit.
   * @param unitName The unit name.
   */
  as(unitName: string): UnitValue;

  /**
   * Converts this instance to a different unit.
   * @param unitName The unit name.
   */
  convert(unitName: string): any;
}

/**
 * Only for TypeScript compatibility
 */
interface CallableFunction extends Function {}

interface NewableFunction extends Function {}

interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}

/**
 * Make all properties in T optional
 */
type Partial<T> = { [P in keyof T]?: T[P] };

/**
 * Make all properties in T readonly
 */
type Readonly<T> = { readonly [P in keyof T]: T[P] };

/**
 * From T pick a set of properties K
 */
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends string, T> = { [P in K]: T };

/**
 * A global class containing central information about ScriptUI. Not instantiable.
 */
declare class ScriptUI {
  /**
   * Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
   * Predefined alignment values are: TOP, BOTTOM, LEFT, RIGHT, FILL, CENTER
   */
  static readonly Alignment: string;

  /**
   * Collects the enumerated values that can be used as the style argument to the ScriptUI.newFont() method.
   * Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.
   */
  static readonly FontStyle: object;

  /**
   * The font constants defined by the host application.
   */
  static readonly applicationFonts: object;

  /**
   * An object whose properties are the names of compatability modes supported by the host application.
   * The presence of ScriptUI.compatability.su1PanelCoordinates means that the application allows backward compatibility with the coordinate system of Panel elements in ScriptUI version 1.
   */
  static readonly compatibility: object;

  /**
   * A string containing the internal version number of the ScriptUI module.
   */
  static readonly coreVersion: string;

  /**
   * An object whose properties define attributes of the environment in which ScriptUI operates.
   */
  static readonly environment: Environment;

  /**
   * An object whose properties and methods provide access to objects used in the ScriptUI event system.
   * It contains one function, createEvent(), which allows you to create event objects in order to simulate user-interaction event
   */
  static readonly events: Events;

  /**
   * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
   */
  static readonly frameworkName: string;

  /**
   * A string containing the version number of the ScriptUI component framework
   */
  static readonly version: any;

  /**
   * Finds and returns the resource for a given text string from the host application's resource data.
   * If no string resource matches the given text, the text itself is returned.
   * @param text The text to match.
   */
  static getResourceText(text: string): string;

  /**
   * Creates a new font object for use in text controls and titles.
   * @param name The font name, or the font family name.
   * @param style The font style; can be string, or one of the values of ScriptUI.FontStyle.
   * @param size The font size in points.
   */
  static newFont(name: string, style: string, size: number): ScriptUIFont;

  /**
   * Loads a new image from resources or disk files into an image object.
   * Creates a new global image object for use in controls that can display images, loading the associated images from the specified resources or image files.
   * @param normal The resource name or the disk file path to the image used for the normal state.
   * @param disabled The resource name, or the disk file path to the image used for the disabled state.
   * @param pressed The resource name, or the file-system path to the image used for the pressed state.
   * @param rollover The resource name, or the file-system path to the image used for the rollover state.
   */
  static newImage(
    normal: string,
    disabled?: string,
    pressed?: string,
    rollover?: string
  ): ScriptUIImage;
}

/**
 * The instance represents a top-level window or dialog box, which contains user-interface elements.
 * The globally available Window object provides access to predefined and script-defined windows.
 */
declare class Window extends _Control {
  /**
   * Set to true to make this window active.
   * A modal dialog that is visible is by definition the active dialog.
   * An active palette is the front-most window.
   * An active control is the one with focus—that is, the one that accepts keystrokes, or in the case of a Button, be selected when the user typesReturn or Enter.
   */
  active: boolean;

  /**
   * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
   * Order of creation determines which children are at the top of a column or the left of a row; the earlier a child is created, the closer it is to the top or left of its column or row. If defined, alignment for a child element overrides the alignChildren setting for the parent container. See alignment property for values.
   */
  alignChildren: string;

  /**
   * For windows of type dialog, the UI element to notify when the user presses a cancellation key combination.
   * The cancellation key is the Esc key. By default, looks for a button whose name or text is "cancel" (case disregarded).
   */
  cancelElement: object;

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the window.
   */
  characters: number;

  /**
   * The collection of UI elements that have been added to this container.
   * An array indexed by number or by a string containing an element's name. The length property of this array is the number of child elements for container elements, and is zero for controls.
   */
  readonly children: object[];

  /**
   * For windows of type dialog, the UI element to notify when the user presses a Enter key.
   * By default, looks for a button whose name or text is "ok" (case disregarded).
   */
  defaultElement: object;

  /**
   * The bounds of the window frame in screen coordinates.
   * The frame consists of the title bar and borders that enclose the content region of a window, depending on the windowing system.
   */
  readonly frameBounds: Bounds | [number, number, number, number];

  /**
   * The top left corner of the window frame in screen coordinates.
   * The same as [frameBounds.x, frameBounds.y]. Set this value to move the window frame to the specified location on the screen. The frameBounds value changes accordingly.
   */
  frameLocation: Point | [number, number];

  /**
   * The size and location of the window's frame in screen coordinates.
   */
  readonly frameSize: Dimension | [number, number];

  /**
   * Deprecated. Use ScriptUI.frameworkName instead.
   */
  static readonly frameworkName: string;

  /**
   * The graphics object that can be used to customize the window’s appearance, in response to the onDraw event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The layout manager for this container.
   * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
   */
  layout: LayoutManager;

  /**
   * The number of pixels between the edges of a container and the outermost child elements.
   * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
   */
  margins: number;

  /**
   * True if the window is expanded.
   */
  maximized: boolean;

  /**
   * True if the window is minimized or iconified.
   */
  minimized: boolean;

  /**
   * The opacity of the window, in the range [0..1].
   * A value of 1.0 (the default) makes the window completely opaque, a value of 0 makes it completely transparent. Intermediate values make it partially transparent to any degree.
   */
  opacity: number;

  /**
   * The layout orientation of children in a container.
   * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
   */
  orientation: string;

  /**
   * The keypress combination that invokes this element's onShortcutKey() callback.
   */
  shortcutKey: string;

  /**
   * The number of pixels separating one child element from its adjacent sibling element.
   * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
   */
  spacing: number;

  /**
   * The title, label, or displayed text, a localizeable string.
   * Does not apply to containers of type group.
   */
  text: string;

  /**
   * Deprecated. Use ScriptUI.version instead.
   */
  static readonly version: any;

  /**
   * Creates a new window.
   * @param type The window type. One of: window: Creates a simple window that can be used as a main window for an application. (Not supported by Photoshop CS3.) palette: Creates a modeless dialog, also called a floating palette. (Not supported by Photoshop CS3.) dialog: Creates a modal dialog. This argument can also be a ScriptUI resource specification; in that case, all other arguments are ignored.
   * @param title The window title, a localizable string.
   * @param bounds The window's position and size.
   * @param properties An object containing creation-only properties.
   */
  constructor(
    type: string,
    title?: string,
    bounds?: Bounds | [number, number, number, number],
    properties?: Partial<_ControlPropertiesMap["window"]>
  );

  /**
   * Creates and returns a new control or container object and adds it to the children of this window.
   * @param type The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.
   * @param bounds A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.
   * @param text The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.
   * @param properties An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.
   */
  add: _WindowPanelGroupAdd;

  /**
   * Displays a platform-standard dialog containing a short message and an OK button.
   * @param message TThe string for the displayed message.
   * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
   * @param errorIcon When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Ignored in Mac OS, which does not support icons for alert dialogs.
   */
  static alert(message: string, title?: string, errorIcon?: boolean): void;

  /**
   * Centers this window on screen or with repect to another window.
   * @param window The relative window. If not specified, centers on the screen.
   */
  center(window?: Window): void;

  /**
   * Closes this window.
   * . If an onClose() callback is defined for the window, calls that function before closing the window.
   * @param return_ A number to be returned from the show() method that invoked this window as a modal dialog.
   */
  close(return_?: any): void;

  /**
   * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
   * Returns true if the user clicked Yes, false if the user clicked No.
   * @param message The string for the displayed message.
   * @param noAsDefault When true, the No button is the default choice, selected when the user types Enter. Default is false, meaning that Yes is the default choice.
   * @param title A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".
   */
  static confirm(
    message: string,
    noAsDefault: boolean,
    title?: string
  ): boolean;

  /**
   * Use this method to find an existing window.
   * This includes windows defined by ScriptUI resource strings, windows already created by a script, and windows created by the application (if the application supports this case). This function is not supported by all applications. Returns a Window object found or generated from the resource, or null if no such window or resource exists.
   * @param type The name of a predefined resource available to JavaScript in the current application; or the window type. If a title is specified, the type is used if more than one window with that title is found. Can be null or the empty string.
   * @param title The window title.
   */
  static find(type: string, title: string): Window;

  /**
   * Sends a notification message to all listeners, simulating the specified user interaction event.
   * @param eventName The event name; if omitted, the default event is sent. One of: onClose, onMove, onMoving, onResize, onResizing, onShow
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the window acquires the keyboard focus.
   * Called when the user gives the window the keyboard focus by clicking it or otherwise making it the active window.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, calledwhen the window is about to be closed.
   * Called when a request is made to close the window, either by an explicit call to the close() function or by a user action (clicking the OS-specific close icon in the title bar). The function is called before the window actually closes; it can return false to cancel the close operation.
   */
  onClose(): boolean;

  /**
   * An event-handler callback function, called when the window loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active window to another window.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, calledwhen the windowhas been moved
   */
  onMove(): void;

  /**
   * An event-handler callback function, calledwhen the window is being moved
   * Called while a window in being moved, each time the position changes. A handler can monitor the move operation.
   */
  onMoving(): void;

  /**
   * An event-handler callback function, called after the window has been resized
   */
  onResize(): void;

  /**
   * An event-handler callback function, called while a window is being resized
   * Called while a window is being resized, each time the height or width changes. A handler can monitor the resize operation.
   */
  onResizing(): void;

  /**
   * In Windows only, an event-handler callback function, called a shortcut-key sequence is typed that matches the shortcutKey value for this window.
   */
  onShortcutKey(): void;

  /**
   * An event-handler callback function, called just before the window is displayed
   * Called when a request is made to open the window using the show() method, before the window is made visible, but after automatic layout is complete. A handler can modify the results of the automatic layout.
   */
  onShow(): void;

  /**
   * Displays a modal dialog that returns the user’s text input.
   * Returns the value of the text edit field if the user clicked OK, null if the user clicked Cancel.
   * @param prompt The string for the displayed message.
   * @param default_ The initial value to be displayed in the text edit field.
   * @param title A string to appear as the title of the dialog. In Windows, this appears in the window’s frame; in Mac OS it appears above the message. The default title string is "Script Prompt".
   */
  static prompt(prompt: string, default_?: string, title?: string): string;

  /**
   * Removes the specified child control from this window’s children array.
   * No error results if the child does not exist.
   * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
   */
  remove(what: any): void;
}

/**
 * Controls the automatic layout behavior for a window or container.
 * The subclass AutoLayoutManager implements the default automatic layout behavior.
 */
declare class LayoutManager {
  /**
   * Invokes the automatic layout behavior for the managed container.
   * Adjusts sizes and positions of the child elements of this window or container according to the placement and alignment property values in the parent and children.
   * Invoked automatically the first time the window is displayed. Thereafter, the script must invoke it explicitly to change the layout in case of changes in the size or position of the parent or children.
   */
  layout(): void;

  /**
   * Performs a layout after a Window is resized, based on the new size.
   * Resizes the child elements of the managed container with a given alignment type, after the window has been resized by the user.
   */
  resize(): void;
}

/**
 * A drawing pen that defines a color and line width used to stroke paths.
 * Create with ScriptUIGraphics.newPen(). Use as a value of  foregroundColor properties, and pass as an argument to drawString() and strokePath() methods.
 */
declare class ScriptUIPen {
  /**
   * The pen color.
   * The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.
   */
  readonly color: number[];

  /**
   * The pixel width of the drawing line.
   */
  lineWidth: number;

  /**
   * The theme name.
   * The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.
   */
  readonly theme: string;

  /**
   * The pen type, solid or theme.
   * One of these constants: ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR
   */
  readonly type: string;
}

/**
 * A painting brush that encapsulates a color or pattern used to fill paths.
 * Create with ScriptUIGraphics.newBrush(). Use as a value of  backgroundColor properties, and pass as an argument to the fillPath() method.
 */
declare class ScriptUIBrush {
  /**
   * The brush color.
   * The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.
   */
  readonly color: number[];

  /**
   * The theme name.
   * The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.
   */
  readonly theme: string;

  /**
   * The brush type, solid or theme.
   * One of these constants: ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR
   */
  readonly type: number;
}

/**
 * A helper object that encapsulates a drawing path for a figure to be drawn into a window or control.
 * Create with the newPath(), moveto(), lineto(), rectPath(), and ellipsePath() methods.Used as value of currentPath, where it is acted upon by methods such as closePath().Pass as optional argument to fillPath() and strokePath(), which otherwise act upon the current path.
 */
declare class ScriptUIPath {}

/**
 * An object used to draw custom graphics, found in the graphics property of window, container, and control objects.
 * Allows a script to customize aspects of the element’s appearance, such as the color and font. Use an onDraw callback function to set these properties or call the functions.All measurements are in pixels.
 */
declare class ScriptUIGraphics {
  /**
   * Contains the enumerated constants for the type argument of newBrush().
   * Type constants are: SOLID_COLOR, THEME_COLOR.
   */
  static readonly BrushType: object;

  /**
   * Contains the enumerated constants for the type argument of newPen().
   * Type constants are: SOLID_COLOR, THEME_COLOR.
   */
  static readonly PenType: object;

  /**
   * The background color for containers; for non-containers, the parent background color.
   * The paint color and style is defined in this brush object.This property is only supported for controls likedropdownlist, edittext, and listbox.
   */
  backgroundColor: ScriptUIBrush;

  /**
   * The current drawing path, encapsulated in a path object.
   */
  readonly currentPath: ScriptUIPath;

  /**
   * The current position in the current drawing path.
   */
  readonly currentPoint: Point | [number, number];

  /**
   * The background color for containers when disabled or inactive; for non-containers, the parent background color.
   * The paint color and style is defined in this brush object.This property is only supported for controls likedropdownlist, edittext, and listbox.
   */
  disabledBackgroundColor: ScriptUIBrush;

  /**
   * The text color when the element is disabled or inactive.
   * The paint color and style is defined in this pen object.
   */
  disabledForegroundColor: ScriptUIPen;

  /**
   * The default font to use for displaying text.
   */
  font: ScriptUIFont;

  /**
   * The text color.
   * The paint color and style is defined in this pen object.
   */
  foregroundColor: ScriptUIPen;

  /**
   * Closes the current path.
   * Defines a line from the current postion (currentPoint) to the start point of the current path (the value of currentPath).
   */
  closePath(): void;

  /**
   * Draws a focus ring within a region of this element.
   * @param left The left coordinate of the region. Value is relative to the origin of this element.
   * @param top The top coordinate of the region. Value is relative to the origin of this element.
   * @param width The width of the region in pixels.
   * @param height The height of the region in pixels.
   */
  drawFocusRing(left: number, top: number, width: number, height: number): void;

  /**
   * Draws an image within a given region of the element.
   * Uses the version of the image that is appropriate to the element's current state.
   * @param image The image to draw. This object contains different versions of an image appropriate to various element states, such as a dimmed version for the disabled state.
   * @param left The left coordinate of the region, relative to the origin of this element.
   * @param top The top coordinate of the region, relative to the origin of this element.
   * @param width The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
   * @param height The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
   */
  drawImage(
    image: ScriptUIImage,
    left: number,
    top: number,
    width?: number,
    height?: number
  ): void;

  /**
   * Draw the platform-specific control associated with this element.
   */
  drawOSControl(): void;

  /**
   * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
   * @param text The text string.
   * @param pen The drawing pen to use.
   * @param x The left coordinate, relative to the origin of this element.
   * @param y The top coordinate, relative to the origin of this element.
   * @param font The font to use. Default is the  font value in this object.
   */
  drawString(
    text: string,
    pen: ScriptUIPen,
    x: number,
    y: number,
    font?: ScriptUIFont
  ): void;

  /**
   * Defines an elliptical path within a given rectangular area in the currentPath object, which can be filled using fillPath() or stroked using strokePath().
   * Returns a Point object for the upper left corner of the area, which is the new currentPoint.
   * @param left The left coordinate of the region, relative to the origin of this element.
   * @param top The top coordinate of the region, relative to the origin of this element.
   * @param width The width of the region in pixels.
   * @param height The height of the region in pixels.
   */
  ellipsePath(
    left: number,
    top: number,
    width: number,
    height: number
  ): Point | [number, number];

  /**
   * Fills a path using a given painting brush.
   * @param brush The brush object that defines the fill color.
   * @param path The path object. Default is the currentPath.
   */
  fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void;

  /**
   * Adds a path segment to the currentPath.
   * The line is defined from the currentPoint to the specified destination point. Returns the Point objectfor the destination point, which becomes the new value of currentPoint.
   * @param x The X coordinate for the destination point, relative to the origin of this element.
   * @param y The Y coordinate for the destination point, relative to the origin of this element.
   */
  lineTo(x: number, y: number): Point | [number, number];

  /**
   * Calculates the size needed to display a string using the given font.
   * Returns a Dimension object that contains the height and width of the string in pixels.
   * @param text The text string to measure.
   * @param font The font to use. Default is the font value in this object.
   * @param boundingWidth The bounding width.
   */
  measureString(
    text: string,
    font?: ScriptUIFont,
    boundingWidth?: number
  ): Dimension | [number, number];

  /**
   * Adds a given point to the currentPath, and makes it the current drawing position.
   * Returns the Point object which is the new value of currentPoint.
   * @param x The X coordinate for the new point, relative to the origin of this element.
   * @param y The Y coordinate for the new point, relative to the origin of this element.
   */
  moveTo(x: number, y: number): Point | [number, number];

  /**
   * Creates a new painting brush object.
   * @param type The brush type, solid or theme. One of the constants ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR.
   * @param color The brush color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.
   */
  newBrush(type: number, color: number[]): ScriptUIBrush;

  /**
   * Creates a new, empty path object.
   * Replaces any existing path in currentPath.
   */
  newPath(): ScriptUIPath;

  /**
   * Creates a new drawing pen object.
   * @param type The pen type, solid or theme. One of the constants ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR.
   * @param color The pen color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.
   * @param width The width of the pen line in pixels. The line is centered around the current point. For example, if the value is 2, drawing a line from (0, 10) to (5, 10) paints the two rows of pixels directly above and below y-position 10.
   */
  newPen(type: number, color: number[], width: number): ScriptUIPen;

  /**
   * Defines a rectangular path in the currentPath object.
   * The rectangle can be filled using fillPath() or stroked using strokePath().Returns the Point objectfor the upper left corner of the rectangle, which becomes the new value of currentPoint.
   * @param left The left coordinate relative to the origin of this element.
   * @param top The top coordinate relative to the origin of this element.
   * @param width The width in pixels.
   * @param height The height in pixels.
   */
  rectPath(
    left: number,
    top: number,
    width: number,
    height: number
  ): Point | [number, number];

  /**
   * Strokes the path segments of a path with a given drawing pen.
   * @param pen The drawing pen that defines the color and line width.
   * @param path The path object. Default is the currentPath.
   */
  strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void;
}

/**
 * Describes an input state at the time of the triggering  ScriptUIGraphics.onDraw() event.
 * Contains properties that report whether the current control has the input focus, and the particular mouse button and keypress state. Passed in as argument to ScriptUIGraphics.onDraw().
 */
declare class DrawState {
  /**
   * True if the Alt key is being pressed (in Windows only).
   */
  readonly altKeyPressed: boolean;

  /**
   * True if the Caps Lock key is being pressed.
   */
  readonly capsLockKeyPressed: boolean;

  /**
   * True if the Command key is being pressed (in Mac OS only).
   */
  readonly cmdKeyPressed: boolean;

  /**
   * True if the Ctrl key is being pressed.
   */
  readonly ctrlKeyPressed: boolean;

  /**
   * True if the element has the input focus.
   */
  readonly hasFocus: boolean;

  /**
   * True if the left mouse button is being pressed.
   */
  readonly leftButtonPressed: boolean;

  /**
   * True if the middle mouse button is being pressed.
   */
  readonly middleButtonPressed: boolean;

  /**
   * True if the cursor is hovering over this element.
   */
  readonly mouseOver: boolean;

  /**
   * True if the Num Lock key is being pressed.
   */
  readonly numLockKeyPressed: boolean;

  /**
   * True if the Option key is being pressed (in Mac OS only).
   */
  readonly optKeyPressed: boolean;

  /**
   * True if the right mouse button is being pressed.
   */
  readonly rightButtonPressed: boolean;

  /**
   * True if the Shift key is being pressed.
   */
  readonly shiftKeyPressed: boolean;
}

/**
 * Encapsulates the qualities of a font used to draw text into a control.
 * Create with the newFont() method.Used as a value of font. Passed as an argument to drawString() and measureString().
 */
declare class ScriptUIFont {
  /**
   * The font family name.
   */
  readonly family: string;

  /**
   * The complete font name, consisting of the family and style, if specified.
   */
  readonly name: string;

  /**
   * The font point size.
   */
  readonly size: number;

  /**
   * The font style. One of the constants in ScriptUIGraphics.FontStyle.
   */
  readonly style: object;

  /**
   * The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
   */
  readonly substitute: string;
}

/**
 * Encapsulates a set of images that can be drawn into a control.
 * Different images can reflect the current state, such as a dimmed version for a disabled control. Create with the newImage() method. Passed as an argument to drawImage().
 */
declare class ScriptUIImage {
  /**
   * The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh).
   */
  readonly format: string;

  /**
   * The image name. Either the file name, or the resource name.
   */
  readonly name: string;

  /**
   * The full path to the file that contains the image.
   */
  readonly pathname: string;

  /**
   * The image size in pixels.
   */
  readonly size: Dimension | [number, number];
}

/**
 * A text label that the user cannot change.
 */
declare class StaticText extends _Control {
  /**
   * Always false. This element cannot have input focus.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The text justification style.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The text to display, a localizable string.
   */
  text: string;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * A pushbutton element containing a mouse-sensitive text string.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class Button extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The text justification style.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The text to display, a localizable string.
   */
  text: string;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the element has been clicked
   */
  onClick(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * Amouse-sensitive pushbutton that displays an image instead of text.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class IconButton extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The image object that defines the image to be drawn.
   */
  image: ScriptUIImage;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the element has been clicked.
   */
  onClick(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * An editable text field that the user can select and change.
 * Calls the onChange() callback if the text is changed and the user types Enter or the control loses focus, or if its notify() method is called. Calls the onChanging() callback when any change is made to the text. The textselection property contains currently selected text.
 */
declare class EditText extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The text justification style.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The current text displayed in the field, a localizable string.
   */
  text: string;

  /**
   * The currently selected text, or the empty string if there is no text selected.
   * Setting the value replaces the current text selection and modifies the value of the text property. If there is no current selection, inserts the new value into the text string at the current insertion point. The textselection value is reset to an empty string after it modifies the text value. Note that setting the textselection property before the element’s parent Window exists is an undefined operation.
   */
  textselection: string;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the content of the element has been changed
   * The handler is called only when the change is complete—that is, when focus moves to another control, or the user types Enter. The exact behavior depends on the creation parameter enterKeySignalsOnChange;see the properties property.
   */
  onChange(): void;

  /**
   * An event-handler callback function, called when the content of the element is in the process of changing
   * The handler is called for each keypress while this control has the input focus.
   */
  onChanging(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * Displays a list of choices, represented by ListItem objects.
 * When you create the object, you specify whether it allows the user to select only one or multiple items. If a list contains more items than can be displayed in the available area, a scrollbar may appear that allows the user to scroll through all the list items.You can specify the items on creation of the list object, or afterward using the list object’s add() method. You can remove items programmatically with the list object’s remove() and removeAll() methods. You can create a list box with multiple columns; in this case, each row is a selectable choice, and each ListItem represents one row.
 */
declare class ListBox extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * An array of child ListItem elements.
   */
  readonly children: object[];

  /**
   * For a multi-column list box, the column properties.
   * A JavaScript object with two read-only properties whose values are set by the creation parameters:
   * titles: An array of column title strings, whose length matches the number of columns specified at creation.
   * preferredWidths: An array of column widths, whose length matches the number of columns specified at creation.
   * visible: An array of boolean visible attributes, whose length matches the number of columns specified at creation.This property can be used to show/hide a column. Avaiblable in ScriptUI Version 6.0 or later provided ScriptUI.frameworkName == 'Flex'.
   */
  readonly columns: object;

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The width and height in pixels of each item in the list.
   * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
   */
  itemSize: Dimension | [number, number];

  /**
   * The array of choice items displayed in the list.
   * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method. Each item has a selected property that is true when it is in the selected state.
   */
  readonly items: ListItem[];

  /**
   * The currently selected item for a single-selection list, or an array of items for current selection in a multi-selection list.
   * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items. You can set the value using the index of an item or an array of indices, rather than object references. If set to an index value that is out of range, the operation is ignored. When set with index values, the property still returns object references.
   * If you set the value to an array for a single-selection list, only the first item in the array is selected.
   * If you set the value to a single item for a multi-selection list, that item is added to the current selection.
   */
  selection: ListItem;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * Adds an item to the choices in this list.
   * Returns the item control object. If this is a multi-column list box, each added ListItem represents one selectable row.Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
   * @param type The type of the child element, the string "item".
   * @param text The localizable text label for the item.
   */
  add(type: string, text?: string): ListItem;

  /**
   * Retrieves an item object from the list that has a given text label.
   * @param text The text string to match.
   */
  find(text: string): ListItem;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when an item in the listbox is double-clicked
   * Check the selection property to identify the item that was double-clicked.
   */
  onDoubleClick(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;

  /**
   * Removes a child item from the list.
   * @param what The item or child to remove, specified by 0-based index, text value, or as a ListItem object.
   */
  remove(what: any): void;

  /**
   * Removes all child items from the list.
   */
  removeAll(): void;
}

/**
 * Displays a single visible item. When you click the control, a list drops down or pops up, and allows you to select one of the other items in the list.
 * Drop-down lists can have nonselectable separator items for visually separating groups of related items, as in a menu. You can specify the items on creation of the list object, or afterward using the list object’s add() method. You can remove items programmatically with the list object’s remove() and removeAll() methods. Calls the onChange() callback if the item selection is changed or if its notify() method is called.
 */
declare class DropDownList extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The width and height in pixels of each item in the list.
   * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
   */
  itemSize: Dimension | [number, number];

  /**
   * The array of choice items displayed in the drop-down or pop-up list.
   * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method. Items in a drop-down list can be of type separator, in which case they cannot be selected, and are shown as a horizontal line. Each item has a selected property that is true when it is in the selected state.
   */
  readonly items: ListItem[];

  /**
   * The currently selectedlist item.
   * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.
   */
  selection: ListItem | number;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * Adds an item or separator to the choices in this list.
   * Returns the item control object for type="item", or null for type="separator".
   * @param type The type of the child element. Either item (a basic, selectable item with a text label) or separator
   * @param text The localizable text label for the item.
   */
  add(type: string, text?: string): ListItem;

  /**
   * Retrieves an item object from the list that has a given text label.
   * @param text The text string to match.
   */
  find(text: string): ListItem;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;

  /**
   * Removes a child item from the list.
   * @param what The item or child to remove, specified by 0-based index, text value, or as a ListItem object.
   */
  remove(what: any): void;

  /**
   * Removes all child items from the list.
   */
  removeAll(): void;
}

/**
 * An item in a list box, drop-down list, or tree view.
 * You can specify initial items in the creation parameters when creating the parent list. Create new items using the add() method (ListBox.add(), DropDownList.add(), TreeView.add()) in the parent list with control type="item", or, for DropDownList controls, type="separator".For a multi-column list box, the object represents one selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
 */
declare class ListItem {
  /**
   * The checked state of an item in a list.
   * When true, the item is marked with the platform-appropriate checkmark. When false, no checkmark is drawn, but space is reserved for it in the left margin, so that the item lines up with other checkable items. When undefined, no space is reserved for a checkmark.
   */
  checked: boolean;

  /**
   * The expansion state of an item of type node that is a child of a TreeView list control.
   * When true, the item is in the expanded state and its children are shown, when false, it is collapsed and children are hidden.
   */
  expanded: boolean;

  /**
   * An image object for an icon to display in the item.
   * When specified, the image appropriate to the selections state is drawn to the left of the text label. If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
   */
  image: ScriptUIImage;

  /**
   * The 0-based index of this item in the items collection of its parent list control.
   */
  readonly index: number;

  /**
   * The parent element, a list control.
   */
  readonly parent: object;

  /**
   * The selection state of this item.
   * When true, the item is part of the selection for its parent list. When false, the item is not selected. Set to true to select this item in a single-selection list, or to add it to the selection array for a multi-selection list.
   */
  selected: boolean;

  /**
   * When the parent is a multi-column ListBox, this describes the labels for this selectable row in additional columns.
   * A array of JavaScript objects whose length is one less than the number of columns. The first member describes the label in the second column. Each member object has two properties, of which you can specify one or both:
   * text: A display string for the corresponding label.
   * image: An ScriptUIImage object for the corresponding label.
   */
  readonly subItems: any[];

  /**
   * The label text to display for the item, a localizable string.
   * If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
   */
  text: string;

  /**
   * The element type.
   * Normally "item", but an item whose parent is a DropDownList control can have type "separator". A separator item is not mouse-sensitive and is drawn as a horizontal line across the drop-down or pop-up menu.
   */
  readonly type: string;
}

/**
 * A dual-state control showing a box that has a checkmark when the value is true, and is empty when the value is false.
 * Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class Checkbox extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The text to display, a localizable string.
   */
  text: string;

  /**
   * The selection state of the control.
   * When true, the control is in the selected or set state and displays the check mark. When false, shows an empty box.
   */
  value: boolean;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the element has been clicked.
   */
  onClick(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * A scrollbar with a draggable scroll indicator and stepper buttons to move the indicator.
 * The scrollbar control has a horizontal orientation if the width is greater than the height at creation time, or vertical if its height is greater than its width.
 * Calls the onChange() callback after the position of the indicator is changed or if its notify() method is called. Calls the onChanging() callback repeatedly while the user is moving the indicator. Scrollbars are often created with an associated EditText field to display the current value of the scrollbar, and to allow setting the scrollbar's position to a specific value.
 */
declare class Scrollbar extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The amount to increment or decrement a scrollbar indicator's position when the user clicks ahead or behind the moveable element.
   * Default is 20% of the range between the maxvalue and minvalue property values.
   */
  jumpdelta: number;

  /**
   * The maximum value allowed in the value property.
   * Together with minvalue, sets the scrolling range. Default is 100.
   */
  maxvalue: number;

  /**
   * The minimum value allowed in the value property.
   * Together with  maxvalue, sets the scrolling range.Default is 0.
   */
  minvalue: number;

  /**
   * The key sequence that invokes the  onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The amount by which to increment or decrement a scrollbar element's position when the user clicks a stepper button.
   */
  stepdelta: number;

  /**
   * The current position of the indicator.
   * If set to a value outside the range specified by minvalue and maxvalue, it is automatically reset to the closest boundary.
   */
  value: number;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
   */
  onChange(): void;

  /**
   * An event-handler callback function, called when the content of the element is in the process of changing
   * The handler is called for any motion of the position indicator while this control has the input focus.
   */
  onChanging(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * A dual-state control, grouped with other radiobuttons, of which only one can be in the selected state.
 * Shows the selected state when value=true, empty when value=false. Calls the onClick() callback if the control is clicked or if its notify() method is called.
 */
declare class RadioButton extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * A number of characters for which to reserve space when calculating the preferred size of the element.
   */
  characters: number;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The label text for this button, a localizable string.
   */
  text: string;

  /**
   * The selection state of this button, selected when true.
   */
  value: boolean;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the element has been clicked.
   */
  onClick(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * A slider bar that indicates a numeric value with a moveable position indicator.
 * All slider controls have a horizontal orientation. Calls the onChange() callback after the position of the indicator is changed or if its notify() method is called. Calls the onChanging() callback repeatedly while the user is moving the indicator. The value property contains the current position of the indicator within the range of minvalue to maxvalue.
 */
declare class Slider extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The maximum value allowed in the value property.
   * Together with minvalue, sets therange.Default is 100.
   */
  maxvalue: number;

  /**
   * The minimum value allowed in the value property.
   * Together with maxvalue, sets the range.Default is 0.
   */
  minvalue: number;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * The current position of the indicator.
   * If set to a value outside the range specified by minvalue and maxvalue, it is automatically reset to the closest boundary.
   */
  value: number;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
   */
  onChange(): void;

  /**
   * An event-handler callback function, called when the content of the element is in the process of changing
   * The handler is called for any motion of the position indicator while this control has the input focus.
   */
  onChanging(): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;
}

/**
 * A horizontal bar with an indicator that shows the progress of an operation.
 * All progressbar controls have a horizontal orientation. The value property contains the current position of the progress indicator; the default is 0. There is a minvalue property, but it is always 0; attempts to set it to a different value are silently ignored.
 */
declare class Progressbar extends _Control {
  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The maximum value in the range. Default is 100.
   */
  maxvalue: number;

  /**
   * The minimum value in the range; always 0. If set to a different value, it is ignored.
   */
  minvalue: number;

  /**
   * The current position of the indicator.
   * If set to a value outside the range specified by 0 to maxvalue, it is automatically reset to the closest boundary.
   */
  value: number;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;
}

/**
 * A hierarchical list whose items can contain child items.
 * The ListItem children of this control (in the items array) can be of type node, which means that they can contain child items. An item with child items can expanded, so that the child items are displayed, or collapsed, so that the child items are hidden Individual items can be selected at any level of the tree.
 */
declare class TreeView extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The width and height in pixels of each item in the list.
   * Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list
   */
  itemSize: Dimension | [number, number];

  /**
   * The array of top-level items displayed in the list.
   * Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method.
   */
  readonly items: ListItem[];

  /**
   * The currently selectedlist item.
   * Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.
   */
  selection: ListItem;

  /**
   * The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).
   */
  shortcutKey: string;

  /**
   * Adds an item to the top-level choices in this list.
   * Returns the item control object.
   * @param type The type of the child element, the string "item".
   * @param text The localizable text label for the item.
   */
  add(type: string, text?: string): ListItem;

  /**
   * Retrieves an item object from the list that has a given text label.
   * @param text The text string to match.
   */
  find(text: string): ListItem;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * An event-handler callback function, called when the element acquires the keyboard focus.
   * Called when the user gives the control the keyboard focus by clicking it or tabbing into it.
   */
  onActivate(): void;

  /**
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange(): void;

  /**
   * An event-handler callback function, called when the user collapses (closes) an expanded node in the treeview.
   * @param item The ListItem node that collapsed.
   */
  onCollapse(item: ListItem): void;

  /**
   * An event-handler callback function, called when the element loses the keyboard focus.
   * Called when the user moves the keyboard focus from the previously active control to another control.
   */
  onDeactivate(): void;

  /**
   * An event-handler callback function, called when the window is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * An event-handler callback function, called when the user expands (opens) a collapsed node in the treeview.
   * @param item The ListItem node that expanded.
   */
  onExpand(item: ListItem): void;

  /**
   * An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
   * In Windows only.
   */
  onShortcutKey(): void;

  /**
   * Removes a child item from the list.
   * @param what The item or child to remove, specified by 0-based index in the top-level item list, text value, or as a ListItem object.
   */
  remove(what: any): void;

  /**
   * Removes all child items from the list.
   */
  removeAll(): void;
}

/**
 * A control that contains a Flash Player, which can load and play Flash movies stored in SWF files.
 * The ScriptUI FlashPlayer element runs the Flash application within an Adobe application. The Flash application runs ActionScript, a different implementation of JavaScript from the ExtendScript version of JavaScript that Adobe applications run. A control object of this type contains functions that allow your script to load SWF files, control movie playback, and communicate with the ActionScript environment.
 */
declare class FlashPlayer extends _Control {
  /**
   * True if this element is active.
   * An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.
   */
  active: boolean;

  /**
   * A function definition for a callback from the Flash ActionScript environment.
   * The Flash ActionScript code can call any callback function defined on the ExtendScript side of the FlashPlayer object, invoking it by name as a property of the control object. The function can take any arguments of a supported data types, and can return any value of a supported data type. data types:Number, String, Boolean, null, undefined, Object, Array.
   */
  callback(): void;

  /**
   * Invokes an ActionScript function defined in the Flash application.
   * Returns the result of the invoked function, which must be one of the allowed types. The ActionScript class and date objects are not supported as return values.
   * @param name The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.
   * @param argument An argument to pass through to the function. There can be any number of arguments. An argument must be one of these data types:Number, String, Boolean, null, undefined, Object, Array. No other data types are supported.
   */
  invokePlayerFunction(name: string, argument?: any): any;

  /**
   * Loads a movie into the Flash Player, and begins playing it.
   * @param file The File object for the SWF file to load.
   */
  loadMovie(file: File): void;

  /**
   * Sends a notification message, simulating the specified user interaction event.
   * @param eventName The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.
   */
  notify(eventName?: string): void;

  /**
   * Restarts a movie that has been stopped.
   * Do not use on a movie that is currently playing.The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).
   * @param rewind When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped.
   */
  playMovie(rewind: boolean): void;

  /**
   * Halts playback of the current movie.
   * The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).Using stopMovie() from the player's hosting environment has no effect on an SWF file playing in a ScriptUI Flash Player element. It is, however, possible to produce an SWF using Flash Authoring that can stop itself in response to user interaction.
   */
  stopMovie(): void;
}

/**
 * A container for other controls within a window.
 * A group can specify layout options for its child elements. Hiding a group hides all its children. Making it visible makes visible those children that are not individually hidden.
 */
declare class Group extends _Control {
  /**
   * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
   * Order of creation determines which children are at the top of a column or the left of a row; the earlier a child is created, the closer it is to the top or left of its column or row. If defined, alignment for a child element overrides the alignChildren setting for the parent container. See alignment property for values.
   */
  alignChildren: string;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The layout manager for this container.
   * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
   */
  layout: LayoutManager;

  /**
   * The number of pixels between the edges of a container and the outermost child elements.
   * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
   */
  margins: number;

  /**
   * The layout orientation of children in a container.
   * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
   */
  orientation: string;

  /**
   * The number of pixels separating one child element from its adjacent sibling element.
   * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
   */
  spacing: number;

  /**
   * Adds a child element to this container.
   * Creates and returns a new control or container object and adds it to the children of this group.
   * @param type The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.
   * @param bounds A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.
   * @param text The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.
   * @param properties An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.
   */
  add: _WindowPanelGroupAdd;

  /**
   * An event-handler callback function, called when the group is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * Removes the specified child control from this group's children array.
   * No error results if the child does not exist.
   * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
   */
  remove(what: any): void;
}

/**
 * A container for other types of controls, with an optional frame.
 * A panel can specify layout options for its child elements. Hiding a panel hides all its children. Making it visible makes visible those children that are not individually hidden.
 */
declare class Panel extends _Control {
  /**
   * Specifies how to align the child elements.
   */
  alignChildren: string;

  /**
   * Reserve space for the specified number of characters; affects calculation of preferredSize .
   */
  characters: number;

  /**
   * An array of child elements.
   */
  readonly children: object[];

  /**
   * The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.
   */
  readonly graphics: ScriptUIGraphics;

  /**
   * The default text justification style for child text elements.
   * One of left, center, or right. Justification only works if this value is set on creation of the element.
   */
  justify: string;

  /**
   * The layout manager for this container.
   * The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.
   */
  layout: LayoutManager;

  /**
   * The number of pixels between the edges of a container and the outermost child elements.
   * You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.
   */
  margins: number;

  /**
   * The layout orientation of children in a container.
   * Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.
   */
  orientation: string;

  /**
   * The number of pixels separating one child element from its adjacent sibling element.
   * Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.
   */
  spacing: number;

  /**
   * The title or label text, a localizable string.
   */
  text: string;

  /**
   * Adds a child element to this container.
   * Creates and returns a new control or container object and adds it to the children of this group.
   * @param type The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.
   * @param bounds A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.
   * @param text The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.
   * @param properties An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.
   */
  add: _WindowPanelGroupAdd;

  /**
   * An event-handler callback function, called when the panel is about to be drawn.
   * Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.
   */
  onDraw(): void;

  /**
   * Removes the specified child control from this group's children array.
   * No error results if the child does not exist.
   * @param what The child control to remove, specified by 0-based index, text property value, or as a control object.
   */
  remove(what: any): void;
}

/**
 * Defines the location of a window or UI element. Contains a 2-element array.
 * Specifies the origin point of an element as horizontal and vertical pixel offsets from the origin of the element's coordinate space.
 * A Point object is created when you set an element’s location property. You can set the property using a JavaScript object with properties named x and y, or an array with 2 values in the order [x, y].
 */
declare class Point {
  /**
   * The left coordinate.
   */
  left: number;

  /**
   * The array length.
   */
  readonly length: number;

  /**
   * The top coordinate.
   */
  top: number;

  /**
   * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  x: number;

  /**
   * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  y: number;

  [0]: number;

  [1]: number;
}

/**
 * Defines the size of a window or UI element. Contains a 2-element array.
 * Specifies the height and width of an element in pixels. A Dimension object is created when you set an element’s size property. You can set the property using a JavaScript object with named properties {width: wd, height: ht}, or an array with 2 values in the order [wd, ht].
 */
declare class Dimension {
  /**
   * The height in pixels.
   */
  height: number;

  /**
   * The array length.
   */
  readonly length: number;

  /**
   * The width in pixels.
   */
  width: number;

  [0]: number;

  [1]: number;
}

/**
 * Defines the boundaries of a window within the screen’s coordinate space, or of a UI element within the container’s coordinate space.
 * A Bounds object is created when you set an element’s bounds property. You can set the property using a JavaScript object with properties named left, top, right, bottom or x, y, width, height, or an array with 4 values in the order [x, y, wd, ht].
 */
declare class Bounds {
  /**
   * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  bottom: number;

  /**
   * The height in pixels.
   */
  height: number;

  /**
   * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  left: number;

  /**
   * The array length.
   */
  readonly length: number;

  /**
   * The width in pixels.
   */
  right: number;

  /**
   * The height in pixels.
   */
  top: number;

  /**
   * The width in pixels.
   */
  width: number;

  /**
   * The horizontal coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  x: number;

  /**
   * The vertical coordinate, a pixel offset from the origin of the element's coordinate space.
   */
  y: number;

  [0]: number;

  [1]: number;

  [2]: number;

  [3]: number;
}

/**
 * Encapsulates input event information for an event that propagates through a container and control hierarchy.
 * Implements W3C standard event handling. This object is passed to a function that you register to respond to events of a certain type that occur in a window or control. Use windowObj.addEventListener() or controlObj.addEventListener() to register a handler function.
 */
declare class UIEvent {
  /**
   * True if the event is of a type that bubbles.
   */
  readonly bubbles: boolean;

  /**
   * True if the default action associated with the event can be canceled with preventDefault().
   */
  readonly cancelable: boolean;

  /**
   * True if this event can be captured.
   */
  readonly captures: boolean;

  /**
   * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
   */
  readonly currentTarget: boolean;

  /**
   * The click count for a mouse-click event.
   */
  readonly detail: any;

  /**
   * The current phase of event propagation; one of none, target, capture, bubble.
   */
  readonly eventPhase: string;

  /**
   * The event target object for this event.
   */
  readonly target: object;

  /**
   * The date and time at which the event occurred.
   */
  readonly timeStamp: Date;

  /**
   * The name of the event that thisobject represents.
   * Event types are listed in the JavaScript Tools Guide.
   */
  readonly type: string;

  /**
   * The ScriptUI element that this event relates to.
   */
  readonly view: any;

  /**
   * Creates an event.
   * The UIEvent object is normally created by ScriptUI and passed to your event handler. However, you can simulate a user action by constructing an event object and sending it to a target object’s dispatchEvent() function.
   * @param type The event type. See UIEvent.type property.
   * @param captures Set to true if this event can be captured.
   * @param bubbles Set to true if the event bubbles.
   * @param view The ScriptUI element that this event relates to.
   * @param detail The click count for a mouse-click event.
   */
  constructor(
    type: string,
    captures: boolean,
    bubbles: boolean,
    view?: object,
    detail?: number
  );

  /**
   * Initializes a UI event as a core W3C event.
   * @param type The event type.
   * @param captures Set to true if this event can be captured.
   * @param bubbles Set to true if the event bubbles.
   * @param cancelable Set to true if the default action is cancelable.
   */
  initEvent(
    type: string,
    captures: boolean,
    bubbles: boolean,
    cancelable: boolean
  ): void;

  /**
   * Initializes an event.
   * @param type The event type.
   * @param captures Set to true if this event can be captured.
   * @param bubbles Set to true if the event bubbles.
   * @param view The ScriptUI element that this event relates to.
   * @param detail The click count for a mouse-click event.
   */
  initUIEvent(
    type: string,
    captures: boolean,
    bubbles: boolean,
    view?: object,
    detail?: number
  ): void;

  /**
   * Prevents the default action associated with this event from being called.
   */
  preventDefault(): void;

  /**
   * Stops the propagation of this event.
   */
  stopPropagation(): void;
}

/**
 * Base class for UIEvent.
 * Encapsulates input event information for an event that propagates through a container and control hierarchy.Implements W3C standard event handling.
 */
declare class Event {
  /**
   *
   */
  static readonly AT_TARGET: any;

  /**
   *
   */
  static readonly BUBBLING_PHASE: any;

  /**
   *
   */
  static readonly CAPTURING_PHASE: any;

  /**
   *
   */
  static readonly NOT_DISPATCHING: any;

  /**
   * True if the event is of a type that bubbles.
   */
  readonly bubbles: boolean;

  /**
   * True if the default action associated with the event can be canceled with preventDefault().
   */
  readonly cancelable: boolean;

  /**
   * True if this event can be captured.
   */
  readonly captures: boolean;

  /**
   * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
   */
  readonly currentTarget: boolean;

  /**
   * The current phase of event propagation; one of none, target, capture, bubble.
   */
  readonly eventPhase: string;

  /**
   * The event target object for this event.
   */
  readonly target: object;

  /**
   * The date and time at which the event occurred.
   */
  readonly timeStamp: Date;

  /**
   * The name of the event that this object represents.
   * Event types are listed in the JavaScript Tools Guide.
   */
  readonly type: string;

  /**
   * Prevents the default action associated with this event from being called.
   */
  preventDefault(): void;

  /**
   * Stops the propagation of this event.
   */
  stopPropagation(): void;
}

/**
 * Defines attributes of the ScriptUI environment.
 * Access through the ScriptUI.environment property.
 */
declare class Environment {
  /**
   * An object that reports the active state of the keyboard at any time.
   * Provides access to the key state independent of the event-handling framework.
   */
  readonly keyboardState: KeyboardState;
}

/**
 * Provides access to objects used in the ScriptUI event system.
 * Access through the ScriptUI.events property.
 */
declare class Events {
  /**
   * Creates an instance of the specified Event subclass.
   * The Event returned is a UIEvent,
   * KeyboardEvent or MouseEvent object,
   * depending on the requested type. This object can be passed as a parameter to an element's dispatchEvent
   * function in order to simulate a user-interaction event.
   * @param eventType The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
   */
  createEvent(eventType: string): Event;
}

/**
 * Reports the active state of the keyboard.
 * Access through the ScriptUI.environment.keyboardState property.
 * Query the properties of this object at any time to determine the current key that is down and any modifiers that are pressed.
 */
declare class KeyboardState {
  /**
   * True if the Alt or Option key is pressed.
   */
  readonly altKey: boolean;

  /**
   * True if the Ctrl key is pressed.
   */
  readonly ctrlKey: boolean;

  /**
   * A string containing the name of the currently pressed key, such as "a", or an empty string.
   */
  readonly keyName: string;

  /**
   * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
   */
  readonly metaKey: boolean;

  /**
   * True if the Shift key is pressed.
   */
  readonly shiftKey: boolean;
}

/**
 * Added by types-for-adobe
 */
declare class _Control {
  /**
   * The alignment style for child elements of a container. If defined, this value overrides the alignChildren setting for the parent container.
   * This can be a single string, which indicates the alignment for the orientation specified in the parent container, or an array of two strings, indicating both the horizontal and vertical alignment (in that order). Allowed values depend on the orientation value of the parent container. They are not case sensitive.
   * For orientation=row:top, bottom, fill
   * For orientation=column: left, right, fill
   * For orientation=stack:top, bottom, left, right, fill
   */
  alignment: string;

  /**
   * The boundaries of the element, in parent-relative coordinates.
   * Setting an element's size or location changes its bounds property, and vice-versa.
   */
  bounds: Bounds | [number, number, number, number];

  /**
   * True if this element is enabled.
   * An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.
   */
  enabled: boolean;

  /**
   * The help text that is displayed when the mouse hovers over the element.
   */
  helpTip: string;

  /**
   * The number of pixels to indent the element during automatic layout.
   * Applies for column orientation and left alignment, or row orientation and top alignment.
   */
  indent: number;

  /**
   * The upper left corner of this element relative to its parent.
   * The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.
   */
  location: Point | [number, number];

  /**
   * The maximum height and width to which the element can be resized.
   */
  maximumSize: Dimension | [number, number];

  /**
   * The minimum height and width to which the element can be resized.
   */
  minimumSize: Dimension | [number, number];

  /**
   * The parent element.
   */
  readonly parent: object;

  /**
   * The preferred size, used by layout managers to determine the best size for each element.
   * If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes. A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
   * To set a specific value for only one dimension, specify the other dimension as -1.
   */
  preferredSize: Dimension | [number, number];

  /**
   * The current dimensions of this element.
   * Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.
   */
  size: Dimension | [number, number];

  /**
   * The element type.
   */
  readonly type: string;

  /**
   * True if this element is shown, false if it is hidden.
   * When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.
   */
  visible: boolean;

  /**
   * The window that this element belongs to.
   */
  readonly window: Window;

  /**
   * The bounds of this element relative to the top-level parent window.
   */
  readonly windowBounds: Bounds | [number, number, number, number];

  /**
   * Registers an event handler for a particular type of event occuring in this element.
   * @param eventName The name of the event. Event names are listed in the JavaScript Tools Guide.
   * @param handler The function that handles the event. This can be the name of a function defined in the extension, or a locally defined handler function to be executed when the event occurs. A handler function takes one argument, the UIEvent object.
   * @param capturePhase When true, the handler is called only in the capturing phase of the event propagation. Default is false, meaning that the handler is called in the bubbling phase if this object is an ancestor of the target, or in the at-target phase if this object is itself the target.
   */
  addEventListener(
    eventName: string,
    handler: Function,
    capturePhase?: boolean
  ): boolean;

  /**
   * Simulates the occurrence of an event in this target.
   * A script can create a UIEvent object for a specific event and pass it to this method to start the event propagation for the event.
   */
  dispatchEvent(): Event;

  /**
   * Hides this element.
   */
  hide(): void;

  /**
   * Unregisters an event handler for a particular type of event occuring in this element.
   * All arguments must be identical to those that were used to register the event handler.
   * @param eventName The name of the event.
   * @param handler The function that handles the event.
   * @param capturePhase Whether to call the handler only in the capturing phase of the event propagation.
   */
  removeEventListener(
    eventName: string,
    handler: Function,
    capturePhase?: boolean
  ): boolean;

  /**
   * Shows this element.
   * When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
   * If an onShow() callback is defined for a window, calls that function before showing the window.When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states. For a modal dialog, opens the dialog and does not return until the dialog is dismissed. If it is dismissed via the close() method, this method returns any result value passed to that method. Otherwise, returns 0.
   */
  show(): number | undefined;
}

/**
 * Creation properties map
 * An object that contains one or more creation properties of the element (properties used only when the element is created).
 */
interface _ControlPropertiesMap {
  /**
   * Creation properties of a Button
   * But the third argument to the add() method that creates it can be the initial text value.
   * @param name A unique name for the control. Special name "ok" makes the button primary for parent dialog, and the special name "cancel" makes the button default cancel button for parent dialog.
   */
  button: {
    name: string;
  };

  /**
   * Creation properties of a CheckBox
   * The third argument to the add() method that creates it is the text to be displayed.
   * @param name A unique name for the control.
   */
  checkbox: {
    name: string;
  };

  /**
   * Creation properties of a DropDownList
   * @param name A unique name for the control.
   * @param items An array of strings for the text of each list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
   */
  dropdownlist: {
    name: string;
    items: string[];
  };

  /**
   * Creation properties of an EditText
   * @param name A unique name for the control.
   * @param multiline When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.
   * @param borderless When true, the control is drawn with no border. Default is false.
   * @param scrollable For multiline elements only. When true (the default), the text field has a vertical scrollbar that is enabled when the element contains more text than fits in the visible area. When false, no vertical scrollbar appears; if the element contains more text than fits in the visible area, the arrow keys can be used to scroll the text up and down.
   * @param readonly When false (the default), the control accepts text input. When true, the control does not accept input but only displays the contents of the text property.
   * @param noecho When false (the default), the control displays input text. When true, the control does not display input text (used for password input fields).
   * @param enterKeySignalsOnChange When false (the default), the control signals an onChange event when the editable text is changed and the control loses the keyboard focus (that is, the user tabs to another control, clicks outside the control, or types Enter). When true, the control only signals an onChange() event when the editable text is changed and the user types Enter; other changes to the keyboard focus do not signal the event.
   * @param wantReturn Only applies to multiple line edit controls in ScriptUI Version 6.0 or later. When true the RETURN/ENTER keystroke is considered as text-input advancing the cursor to the next line. The default value is false.
   */
  edittext: {
    name: string;
    multiline: boolean;
    borderless: boolean;
    scrollable: boolean;
    readonly: boolean;
    noecho: boolean;
    enterKeySignalsOnChange: boolean;
    wantReturn: boolean;
  };

  /**
   * Creation properties of a FlashPlayer
   * @param name A unique name for the control.
   */
  flashplayer: {
    name: string;
  };

  /**
   * Creation properties of a Group
   * @param name A unique name for the control.
   */
  group: {
    name: string;
  };

  /**
   * Creation properties of an IconButton
   * @param name A unique name for the control.
   * @param style A string for the visual style, either "button", which has a visible border with a raised or 3D appearance, or "toolbutton", which has a flat appearance, appropriate for inclusion in a toolbar.
   * @param toggle For a button-style control, a value of true causes it to get a button-pressed appearance the first time it is clicked, and alternate with the unpressed appearance each time it is clicked. The toggle state is reflected in the control’s value property.
   */
  iconbutton: {
    name: string;
    style: "button" | "toolbutton";
    toggle: boolean;
  };

  /**
   * Creation properties of a ListBox
   * @param name A unique name for the control.
   * @param multiselect When false (the default), only one item can be selected. When true, multiple items can be selected.
   * @param selected When true, multiple items can be selected.
   * @param items An array of strings for the text of each list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
   * @param numberOfColumns A number of columns in which to display the items; default is 1. When there are multiple columns, each ListItem object represents a selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.
   * @param showHeaders True to display column titles.
   * @param columnWidths An array of numbers for the preferred width in pixels of each column.
   * @param columnTitles A corresponding array of strings for the title of each column, to be shown if showHeaders is true.
   */
  listbox: {
    name: string;
    multiselect: boolean;
    selected: boolean;
    items: string[];
    numberOfColumns: number;
    showHeaders: boolean;
    columnWidths: number[];
    columnTitles: string[];
  };

  /**
   * Creation properties of a Panel
   * @param name A unique name for the control.
   * @param borderStyle A string that specifies the appearance of the border drawn around the panel. One of black, etched, gray, raised, sunken. Default is etched.
   * @param su1PanelCoordinates Photoshop only. When true, this panel automatically adjusts the positions of its children for compatability with Photoshop CS. Default is false, meaning that the panel does not adjust the positions of its children, even if the parent window has automatic adjustment enabled.
   */
  panel: {
    name: string;
    borderStyle: string;
    su1PanelCoordinates: boolean;
  };

  /**
   * Creation properties of a ProgressBar
   * The third argument of the add() method that creates it is the initial value (default 0), and the fourth argument is the maximum value of the range (default 100).
   * @param name A unique name for the control.
   */
  progressbar: {
    name: string;
  };

  /**
   * Creation properties of a RadioButton
   * The third argument of the add() method that creates can be the label text.
   * @param name A unique name for the control.
   */
  radiobutton: {
    name: string;
  };

  /**
   * Creation properties of a Scrollbar
   * The third argument of the add() method that creates it is the initial value, and the fourth and fifth arguments are the minimum and maximum values of the range.
   * @param name A unique name for the control.
   */
  scrollbar: {
    name: string;
  };

  /**
   * Creation properties of a Slider
   * The third argument of the add() method that creates it is the initial value, and the fourth and fifth arguments are the minimum and maximum values of the range.
   * @param name A unique name for the control.
   */
  slider: {
    name: string;
  };

  /**
   * Creation properties of a StaticText
   * @param name A unique name for the control.
   * @param multiline When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.
   * @param scrolling When false (the default), the displayed text cannot be scrolled. When true, the displayed text can be vertically scrolled using the Up Arrow and Down Arrow; this case implies multiline=true.
   * @param truncate If middle or end, defines where to remove characters from the text and replace them with an ellipsis if the specified title does not fit within the space reserved for it. If none, and the text does not fit, characters are removed from the end, without any replacement ellipsis character.
   */
  statictext: {
    name: string;
    multiline: boolean;
    scrolling: boolean;
    truncate: string;
  };

  /**
   * Creation properties of a TreeView
   * @param name A unique name for the control.
   * @param items An array of strings for the text of each top-level list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.
   */
  treeview: {
    name: string;
    items: string[];
  };

  /**
   * Creation properties of a Window
   * @param resizeable When true, the window can be resized by the user. Default is false.
   * @param su1PanelCoordinates Photoshop only. When true, the child panels of this window automatically adjust the positions of their children for compatability with Photoshop CS (in which the vertical coordinate was measured from outside the frame). Default is false. Individual panels can override the parent window’s setting.
   * @param closeButton Bridge only. When true, the title bar includes a button to close the window, if the platform and window type allow it. When false, it does not. Default is true. Not used for dialogs.
   * @param maximizeButton Bridge only. When true, the title bar includes a button to expand the window to its maximum size (typically, the entire screen), if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Not used for dialogs.
   * @param minimizeButton Bridge only. When true, the title bar includes a button to minimize or iconify the window, if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Main windows cannot have a minimize button in Mac OS. Not used for dialogs.
   * @param independent When true, a window of type window is independent of other application windows, and can be hidden behind them in Windows. In Mac OS, has no effect. Default is false.
   * @param borderless When true, the window has no title bar or borders. Properties that control those features are ignored.
   */
  window: {
    resizeable: boolean;
    su1PanelCoordinates: boolean;
    closeButton: boolean;
    maximizeButton: boolean;
    minimizeButton: boolean;
    independent: boolean;
    borderless: boolean;
  };

  /**
   * A ListItem object has no creation properties.
   */
  listitem: {};
}

interface _WindowPanelGroupAdd {
  (
    type: "button",
    bounds?: Bounds | [number, number, number, number],
    text?: string,
    properties?: Partial<_ControlPropertiesMap["button"]>
  ): Button;
  (
    type: "checkbox",
    bounds?: Bounds | [number, number, number, number],
    text?: string,
    properties?: Partial<_ControlPropertiesMap["checkbox"]>
  ): Checkbox;
  (
    type: "dropdownlist",
    bounds?: Bounds | [number, number, number, number],
    items?: string[],
    properties?: Partial<_ControlPropertiesMap["dropdownlist"]>
  ): DropDownList;
  (
    type: "edittext",
    bounds?: Bounds | [number, number, number, number],
    text?: string,
    properties?: Partial<_ControlPropertiesMap["edittext"]>
  ): EditText;
  (
    type: "flashplayer",
    bounds?: Bounds | [number, number, number, number],
    movieToLoad?: string | File,
    properties?: Partial<_ControlPropertiesMap["flashplayer"]>
  ): FlashPlayer;
  (
    type: "group",
    bounds?: Bounds | [number, number, number, number],
    properties?: Partial<_ControlPropertiesMap["group"]>
  ): Group;
  (
    type: "iconbutton",
    bounds?: Bounds | [number, number, number, number],
    icon?: string | File,
    properties?: Partial<_ControlPropertiesMap["iconbutton"]>
  ): IconButton;
  (
    type: "listbox",
    bounds?: Bounds | [number, number, number, number],
    items?: string[],
    properties?: Partial<_ControlPropertiesMap["listbox"]>
  ): ListBox;
  (
    type: "panel",
    bounds?: Bounds | [number, number, number, number],
    text?: string,
    properties?: Partial<_ControlPropertiesMap["panel"]>
  ): Panel;
  (
    type: "progressbar",
    bounds?: Bounds | [number, number, number, number],
    value?: number,
    max?: number,
    properties?: Partial<_ControlPropertiesMap["progressbar"]>
  ): Progressbar;
  (
    type: "radiobutton",
    bounds?: Bounds | [number, number, number, number],
    text?: string,
    properties?: Partial<_ControlPropertiesMap["radiobutton"]>
  ): RadioButton;
  (
    type: "scrollbar",
    bounds?: Bounds | [number, number, number, number],
    value?: number,
    min?: number,
    max?: number,
    properties?: Partial<_ControlPropertiesMap["scrollbar"]>
  ): Scrollbar;
  (
    type: "slider",
    bounds?: Bounds | [number, number, number, number],
    value?: number,
    min?: number,
    max?: number,
    properties?: Partial<_ControlPropertiesMap["slider"]>
  ): Slider;
  (
    type: "statictext",
    bounds?: Bounds | [number, number, number, number],
    text?: string,
    properties?: Partial<_ControlPropertiesMap["statictext"]>
  ): StaticText;
  (
    type: "treeview",
    bounds?: Bounds | [number, number, number, number],
    items?: string[],
    properties?: Partial<_ControlPropertiesMap["treeview"]>
  ): TreeView;
}

interface ExternalObjectConstructor {
  readonly prototype: ExternalObject;

  /**
   * Creates a new ExternalObject object.
   */
  new (lib: string): ExternalObject;
  (lib: string): ExternalObject;
}
declare const ExternalObject: ExternalObjectConstructor;

interface ExternalObject {
  /**
   * Set to true to write status information to standard output (the
   * JavaScript Console in the ExtendScript Toolkit). Set to false to turn
   * logging off. Default is false.
   */
  log: boolean;

  /**
   * A set of alternate paths in which to search for the shared library files, a
   * single string with multiple path specifications delimited by semicolons
   * (;). Paths can be absolute or relative to the Folder.startup location.
   */
  searchFolders: string;

  /**
   * The version of the library, as returned by ESGetVersion()
   */
  version: number;

  /**
   * Reports whether a compiled C/C++ library can be found, but does not load it. If logging is on, the
   * paths searched are reported to the JavaScript Console in the ExtendScript Toolkit.
   * Returns true if the library is found, false otherwise.
   * @param spec The file specification for the compiled library, with or without path information.
   */
  search(spec: string): boolean;

  /**
   * Explicitly shuts down the ExternalObject dynamic library wrapped by this instance.
   * It can be helpful to force a shutdown of the external library if termination of external libraries during
   * the shutdown of the hosting application does not occur in the correct order.
   */
  terminate(): undefined;
}

interface CSXSEventConstructor {
  readonly prototype: CSXSEvent;

  /**
   * Creates a new CSXSEvent object.
   */
  new (type?: string, scope?: string, data?: string): CSXSEvent;
  (type?: string, scope?: string, data?: string): CSXSEvent;
}
declare const CSXSEvent: CSXSEventConstructor;

interface CSXSEvent {
  /**
   * Retrieves the unique identifier of the application from which this event was dispatched.
   */
  readonly appId: string;

  /**
   * Retrieves or sets the payload of this event.
   */
  data: string;

  /**
   * Retrieves the unique identifier of the extension from which this event was dispatched.
   */
  readonly extensionId: string;

  /**
   * Retrieves the scope of this event.
   */
  scope: string;

  /**
   * Retrieves the type of this event.
   */
  type: string;

  /**
   * Dispatch the event
   */
  dispatch(): void;
}
