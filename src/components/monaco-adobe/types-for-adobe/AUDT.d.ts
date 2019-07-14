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
 * The Metadata class provides access to document metadata
 */
declare class Metadata {
  /**
   * XMP metatdata string of the according document
   */
  xmp: string;
}

/**
 * DynamicLink provides access to DynamicLink objects.
 */
declare class DynamicLink {
  /**
   * AMEServer object identifier
   */
  static readonly AMEServer: string;

  /**
   *
   */
  static __(): any;

  /**
   *
   * @param name Create connection to the named DynaicLink object Create Connection.
   */
  static createConnection(name: string): object;
}

/**
 * An event to inform about connection status changes
 */
declare class DynamicLinkConnectionEvent {
  /**
   * An event with this type is propagated if the connection state to a DynamikLink server object has changed
   * Connection state to DynamikLink server object changed event type
   */
  static readonly EVENT_CONNECTION: string;

  /**
   * Return connection status.
   */
  readonly isConnected: boolean;

  /**
   * Return server name.
   */
  readonly serverName: string;

  /**
   *
   */
  static __(): any;
}

/**
 * UIControl event object
 */
declare class UIControlEvent {
  /**
   * A UI control is about to change its value.
   */
  static readonly EVENT_VALUE_CHANGED: string;

  /**
   * Absolut path to UI control.
   */
  readonly ctrlPath: string;

  /**
   *
   */
  static __(): any;
}

/**
 * An object that represents a particular multitrack document.
 */
declare class MultitrackDocument {
  /**
   * Collection of all currently selected audio clips of this multitrack document.
   */
  readonly audioClipSelection: AudioClipSelectionCollection;

  /**
   * Collection of all audio tracks of the multitrack document.
   */
  readonly audioTracks: MixedAudioTrackCollection;

  /**
   * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
   */
  readonly displayName: string;

  /**
   * Duration in samples
   */
  readonly duration: number;

  /**
   * Unique identifier of this document.
   */
  readonly id: string;

  /**
   * Returns an array of marker objects. Each marker object consists of the properties 'start' 'length' 'name' 'description' and 'type'.
   */
  readonly markers: any[];

  /**
   * Returns the document's current metadata as a vanilla Object. Each property is readonly and represents an metadata entry.
   */
  readonly metadata: Metadata;

  /**
   * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
   */
  readonly path: string;

  /**
   * The current playhead position in samples
   */
  playheadPosition: number;

  /**
   * The audio sample rate (Hz) of the current document.
   */
  readonly sampleRate: number;

  /**
   * Makes the current document the active (front-most) document.
   */
  activate(): boolean;

  /**
   *
   * @param start
   * @param duration
   * @param name
   * @param type
   * @param description Add a new marker to the document. Possible marker types are 'cue' 'track' 'cart' 'subclip'
   */
  addMarker(
    start: number,
    duration: number,
    name: string,
    type: string,
    description: string
  ): boolean;

  /**
   * Close the document. Returns false if the document can't be closed right now (e.g. due to ongoing document operations)
   */
  closeDocument(): boolean;
}

/**
 * Represents any waveform document
 */
declare class WaveDocument {
  /**
   * The audio format of the document (sample rate bit depth channel layout)
   */
  readonly audioFormat: object;

  /**
   * Returns that amount of progress from 0 to 100 for the document's current operation.
   */
  readonly busyProgress: number;

  /**
   * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
   */
  readonly displayName: string;

  /**
   * Duration in samples
   */
  readonly duration: number;

  /**
   * true if the document exists.
   */
  readonly exists: boolean;

  /**
   * Unique identifier of this document.
   */
  readonly id: string;

  /**
   * true if the document is busy (e.g. in the process of being saved).
   */
  readonly isBusy: boolean;

  /**
   * Returns an array of marker objects. Each marker object consists of the properties 'start' 'length' 'name' 'description' and 'type'.
   */
  readonly markers: any[];

  /**
   * Returns the document's current metadata as a vanilla Object. Each property is readonly and represents an metadata entry.
   */
  readonly metadata: Metadata;

  /**
   * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
   */
  readonly path: string;

  /**
   * The current playhead position in samples
   */
  playheadPosition: number;

  /**
   * The audio sample rate (Hz) of the current document.
   */
  readonly sampleRate: number;

  /**
   * Makes the current document the active (front-most) document.
   */
  activate(): boolean;

  /**
   *
   * @param start
   * @param duration
   * @param name
   * @param type
   * @param description Add a new marker to the document. Possible marker types are 'cue' 'track' 'cart' 'subclip'
   */
  addMarker(
    start: number,
    duration: number,
    name: string,
    type: string,
    description: string
  ): boolean;

  /**
   *
   * @param name Apply a registered favorite to this document
   */
  applyFavorite(name: string): boolean;

  /**
   * Close the document. Returns false if the document can't be closed right now (e.g. due to ongoing document operations)
   */
  closeDocument(): boolean;

  /**
   *
   * @param path
   * @param export_ Save the document at the given location. Do an export if the parameter 'export' is true. Returns true on success.
   */
  saveAs(path: string, export_: boolean): boolean;
}

/**
 * Collection of audio tracks of the according multitrack document.
 */
declare class AudioTrackCollection {
  /**
   * Returns an audio track by its index
   */
  readonly index: AudioTrack;

  /**
   * Number of audio tracks.
   */
  readonly length: number;

  /**
   *
   * @param layout Add new track
   */
  add(layout: AudioChannelLayout): AudioTrack;

  /**
   *
   * @param name Return audio track by its name
   */
  getAudioTrack(name: string): AudioTrack;

  /**
   *
   * @param track Remove track
   */
  remove(track: AudioTrack): boolean;
}

/**
 * Represents a single audio track of a multitrack document.
 */
declare class AudioTrack {
  /**
   * Audio bus track type.
   */
  static readonly AUDIOTRACKTYPE_BUS: number;

  /**
   * Audio clip track type.
   */
  static readonly AUDIOTRACKTYPE_CLIP: number;

  /**
   * Audio master track type.
   */
  static readonly AUDIOTRACKTYPE_MASTER: number;

  /**
   * Unknown track type
   */
  static readonly AUDIOTRACKTYPE_UNKOWN: number;

  /**
   *
   */
  readonly ancestor: any;

  /**
   * True if this track is armed for record
   */
  armed: boolean;

  /**
   * Collection of all currently selected audio clips of this track.
   */
  readonly audioClipSelection: AudioClipSelectionCollection;

  /**
   * Collection of all audio clips of this track.
   */
  readonly audioClips: AudioClipCollection;

  /**
   * The audio format of the track (sample rate bit depth channel layout)
   */
  readonly audioFormat: object;

  /**
   * Unique id of the track.
   */
  readonly id: number;

  /**
   * True if this track is muted
   */
  mute: boolean;

  /**
   * Get the name of this track.
   */
  name: string;

  /**
   * Selection state of the track.
   */
  selected: boolean;

  /**
   * True if this track is soloed
   */
  solo: boolean;

  /**
   * Type of the track. The value is one of AUDIOTRACKTYPE_CLIP AUDIOTRACKTYPE_BUS AUDIOTRACKTYPE_MASTER or AUDIOTRACKTYPE_UNKOWN
   */
  readonly type: number;

  /**
   *
   */
  static __(): any;

  /**
   *
   */
  static addEventListener(): any;

  /**
   *
   */
  static removeEventListener(): any;
}

/**
 * AudioFormat describes the format in the form of the sample rate, the bit depth and the channel layout.
 */
declare class AudioFormat {
  /**
   * 16 bit signed integer
   */
  static readonly SAMPLETYPE_16: number;

  /**
   * 24 bit signed integer
   */
  static readonly SAMPLETYPE_24: number;

  /**
   * 32 bit floating point
   */
  static readonly SAMPLETYPE_32: number;

  /**
   * 8 bit unsigned integer
   */
  static readonly SAMPLETYPE_8: number;

  /**
   * Bit depth of a sample as well as its data format. Always normalized to 8 bit unsigned integer 16 bit signed integer little endian 24 bit signed integer little endian packed or 32 bit floating point (range -1.0 to 1.0)
   */
  bitDepth: number;

  /**
   * Channel layout
   */
  channelLayout: object;

  /**
   * Samplerate
   */
  sampleRate: number;

  /**
   *
   * @param samplerate
   * @param bitDepth
   * @param channelLayout Constructs a new AudioFormat object.
   */
  constructor(
    samplerate: number,
    bitDepth: number,
    channelLayout: AudioChannelLayout
  );

  /**
   *
   */
  static __(): any;
}

/**
 * Collection of selected audio clips.
 */
declare class AudioClipSelectionCollection {
  /**
   * Returns an audio clip by its index
   */
  readonly index: AudioClipCollection;

  /**
   * Number of audio clips.
   */
  readonly length: number;

  /**
   *
   * @param AudioClip Add clip to the selection.
   */
  add(AudioClip: any): object;

  /**
   * Clear the selection
   */
  clear(): boolean;

  /**
   *
   * @param AudioClipSelectionCollection Remove clip from the selection.
   */
  remove(AudioClipSelectionCollection: any): boolean;
}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class AudioClipEvent {
  /**
   * This event is fired after a clip was added to a multitrack document.
   */
  static readonly EVENT_ADDED: string;

  /**
   * This event is fired after a clip was moved within a multitrack document.
   */
  static readonly EVENT_MOVED: string;

  /**
   * This event is fired after a clip was removed from a multitrack document.
   */
  static readonly EVENT_REMOVED: string;

  /**
   * Unique clip ID.
   */
  readonly clipID: string;

  /**
   * Unique document ID.
   */
  readonly documentID: string;

  /**
   * Document file path.
   */
  readonly path: string;

  /**
   * Unique track ID.
   */
  readonly trackID: number;

  /**
   * Track name.
   */
  readonly trackName: string;

  /**
   *
   */
  static __(): any;
}

/**
 * Collection of audio clips of the according audio track.
 */
declare class AudioClipCollection {
  /**
   * Returns an audio clip by its index
   */
  readonly index: AudioClipCollection;

  /**
   * Number of audio clips.
   */
  readonly length: number;

  /**
   *
   * @param AudioClip
   * @param sourceChannelRouting Add new clip to the track based on the passed in document or move the passed in clip to this track.
   */
  add(AudioClip: any, sourceChannelRouting: any): object;

  /**
   *
   * @param AudioClipCollection Remove clip from this track.
   */
  remove(AudioClipCollection: any): boolean;
}

/**
 * An object representing a particular audio clip as part of a multitrack session.
 */
declare class AudioClip {
  /**
   *
   */
  readonly ancestor: any;

  /**
   * The audio format of the clip (sample rate bit depth channel layout)
   */
  readonly audioFormat: object;

  /**
   * The end time of the clip measured in samples (exclusive) at the multitrack document's sample rate.
   */
  readonly endTime: number;

  /**
   * Unique id of the clip.
   */
  readonly id: string;

  /**
   * Document associated with this clip.
   */
  link: object;

  /**
   * The name of the clip.
   */
  readonly name: string;

  /**
   * Selection state of this audio clip.
   */
  readonly selected: boolean;

  /**
   * Mapping of source channels to clip channels. The array contains indices of source channels which are routed to the according clip channels. The array has to have as many source channel indices as there are clip channels. Each source channel can be routed to exactly one clip channel.
   */
  sourceChannelRouting: any[];

  /**
   * The start time of the clip measured in samples at the multitrack document's sample rate.
   */
  startTime: number;
}

/**
 * AudioChannelLayout represents a channel layout with named channels proved as constants AUDIOCHANNELLABEL_ ... An AudioChannelLayout can be created using an Array of these constants or it could be created using one of the constants CHANNELLAYOUT_ ... to create a common layout.
 */
declare class AudioChannelLayout {
  /**
   * Ambisonic-W
   */
  static readonly AUDIOCHANNELLABEL_AMBISONIC_W: number;

  /**
   * Ambisonic-X
   */
  static readonly AUDIOCHANNELLABEL_AMBISONIC_X: number;

  /**
   * Ambisonic-Y
   */
  static readonly AUDIOCHANNELLABEL_AMBISONIC_Y: number;

  /**
   * Ambisonic-Z
   */
  static readonly AUDIOCHANNELLABEL_AMBISONIC_Z: number;

  /**
   * Back-Center
   */
  static readonly AUDIOCHANNELLABEL_BACKCENTER: number;

  /**
   * Back-Left
   */
  static readonly AUDIOCHANNELLABEL_BACKLEFT: number;

  /**
   * Back-Right
   */
  static readonly AUDIOCHANNELLABEL_BACKRIGHT: number;

  /**
   * Bottom-Front-Center
   */
  static readonly AUDIOCHANNELLABEL_BOTTOMFRONTCENTER: number;

  /**
   * Bottom-Front-Left
   */
  static readonly AUDIOCHANNELLABEL_BOTTOMFRONTLEFT: number;

  /**
   * Bottom-Front-Right
   */
  static readonly AUDIOCHANNELLABEL_BOTTOMFRONTRIGHT: number;

  /**
   * Discrete
   */
  static readonly AUDIOCHANNELLABEL_DISCRETE: number;

  /**
   * Front-Center
   */
  static readonly AUDIOCHANNELLABEL_FRONTCENTER: number;

  /**
   * Front-Left
   */
  static readonly AUDIOCHANNELLABEL_FRONTLEFT: number;

  /**
   * Front-Left-Of-Center
   */
  static readonly AUDIOCHANNELLABEL_FRONTLEFTOFCENTER: number;

  /**
   * Front-Left-Wide
   */
  static readonly AUDIOCHANNELLABEL_FRONTLEFTWIDE: number;

  /**
   * Front-Right
   */
  static readonly AUDIOCHANNELLABEL_FRONTRIGHT: number;

  /**
   * Front-Right-Of-Center
   */
  static readonly AUDIOCHANNELLABEL_FRONTRIGHTOFCENTER: number;

  /**
   * Front-Right-Wide
   */
  static readonly AUDIOCHANNELLABEL_FRONTRIGHTWIDE: number;

  /**
   * Left-Height
   */
  static readonly AUDIOCHANNELLABEL_LEFTHEIGHT: number;

  /**
   * Left-Total
   */
  static readonly AUDIOCHANNELLABEL_LEFTTOTAL: number;

  /**
   * LFE2
   */
  static readonly AUDIOCHANNELLABEL_LFE2: number;

  /**
   * Low-Frequency
   */
  static readonly AUDIOCHANNELLABEL_LOWFREQUENCY: number;

  /**
   * Proximity-Left
   */
  static readonly AUDIOCHANNELLABEL_PROXIMITYLEFT: number;

  /**
   * Proximity-Right
   */
  static readonly AUDIOCHANNELLABEL_PROXIMITYRIGHT: number;

  /**
   * Rear-Surround-Left
   */
  static readonly AUDIOCHANNELLABEL_REARSURROUNDLEFT: number;

  /**
   * Rear-Surround-Right
   */
  static readonly AUDIOCHANNELLABEL_REARSURROUNDRIGHT: number;

