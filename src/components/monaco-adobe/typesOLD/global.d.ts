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