  /**
   * Right-Height
   */
  static readonly AUDIOCHANNELLABEL_RIGHTHEIGHT: number;

  /**
   * Right-Total
   */
  static readonly AUDIOCHANNELLABEL_RIGHTTOTAL: number;

  /**
   * Side-Left
   */
  static readonly AUDIOCHANNELLABEL_SIDELEFT: number;

  /**
   * Side-Right
   */
  static readonly AUDIOCHANNELLABEL_SIDERIGHT: number;

  /**
   * Top-Back-Center
   */
  static readonly AUDIOCHANNELLABEL_TOPBACKCENTER: number;

  /**
   * Top-Back-Left
   */
  static readonly AUDIOCHANNELLABEL_TOPBACKLEFT: number;

  /**
   * Top-Back-Right
   */
  static readonly AUDIOCHANNELLABEL_TOPBACKRIGHT: number;

  /**
   * Top-Center
   */
  static readonly AUDIOCHANNELLABEL_TOPCENTER: number;

  /**
   * Top-Front-Center
   */
  static readonly AUDIOCHANNELLABEL_TOPFRONTCENTER: number;

  /**
   * Top-Front-Left
   */
  static readonly AUDIOCHANNELLABEL_TOPFRONTLEFT: number;

  /**
   * Top-Front-Right
   */
  static readonly AUDIOCHANNELLABEL_TOPFRONTRIGHT: number;

  /**
   * 6 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_51: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
   */
  static readonly CHANNELLAYOUT_7_1: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency Front-Left-Of-Center Front-Right-Of-Center
   */
  static readonly CHANNELLAYOUT_7_1EMAGIC: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
   */
  static readonly CHANNELLAYOUT_7_1ITU: number;

  /**
   * 8 Channel Configuration Front-Center Front-Left-Of-Center Front-Right-Of-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
   */
  static readonly CHANNELLAYOUT_7_1MPEG: number;

  /**
   * 4 Channel Configuration Ambisonic-W Ambisonic-X Ambisonic-Y Ambisonic-Z
   */
  static readonly CHANNELLAYOUT_AMBISONICSBFORMAT: number;

  /**
   * 2 Channel Configuration Bottom-Front-Left Bottom-Front-Right
   */
  static readonly CHANNELLAYOUT_BFL_BFR: number;

  /**
   * 6 Channel Configuration Front-LeftFront-Right Front-Center Low-Frequency Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_BROADCAST51: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_CUBE: number;

  /**
   * 2 Channel Configuration Front-Center Low-Frequency
   */
  static readonly CHANNELLAYOUT_C_LFE: number;

  /**
   * 3 Channel Configuration Front-Center Front-Left Front-Right
   */
  static readonly CHANNELLAYOUT_C_L_R: number;

  /**
   * 4 Channel Configuration Front-Center Front-Left Front-Right Back-Center
   */
  static readonly CHANNELLAYOUT_C_L_R_CS: number;

  /**
   * 5 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_C_L_R_LS_RS: number;

  /**
   * 6 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center
   */
  static readonly CHANNELLAYOUT_C_L_R_LS_RS_CS: number;

  /**
   * 7 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Back-Center Low-Frequency
   */
  static readonly CHANNELLAYOUT_C_L_R_LS_RS_CS_LFE: number;

  /**
   * 6 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Low-Frequency
   */
  static readonly CHANNELLAYOUT_C_L_R_LS_RS_LFE: number;

  /**
   * 7 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right
   */
  static readonly CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS: number;

  /**
   * 8 Channel Configuration Front-Center Front-Left Front-Right Back-Left Back-Right Rear-Surround-Left Rear-Surround-Right Back-Center
   */
  static readonly CHANNELLAYOUT_C_L_R_LS_RS_RLS_RRS_CS: number;

  /**
   * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center
   */
  static readonly CHANNELLAYOUT_HEXAGONAL: number;

  /**
   * 2 Channel Configuration Front-Left-Of-Center Front-Right-Of-Center
   */
  static readonly CHANNELLAYOUT_LC_RC: number;

  /**
   * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Low-Frequency
   */
  static readonly CHANNELLAYOUT_LEGACY51: number;

  /**
   * 2 Channel Configuration Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_LSD_RSD: number;

  /**
   * 2 Channel Configuration Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_LS_RS: number;

  /**
   * 3 Channel Configuration Front-Left Front-Center Front-Right
   */
  static readonly CHANNELLAYOUT_L_C_R: number;

  /**
   * 4 Channel Configuration Front-Left Front-Center Front-Right Back-Center
   */
  static readonly CHANNELLAYOUT_L_C_R_CS: number;

  /**
   * 5 Channel Configuration Front-Left Front-Center Front-Right Back-Center Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_C_R_CS_LFE: number;

  /**
   * 4 Channel Configuration Front-Left Front-Center Front-Right Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_C_R_LFE: number;

  /**
   * 5 Channel Configuration Front-Left Front-Center Front-Right Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_L_C_R_LS_RS: number;

  /**
   * 6 Channel Configuration Front-Left Front-Center Front-Right Back-Left Back-Right Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_C_R_LS_RS_LFE: number;

  /**
   * 3 Channel Configuration Front-Left Front-Right Front-Center
   */
  static readonly CHANNELLAYOUT_L_R_C: number;

  /**
   * 3 Channel Configuration Front-Left Front-Right Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_CS: number;

  /**
   * 4 Channel Configuration Front-Left Front-Right Back-Center Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_R_CS_LFE: number;

  /**
   * 4 Channel Configuration Front-Left Front-Right Front-Center Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_CS: number;

  /**
   * 4 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE: number;

  /**
   * 5 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_CS: number;

  /**
   * 7 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS: number;

  /**
   * 9 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_LSD_RSD: number;

  /**
   * 14 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR: number;

  /**
   * 9 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LC_RC_CS: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD: number;

  /**
   * 10 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Side-Left Side-Right Left-Height Right-Height
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_LSD_RSD_TSL_TSR: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Proximity-Left Proximity-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_PL_PR: number;

  /**
   * 12 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHC_VHR_TBL_TBR: number;

  /**
   * 11 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_TS_VHL_VHR_TBL_TBR: number;

  /**
   * 10 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LFE_LS_RS_VHL_VHR_TBL_TBR: number;

  /**
   * 5 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS: number;

  /**
   * 6 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS_LSD_RSD: number;

  /**
   * 13 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Back-Center Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Center Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_CS_TS_VHL_VHC_VHR_TBL_TBR: number;

  /**
   * 7 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_LC_RC: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_LC_RC_CS: number;

  /**
   * 7 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_LSD_RSD: number;

  /**
   * 11 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHC_VHR_TBL_TBR: number;

  /**
   * 10 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Center Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_TS_VHL_VHR_TBL_TBR: number;

  /**
   * 9 Channel Configuration Front-Left Front-Right Front-Center Back-Left Back-Right Top-Front-Left Top-Front-Right Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_C_LS_RS_VHL_VHR_TBL_TBR: number;

  /**
   * 3 Channel Configuration Front-Left Front-Right Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_R_LFE: number;

  /**
   * 4 Channel Configuration Front-Left Front-Right Low-Frequency Back-Center
   */
  static readonly CHANNELLAYOUT_L_R_LFE_CS: number;

  /**
   * 5 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_L_R_LFE_LS_RS: number;

  /**
   * 7 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_L_R_LFE_LS_RS_LSD_RSD: number;

  /**
   * 9 Channel Configuration Front-Left Front-Right Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Bottom-Front-Center
   */
  static readonly CHANNELLAYOUT_L_R_LFE_LS_RS_VHL_VHC_VHR_BFC: number;

  /**
   * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center
   */
  static readonly CHANNELLAYOUT_L_R_LS_RS_C: number;

  /**
   * 7 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Front-Left-Of-Center Front-Right-Of-Center
   */
  static readonly CHANNELLAYOUT_L_R_LS_RS_C_LC_RC: number;

  /**
   * 7 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Rear-Surround-Left Rear-Surround-Right
   */
  static readonly CHANNELLAYOUT_L_R_LS_RS_C_RLS_RRS: number;

  /**
   * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Low-Frequency
   */
  static readonly CHANNELLAYOUT_L_R_LS_RS_LFE: number;

  /**
   * 6 Channel Configuration Front-Left Front-Right Back-Left Back-Right Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_L_R_LS_RS_LSD_RSD: number;

  /**
   * 2 Channel Configuration Left-Total Right-Total
   */
  static readonly CHANNELLAYOUT_MATRIXSTEREO: number;

  /**
   * 1 Channel Configuration Discrete
   */
  static readonly CHANNELLAYOUT_MONO: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center Back-Center Side-Left Side-Right
   */
  static readonly CHANNELLAYOUT_OCTAGONAL: number;

  /**
   * 5 Channel Configuration Front-Left Front-Right Back-Left Back-Right Front-Center
   */
  static readonly CHANNELLAYOUT_PENTAGONAL: number;

  /**
   * 4 Channel Configuration Front-Left Front-Right Back-Left Back-Right
   */
  static readonly CHANNELLAYOUT_QUADRAPHONIC: number;

  /**
   * 16 Channel Configuration Discrete Discrete Front-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA1: number;

  /**
   * 16 Channel Configuration Left-Total Right-Total Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA2: number;

  /**
   * 16 Channel Configuration Front-Left Front-Right Front-Center Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA4: number;

  /**
   * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA6: number;

  /**
   * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Discrete Discrete Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA7: number;

  /**
   * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA8: number;

  /**
   * 16 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Back-Center Discrete Discrete Discrete Discrete Discrete Discrete Discrete
   */
  static readonly CHANNELLAYOUT_SMPTEDIGITALCINEMA9: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Total Right-Total
   */
  static readonly CHANNELLAYOUT_SMPTEDTV: number;

  /**
   * 2 Channel Configuration Front-Left Front-Right
   */
  static readonly CHANNELLAYOUT_STEREO: number;

  /**
   * 2 Channel Configuration Top-Back-Left Top-Back-Right
   */
  static readonly CHANNELLAYOUT_TBL_TBR: number;

  /**
   * 2 Channel Configuration Left-Height Right-Height
   */
  static readonly CHANNELLAYOUT_TSL_TSR: number;

  /**
   * 2 Channel Configuration Top-Front-Left Top-Front-Right
   */
  static readonly CHANNELLAYOUT_VHL_VHR: number;

  /**
   * 12 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
   */
  static readonly CHANNELLAYOUT_VST10_2: number;

  /**
   * 14 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Front-Left-Of-Center Front-Right-Of-Center Top-Front-Left Top-Front-Center Top-Front-Right Top-Back-Left Top-Back-Right LFE2
   */
  static readonly CHANNELLAYOUT_VST10_2_PLUS: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Front-Center
   */
  static readonly CHANNELLAYOUT_VST_7_1_CINE_CENTER_HIGH: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Top-Front-Left Top-Front-Right
   */
  static readonly CHANNELLAYOUT_VST_7_1_CINE_FRONT_HIGH: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Left-Height Right-Height
   */
  static readonly CHANNELLAYOUT_VST_7_1_CINE_SIDE_HIGH: number;

  /**
   * 8 Channel Configuration Front-Left Front-Right Front-Center Low-Frequency Back-Left Back-Right Back-Center Top-Center
   */
  static readonly CHANNELLAYOUT_VST_7_1_CINE_TOP_CENTER: number;

  /**
   * Audio channel layout description
   */
  readonly description: string;

  /**
   * Returns an audio channel label.
   */
  readonly index: number;

  /**
   * Number of audio channels.
   */
  readonly length: number;

  /**
   *
   */
  static __(): any;

  /**
   *
   * @param labels Create a audio channel layout.
   */
  static createAudioChannelLayout(labels: any[]): AudioChannelLayout;

  /**
   *
   * @param layout Create a common audio channel layout.
   */
  static createCommonAudioChannelLayout(layout: number): AudioChannelLayout;

  /**
   *
   * @param label Label string of a single audio channel label
   */
  static label(label: number): string;
}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class AudioTrackEvent {
  /**
   * This event is fired after a track was added to a multitrack document.
   */
  static readonly EVENT_ADDED: string;

  /**
   * This event is fired after a track was removed from a multitrack document.
   */
  static readonly EVENT_REMOVED: string;

  /**
   * Unique document ID.
   */
  readonly documentID: string;

  /**
   * Track name.
   */
  readonly name: string;

  /**
   * Document file path.
   */
  readonly path: string;

  /**
   * Unique track ID.
   */
  readonly trackID: number;

  /**
   *
   */
  static __(): any;
}

/**
 * An object representing a particular clip as part of a multitrack session.
 */
declare class Clip {
  /**
   *
   */
  readonly ancestor: any;

  /**
   * The end time of the clip measured in samples (exclusive) at the multitrack document's sample rate.
   */
  readonly endTime: number;

  /**
   * Unique id of the clip.
   */
  readonly id: string;

  /**
   * Document associated with this clip.
   */
  link: object;

  /**
   * The name of the clip.
   */
  readonly name: string;

  /**
   * Selection state of this audio clip.
   */
  readonly selected: boolean;

  /**
   * The start time of the clip measured in samples at the multitrack document's sample rate.
   */
  readonly startTime: number;
}

/**
 * An object representing the state of the running application.
 */
declare class Application {
  /**
   * Performs a scan in the amplitude statistics panel.
   */
  static readonly COMMAND_ANALYSIS_SCANAMPLITUDESTATISTICS: string;

  /**
   * Performs a scan in the frequency analysis panel.
   */
  static readonly COMMAND_ANALYSIS_SCANFREQUENCYANALYSIS: string;

  /**
   * Aligns the speech of one clip to the speech in another clip.
   */
  static readonly COMMAND_CLIP_ALIGNWITHRUBBADUB: string;

  /**
   * Prepare the clip to be ready for Remix.
   */
  static readonly COMMAND_CLIP_ANALYZEFORRETARGETING: string;

  /**
   * Toggle whether or not crossfades are automatically created when the selected clip is moved or trimmed.
   */
  static readonly COMMAND_CLIP_AUTOMATICCROSSFADESENABLED: string;

  /**
   * Sets the selected clip in front of all other clips.
   */
  static readonly COMMAND_CLIP_BRINGTOFRONT: string;

  /**
   * Shows the Clip Color dialog for changing the selected clip or group color.
   */
  static readonly COMMAND_CLIP_CLIPCOLORDIALOG: string;

  /**
   * Set the clip gain using Properties panel.
   */
  static readonly COMMAND_CLIP_CLIPGAIN: string;

  /**
   * Create new trimmed files for the selected clips to refer to.
   */
  static readonly COMMAND_CLIP_CONVERTTOUNIQUECOPY: string;

  /**
   * Edit the source file which the selected clip references.
   */
  static readonly COMMAND_CLIP_EDITSOURCEFILE: string;

  /**
   * Choose the Asymmetrical crossfade link type for the clip fade in.
   */
  static readonly COMMAND_CLIP_FADEINASYMMETRICAL: string;

  /**
   * Choose the Cosine style for the clip fade in.
   */
  static readonly COMMAND_CLIP_FADEINCOSINE: string;

  /**
   * Create the crossfade at the left edge of the selected clip.
   */
  static readonly COMMAND_CLIP_FADEINCROSSFADE: string;

  /**
   * Choose the Linear | Logarithmic style for the clip fade in.
   */
  static readonly COMMAND_CLIP_FADEINLINEAR: string;

  /**
   * Remove the fade in for the selected clip.
   */
  static readonly COMMAND_CLIP_FADEINNONE: string;

  /**
   * Create the fade in for the selected clip.
   */
  static readonly COMMAND_CLIP_FADEINNORMAL: string;

  /**
   * Choose the Symmetrical crossfade link type for the clip fade in.
   */
  static readonly COMMAND_CLIP_FADEINSYMMETRICAL: string;

  /**
   * Choose the Asymmetrical crossfade link type for the clip fade out.
   */
  static readonly COMMAND_CLIP_FADEOUTASYMMETRICAL: string;

  /**
   * Choose the Cosine style for the clip fade out.
   */
  static readonly COMMAND_CLIP_FADEOUTCOSINE: string;

  /**
   * Create the crossfade at the right edge of the selected clip.
   */
  static readonly COMMAND_CLIP_FADEOUTCROSSFADE: string;

  /**
   * Choose the Linear | Logarithmic style for the clip fade out.
   */
  static readonly COMMAND_CLIP_FADEOUTLINEAR: string;

  /**
   * Remove the fade out for the selected clip.
   */
  static readonly COMMAND_CLIP_FADEOUTNONE: string;

  /**
   * Create the fade out for the selected clip.
   */
  static readonly COMMAND_CLIP_FADEOUTNORMAL: string;

  /**
   * Choose the Symmetrical crossfade link type for the clip fade out.
   */
  static readonly COMMAND_CLIP_FADEOUTSYMMETRICAL: string;

  /**
   * Toggles whether the selected clips belong to a group.
   */
  static readonly COMMAND_CLIP_GROUPCLIPS: string;

  /**
   * Reconnect all offline clips with media.
   */
  static readonly COMMAND_CLIP_LINKALLMEDIA: string;

  /**
   * Reconnect the selected offline clip with media.
   */
  static readonly COMMAND_CLIP_LINKMEDIA: string;

  /**
   * Locks the start time of the selected clips.
   */
  static readonly COMMAND_CLIP_LOCKINTIME: string;

  /**
   * Enables clip looping.
   */
  static readonly COMMAND_CLIP_LOOP: string;

  /**
   * Matches the loudness of a group of clips.
   */
  static readonly COMMAND_CLIP_MATCHCLIPVOLUME: string;

  /**
   * Merge the selected clips.
   */
  static readonly COMMAND_CLIP_MERGECLIPS: string;

  /**
   * Mutes the selected clips.
   */
  static readonly COMMAND_CLIP_MUTE: string;

  /**
   * Nudge the selected clips to the left (by frames when snapping to frames is enabled).
   */
  static readonly COMMAND_CLIP_NUDGELEFT: string;

  /**
   * Nudge the selected clips to the left by 5 (by frames when snapping to frames is enabled).
   */
  static readonly COMMAND_CLIP_NUDGELEFT5: string;

  /**
   * Nudge the selected clips to the right (by frames when snapping to frames is enabled).
   */
  static readonly COMMAND_CLIP_NUDGERIGHT: string;

  /**
   * Nudge the selected clips to the right by 5 (by frames when snapping to frames is enabled).
   */
  static readonly COMMAND_CLIP_NUDGERIGHT5: string;

  /**
   * Remove the focus clip from its current group.
   */
  static readonly COMMAND_CLIP_REMOVEFOCUSCLIPFROMGROUP: string;

  /**
   * Rename the selected clip using Properties panel.
   */
  static readonly COMMAND_CLIP_RENAME: string;

  /**
   * Adjust clip remix parameters using Properties panel.
   */
  static readonly COMMAND_CLIP_RETARGETPROPERTIES: string;

  /**
   * Reveal sources of selected clips in the files panel.
   */
  static readonly COMMAND_CLIP_REVEALCLIPSINFILESPANEL: string;

  /**
   * Revert remixed clip into original.
   */
  static readonly COMMAND_CLIP_REVERTRETARGETEDCLIPTOORIGINAL: string;

  /**
   * Sets the selected clip behind all other clips.
   */
  static readonly COMMAND_CLIP_SENDTOBACK: string;

  /**
   * Silence Selected Clips in Time Selection.
   */
  static readonly COMMAND_CLIP_SILENCESELECTEDCLIPSINRANGE: string;

  /**
   * Split the selected clips.
   */
  static readonly COMMAND_CLIP_SPLIT: string;

  /**
   * Split all clips under the playhead ignoring currently selected clip(s).
   */
  static readonly COMMAND_CLIP_SPLITALL: string;

  /**
   * Split the remixed clip into its original segments.
   */
  static readonly COMMAND_CLIP_SPLITRETARGETEDCLIPINTOSEGMENTS: string;

  /**
   * Adjust clip stretch properties using Properties panel.
   */
  static readonly COMMAND_CLIP_STRETCHPROPERTIES: string;

  /**
   * A global toggle to suspend the auto-selection of groups.This allows individual selection of clips within a group.
   */
  static readonly COMMAND_CLIP_SUSPENDGROUPINGTOGGLE: string;

  /**
   * Trim the selected clips to the time selection.
   */
  static readonly COMMAND_CLIP_TRIMTOTIMESELECTION: string;

  /**
   * Remove the selected clips from their respective groups.
   */
  static readonly COMMAND_CLIP_UNGROUPSELECTEDCLIPS: string;

  /**
   * Sets the current clipboard to be clipboard 1.
   */
  static readonly COMMAND_EDIT_ACTIVATECLIPBOARD1: string;

  /**
   * Sets the current clipboard to be clipboard 2.
   */
  static readonly COMMAND_EDIT_ACTIVATECLIPBOARD2: string;

  /**
   * Sets the current clipboard to be clipboard 3.
   */
  static readonly COMMAND_EDIT_ACTIVATECLIPBOARD3: string;

  /**
   * Sets the current clipboard to be clipboard 4.
   */
  static readonly COMMAND_EDIT_ACTIVATECLIPBOARD4: string;

  /**
   * Sets the current clipboard to be clipboard 5.
   */
  static readonly COMMAND_EDIT_ACTIVATECLIPBOARD5: string;

  /**
   * Adds a cart timer marker.
   */
  static readonly COMMAND_EDIT_ADDCARTMARKER: string;

  /**
   * Adds a cue marker.
   */
  static readonly COMMAND_EDIT_ADDCUEMARKER: string;

  /**
   * Adds a cue point marker.
   */
  static readonly COMMAND_EDIT_ADDCUEPOINTMARKER: string;

  /**
   * Adds a cue range marker.
   */
  static readonly COMMAND_EDIT_ADDCUERANGEMARKER: string;

  /**
   * Adds a subclip marker.
   */
  static readonly COMMAND_EDIT_ADDSUBCLIPMARKER: string;

  /**
   * Adds a CD track marker.
   */
  static readonly COMMAND_EDIT_ADDTRACKMARKER: string;

  /**
   * Adjust the selection in point to the beginning.
   */
  static readonly COMMAND_EDIT_ADJUSTINPOINTTOBEGINNING: string;

  /**
   * Adjust the selection in point to the end.
   */
  static readonly COMMAND_EDIT_ADJUSTINPOINTTOEND: string;

  /**
   * Adjust the selection in point to the left.
   */
  static readonly COMMAND_EDIT_ADJUSTINPOINTTOLEFT: string;

  /**
   * Adjust the selection in point to the right.
   */
  static readonly COMMAND_EDIT_ADJUSTINPOINTTORIGHT: string;

  /**
   * Adjust Left Side To Left.
   */
  static readonly COMMAND_EDIT_ADJUSTLEFTSIDETOLEFT: string;

  /**
   * Adjust Left Side To Right.
   */
  static readonly COMMAND_EDIT_ADJUSTLEFTSIDETORIGHT: string;

  /**
   * Adjust the selection out point to the beginning.
   */
  static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOBEGINNING: string;

  /**
   * Adjust the selection out point to the end.
   */
  static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOEND: string;

  /**
   * Adjust the selection out point to the left.
   */
  static readonly COMMAND_EDIT_ADJUSTOUTPOINTTOLEFT: string;

  /**
   * Adjust the selection out point to the right.
   */
  static readonly COMMAND_EDIT_ADJUSTOUTPOINTTORIGHT: string;

  /**
   * Adjust Right Side To Left.
   */
  static readonly COMMAND_EDIT_ADJUSTRIGHTSIDETOLEFT: string;

  /**
   * Adjust Right Side To Right.
   */
  static readonly COMMAND_EDIT_ADJUSTRIGHTSIDETORIGHT: string;

  /**
   * Adjust Selection Inward.
   */
  static readonly COMMAND_EDIT_ADJUSTSELECTIONINWARD: string;

  /**
   * Adjust Selection Outward.
   */
  static readonly COMMAND_EDIT_ADJUSTSELECTIONOUTWARD: string;

  /**
   * Opens the Batch Process panel.
   */
  static readonly COMMAND_EDIT_BATCHPROCESS: string;

  /**
   * Change the current selected clips stretch mode to Off.
   */
  static readonly COMMAND_EDIT_CHANGESTRETCHMODE_OFF: string;

  /**
   * Change the current selected clips stretch mode to Realtime.
   */
  static readonly COMMAND_EDIT_CHANGESTRETCHMODE_REALTIME: string;

  /**
   * Change the current selected clips stretch mode to Rendered.
   */
  static readonly COMMAND_EDIT_CHANGESTRETCHMODE_RENDERED: string;

  /**
   * Clear the time selection without changing the playhead position.
   */
  static readonly COMMAND_EDIT_CLEARTIMESELECTION: string;

  /**
   * Converts the sample type of the current file.
   */
  static readonly COMMAND_EDIT_CONVERTSAMPLETYPE: string;

  /**
   * Copy the current selection to the clipboard.
   */
  static readonly COMMAND_EDIT_COPY: string;

  /**
   * Copy the current selection to the clipboard and then paste it into a new file.
   */
  static readonly COMMAND_EDIT_COPYTONEW: string;

  /**
   * Crop the current file using the current selection.
   */
  static readonly COMMAND_EDIT_CROP: string;

  /**
   * Cut the current selection.
   */
  static readonly COMMAND_EDIT_CUT: string;

  /**
   * Delete the current selection - depends on the context.
   */
  static readonly COMMAND_EDIT_DELETE: string;

  /**
   * Deletes all markers from the current file.
   */
  static readonly COMMAND_EDIT_DELETEALLMARKERS: string;

  /**
   * Deletes selected markers in the Markers panel.
   */
  static readonly COMMAND_EDIT_DELETESELECTEDMARKERS: string;

  /**
   * Delete the currently selected track keyframes.
   */
  static readonly COMMAND_EDIT_DELETETRACKKEYFRAMES: string;

  /**
   * Remove the selection.In the Multitrack Editor deselect all clips.In the Waveform Editor deselect all audio samples.
   */
  static readonly COMMAND_EDIT_DESELECTALL: string;

  /**
   * Open the original project that created this file.
   */
  static readonly COMMAND_EDIT_EDITORIGINAL: string;

  /**
   * Export the audio of selected range markers to separate files.
   */
  static readonly COMMAND_EDIT_EXPORTMARKERRANGES: string;

  /**
   * Split Frequency Bands to Files.
   */
  static readonly COMMAND_EDIT_FREQUENCYBANDSPLITTER: string;

  /**
   * Imports the specified files and inserts them into the active CD Layout as a CD tracks.
   */
  static readonly COMMAND_EDIT_IMPORTANDINSERTFILESASCDTRACKS: string;

  /**
   * Inserts the active file into a new CD Layout.
   */
  static readonly COMMAND_EDIT_INSERTINTONEWCDLAYOUT: string;

  /**
   * Inserts the active file into a new multitrack session.
   */
  static readonly COMMAND_EDIT_INSERTINTONEWSESSION: string;

  /**
   * Inserts the active file or selection into the most recently used session or a new one if no sessions exist.
   */
  static readonly COMMAND_EDIT_INSERTINTOSESSION: string;

  /**
   * Inserts the selected range markers in the Markers panel into the playlist.
   */
  static readonly COMMAND_EDIT_INSERTSELECTEDRANGEMARKERSINTOPLAYLIST: string;

  /**
   * Inserts silence into the current file.
   */
  static readonly COMMAND_EDIT_INSERTSILENCE: string;

  /**
   * Interprets the sample rate of the current file for playback.
   */
  static readonly COMMAND_EDIT_INTERPRETSAMPLERATE: string;

  /**
   * Merges the selected markers in the Markers panel into one (or more) range markers.
   */
  static readonly COMMAND_EDIT_MERGESELECTEDMARKERS: string;

  /**
   * Mixes the clipboard's contents into the file.
   */
  static readonly COMMAND_EDIT_MIXPASTE: string;

  /**
   * Paste the clipboard's contents into the file.
   */
  static readonly COMMAND_EDIT_PASTE: string;

  /**
   * Paste the clipboard's contents into a new file.
   */
  static readonly COMMAND_EDIT_PASTETONEW: string;

  /**
   * Switches all clips with rendered stretches to realtime.
   */
  static readonly COMMAND_EDIT_REALTIMEALLSTRETCHEDCLIPS: string;

  /**
   * Redo the last operation.
   */
  static readonly COMMAND_EDIT_REDO: string;

  /**
   * Renames the selected marker in the Markers panel.
   */
  static readonly COMMAND_EDIT_RENAMESELECTEDMARKER: string;

  /**
   * Switches all clips with realtime stretches to rendered.
   */
  static readonly COMMAND_EDIT_RENDERALLSTRETCHEDCLIPS: string;

  /**
   * Repeats the last command chosen.If appropriate will show dialog so you can adjust settings before applying.
   */
  static readonly COMMAND_EDIT_REPEATLASTCOMMAND: string;

  /**
   * Repeats the last command chosen.Will not show any dialogs.
   */
  static readonly COMMAND_EDIT_REPEATLASTCOMMANDNOUI: string;

  /**
   * Deletes the gap at the current playhead position in the selected track and shifts the content to fill the gap.
   */
  static readonly COMMAND_EDIT_RIPPLEDELETEGAPINSELECTEDTRACK: string;

  /**
   * Deletes the selected clips and shifts the content to fill the gaps.
   */
  static readonly COMMAND_EDIT_RIPPLEDELETESELECTEDCLIPS: string;

  /**
   * Deletes the time selection in all tracks and shifts the content to fill the gap.
   */
  static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINALLTRACKS: string;

  /**
   * Deletes the time selection in selected clips and shifts the content to fill the gaps.
   */
  static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDCLIPS: string;

  /**
   * Deletes the time selection in the selected track and shifts the content to fill the gap.
   */
  static readonly COMMAND_EDIT_RIPPLEDELETETIMESELECTIONINSELECTEDTRACK: string;

  /**
   * Select all content in the active panel.In the Multitrack Editor select all clips.In the Waveform Editor select all audio samples.
   */
  static readonly COMMAND_EDIT_SELECTALL: string;

  /**
   * Selects all clips in the selected track.
   */
  static readonly COMMAND_EDIT_SELECTALLCLIPSINSELECTEDTRACK: string;

  /**
   * Create a time selection across all content in the active panel.
   */
  static readonly COMMAND_EDIT_SELECTALLTIME: string;

  /**
   * Selects all Clips of the Audio Type Ambience.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_AMBIENCE: string;

  /**
   * Selects all Clips of the Audio Type Dialogue.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_DIALOG: string;

  /**
   * Selects all Clips of the Audio Type Music.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_MUSIC: string;

  /**
   * Selects all Clips of the Audio Type Sound Effects.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSOFMIXTYPE_SFX: string;

  /**
   * Selects clips after the playhead in the selected track.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSTOENDOFSELECTEDTRACK: string;

  /**
   * Selects clips after the playhead to the end of the session.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSTOENDOFSESSION: string;

  /**
   * Selects clips before the playhead to the start of the session.
   */
  static readonly COMMAND_EDIT_SELECTCLIPSTOSTARTOFSESSION: string;

  /**
   * Create a time selection across the visible content in the active panel.
   */
  static readonly COMMAND_EDIT_SELECTCURRENTVIEWTIME: string;

  /**
   * Invert the spectral selection.
   */
  static readonly COMMAND_EDIT_SELECTINVERSE: string;

  /**
   * Selects the next clip in the selected track.
   */
  static readonly COMMAND_EDIT_SELECTNEXTCLIPINSELECTEDTRACK: string;

  /**
   * Create a time selection that spans all selected clips.
   */
  static readonly COMMAND_EDIT_SELECTTIMEAROUNDCLIPS: string;

  /**
   * Move the selection in point to the playhead position.
   */
  static readonly COMMAND_EDIT_SETINPOINTTOCTI: string;

  /**
   * Move the selection out point to the playhead position.
   */
  static readonly COMMAND_EDIT_SETOUTPOINTTOCTI: string;

  /**
   * Customize the keyboard shortcuts.
   */
  static readonly COMMAND_EDIT_SHORTCUTS: string;

  /**
   * Extract Channels to Mono Files.
   */
  static readonly COMMAND_EDIT_SPLITTOMONO: string;

  /**
   * Toggle the enable state of all channels.
   */
  static readonly COMMAND_EDIT_TOGGLEALLCHANNELS: string;

  /**
   * Toggle the enable state of the center channel.
   */
  static readonly COMMAND_EDIT_TOGGLECENTERCHANNEL: string;

  /**
   * Toggle the visibility of clip stretch handles.
   */
  static readonly COMMAND_EDIT_TOGGLECLIPSTRETCHING: string;

  /**
   * Toggle the enable state of the front left channel.
   */
  static readonly COMMAND_EDIT_TOGGLEFRONTLEFTCHANNEL: string;

  /**
   * Toggle the enable state of the front right channel.
   */
  static readonly COMMAND_EDIT_TOGGLEFRONTRIGHTCHANNEL: string;

  /**
   * Toggle the enable state of the left surround channel.
   */
  static readonly COMMAND_EDIT_TOGGLELEFTSURROUNDCHANNEL: string;

  /**
   * Toggle the enable state of the low frequency effect channel.
   */
  static readonly COMMAND_EDIT_TOGGLELFECHANNEL: string;

  /**
   * Toggle the enable state of the right surround channel.
   */
  static readonly COMMAND_EDIT_TOGGLERIGHTSURROUNDCHANNEL: string;

  /**
   * Toggle all timeline snapping on|off.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPPING: string;

  /**
   * Toggle snapping to clips.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTOCLIPS: string;

  /**
   * Toggle snapping to frames when viewing a frame time format.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTOFRAMES: string;

  /**
   * Toggle snapping to loop boundaries.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTOLOOPS: string;

  /**
   * Toggle snapping to markers.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTOMARKERS: string;

  /**
   * Toggle snapping to major ruler tick marks.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTORULERCOARSE: string;

  /**
   * Toggle snapping to all ruler tick marks.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTORULERFINE: string;

  /**
   * Toggle snapping to zero crossings.
   */
  static readonly COMMAND_EDIT_TOGGLESNAPTOZEROCROSSINGS: string;

  /**
   * Undo the last operation.
   */
  static readonly COMMAND_EDIT_UNDO: string;

  /**
   * Processes an adaptive noise reduction.
   */
  static readonly COMMAND_EFFECTS_ADAPTIVENOISEREDUCTION: string;

  /**
   * Amplifies channels of the waveform.
   */
  static readonly COMMAND_EFFECTS_AMPLIFY: string;

  /**
   * Add Analog Delay to waveform.
   */
  static readonly COMMAND_EFFECTS_ANALOGDELAY: string;

  /**
   * Removes clicks from the waveform.
   */
  static readonly COMMAND_EFFECTS_AUTOCLICKREMOVER: string;

  /**
   * Corrects the phase in a stereo waveform.
   */
  static readonly COMMAND_EFFECTS_AUTOPHASECORRECTION: string;

  /**
   * Learns sound model from the waveform selection.
   */
  static readonly COMMAND_EFFECTS_CAPTUREDYNAMICNOISEREMOVALPROFILE: string;

  /**
   * Captures noise print from the waveform.
   */
  static readonly COMMAND_EFFECTS_CAPTURENOISEREDUCTIONPROFILE: string;

  /**
   * Extract Center Channel.
   */
  static readonly COMMAND_EFFECTS_CENTERCHANNELEXTRACT: string;

  /**
   * Mixing Channels.
   */
  static readonly COMMAND_EFFECTS_CHANNELMIXER: string;

  /**
   * Add Chorus to waveform.
   */
  static readonly COMMAND_EFFECTS_CHORUS: string;

  /**
   * Add Chorus|Flanger to waveform.
   */
  static readonly COMMAND_EFFECTS_CHORUSFLANGER: string;

  /**
   * Clears the contents of the Effects Rack panel.
   */
  static readonly COMMAND_EFFECTS_CLEAREFFECTSRACK: string;

  /**
   * Apply the Click|Pop Eliminator effect.
   */
  static readonly COMMAND_EFFECTS_CLICKPOPELIMINATOR: string;

  /**
   * Analyzes and fixes click|pop defects from the waveform.
   */
  static readonly COMMAND_EFFECTS_CLICKPOPELIMINATORANALYSIS: string;

  /**
   * Analyzes and fixes clipped samples from the waveform.
   */
  static readonly COMMAND_EFFECTS_CLIPRESTORATIONANALYSIS: string;

  /**
   * Add Convolution Reverb to waveform.
   */
  static readonly COMMAND_EFFECTS_CONVOLUTIONREVERB: string;

  /**
   * Add DeEsser to waveform.
   */
  static readonly COMMAND_EFFECTS_DEESSER: string;

  /**
   * Add DeHummer to waveform.
   */
  static readonly COMMAND_EFFECTS_DEHUMMER: string;

  /**
   * Add Delay to waveform.
   */
  static readonly COMMAND_EFFECTS_DELAY: string;

  /**
   * Deletes all effects from the Effects Rack.
   */
  static readonly COMMAND_EFFECTS_DELETEALLEFFECTS: string;

  /**
   * Deletes selected effects from the Effects Rack.
   */
  static readonly COMMAND_EFFECTS_DELETESELECTEDEFFECTS: string;

  /**
   * Analyzes and removes silence from the waveform.
   */
  static readonly COMMAND_EFFECTS_DELETESILENCEANALYSIS: string;

  /**
   * Add Distortion to waveform.
   */
  static readonly COMMAND_EFFECTS_DISTORTION: string;

  /**
   * Apply Doppler effect to waveform.
   */
  static readonly COMMAND_EFFECTS_DOPPLER: string;

  /**
   * Processes the dynamics of the waveform.
   */
  static readonly COMMAND_EFFECTS_DYNAMICS: string;

  /**
   * Add echo to waveform.
   */
  static readonly COMMAND_EFFECTS_ECHO: string;

  /**
   * Enables the Effects Rack panel to edit clip effects.
   */
  static readonly COMMAND_EFFECTS_EDITCLIPEFFECTS: string;

  /**
   * Edits the selected effect in the Effects Rack.
   */
  static readonly COMMAND_EFFECTS_EDITSELECTEDEFFECT: string;

  /**
   * Enables the Effects Rack panel to edit track effects.
   */
  static readonly COMMAND_EFFECTS_EDITTRACKEFFECTS: string;

  /**
   *
   */
  static readonly COMMAND_EFFECTS_EFFECTSRACKPANELTOFRONTANDACTIVE: string;

  /**
   * Processes a fade envelope using an amplification percentage scale.
   */
  static readonly COMMAND_EFFECTS_FADEENVELOPE: string;

  /**
   * Apply FFT Filter to waveform.
   */
  static readonly COMMAND_EFFECTS_FFTFILTER: string;

  /**
   * Add Flanger to waveform.
   */
  static readonly COMMAND_EFFECTS_FLANGER: string;

  /**
   * Add reverb to waveform.
   */
  static readonly COMMAND_EFFECTS_FULLREVERB: string;

  /**
   * Processes a gain envelope using a decibel scale.
   */
  static readonly COMMAND_EFFECTS_GAINENVELOPE: string;

  /**
   * Creates specified noise as a new file.
   */
  static readonly COMMAND_EFFECTS_GENERATENOISE: string;

  /**
   * Creates specified speech as a new file.
   */
  static readonly COMMAND_EFFECTS_GENERATESPEECH: string;

  /**
   * Creates specified tone as a new file.
   */
  static readonly COMMAND_EFFECTS_GENERATETONES: string;

  /**
   * Apply graphic EQ to waveform.
   */
  static readonly COMMAND_EFFECTS_GRAPHICEQ10BANDS: string;

  /**
   * Apply graphic EQ to waveform.
   */
  static readonly COMMAND_EFFECTS_GRAPHICEQ20BANDS: string;

  /**
   * Apply graphic EQ to waveform.
   */
  static readonly COMMAND_EFFECTS_GRAPHICEQ30BANDS: string;

  /**
   * Apply the Graphic Phase Shifter effect.
   */
  static readonly COMMAND_EFFECTS_GRAPHICPHASESHIFTER: string;

  /**
   * Add GuitarSuite to waveform.
   */
  static readonly COMMAND_EFFECTS_GUITARSUITE: string;

  /**
   * Hard limits the waveform.
   */
  static readonly COMMAND_EFFECTS_HARDLIMIT: string;

  /**
   * Processes a hiss reduction.
   */
  static readonly COMMAND_EFFECTS_HISSREDUCTIONPROCESS: string;

  /**
   * Corrects the leveling of a waveform (best for speech).
   */
  static readonly COMMAND_EFFECTS_INTRACLIP: string;

  /**
   * Inverts the audio in the current selection.
   */
  static readonly COMMAND_EFFECTS_INVERT: string;

  /**
   * Analyzes and marks non-silence in the waveform.
   */
  static readonly COMMAND_EFFECTS_MARKAUDIOANALYSIS: string;

  /**
   * Add Mastering to waveform.
   */
  static readonly COMMAND_EFFECTS_MASTERING: string;

  /**
   * Opens the Match Loudness panel.
   */
  static readonly COMMAND_EFFECTS_MATCHVOLUME: string;

  /**
   * Add Multiband Compressor to waveform.
   */
  static readonly COMMAND_EFFECTS_MULTIBANDCOMPRESSOR: string;

  /**
   * Processes a noise reduction.
   */
  static readonly COMMAND_EFFECTS_NOISEREDUCTIONPROCESS: string;

  /**
   * Normalizes the waveform.
   */
  static readonly COMMAND_EFFECTS_NORMALIZE: string;

  /**
   * Apply Notch Filter to waveform.
   */
  static readonly COMMAND_EFFECTS_NOTCHFILTER: string;

  /**
   * Processes the dynamics of the waveform.
   */
  static readonly COMMAND_EFFECTS_PARAMETRICDYNAMICS: string;

  /**
   * Apply Parametric EQ to waveform.
   */
  static readonly COMMAND_EFFECTS_PARAMETRICEQ: string;

  /**
   * Add Phaser to waveform.
   */
  static readonly COMMAND_EFFECTS_PHASER: string;

  /**
   * Processes a pitch envelope over time.
   */
  static readonly COMMAND_EFFECTS_PITCHBENDER: string;

  /**
   * Automatically correct the pitch.
   */
  static readonly COMMAND_EFFECTS_PITCHCORRECT: string;

  /**
   * Correct pitch manually over time with an envelope.
   */
  static readonly COMMAND_EFFECTS_PITCHCORRECTMANUAL: string;

  /**
   * Shift or stretch the pitch.
   */
  static readonly COMMAND_EFFECTS_PITCHSHIFTER: string;

  /**
   * Opens the Audio plug-in manager dialog.
   */
  static readonly COMMAND_EFFECTS_PLUGINMANAGER: string;

  /**
   * Toggles the power state of the entire effects rack.
   */
  static readonly COMMAND_EFFECTS_POWEREFFECTSRACK: string;

  /**
   * Toggles the power state of selected effects in the effects rack.
   */
  static readonly COMMAND_EFFECTS_POWERSELECTEDEFFECTS: string;

  /**
   * Add Loudness Radar Meter to waveform.
   */
  static readonly COMMAND_EFFECTS_RADARMETER: string;

  /**
   * Renders all effects from the Effects Rack into the current audio file.
   */
  static readonly COMMAND_EFFECTS_RENDEREFFECTSRACK: string;

  /**
   * Replace unwanted selected sound with surrounding material.
   */
  static readonly COMMAND_EFFECTS_REPAIR: string;

  /**
   * Add reverb to waveform.
   */
  static readonly COMMAND_EFFECTS_REVERB: string;

  /**
   * Reverses the audio in the current selection.
   */
  static readonly COMMAND_EFFECTS_REVERSE: string;

  /**
   * Apply Scientific Filter to waveform.
   */
  static readonly COMMAND_EFFECTS_SCIENTIFICFILTER: string;

  /**
   * Silences the audio in the current selection.
   */
  static readonly COMMAND_EFFECTS_SILENCE: string;

  /**
   * Add Single-band Compressor to waveform.
   */
  static readonly COMMAND_EFFECTS_SINGLEBANDCOMPRESSOR: string;

  /**
   * Removes a specified sound.
   */
  static readonly COMMAND_EFFECTS_SOUNDREMOVALPROCESS: string;

  /**
   * Position and expand the stereo image.
   */
  static readonly COMMAND_EFFECTS_STEREOEXPANDER: string;

  /**
   * Stretch waveform.
   */
  static readonly COMMAND_EFFECTS_STRETCH: string;

  /**
   * Add reverb to waveform.
   */
  static readonly COMMAND_EFFECTS_STUDIOREVERB: string;

  /**
   * Add Surround Reverb to waveform.
   */
  static readonly COMMAND_EFFECTS_SURROUNDREVERB: string;

  /**
   * Add Tube-modeled Compressor to waveform.
   */
  static readonly COMMAND_EFFECTS_TUBEMODELEDCOMPRESSOR: string;

  /**
   * Add Vocal Enhancer to waveform.
   */
  static readonly COMMAND_EFFECTS_VOCALENHANCER: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_AUTO_HEAL: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_CONVERT_TO_5_1: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_CONVERT_TO_MONO: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_CONVERT_TO_STEREO: string;

  /**
   * Allows the user to delete a favorite.
   */
  static readonly COMMAND_FAVORITES_DELETEFAVORITE: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_DE_ESSER: string;

  /**
   * Open the Favorites panel to edit favorites.
   */
  static readonly COMMAND_FAVORITES_EDITFAVORITES: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_FADE_IN: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_FADE_OUT: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_HARD_LIMIT_TO__0_1_DB: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_LOWER_PITCH: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_NORMALIZE_TO__0_1_DB: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_NORMALIZE_TO__3_DB: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_RAISE_PITCH: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_REMOVE_60_HZ_HUM: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_REMOVE_VOCALS: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_REPAIR_DC_OFFSET: string;

  /**
   * Start recording editor actions into a favorite.
   */
  static readonly COMMAND_FAVORITES_STARTRECORDINGFAVORITE: string;

  /**
   * Stop recording editor actions and create a new favorite.
   */
  static readonly COMMAND_FAVORITES_STOPRECORDINGFAVORITE: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_TELEPHONE_VOICE: string;

  /**
   *
   */
  static readonly COMMAND_FAVORITES_VOICE_OVER_COMPRESSOR: string;

  /**
   * Clear the recent files listed.
   */
  static readonly COMMAND_FILE_CLEARRECENT: string;

  /**
   * Close the current file.
   */
  static readonly COMMAND_FILE_CLOSE: string;

  /**
   * Close all files.
   */
  static readonly COMMAND_FILE_CLOSEALL: string;

  /**
   * Close current session and its referenced media.
   */
  static readonly COMMAND_FILE_CLOSESESSIONANDITSMEDIA: string;

  /**
   * Close files that are not referenced by any open session.
   */
  static readonly COMMAND_FILE_CLOSEUNUSEDMEDIA: string;

  /**
   * Exports application settings to chosen file.
   */
  static readonly COMMAND_FILE_EXPORTAPPLICATIONSETTINGS: string;

  /**
   * Export the audio of all range markers to separate files.
   */
  static readonly COMMAND_FILE_EXPORT_ALLMARKERRANGES: string;

  /**
   * Burn the audio file to a blank compact disc.
   */
  static readonly COMMAND_FILE_EXPORT_BURNAUDIOTOCD: string;

  /**
   * Export the current session to a new XML file that can be opened by Adobe Premiere Pro.
   */
  static readonly COMMAND_FILE_EXPORT_EXPORTTOADOBEPREMIEREPRO: string;

  /**
   * Mixdown the output of a track selection and export it with Adobe Media Encoder.
   */
  static readonly COMMAND_FILE_EXPORT_EXPORTWITHADOBEMEDIAENCODER: string;

  /**
   * Export the current session to FCP XML Interchange Format.
   */
  static readonly COMMAND_FILE_EXPORT_FCXML: string;

  /**
   * Export the current file to a new file.
   */
  static readonly COMMAND_FILE_EXPORT_FILE: string;

  /**
   * Export selected markers to file.
   */
  static readonly COMMAND_FILE_EXPORT_MARKERS: string;

  /**
   * Mixdown the entire output of master track to new file.
   */
  static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNALL: string;

  /**
   * Mixdown the output of the master track in the selected clips to a new file.
   */
  static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDCLIPS: string;

  /**
   * Mixdown to one or more files the output of the master track in regions corresponding to the selected range markers.
   */
  static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTEDMARKERRANGES: string;

  /**
   * Mixdown the output of the master track in the time selection to a new file.
   */
  static readonly COMMAND_FILE_EXPORT_MULTITRACKMIXDOWNSELECTION: string;

  /**
   * Export the current session to a new OMF file.
   */
  static readonly COMMAND_FILE_EXPORT_OMF: string;

  /**
   * Export the current session to a new file.
   */
  static readonly COMMAND_FILE_EXPORT_SESSION: string;

  /**
   * Export the current session as a template for creating future sessions.
   */
  static readonly COMMAND_FILE_EXPORT_SESSIONASTEMPLATE: string;

  /**
   * Extracts audio from audio CD tracks.
   */
  static readonly COMMAND_FILE_EXTRACTAUDIOFROMCD: string;

  /**
   * Imports application settings from chosen file.
   */
  static readonly COMMAND_FILE_IMPORTAPPLICATIONSETTINGS: string;

  /**
   * Imports chosen file.
   */
  static readonly COMMAND_FILE_IMPORTFILE: string;

  /**
   * Imports chosen files with a user-specified data type.
   */
  static readonly COMMAND_FILE_IMPORTRAWDATA: string;

  /**
   * Imports markers from chosen file.
   */
  static readonly COMMAND_FILE_IMPORT_MARKERS: string;

  /**
   * Creates an empty audio file.
   */
  static readonly COMMAND_FILE_NEWAUDIOFILE: string;

  /**
   * Creates an empty CD Layout.
   */
  static readonly COMMAND_FILE_NEWCDLAYOUT: string;

  /**
   * Creates an empty session.
   */
  static readonly COMMAND_FILE_NEWSESSION: string;

  /**
   * Open an existing file.
   */
  static readonly COMMAND_FILE_OPEN: string;

  /**
   * Open existing files and append them to the end of the current open file.
   */
  static readonly COMMAND_FILE_OPENAPPENDTOCURRENT: string;

  /**
   * Open existing files and append them to the end of a new file.
   */
  static readonly COMMAND_FILE_OPENAPPENDTONEW: string;

  /**
   * Opens the most recently used file.
   */
  static readonly COMMAND_FILE_OPENMRUFILE: string;

  /**
   * Opens the most recently used session.
   */
  static readonly COMMAND_FILE_OPENMRUSESSION: string;

  /**
   * Exit the application.
   */
  static readonly COMMAND_FILE_QUIT: string;

  /**
   * Reveal chosen file in the OS.
   */
  static readonly COMMAND_FILE_REVEAL: string;

  /**
   * Reveal chosen file in the Media Browser panel.
   */
  static readonly COMMAND_FILE_REVEALINMEDIABROWSER: string;

  /**
   * Save the current file.
   */
  static readonly COMMAND_FILE_SAVE: string;

  /**
   * Save all files.
   */
  static readonly COMMAND_FILE_SAVEALL: string;

  /**
   * Save all audio files to a specific format.
   */
  static readonly COMMAND_FILE_SAVEALLAUDIOASBATCHPROCESS: string;

  /**
   * Save the current file to a new file.
   */
  static readonly COMMAND_FILE_SAVEAS: string;

  /**
   * Save the current selection to a new file.
   */
  static readonly COMMAND_FILE_SAVESELECTIONAS: string;

  /**
   * Switch to the next opened File.
   */
  static readonly COMMAND_FILE_SWITCHTONEXTFILE: string;

  /**
   * Switch to the previous opened File.
   */
  static readonly COMMAND_FILE_SWITCHTOPREVIOUSFILE: string;

  /**
   * Open the About dialog.
   */
  static readonly COMMAND_HELP_ABOUT: string;

  /**
   * Browse Addons.
   */
  static readonly COMMAND_HELP_ADDONS: string;

  /**
   * Open Audition Help.
   */
  static readonly COMMAND_HELP_ADOBEAUDITIONHELP: string;

  /**
   * Download SDKs and other developer resources.
   */
  static readonly COMMAND_HELP_DEVELOPERCENTER: string;

  /**
   * Download Effects and other content.
   */
  static readonly COMMAND_HELP_DOWNLOAD: string;

  /**
   * Launch Improvement Program Options Dialog.
   */
  static readonly COMMAND_HELP_IMPROVEMENTPROGRAM: string;

  /**
   * Go to Audition Keyboard Shortcuts Help.
   */
  static readonly COMMAND_HELP_KEYBOARDSHORTCUTS: string;

  /**
   * Open Audition Learn.
   */
  static readonly COMMAND_HELP_ONBOARDING: string;

  /**
   * Reveals the log files for Adobe Audition in the OS.
   */
  static readonly COMMAND_HELP_REVEALLOGFILES: string;

  /**
   * Submit a bug report or feature request.
   */
  static readonly COMMAND_HELP_SENDFEEDBACK: string;

  /**
   * Go to Audition Support Center.
   */
  static readonly COMMAND_HELP_SUPPORTCENTER: string;

  /**
   * Go to Audition User Forums.
   */
  static readonly COMMAND_HELP_USERFORUMS: string;

  /**
   * Executes the End key.
   */
  static readonly COMMAND_KEYBOARD_END: string;

  /**
   * Executes the Enter key.
   */
  static readonly COMMAND_KEYBOARD_ENTER: string;

  /**
   * Executes the ESC key.
   */
  static readonly COMMAND_KEYBOARD_ESCAPE: string;

  /**
   * Executes the Home key.
   */
  static readonly COMMAND_KEYBOARD_HOME: string;

  /**
   * Show Dynamic Peaks.
   */
  static readonly COMMAND_METERING_DYNAMICPEAKS: string;

  /**
   * Resets Clip Indicators.
   */
  static readonly COMMAND_METERING_RESETINDICATORS: string;

  /**
   * Sets the range of level meter to 120dB.
   */
  static readonly COMMAND_METERING_SET120DBRANGE: string;

  /**
   * Sets the range of level meter to 24dB.
   */
  static readonly COMMAND_METERING_SET24DBRANGE: string;

  /**
   * Sets the range of level meter to 48dB.
   */
  static readonly COMMAND_METERING_SET48DBRANGE: string;

  /**
   * Sets the range of level meter to 60dB.
   */
  static readonly COMMAND_METERING_SET60DBRANGE: string;

  /**
   * Sets the range of level meter to 72dB.
   */
  static readonly COMMAND_METERING_SET72DBRANGE: string;

  /**
   * Sets the range of level meter to 96dB.
   */
  static readonly COMMAND_METERING_SET96DBRANGE: string;

  /**
   * Displays LED like meter bars.
   */
  static readonly COMMAND_METERING_SHOWLEDMETERS: string;

  /**
   * Displays the meter bars with a color gradient.
   */
  static readonly COMMAND_METERING_SHOWMETERBARSGRADIENT: string;

  /**
   * Show Valleys.
   */
  static readonly COMMAND_METERING_SHOWVALLEYS: string;

  /**
   * Show Static Peaks.
   */
  static readonly COMMAND_METERING_STATICPEAKS: string;

  /**
   * Enable Input Metering.
   */
  static readonly COMMAND_METERING_TOGGLEMETERINPUTSIGNAL: string;

  /**
   * Add a new 5.1 audio track.
   */
  static readonly COMMAND_MULTITRACK_ADD51AUDIOTRACK: string;

  /**
   * Add a new 5.1 bus track.
   */
  static readonly COMMAND_MULTITRACK_ADD51BUSTRACK: string;

  /**
   * Add a new mono audio track.
   */
  static readonly COMMAND_MULTITRACK_ADDMONOAUDIOTRACK: string;

  /**
   * Add a new mono bus track.
   */
  static readonly COMMAND_MULTITRACK_ADDMONOBUSTRACK: string;

  /**
   * Add a new stereo audio track.
   */
  static readonly COMMAND_MULTITRACK_ADDSTEREOAUDIOTRACK: string;

  /**
   * Add a new stereo bus track.
   */
  static readonly COMMAND_MULTITRACK_ADDSTEREOBUSTRACK: string;

  /**
   * Add a new video track.
   */
  static readonly COMMAND_MULTITRACK_ADDVIDEOTRACK: string;

  /**
   * Bounce selected track to a new track.
   */
  static readonly COMMAND_MULTITRACK_BOUNCESELECTEDTRACKTONEWTRACK: string;

  /**
   * Bounce selected clips in the time selection to a new track.
   */
  static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSINRANGE: string;

  /**
   * Bounce selected clips only to a new track.
   */
  static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKSELECTEDCLIPSONLY: string;

  /**
   * Bounce a time selection to a new track.
   */
  static readonly COMMAND_MULTITRACK_BOUNCETONEWTRACKTIMESELECTIONRANGE: string;

  /**
   * Delete the currently selected track.
   */
  static readonly COMMAND_MULTITRACK_DELETETRACK: string;

  /**
   * Duplicate a track.
   */
  static readonly COMMAND_MULTITRACK_DUPLICATETRACK: string;

  /**
   * Edit the metronome pattern.
   */
  static readonly COMMAND_MULTITRACK_EDITMETRONOMEPATTERN: string;

  /**
   * Show clip keyframe nodes and allow editing.
   */
  static readonly COMMAND_MULTITRACK_ENABLECLIPKEYFRAMEEDITING: string;

  /**
   * Toggle Solo for the Selected Track Exclusively.
   */
  static readonly COMMAND_MULTITRACK_EXCLUSIVELYTOGGLESOLOFORSELECTED: string;

  /**
   * Imports the specified files and inserts them into the active session as a clips.
   */
  static readonly COMMAND_MULTITRACK_IMPORTANDINSERTFILESASCLIPS: string;

  /**
   * Minimize the currently selected track.
   */
  static readonly COMMAND_MULTITRACK_MINIMIZESELECTEDTRACK: string;

  /**
   * Mixdown the entire output of master track to new unsaved file.
   */
  static readonly COMMAND_MULTITRACK_MIXDOWNALLTONEWFILE: string;

  /**
   * Mixdown the output of the master track in the selected clips to a new unsaved file.
   */
  static readonly COMMAND_MULTITRACK_MIXDOWNSELECTEDCLIPSTONEWFILE: string;

  /**
   * Mixdown the output of the master track in the time selection to a new unsaved file.
   */
  static readonly COMMAND_MULTITRACK_MIXDOWNSELECTIONTONEWFILE: string;

  /**
   * Move the currently selected track down.
   */
  static readonly COMMAND_MULTITRACK_MOVETRACKDOWN: string;

  /**
   * Move the currently selected track up.
   */
  static readonly COMMAND_MULTITRACK_MOVETRACKUP: string;

  /**
   * Toggle Solo for the Selected Track Non-exclusively.
   */
  static readonly COMMAND_MULTITRACK_NONEXCLUSIVELYTOGGLESOLOFORSELECTED: string;

  /**
   * Play hidden clips.
   */
  static readonly COMMAND_MULTITRACK_PLAYHIDDENCLIPS: string;

  /**
   * Export the current session to a new XML file that can be opened by Adobe Premiere Pro.
   */
  static readonly COMMAND_MULTITRACK_PREMIEREPROXMLSEQUENCE: string;

  /**
   * Moves the selection to the next track.
   */
  static readonly COMMAND_MULTITRACK_SELECTNEXTTRACK: string;

  /**
   * Moves the selection to the previous track.
   */
  static readonly COMMAND_MULTITRACK_SELECTPREVIOUSTRACK: string;

  /**
   * Set the metronome sound type to African 1.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN1: string;

  /**
   * Set the metronome sound type to African 2.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEAFRICAN2: string;

  /**
   * Set the metronome sound type to Beeps.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEBEEPS: string;

  /**
   * Set the metronome sound type to Cymbals.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPECYMBALS: string;

  /**
   * Set the metronome sound type to Kit.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPEKIT: string;

  /**
   * Set the metronome sound type to Latin 1.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN1: string;

  /**
   * Set the metronome sound type to Latin 2.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN2: string;

  /**
   * Set the metronome sound type to Latin 3.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPELATIN3: string;

  /**
   * Set the metronome sound type to Sticks.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPESTICKS: string;

  /**
   * Set the metronome sound type to Tabla.
   */
  static readonly COMMAND_MULTITRACK_SETMETRONOMESOUNDTYPETABLA: string;

  /**
   * Toggle Arm for Record for All Tracks.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORALL: string;

  /**
   * Toggle Arm for Record for the Selected Track.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEARMFORRECORDFORSELECTED: string;

  /**
   * Toggle the multitrack metronome.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEMETRONOME: string;

  /**
   * Toggle Monitor Input for All Tracks.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORALL: string;

  /**
   * Toggle Monitor Input for the Selected Track.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEMONITORINPUTFORSELECTED: string;

  /**
   * Toggle Mute for All Tracks.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEMUTEFORALL: string;

  /**
   * Toggle Mute for the Selected Track.
   */
  static readonly COMMAND_MULTITRACK_TOGGLEMUTEFORSELECTED: string;

  /**
   * Toggle Solo for All Tracks.
   */
  static readonly COMMAND_MULTITRACK_TOGGLESOLOFORALL: string;

  /**
   * Toggle Solo Safe for the Selected Track.
   */
  static readonly COMMAND_MULTITRACK_TOGGLESOLOSAFEFORSELECTED: string;

  /**
   * Open the Audio Channel Mapping pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_AUDIOCHANNELMAPPING: string;

  /**
   * Open the Audio Hardware pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_AUDIOHARDWARE: string;

  /**
   * Open the Auto Save pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_AUTOSAVE: string;

  /**
   * Open the Control Surface pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_CONTROLSURFACE: string;

  /**
   * Open the Data pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_DATA: string;

  /**
   * Open the Effects pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_EFFECTS: string;

  /**
   * Open the General pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_GENERAL: string;

  /**
   * Open the most recently accessed pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_LASTPANE: string;

  /**
   * Open the Media & Disk Cache pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_MEDIA: string;

  /**
   * Open the Memory pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_MEMORY: string;

  /**
   * Open the Markers & Metadata pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_METADATA: string;

  /**
   * Open the Multitrack pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_MULTITRACK: string;

  /**
   * Open the Multitrack Clips pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_MULTITRACKCLIPS: string;

  /**
   * Open the Playback pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_PLAYBACK: string;

  /**
   * Open the Spectral Displays pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_SPECTRALDISPLAY: string;

  /**
   * Open the Time Display pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_TIMEDISPLAY: string;

  /**
   * Toggle the "Enable input metering when arming tracks for record" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEENABLEINPUTMETERING: string;

  /**
   * Toggle the "Enable smart monitoring when arming tracks for record" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEENABLESMARTMONITORING: string;

  /**
   * Toggle the "Play audio while scrubbing the playhead" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEPLAYAUDIOWHILESCRUBBING: string;

  /**
   * Toggle the "Auto-scroll during playback and recording" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEPLAYBACKAUTOSCROLLENABLED: string;

  /**
   * Toggle the "Play only selected frequencies when a spectral frequency selection exists" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDFREQUENCIES: string;

  /**
   * Toggle the "Stop at the end of the selection when playback starts within a selected region" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEPLAYONLYSELECTEDREGION: string;

  /**
   * Toggle the "Return playhead to start position on stop" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLEPLAYSTYLEISLEGACY: string;

  /**
   * Toggle the "Centered auto-scrolling in Waveform Editor" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLEV: string;

  /**
   * Toggle the "Centered auto-scrolling in Multitrack Editor" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLESMOOTHSCROLLMT: string;

  /**
   * Toggle the "Synchronize playhead selection and zoom range between documents" preference.
   */
  static readonly COMMAND_PREFERENCES_TOGGLESYNCSELECTIONVIEWCTI: string;

  /**
   * Open the Appearance pane in the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_USERINTERFACE: string;

  /**
   * Open the Video pane of the Preferences dialog.
   */
  static readonly COMMAND_PREFERENCES_VIDEO: string;

  /**
   * Decrease the spectral frequency display brush opacity.
   */
  static readonly COMMAND_TOOLS_DECREASEBRUSHOPACITY: string;

  /**
   * Decrease the spectral frequency display brush size.
   */
  static readonly COMMAND_TOOLS_DECREASEBRUSHSIZE: string;

  /**
   * Choose the Spot Healing Brush tool.
   */
  static readonly COMMAND_TOOLS_HEALINGBRUSH: string;

  /**
   * Increase the spectral frequency display brush opacity.
   */
  static readonly COMMAND_TOOLS_INCREASEBRUSHOPACITY: string;

  /**
   * Increase the spectral frequency display brush size.
   */
  static readonly COMMAND_TOOLS_INCREASEBRUSHSIZE: string;

  /**
   * Choose the Lasso Selection tool.
   */
  static readonly COMMAND_TOOLS_LASSOSELECTION: string;

  /**
   * Choose the Marquee Selection tool.
   */
  static readonly COMMAND_TOOLS_MARQUEESELECTION: string;

  /**
   * Choose the Move tool.
   */
  static readonly COMMAND_TOOLS_MOVE: string;

  /**
   * Choose the Paintbrush Selection tool.
   */
  static readonly COMMAND_TOOLS_PAINTBRUSHSELECTION: string;

  /**
   * Choose the current Razor tool or cycle through the razor tools.
   */
  static readonly COMMAND_TOOLS_RAZOR: string;

  /**
   * Choose the Razor tool which acts on all clips.
   */
  static readonly COMMAND_TOOLS_RAZORALLCLIPS: string;

  /**
   * Choose the Razor tool which acts on selected clips.
   */
  static readonly COMMAND_TOOLS_RAZORSELECTEDCLIPS: string;

  /**
   * Choose the Slip tool.
   */
  static readonly COMMAND_TOOLS_SLIP: string;

  /**
   * Choose the Time Selection tool.
   */
  static readonly COMMAND_TOOLS_TIMESELECTION: string;

  /**
   * Remove the selection if it exists and move the playhead to the left.
   */
  static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONLEFT: string;

  /**
   * Remove the selection if it exists and move the playhead one page to the left.
   */
  static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONPAGELEFT: string;

  /**
   * Remove the selection if it exists and move the playhead one page to the right.
   */
  static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONPAGERIGHT: string;

  /**
   * Remove the selection if it exists and move the playhead to the right.
   */
  static readonly COMMAND_TRANSPORT_COLLAPSESELECTIONRIGHT: string;

  /**
   * Move the playhead one page to the left.
   */
  static readonly COMMAND_TRANSPORT_MOVECTIPAGELEFT: string;

  /**
   * Move the playhead one page to the right.
   */
  static readonly COMMAND_TRANSPORT_MOVECTIPAGERIGHT: string;

  /**
   * Remove the selection if it exists and move the playhead to the beginning.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOBEGINNING: string;

  /**
   * Remove the selection if it exists and move the playhead to the end.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOEND: string;

  /**
   * Move the playhead to the selection in point.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOINPOINT: string;

  /**
   * Move the playhead to the left.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOLEFT: string;

  /**
   * Move the playhead to the next interesting point relative to playhead's location.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITONEXT: string;

  /**
   * Move the playhead to the next Marker relative to playhead's location.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITONEXTMARKER: string;

  /**
   * Move the playhead to the selection out point.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOOUTPOINT: string;

  /**
   * Move the playhead to the previous interesting point relative to playhead's location.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOPREVIOUS: string;

  /**
   * Move the playhead to the previous Marker relative to playhead's location.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITOPREVIOUSMARKER: string;

  /**
   * Move the playhead to the right.
   */
  static readonly COMMAND_TRANSPORT_MOVECTITORIGHT: string;

  /**
   * Start playback from the start position.
   */
  static readonly COMMAND_TRANSPORT_PLAY: string;

  /**
   * Shuttle Left.
   */
  static readonly COMMAND_TRANSPORT_SHUTTLELEFT: string;

  /**
   * Shuttle Right.
   */
  static readonly COMMAND_TRANSPORT_SHUTTLERIGHT: string;

  /**
   * Shuttle Stop.
   */
  static readonly COMMAND_TRANSPORT_SHUTTLESTOP: string;

  /**
   * Stop playback.
   */
  static readonly COMMAND_TRANSPORT_STOP: string;

  /**
   * Toggle the looped playback state.
   */
  static readonly COMMAND_TRANSPORT_TOGGLELOOPING: string;

  /**
   * Pause|Resume playback and recording.
   */
  static readonly COMMAND_TRANSPORT_TOGGLEPAUSE: string;

  /**
   * Start|Stop playback.
   */
  static readonly COMMAND_TRANSPORT_TOGGLEPLAYBACK: string;

  /**
   * Start|Stop recording.
   */
  static readonly COMMAND_TRANSPORT_TOGGLERECORDING: string;

  /**
   * Toggle between instant recording and timed recording.
   */
  static readonly COMMAND_TRANSPORT_TOGGLERECORDMODE: string;

  /**
   * Toggle the skip selection playback state.
   */
  static readonly COMMAND_TRANSPORT_TOGGLESKIPSELECTION: string;

  /**
   * Toggles the Preview Editor within the Editor panel.
   */
  static readonly COMMAND_VIEW_ALTVIEW: string;

  /**
   * Shows the CD Editor.
   */
  static readonly COMMAND_VIEW_CDEDITOR: string;

  /**
   * Decrease the spectral display resolution.
   */
  static readonly COMMAND_VIEW_DECREASESPECTRALRESOLUTION: string;

  /**
   * Open the Metadata Display dialog to customize the Files panel.
   */
  static readonly COMMAND_VIEW_DISPLAYFORFILESPANEL: string;

  /**
   * Open the Markers Display dialog to customize the Markers panel.
   */
  static readonly COMMAND_VIEW_DISPLAYFORMARKERSPANEL: string;

  /**
   * Open the Metadata Display dialog to customize the Metadata panel.
   */
  static readonly COMMAND_VIEW_DISPLAYFORMETADATAPANEL: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_EDITCUSTOMFRAMERATE: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_EDITTEMPO: string;

  /**
   * Hide all of the opened rack effect windows
   */
  static readonly COMMAND_VIEW_HIDEALLRACKEFFECTWINDOWS: string;

  /**
   * Increase the spectral display resolution.
   */
  static readonly COMMAND_VIEW_INCREASESPECTRALRESOLUTION: string;

  /**
   * Shows the Multitrack Editor.
   */
  static readonly COMMAND_VIEW_MULTITRACKEDITOR: string;

  /**
   * Cycle through the available time display formats (forward).
   */
  static readonly COMMAND_VIEW_NEXTTIMEDISPLAYFORMAT: string;

  /**
   * Cycle through the available time display formats (backwards).
   */
  static readonly COMMAND_VIEW_PREVIOUSTIMEDISPLAYFORMAT: string;

  /**
   * Scroll the view backward in time.
   */
  static readonly COMMAND_VIEW_SCROLLLEFT: string;

  /**
   * Scroll the view backward in time one page.
   */
  static readonly COMMAND_VIEW_SCROLLPAGELEFT: string;

  /**
   * Scroll the view forward in time one page.
   */
  static readonly COMMAND_VIEW_SCROLLPAGERIGHT: string;

  /**
   * Scroll the view forward in time.
   */
  static readonly COMMAND_VIEW_SCROLLRIGHT: string;

  /**
   * Scroll the view so the playhead is visible.
   */
  static readonly COMMAND_VIEW_SCROLLTOCTI: string;

  /**
   * Scroll the view so the selection is visible.
   */
  static readonly COMMAND_VIEW_SCROLLTOSELECTION: string;

  /**
   * Scroll the view so the playback start time is visible.
   */
  static readonly COMMAND_VIEW_SCROLLTOSTI: string;

  /**
   * Set navigation bar to display channels like the waveform editor.
   */
  static readonly COMMAND_VIEW_SETNAVBARCHANNELDISPLAYFROMEDITOR: string;

  /**
   * Set navigation bar to display layered channels.
   */
  static readonly COMMAND_VIEW_SETNAVBARCHANNELSLAYERED: string;

  /**
   * Set navigation bar to display separated channels.
   */
  static readonly COMMAND_VIEW_SETNAVBARCHANNELSSEPARATED: string;

  /**
   * Opens or closes the status bar.
   */
  static readonly COMMAND_VIEW_SHOWSTATUS: string;

  /**
   * Adjust the spectral frequency scale to be fully linear.
   */
  static readonly COMMAND_VIEW_SPECTRALFREQUENCYFULLLINEAR: string;

  /**
   * Adjust the spectral frequency scale to be fully logarithmic.
   */
  static readonly COMMAND_VIEW_SPECTRALFREQUENCYFULLLOGARITHMIC: string;

  /**
   * Adjust the spectral frequency scale to be more linear and less logarithmic.
   */
  static readonly COMMAND_VIEW_SPECTRALFREQUENCYMORELINEAR: string;

  /**
   * Adjust the spectral frequency scale to be more logarithmic and less linear.
   */
  static readonly COMMAND_VIEW_SPECTRALFREQUENCYMORELOGARITHMIC: string;

  /**
   * Toggle whether or not the active file should synchronize with time and tempo preferences.
   */
  static readonly COMMAND_VIEW_SYNCWITHTIMEPREFS: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATBARSANDBEATS: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATCOMPACTDISC: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATCUSTOM: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATDECIMAL: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSAMPLES: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE23976: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE24: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE25: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE2997: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE30: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTE5994DROP: string;

  /**
   *
   */
  static readonly COMMAND_VIEW_TIMEDISPLAYFORMATSMPTEDROP: string;

  /**
   * Toggle the show state of the clip effect envelopes.
   */
  static readonly COMMAND_VIEW_TOGGLECLIPEFFECTENVELOPES: string;

  /**
   * Toggle the show state of the clip pan envelopes.
   */
  static readonly COMMAND_VIEW_TOGGLECLIPPANENVELOPES: string;

  /**
   * Toggle the show state of the clip volume envelopes.
   */
  static readonly COMMAND_VIEW_TOGGLECLIPVOLUMEENVELOPES: string;

  /**
   * Toggle uniquely colored waveform channels.
   */
  static readonly COMMAND_VIEW_TOGGLECOLOREDCHANNELS: string;

  /**
   * Toggle the show state of the Editor panel controls.
   */
  static readonly COMMAND_VIEW_TOGGLEEDITORCONTROLS: string;

  /**
   * Toggles between Waveform Editor and Multitrack Editor
   */
  static readonly COMMAND_VIEW_TOGGLEEDITORS: string;

  /**
   * Toggle the show state of the Editor heads up display (HUD).
   */
  static readonly COMMAND_VIEW_TOGGLEHUD: string;

  /**
   * Toggle layered waveform channels.
   */
  static readonly COMMAND_VIEW_TOGGLELAYEREDCHANNELS: string;

  /**
   * Toggle showing the spectral pitch display.
   */
  static readonly COMMAND_VIEW_TOGGLEPITCHDISPLAY: string;

  /**
   * Toggle visibility of data under mouse cursor in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDATAUNDERCURSOR: string;

  /**
   * Toggle visibility of file errors warnings and processing status in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDOCMODALERRORSWARNINGS: string;

  /**
   * Toggle visibility of dropped audio indicator in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDROPPEDAUDIO: string;

  /**
   * Toggle visibility of duration information in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARDURATION: string;

  /**
   * Toggle visibility of free space information in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACE: string;

  /**
   * Toggle visibility of free space (shown in terms of time) information in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARFREESPACETIME: string;

  /**
   * Toggle visibility of sample type information in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARSAMPLETYPE: string;

  /**
   * Toggle visibility of uncompressed audio size information in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARUNCOMPRESSEDAUDIOSIZE: string;

  /**
   * Toggle visibility of video frame rate in status bar.
   */
  static readonly COMMAND_VIEW_TOGGLESHOWSTATUSBARVIDEOFRAMERATE: string;

  /**
   * Toggle showing the spectral frequency display.
   */
  static readonly COMMAND_VIEW_TOGGLESPECTRALDISPLAY: string;

  /**
   * Decode video at full resolution for display in the Video Panel.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTION: string;

  /**
   * Switch video display to full resolution when playback stops.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYFULLRESOLUTIONONSTOP: string;

  /**
   * Toggle video display to full screen and back.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYFULLSCREEN: string;

  /**
   * Decode video at one half resolution for display in the Video Panel.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYQUARTERRESOLUTION: string;

  /**
   * Set scaling of video in the Video Panel to 100 percent.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE100: string;

  /**
   * Set scaling of video in the Video Panel to 200 percent.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE200: string;

  /**
   * Set scaling of video in the Video Panel to 25 percent.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE25: string;

  /**
   * Set scaling of video in the Video Panel to 50 percent.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALE50: string;

  /**
   * Set scaling of video to fit the size of the Video Panel.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSETSCALEBESTFIT: string;

  /**
   * Decode video at one quarter resolution for display in the Video Panel.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSIXTEENTHRESOLUTION: string;

  /**
   * Decode video at one eighth resolution for display in the Video Panel.
   */
  static readonly COMMAND_VIEW_VIDEODISPLAYSIXTYFOURTHRESOLUTION: string;

  /**
   * Toggle video timecode overlay.
   */
  static readonly COMMAND_VIEW_VIDEOSHOWTIMECODE: string;

  /**
   * Shows the Waveform Editor.
   */
  static readonly COMMAND_VIEW_WAVEFORMEDITOR: string;

  /**
   * Zoom in on the amplitude scale.
   */
  static readonly COMMAND_VIEW_ZOOMINAMPLITUDE: string;

  /**
   * Zoom in at the time selection In point.
   */
  static readonly COMMAND_VIEW_ZOOMINATINPOINT: string;

  /**
   * Zoom in at the time selection Out point.
   */
  static readonly COMMAND_VIEW_ZOOMINATOUTPOINT: string;

  /**
   * Zoom in on the frequency scale.
   */
  static readonly COMMAND_VIEW_ZOOMINFREQUENCY: string;

  /**
   * Zoom in on the time scale.
   */
  static readonly COMMAND_VIEW_ZOOMINTIME: string;

  /**
   * Zoom out on the amplitude scale.
   */
  static readonly COMMAND_VIEW_ZOOMOUTAMPLITUDE: string;

  /**
   * Zoom out on the frequency scale.
   */
  static readonly COMMAND_VIEW_ZOOMOUTFREQUENCY: string;

  /**
   * Reset the zoom on all scales.
   */
  static readonly COMMAND_VIEW_ZOOMOUTFULL: string;

  /**
   * Toggle zoom out full on the selected track.
   */
  static readonly COMMAND_VIEW_ZOOMOUTFULLSELECTEDTRACK: string;

  /**
   * Zoom out on the time scale.
   */
  static readonly COMMAND_VIEW_ZOOMOUTTIME: string;

  /**
   * Reset the zoom on the amplitude scale.
   */
  static readonly COMMAND_VIEW_ZOOMRESETAMPLITUDE: string;

  /**
   * Reset the zoom on the frequency scale.
   */
  static readonly COMMAND_VIEW_ZOOMRESETFREQUENCY: string;

  /**
   * Reset the zoom on the time scale.
   */
  static readonly COMMAND_VIEW_ZOOMRESETTIME: string;

  /**
   * Toggle zoom in full on the selected track.
   */
  static readonly COMMAND_VIEW_ZOOMSELECTEDTRACK: string;

  /**
   * Zoom to the time selection.
   */
  static readonly COMMAND_VIEW_ZOOMTOSELECTION: string;

  /**
   * Zoom way in at the time selection In point.
   */
  static readonly COMMAND_VIEW_ZOOMWAYINATINPOINT: string;

  /**
   * Zoom way in at the time selection Out point.
   */
  static readonly COMMAND_VIEW_ZOOMWAYINATOUTPOINT: string;

  /**
   * Opens or closes the Amplitude Statistics panel.
   */
  static readonly COMMAND_WINDOW_AMPLITUDESTATISTICS: string;

  /**
   * Opens or closes the Diagnostics panel.
   */
  static readonly COMMAND_WINDOW_ANALYSISEFFECTS: string;

  /**
   * Opens or closes the Essential Sound panel.
   */
  static readonly COMMAND_WINDOW_BASICADJUSTMENTS: string;

  /**
   * Opens or closes the Batch Process panel.
   */
  static readonly COMMAND_WINDOW_BATCHPROCESS: string;

  /**
   *
   */
  static readonly COMMAND_WINDOW_BROWSEANDRUNSCRIPT: string;

  /**
   * Opens the Clip Properties panel.
   */
  static readonly COMMAND_WINDOW_CLIPPROPERTIES: string;

  /**
   *
   */
  static readonly COMMAND_WINDOW_CONSOLE: string;

  /**
   *
   */
  static readonly COMMAND_WINDOW_DEBUGMONITOR: string;

  /**
   *
   */
  static readonly COMMAND_WINDOW_DEBUGRENDERGRAPH: string;

  /**
   * Opens or closes the Editor panel.
   */
  static readonly COMMAND_WINDOW_EDITOR: string;

  /**
   * Opens or closes the Effects Rack panel.
   */
  static readonly COMMAND_WINDOW_EFFECTSRACK: string;

  /**
   * Opens or closes the Favorites panel.
   */
  static readonly COMMAND_WINDOW_FAVORITES: string;

  /**
   * Opens or closes the Files panel.
   */
  static readonly COMMAND_WINDOW_FILES: string;

  /**
   * Opens or closes the Frequency Analysis panel.
   */
  static readonly COMMAND_WINDOW_FREQUENCYANALYSIS: string;

  /**
   * Opens or closes the History panel.
   */
  static readonly COMMAND_WINDOW_HISTORY: string;

  /**
   * Opens or closes the Level Meters panel.
   */
  static readonly COMMAND_WINDOW_LEVELS: string;

  /**
   * Opens or closes the Markers panel.
   */
  static readonly COMMAND_WINDOW_MARKERS: string;

  /**
   * Opens or closes the Match Loudness panel.
   */
  static readonly COMMAND_WINDOW_MATCHVOLUME: string;

  /**
   * Opens or closes the Media Browser panel.
   */
  static readonly COMMAND_WINDOW_MEDIABROWSER: string;

  /**
   * Opens or closes the Metadata panel.
   */
  static readonly COMMAND_WINDOW_METADATA: string;

  /**
   * Minimizes the window.
   */
  static readonly COMMAND_WINDOW_MINIMIZE: string;

  /**
   * Opens or closes the Mixer panel.
   */
  static readonly COMMAND_WINDOW_MIXER: string;

  /**
   * Opens or closes the Phase Analysis panel.
   */
  static readonly COMMAND_WINDOW_PHASEANALYSIS: string;

  /**
   * Opens or closes the Phase Meter panel.
   */
  static readonly COMMAND_WINDOW_PHASEMETER: string;

  /**
   * Opens or closes the Playlist panel.
   */
  static readonly COMMAND_WINDOW_PLAYLIST: string;

  /**
   * Opens or closes the Properties panel.
   */
  static readonly COMMAND_WINDOW_PROPERTIES: string;

  /**
   * Opens or closes the Selection|View panel.
   */
  static readonly COMMAND_WINDOW_SELECTIONVIEW: string;

  /**
   * Opens the Session Properties panel.
   */
  static readonly COMMAND_WINDOW_SESSIONPROPERTIES: string;

  /**
   * Opens or closes the Track Panner panel.
   */
  static readonly COMMAND_WINDOW_SURROUNDPANNER: string;

  /**
   * Opens or closes the Time panel.
   */
  static readonly COMMAND_WINDOW_TIME: string;

  /**
   * Toggle the active frame between maximum and normal size.
   */
  static readonly COMMAND_WINDOW_TOGGLEMAXIMIZEACTIVEFRAME: string;

  /**
   * Opens or closes the toolbar.
   */
  static readonly COMMAND_WINDOW_TOOLS: string;

  /**
   * Opens or closes the Transport panel.
   */
  static readonly COMMAND_WINDOW_TRANSPORT: string;

  /**
   *
   */
  static readonly COMMAND_WINDOW_UINODESPY: string;

  /**
   * Opens or closes the Video panel.
   */
  static readonly COMMAND_WINDOW_VIDEO: string;

  /**
   * Opens or closes the Zoom panel.
   */
  static readonly COMMAND_WINDOW_ZOOM: string;

  /**
   * Opens the Edit Workspaces dialog to delete or reorder saved workspaces.
   */
  static readonly COMMAND_WORKSPACE_EDITWORKSPACES: string;

  /**
   * Saves the current workspace with a user enterable name.
   */
  static readonly COMMAND_WORKSPACE_NEWWORKSPACE: string;

  /**
   * Reverts changes to the current workspace and resets to the saved layout of the workspace.
   */
  static readonly COMMAND_WORKSPACE_RESETWORKSPACE: string;

  /**
   * Saves the current layout of the workspace to be recalled later.
   */
  static readonly COMMAND_WORKSPACE_SAVEWORKSPACE: string;

  /**
   * Switch to first workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE1: string;

  /**
   * Switch to second workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE2: string;

  /**
   * Switch to third workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE3: string;

  /**
   * Switch to fourth workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE4: string;

  /**
   * Switch to fifth workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE5: string;

  /**
   * Switch to sixth workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE6: string;

  /**
   * Switch to seventh workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE7: string;

  /**
   * Switch to eighth workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE8: string;

  /**
   * Switch to ninth workspace in Workspace menu.
   */
  static readonly COMMAND_WORKSPACE_WORKSPACE9: string;

  /**
   * Get the currently active document.
   */
  readonly activeDocument: Document;

  /**
   * Application build number
   */
  readonly buildNumber: string;

  /**
   * Get currently opened documents
   */
  readonly documents: Document[];

  /**
   * Engine local persitent settings.
   */
  readonly localPreferences: Preferences;

  /**
   * Path of the application executable.
   */
  readonly location: string;

  /**
   * Application name
   */
  readonly name: string;

  /**
   * Application platform
   */
  readonly platform: string;

  /**
   * Playing recording and navigating time
   */
  readonly transport: object;

  /**
   * Application version
   */
  readonly version: string;

  /**
   *
   */
  static __(): any;

  /**
   *
   */
  static addEventListener(): any;

  /**
   *
   */
  static dispatchEvent(): any;

  /**
   *
   * @param command Invokes a particular application command by its identifier string. These are similar to the commands shown in the Keyboard Shortcuts dialog. Returns true on success.
   */
  invokeCommand(command: string): boolean;

  /**
   *
   * @param command Returns true if the current application command is enabled and can be called in the current state.
   */
  isCommandEnabled(command: string): boolean;

  /**
   *
   * @param openParameter Open a document using specified DocumentOpenParameter.
   */
  openDocument(openParameter: DocumentOpenParameter): Document;

  /**
   * Quit application
   */
  quit(): boolean;

  /**
   *
   */
  static removeEventListener(): any;
}

/**
 * Command event object
 */
declare class CommandEvent {
  /**
   * A command is about to be invoked
   */
  static readonly EVENT_INVOKE_COMMAND: string;

  /**
   * Description of the command.
   */
  readonly description: string;

  /**
   * Name of the command.
   */
  readonly name: string;

  /**
   * Title of the command.
   */
  readonly title: string;

  /**
   *
   */
  static __(): any;
}

/**
 * This is the base class for all document types. There are also specialized types for certain document types like e.g. WaveDocument
 */
declare class Document {
  /**
   * Display name of the document as shown in the UI. It doesn't necessarily refers to the file name without filename extension.
   */
  readonly displayName: string;

  /**
   * Unique identifier of this document.
   */
  readonly id: string;

  /**
   * Returns a platform-specific path to the document on disk or empty if it doesn't currently have a path.
   */
  readonly path: string;
}

/**
 * This events is fired if one or more documents related event happened.
 */
declare class DocumentEvent {
  /**
   * This event is fired when a document was closed.
   */
  static readonly EVENT_CLOSED: string;

  /**
   * This event is fired when a document was created or opened.
   */
  static readonly EVENT_NEW: string;

  /**
   * This event is fired after a document was saved.
   */
  static readonly EVENT_SAVED: string;

  /**
   * This event is fired after the time selection of a document has changed.
   */
  static readonly EVENT_TIMESELECTIONCHANGED: string;

  /**
   * Unique document ID.
   */
  readonly documentID: string;

  /**
   * Document file path.
   */
  readonly path: string;

  /**
   *
   */
  static __(): any;
}

/**
 * A set of parameters used to open an existing document
 */
declare class DocumentOpenParameter {
  /**
   * Full path of document
   */
  path: string;

  /**
   *
   * @param documentPath Construct a new DocumentOpenParameter object
   */
  constructor(documentPath: string);

  /**
   *
   */
  static __(): any;
}

/**
 * This events propagates changes of the Audition transport like e.g. playback started.
 */
declare class TransportEvent {
  /**
   * This event is fired when looping was switched on.
   */
  static readonly EVENT_LOOPSTARTED: string;

  /**
   * This event is fired when looping was switched off.
   */
  static readonly EVENT_LOOPSTOPPED: string;

  /**
   * This event is fired when the currently active player has paused to play.
   */
  static readonly EVENT_PAUSESTARTED: string;

  /**
   * This event is fired when the currently active player has unpaused to play.
   */
  static readonly EVENT_PAUSESTOPPED: string;

  /**
   * This event is fired when the currently active player has started to play.
   */
  static readonly EVENT_PLAYERSTARTED: string;

  /**
   * This event is fired when the currently active player has stopped to play.
   */
  static readonly EVENT_PLAYERSTOPPED: string;

  /**
   * This event is fired when the currently active player has started to record.
   */
  static readonly EVENT_RECORDSTARTED: string;

  /**
   * This event is fired when the currently active player has stopped to record.
   */
  static readonly EVENT_RECORDSTOPPED: string;

  /**
   *
   */
  static __(): any;
}

/**
 * The Transport object provides access to the Audition transport layer.
 */
declare class Transport {
  /**
   * true if playback or recording is paused
   */
  readonly isPaused: boolean;

  /**
   * true if playing is enabled
   */
  readonly isPlayEnabled: boolean;

  /**
   * true if currently playing audio
   */
  readonly isPlaying: boolean;

  /**
   * true if recording is enabled
   */
  readonly isRecordEnabled: boolean;

  /**
   * true if currently recording audio
   */
  readonly isRecording: boolean;

  /**
   * enable|disable looping
   */
  loop: boolean;

  /**
   * pause|unpause playing or recording audio
   */
  pause(): boolean;

  /**
   * start|continue playing current audio
   */
  play(): boolean;

  /**
   * start|continue recording audio
   */
  record(): boolean;

  /**
   * stop playing or recording audio
   */
  stop(): boolean;
}

/**
 * Collection of all audio tracks of the according multitrack document as a mixed collection consiting of audio clip tracks, audio bus tracks and the master track. If accessed by index then the index starts with audio clip tracks, followed by audio bus tracks and the master track as the last entry.
 */
declare class MixedAudioTrackCollection {
  /**
   * Collection of all audio bus tracks of the multitrack document.
   */
  readonly audioBusTracks: AudioTrackCollection;

  /**
   * Collection of all audio clip tracks of the multitrack document.
   */
  readonly audioClipTracks: AudioTrackCollection;

  /**
   * Returns an audio track by its index
   */
  readonly index: AudioTrack;

  /**
   * Number of audio tracks.
   */
  readonly length: number;

  /**
   * The master track of the multitrack document.
   */
  readonly masterTrack: AudioTrack;

  /**
   *
   * @param layout
   * @param trackType Add new track
   */
  add(layout: AudioChannelLayout, trackType: number): AudioTrack;

  /**
   *
   * @param name Return audio track by its name
   */
  getAudioTrack(name: string): AudioTrack;

  /**
   *
   * @param track Remove track
   */
  remove(track: AudioTrack): boolean;
}

/**
 * Onboarding Support
 */
declare class OnboardingSupport {
  /**
   *
   */
  readonly currentUserUID: string;

  /**
   * Construct new OnboardingSupportObject object
   */
  constructor();

  /**
   *
   */
  static __(): any;

  /**
   *
   * @param CommandID
   */
  indicateMainMenuItem(CommandID: string): boolean;

  /**
   *
   * @param stepData WorkflowStatus : [String] workflow step action WorkflowID : [String] workflow guid WorkflowName : [String] name WorkflowSessionID : [String] session identifier WorkflowAttempts : [Number] number of attempts WorkflowStepsTotal : [Number] total number of steps WorkflowDurationMS : [Number] duration
   */
  onWorkflowAction(stepData: object): boolean;

  /**
   *
   * @param stepData WorkflowStatus : [String] workflow step action WorkflowID : [String] workflow guid WorkflowName : [String] name WorkflowSessionID : [String] session identifier WorkflowAttempts : [Number] number of attempts WorkflowStepsTotal : [Number] total number of steps WorkflowStepInteractivity : [String] step interactivity WorkflowStep : [Number] current step WorkflowStepDurationMS : [Number] duration WorkflowStepRetries : [Number] number of retries WorkflowDurationMS : [Number] duration
   */
  onWorkflowStepAction(stepData: object): boolean;
}

/**
 * An event to inform about succes or failures of an add multitrack document to queue operation.
 */
declare class AMEAddMultitrackDocumentToQueueEvent {
  /**
   * An event with this type is propagated if a multitrack document failed to be added to the Adobe Media Encoder queue
   * Add to queue failed event type
   */
  static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR: string;

  /**
   * An event with this type is propagated if a multitrack document was added to the Adobe Media Encoder queue successfully
   * Add to queue succeeded event type
   */
  static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS: string;

  /**
   * Provides additional information for this event esspecially in the case of an error.
   */
  readonly message: string;

  /**
   *
   */
  static __(): any;
}

/**
 * An event to inform about the audio channel configuration of a preset.
 */
declare class AMEAudioChannelConfigurationEvent {
  /**
   * An event with this type is propagated if a request for audio channel configuration failed
   * Request audio channel configuration failed event type
   */
  static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_ERROR: string;

  /**
   * An event with this type is propagated if a request for audio channel configuration succeeded
   * Request audio channel configuration succeeded event type
   */
  static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_SUCCESS: string;

  /**
   * The audio channel configuration of this preset. You have to request it by calling requestAudioChannelConfiguration beforehands.
   */
  readonly audioChannelConfiguration: string;

  /**
   *
   */
  static __(): any;
}

/**
 * Representation of an effect instance in either the effects rack of a wave document, clip or track. New effects can be created by calling the insertEffect method on an effect rack slot.
 */
declare class Effect {
  /**
   * The component ID of the effect.
   */
  readonly componentID: string;

  /**
   * The name of this effect.
   */
  readonly name: string;

  /**
   * Return an array of objects containing information about each parameter of the effect.Each object provides the following properties; name - paramater name; label - parameter title; unit - unit of the parameter values (not all effects provide this information); minimum - the lower bound of the arameter value range (not all effects provide this information); maximum - the upper bound of the parameter value range (not all effects provide this information)
   */
  readonly parameterInfos: any[];

  /**
   * Return an array containing all presets of this effect.
   */
  readonly presets: EffectPreset[];

  /**
   *
   * @param paramName Return the physical value of the parameter specified by paramName. All available parameters and their names can be retrieved by using the parameterInfos property.
   */
  getParameter(paramName: string): number;

  /**
   *
   * @param paramName
   * @param value Set the physical value of the parameter specified by paramName. All available parameters and their names can be retrieved by using the parameterInfos property.
   */
  setParameter(paramName: string, value: number): number;

  /**
   *
   * @param preset Set the specified preset.
   */
  setPreset(preset: EffectPreset): boolean;
}

/**
 * An EffectPreset represents a particular preset of an effect component.
 */
declare class EffectPreset {
  /**
   * The name of this effect preset.
   */
  readonly name: string;
}

/**
 * This object represents an effect rack of a multitrack session clip or track. It provides access to all effects of the rack as well as to the slots of the rack.
 */
declare class EffectRack {
  /**
   * EffectRackSlotCollection which gives access to the single slots of the rack.
   */
  readonly slots: EffectRackSlotCollection;
}

/**
 * An EffectRackSlot represents a slot of an effect rack.
 */
declare class EffectRackSlot {
  /**
   * The slot effect.
   */
  readonly effect: Effect;

  /**
   * Power state of the slot.
   */
  power: boolean;

  /**
   *
   * @param nameOrComponentID Create a new instance of an effect and store it within this slot.
   */
  insertEffect(nameOrComponentID: string): boolean;

  /**
   * Remove the effect stored within this slot.
   */
  removeEffect(): boolean;
}

/**
 * EffectRackSlotCollection provides access to all slots of an effect rack. Beside that new effects can be assigned to a slot or an existing effect can be removed from a slot.
 */
declare class EffectRackSlotCollection {
  /**
   * Slot at index
   */
  readonly index: EffectRackSlot;

  /**
   * Number of available slots.
   */
  readonly length: number;
}

/**
 * A small overlay window pointing to a certain point in the applications user interface
 */
declare class IndicatorOverlay {
  /**
   * Anchor point bottom edge
   */
  static readonly ANCHOR_BOTTOM_EDGE: number;

  /**
   * Anchor point left edge
   */
  static readonly ANCHOR_LEFT_EDGE: number;

  /**
   * Anchor point right edge
   */
  static readonly ANCHOR_RIGHT_EDGE: number;

  /**
   * Anchor point top edge
   */
  static readonly ANCHOR_TOP_EDGE: number;

  /**
   *
   * @param ctrlPath
   * @param direction
   * @param text
   * @param animation
   * @param persistent Construct new IndicatorOverlay object
   */
  constructor(
    ctrlPath: string,
    direction: number,
    text: string,
    animation: boolean,
    persistent: boolean
  );

  /**
   *
   */
  static __(): any;

  /**
   * Hide the overlay
   */
  hide(): boolean;

  /**
   * Show the overlay
   */
  show(): boolean;
}

/**
 * AMEFormat represents a format of the Adobe Media Encoder
 */
declare class AMEFormat {
  /**
   * The file name extension used by this format.
   */
  readonly extension: string;

  /**
   * The name of this format.
   */
  readonly name: string;

  /**
   * Request the available user match source and system presets for this format from Adobe Media Encoder. An event with type AMEPresetsEvent.EVENT_RequestPresetsSuccess or AMEPresetsEvent.EVENT_RequestPresetsError will be sent to notify about success or failure.
   * Request the available presets for this format from AME.
   */
  requestPresets(): boolean;
}

/**
 * An event to inform about formats that are availbe for running an export.
 */
declare class AMEFormatsEvent {
  /**
   * An event with this type is propagated if a request for formats from Adobe Media Encoder failed
   * Request formats failed event type
   */
  static readonly EVENT_REQUESTFORMATS_ERROR: string;

  /**
   * An event with this type is propagated if a request for formats from Adobe Media Encoder succeeded
   * Request formats succeeded event type
   */
  static readonly EVENT_REQUESTFORMATS_SUCCESS: string;

  /**
   * The formats available for running an export.
   */
  readonly formats: any[];

  /**
   *
   */
  static __(): any;
}

/**
 * An event to inform about the exporter settings summary of a preset.
 */
declare class AMEExporterSettingsSummaryEvent {
  /**
   * An event with this type is propagated if a request for exporter settings summary failed
   * Request exporter settings summary failed event type
   */
  static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_ERROR: string;

  /**
   * An event with this type is propagated if a request for exporter settings summary succeeded
   * Request exporter settings summary succeeded event type
   */
  static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_SUCCESS: string;

  /**
   * The exporter settings summary of this preset.
   */
  readonly exporterSettingsSummary: string;

  /**
   *
   */
  static __(): any;
}

/**
 * Compute the MD5 hash of the audio data within a wave document so that it can be easily compared against a baseline.
 */
declare class MD5 {
  /**
   *
   */
  static __(): any;

  /**
   *
   * @param wavedocument Compute the MD5 hash of the audio data within a wave document
   */
  static hash(wavedocument: WaveDocument): string;
}

/**
 * Persistence object that store/restore any values.
 */
declare class Preferences {
  /**
   *
   * @param key Retrieve value as boolean
   */
  getBoolValue(key: string): boolean;

  /**
   *
   * @param key Retrieve value as number
   */
  getNumberValue(key: string): number;

  /**
   *
   * @param key Retrieve value as string
   */
  getStringValue(key: string): string;

  /**
   *
   * @param key
   * @param value Set value as boolean
   */
  setBoolValue(key: string, value: boolean): boolean;

  /**
   *
   * @param key
   * @param value Set value as number
   */
  setNumberValue(key: string, value: number): boolean;

  /**
   *
   * @param key
   * @param value Store value as string
   */
  setStringValue(key: string, value: string): boolean;
}

/**
 * AMEServer represents a DynanicLink connection to Adobe Media Encoder
 */
declare class AMEServer {
  /**
   *
   */
  static __(): any;

  /**
   *
   */
  static addEventListener(): any;

  /**
   *
   * @param multitrackDocument
   * @param trackRouting
   * @param preset
   * @param temporaryFilesDir
   * @param outputFile Add the selected tracks of a multitrack document to the AME queue. The routing information is passed in as an array of tracks. The first track in the array will be routed to the first channels in the output file. A channel can be left unassigned by adding null to the array "trackRouting". Beside the final output file you have to specify a directory to store temporary wave files as well as the temporary project file. The temporary files will be deleted by AME after the export has been completed. An event with type AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS or AMEAddMultitrackDocumentToQueueEvent.EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR will be sent to notify about success or failure. Add the selected tracks of a multitrack document to the AME queue.
   */
  addMultitrackDocumentAndRoutingToQueue(
    multitrackDocument: Document,
    trackRouting: any[],
    preset: AMEPreset,
    temporaryFilesDir: string,
    outputFile: string
  ): boolean;

  /**
   * Connect to AME. An event with type DynamicLinkConnectionEvent.EVENT_CONNECTION will be sent to notify about success or failure.
   * Connect to AME.
   */
  connect(): boolean;

  /**
   * Disconnect from AME.
   */
  disconnect(): boolean;

  /**
   *
   */
  static dispatchEvent(): any;

  /**
   *
   */
  static removeEventListener(): any;

  /**
   * Request the available formats from AME. An event with type AMEFormatsEvent.EVENT_REQUESTFORMATS_SUCCESS or AMEFormatsEvent.EVENT_REQUESTFORMATS_ERROR will be sent to notify about success or failure.
   * Request the available formats from AME.
   */
  requestFormats(): boolean;
}

/**
 * AMEPreset represents a single preset of Adobe Media Encoder
 */
declare class AMEPreset {
  /**
   * The name of this preset.
   */
  readonly name: string;

  /**
   * Request the audio channel configuration of this preset from AME. An event with type AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationSuccess or AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationError will be sent to notify about success or failure.
   * Request the audio channel configuration of this preset from AME.
   */
  requestAudioChannelConfiguration(): boolean;

  /**
   * Request the exporter settings summary of this preset from AME.Request the exporter settings summary of this preset from AME. An event with type AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummarySuccess or AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummaryError will be sent to notify about success or failure.
   */
  requestExporterSettingsSummary(): boolean;
}

/**
 * An event to inform about the available user, match source and system presets of a format.
 */
declare class AMEPresetsEvent {
  /**
   * An event with this type is propagated if a request for Adobe Media Encoder presets failed
   * Request Adobe Media Encoder presets failed event type
   */
  static readonly EVENT_REQUESTPRESETS_ERROR: string;

  /**
   * An event with this type is propagated if a request for Adobe Media Encoder presets succeeded
   * Request Adobe Media Encoder presets succeeded event type
   */
  static readonly EVENT_REQUESTPRESETS_SUCCESS: string;

  /**
   * Available match source presets for this format.
   */
  readonly matchSourcePresets: any[];

  /**
   * Available system presets for this format.
   */
  readonly systemPresets: any[];

  /**
   * Available user presets for this format.
   */
  readonly userPresets: any[];

  /**
   *
   */
  static __(): any;
}

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
