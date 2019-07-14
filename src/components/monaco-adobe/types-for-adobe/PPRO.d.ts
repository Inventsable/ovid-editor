/**
 * 
 */
declare class Exporter {
	/**
	 * 
	 */
	classID: number;

	/**
	 * 
	 */
	fileType: number;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	getPresets(): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Sequence {
	/**
	 * 
	 */
	audioDisplayFormat: number;

	/**
	 * 
	 */
	audioTracks: TrackCollection;

	/**
	 * 
	 */
	end: string;

	/**
	 * 
	 */
	frameSizeHorizontal: number;

	/**
	 * 
	 */
	frameSizeVertical: number;

	/**
	 * 
	 */
	id: number;

	/**
	 * 
	 */
	markers: MarkerCollection;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	projectItem: ProjectItem;

	/**
	 * 
	 */
	sequenceID: string;

	/**
	 * 
	 */
	timebase: string;

	/**
	 * 
	 */
	videoDisplayFormat: number;

	/**
	 * 
	 */
	videoTracks: TrackCollection;

	/**
	 * 
	 */
	zeroPoint: string;

	/**
	 * 
	 */
	attachCustomProperty(propertyID: string, propertyValue: string): void;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	clone(): void;

	/**
	 * 
	 */
	close(): void;

	/**
	 * 
	 */
	createSubsequence(ignoreTrackTargeting?: boolean): Sequence;

	/**
	 * 
	 */
	exportAsFinalCutProXML(exportPath: string, suppressUI: number): boolean;

	/**
	 * 
	 */
	exportAsMediaDirect(outputFilePath: string, presetPath: string, workAreaType?: number): string;

	/**
	 * 
	 */
	exportAsProject(exportPath: string): void;

	/**
	 * 
	 */
	getExportFileExtension(presetFilePath: string): string;

	/**
	 * 
	 */
	getInPoint(): string;

	/**
	 * 
	 */
	getInPointAsTime(): Time;

	/**
	 * 
	 */
	getOutPoint(): string;

	/**
	 * 
	 */
	getOutPointAsTime(): Time;

	/**
	 * 
	 */
	getPlayerPosition(): Time;

	/**
	 * 
	 */
	getSelection(): void;

	/**
	 * 
	 */
	getSettings(): SequenceSettings;

	/**
	 * 
	 */
	getWorkAreaInPoint(): string;

	/**
	 * 
	 */
	getWorkAreaInPointAsTime(): Time;

	/**
	 * 
	 */
	getWorkAreaOutPoint(): string;

	/**
	 * 
	 */
	getWorkAreaOutPointAsTime(): Time;

	/**
	 * 
	 */
	importMGT(path: string, time: object, videoTrackIndex: number, audioTrackIndex: number): TrackItem;

	/**
	 * 
	 */
	importMGTFromLibrary(libraryName: string, mgtName: string, time: object, videoTrackIndex: number, audioTrackIndex: number): TrackItem;

	/**
	 * 
	 */
	insertClip(clipProjectItem: ProjectItem, time: object, videoTrackIndex: number, audioTrackIndex: number): void;

	/**
	 * 
	 */
	isWorkAreaEnabled(): boolean;

	/**
	 * 
	 */
	linkSelection(): boolean;

	/**
	 * 
	 */
	overwriteClip(clipProjectItem: ProjectItem, time: object, videoTrackIndex: number, audioTrackIndex: number): void;

	/**
	 * 
	 */
	setInPoint(time: object): void;

	/**
	 * 
	 */
	setOutPoint(time: object): void;

	/**
	 * 
	 */
	setPlayerPosition(pos: string): void;

	/**
	 * 
	 */
	setSelection(): void;

	/**
	 * 
	 */
	setSettings(settings: SequenceSettings): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	setWorkAreaEnabled(specifiedState?: number): boolean;

	/**
	 * 
	 */
	setWorkAreaInPoint(time: object): void;

	/**
	 * 
	 */
	setWorkAreaOutPoint(time: object): void;

	/**
	 * 
	 */
	setZeroPoint(ticks: string): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

	/**
	 * 
	 */
	unlinkSelection(): boolean;

}

/**
 * 
 */
declare class SequenceCollection {
	/**
	 * 
	 */
	numSequences: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Metadata {
	/**
	 * 
	 */
	getMetadata: string;

	/**
	 * 
	 */
	addMarker(): void;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	deleteMarker(): void;

	/**
	 * 
	 */
	setMarkerData(): void;

	/**
	 * 
	 */
	setMetadataValue(): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

	/**
	 * 
	 */
	updateMarker(): void;

}

/**
 * 
 */
declare class Anywhere {
	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	getAuthenticationToken(): string;

	/**
	 * 
	 */
	getCurrentEditingSessionActiveSequenceURL(): string;

	/**
	 * 
	 */
	getCurrentEditingSessionSelectionURL(): string;

	/**
	 * 
	 */
	getCurrentEditingSessionURL(): string;

	/**
	 * 
	 */
	isProductionOpen(): boolean;

	/**
	 * 
	 */
	listProductions(): RemoteProductionCollection;

	/**
	 * 
	 */
	openProduction(inProductionURL: string): boolean;

	/**
	 * 
	 */
	openTeamProjectSnapshot(inTeamProjectSnapshotPath: string): boolean;

	/**
	 * 
	 */
	setAuthenticationToken(inAuthToken: string, inEmail: string): boolean;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class SourceMonitor {
	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	closeAllClips(): void;

	/**
	 * 
	 */
	closeClip(): void;

	/**
	 * 
	 */
	getPosition(): Time;

	/**
	 * 
	 */
	openFilePath(filePath: string): boolean;

	/**
	 * 
	 */
	openProjectItem(projectItem: ProjectItem): boolean;

	/**
	 * 
	 */
	play(speed?: number): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Time {
	/**
	 * 
	 */
	seconds: number;

	/**
	 * 
	 */
	ticks: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	getFormatted(time: object, timeDisplay: number): string;

	/**
	 * 
	 */
	setSecondsAsFraction(numerator: number, denominator: number): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class TrackItemCollection {
	/**
	 * 
	 */
	numItems: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Track {
	/**
	 * 
	 */
	clips: TrackItemCollection;

	/**
	 * 
	 */
	id: number;

	/**
	 * 
	 */
	mediaType: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	transitions: TrackItemCollection;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	insertClip(clipProjectItem: ProjectItem, time: object): void;

	/**
	 * 
	 */
	isLocked(): boolean;

	/**
	 * 
	 */
	isMuted(): boolean;

	/**
	 * 
	 */
	isTargeted(): boolean;

	/**
	 * 
	 */
	overwriteClip(clipProjectItem: ProjectItem, time: object): void;

	/**
	 * 
	 */
	setLocked(arg1?: number): void;

	/**
	 * 
	 */
	setMute(arg1?: number): void;

	/**
	 * 
	 */
	setTargeted(isTargeted: boolean, shouldBroadcast?: boolean): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class TrackItem {
	/**
	 * 
	 */
	components: ComponentCollection;

	/**
	 * 
	 */
	duration: Time;

	/**
	 * 
	 */
	end: Time;

	/**
	 * 
	 */
	inPoint: Time;

	/**
	 * 
	 */
	matchName: string;

	/**
	 * 
	 */
	mediaType: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	nodeId: string;

	/**
	 * 
	 */
	outPoint: Time;

	/**
	 * 
	 */
	projectItem: ProjectItem;

	/**
	 * 
	 */
	start: Time;

	/**
	 * 
	 */
	type: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	getLinkedItems(): TrackItemCollection;

	/**
	 * 
	 */
	getMGTComponent(): Component;

	/**
	 * 
	 */
	getMatchName(): string;

	/**
	 * 
	 */
	getSpeed(): number;

	/**
	 * 
	 */
	isAdjustmentLayer(): boolean;

	/**
	 * 
	 */
	isMGT(): boolean;

	/**
	 * 
	 */
	isSelected(): boolean;

	/**
	 * 
	 */
	isSpeedReversed(): boolean;

	/**
	 * 
	 */
	remove(inRipple: boolean, inAlignToVideo?: boolean): boolean;

	/**
	 * 
	 */
	setSelected(isSelected: number, updateUI?: number): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Project {
	/**
	 * 
	 */
	activeSequence: Sequence;

	/**
	 * 
	 */
	cloudProjectLocalID: string;

	/**
	 * 
	 */
	documentID: string;

	/**
	 * 
	 */
	isCloudProject: boolean;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	path: string;

	/**
	 * 
	 */
	rootItem: ProjectItem;

	/**
	 * 
	 */
	sequences: SequenceCollection;

	/**
	 * 
	 */
	addPropertyToProjectMetadataSchema(name: string, label: string, type: number): boolean;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	closeDocument(): boolean;

	/**
	 * 
	 */
	consolidateDuplicates(): void;

	/**
	 * 
	 */
	createNewSequence(sequenceName: string, placeholderID: string): void;

	/**
	 * 
	 */
	deleteSequence(sequence: Sequence): boolean;

	/**
	 * 
	 */
	exportAAF(sequence: Sequence, filePath: string, mixDownVideo: number, explodeToMono: number, sampleRate: number, bitsPerSample: number, embedAudio: number, audioFileFormat: number, trimSources: number, handleFrames: number): number;

	/**
	 * 
	 */
	exportFinalCutProXML(exportPath: string, suppressUI: number): boolean;

	/**
	 * 
	 */
	exportOMF(sequence: Sequence, filePath: string, OMFTitle: string, sampleRate: number, bitsPerSample: number, audioEncapsulated: number, audioFileFormat: number, trimAudioFiles: number, handleFrames: number, includePan: number): number;

	/**
	 * 
	 */
	exportTimeline(exportControllerName: string): number;

	/**
	 * 
	 */
	getInsertionBin(): ProjectItem;

	/**
	 * 
	 */
	getProjectPanelMetadata(): void;

	/**
	 * 
	 */
	importAEComps(arg1: any): boolean;

	/**
	 * 
	 */
	importAllAEComps(arg1: any): boolean;

	/**
	 * 
	 */
	importFiles(arg1: any): boolean;

	/**
	 * 
	 */
	importSequences(arg1: any): boolean;

	/**
	 * 
	 */
	openSequence(sequenceID: string): boolean;

	/**
	 * 
	 */
	pauseGrowing(pausedOrNot: number): boolean;

	/**
	 * 
	 */
	placeAsset(arg1: any): boolean;

	/**
	 * 
	 */
	save(): void;

	/**
	 * 
	 */
	saveAs(saveAsPath: string): boolean;

	/**
	 * 
	 */
	setEnableTranscodeOnIngest(inEnable: boolean): boolean;

	/**
	 * 
	 */
	setProjectPanelMetadata(): void;

	/**
	 * 
	 */
	setScratchDiskPath(value: string, type: string): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectItemType {
	/**
	 * 
	 */
	BIN: number;

	/**
	 * 
	 */
	CLIP: number;

	/**
	 * 
	 */
	FILE: number;

	/**
	 * 
	 */
	ROOT: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectItem {
	/**
	 * 
	 */
	children: ProjectItemCollection;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	nodeId: string;

	/**
	 * 
	 */
	treePath: string;

	/**
	 * 
	 */
	type: number;

	/**
	 * 
	 */
	videoComponents: ComponentCollection;

	/**
	 * 
	 */
	attachProxy(mediaPath: string, isHiRes: number): boolean;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	canChangeMediaPath(): boolean;

	/**
	 * 
	 */
	canProxy(): boolean;

	/**
	 * 
	 */
	changeMediaPath(mediaPath: string, overrideChecks?: boolean): boolean;

	/**
	 * 
	 */
	clearInPoint(mediaType?: number): void;

	/**
	 * 
	 */
	clearOutPoint(mediaType?: number): void;

	/**
	 * 
	 */
	createBin(name: string): void;

	/**
	 * 
	 */
	createSmartBin(name: string, query: string): void;

	/**
	 * 
	 */
	createSubClip(name: string, startTime: object, endTime: object, hasHardBoundaries: number, takeVideo?: number, takeAudio?: number): ProjectItem;

	/**
	 * 
	 */
	deleteBin(): void;

	/**
	 * 
	 */
	findItemsMatchingMediaPath(matchString: string, ignoreSubclips?: number): void;

	/**
	 * 
	 */
	getColorLabel(): number;

	/**
	 * 
	 */
	getFootageInterpretation(): FootageInterpretation;

	/**
	 * 
	 */
	getInPoint(mediaType?: number): Time;

	/**
	 * 
	 */
	getMarkers(): MarkerCollection;

	/**
	 * 
	 */
	getMediaPath(): string;

	/**
	 * 
	 */
	getOutPoint(mediaType?: number): Time;

	/**
	 * 
	 */
	getProjectMetadata(): string;

	/**
	 * 
	 */
	getProxyPath(): string;

	/**
	 * 
	 */
	getXMPMetadata(): string;

	/**
	 * 
	 */
	hasProxy(): boolean;

	/**
	 * 
	 */
	isAdjustmentLayer(): boolean;

	/**
	 * 
	 */
	isOffline(): boolean;

	/**
	 * 
	 */
	isReference(): boolean;

	/**
	 * 
	 */
	isSequence(): boolean;

	/**
	 * 
	 */
	moveBin(destination: ProjectItem): void;

	/**
	 * 
	 */
	refreshMedia(): string;

	/**
	 * 
	 */
	renameBin(name: string): boolean;

	/**
	 * 
	 */
	saveProjectSnapshot(): boolean;

	/**
	 * 
	 */
	select(): void;

	/**
	 * 
	 */
	setColorLabel(): void;

	/**
	 * 
	 */
	setFootageInterpretation(interpretFootage: FootageInterpretation): boolean;

	/**
	 * 
	 */
	setInPoint(arg1: object, mediaType?: number): void;

	/**
	 * 
	 */
	setOffline(): boolean;

	/**
	 * 
	 */
	setOutPoint(arg1: object, mediaType?: number): void;

	/**
	 * 
	 */
	setOverrideFrameRate(frameRate: number): boolean;

	/**
	 * 
	 */
	setOverridePixelAspectRatio(numerator: number, denominator: number): boolean;

	/**
	 * 
	 */
	setProjectMetadata(buffer: string): void;

	/**
	 * 
	 */
	setScaleToFrameSize(): void;

	/**
	 * 
	 */
	setStartTime(arg1: object): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	setXMPMetadata(buffer: string): boolean;

	/**
	 * 
	 */
	startTime(): Time;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectCollection {
	/**
	 * 
	 */
	numProjects: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ProjectItemCollection {
	/**
	 * 
	 */
	numItems: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class TrackCollection {
	/**
	 * 
	 */
	numTracks: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class ScratchDiskType {
	/**
	 * 
	 */
	FirstAudioCaptureFolder: string;

	/**
	 * 
	 */
	FirstAudioPreviewFolder: string;

	/**
	 * 
	 */
	FirstAutoSaveFolder: string;

	/**
	 * 
	 */
	FirstCClibrariesFolder: string;

	/**
	 * 
	 */
	FirstCapsuleMediaFolder: string;

	/**
	 * 
	 */
	FirstVideoCaptureFolder: string;

	/**
	 * 
	 */
	FirstVideoPreviewFolder: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class RemoteProductionCollection {
	/**
	 * 
	 */
	numProductions: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class RemoteProduction {
	/**
	 * 
	 */
	description: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	url: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class EncoderPreset {
	/**
	 * 
	 */
	matchName: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

	/**
	 * 
	 */
	writeToFile(outputFilePath: string): boolean;

}

/**
 * 
 */
declare class Encoder {
	/**
	 * 
	 */
	ENCODE_ENTIRE: number;

	/**
	 * 
	 */
	ENCODE_IN_TO_OUT: number;

	/**
	 * 
	 */
	ENCODE_WORKAREA: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	encodeFile(inputFilePath: string, outputFilePath: string, presetPath: string, removeOnCompletion?: number, startTime?: object, stopTime?: object): string;

	/**
	 * 
	 */
	encodeProjectItem(projectItem: ProjectItem, outputFilePath: string, presetPath: string, WorkAreaType?: number, removeOnCompletion?: number): string;

	/**
	 * 
	 */
	encodeSequence(sequence: Sequence, outputFilePath: string, presetPath: string, WorkAreaType?: number, removeOnCompletion?: number): string;

	/**
	 * 
	 */
	getExporters(): void;

	/**
	 * 
	 */
	launchEncoder(): boolean;

	/**
	 * 
	 */
	setEmbeddedXMPEnabled(enable: number): void;

	/**
	 * 
	 */
	setSidecarXMPEnabled(enable: number): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	startBatch(): boolean;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Properties {
	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	clearProperty(propertyKey: string): void;

	/**
	 * 
	 */
	doesPropertyExist(propertyKey: string): boolean;

	/**
	 * 
	 */
	getProperty(propertyKey: string): void;

	/**
	 * 
	 */
	isPropertyReadOnly(propertyKey: string): boolean;

	/**
	 * 
	 */
	setProperty(propertyKey: string): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class App {
	/**
	 * 
	 */
	anywhere: Anywhere;

	/**
	 * 
	 */
	build: string;

	/**
	 * 
	 */
	encoder: Encoder;

	/**
	 * 
	 */
	getAppPrefPath: string;

	/**
	 * 
	 */
	getAppSystemPrefPath: string;

	/**
	 * 
	 */
	getPProPrefPath: string;

	/**
	 * 
	 */
	getPProSystemPrefPath: string;

	/**
	 * 
	 */
	metadata: Metadata;

	/**
	 * 
	 */
	path: string;

	/**
	 * 
	 */
	project: Project;

	/**
	 * 
	 */
	projectManager: ProjectManager;

	/**
	 * 
	 */
	projects: ProjectCollection;

	/**
	 * 
	 */
	properties: Properties;

	/**
	 * 
	 */
	sourceMonitor: SourceMonitor;

	/**
	 * 
	 */
	userGuid: string;

	/**
	 * 
	 */
	version: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	broadcastPrefsChanged(preferencesThatChanged: string): boolean;

	/**
	 * 
	 */
	getConstant(name: string): number;

	/**
	 * 
	 */
	getEnableProxies(): number;

	/**
	 * 
	 */
	getProjectFromViewID(viewID: string): Project;

	/**
	 * 
	 */
	getProjectViewIDs(): void;

	/**
	 * 
	 */
	getProjectViewSelection(viewID: string): void;

	/**
	 * 
	 */
	getWorkspaces(): void;

	/**
	 * 
	 */
	isDocument(filePath: string): boolean;

	/**
	 * 
	 */
	isDocumentOpen(): boolean;

	/**
	 * 
	 */
	openDocument(): boolean;

	/**
	 * 
	 */
	openFCPXML(): boolean;

	/**
	 * 
	 */
	quit(): void;

	/**
	 * 
	 */
	refresh(): void;

	/**
	 * 
	 */
	setEnableProxies(enable: number): boolean;

	/**
	 * 
	 */
	setEnableTranscodeOnIngest(inEnable: boolean): void;

	/**
	 * 
	 */
	setExtensionPersistent(extensionID: string, state?: number): void;

	/**
	 * 
	 */
	setProjectViewSelection(viewID: string): void;

	/**
	 * 
	 */
	setSDKEventMessage(value: string, eventType: string): boolean;

	/**
	 * 
	 */
	setScratchDiskPath(value: string, type: string): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	setWorkspace(workspace: string): boolean;

	/**
	 * 
	 */
	showCursor(enable: boolean): void;

	/**
	 * 
	 */
	trace(message: string): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

	/**
	 * 
	 */
	write(arg1: any): void;

}

/**
 * 
 */
declare class MarkerCollection {
	/**
	 * 
	 */
	numMarkers: number;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	createMarker(time: number): Marker;

	/**
	 * 
	 */
	deleteMarker(marker: Marker): void;

	/**
	 * 
	 */
	getFirstMarker(): Marker;

	/**
	 * 
	 */
	getLastMarker(): Marker;

	/**
	 * 
	 */
	getNextMarker(marker: Marker): Marker;

	/**
	 * 
	 */
	getPrevMarker(marker: Marker): Marker;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Marker {
	/**
	 * 
	 */
	comments: string;

	/**
	 * 
	 */
	end: Time;

	/**
	 * 
	 */
	guid: string;

	/**
	 * 
	 */
	name: string;

	/**
	 * 
	 */
	start: Time;

	/**
	 * 
	 */
	type: string;

	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	getColorByIndex(): number;

	/**
	 * 
	 */
	getWebLinkFrameTarget(): string;

	/**
	 * 
	 */
	getWebLinkURL(): string;

	/**
	 * 
	 */
	setColorByIndex(arg1: number): void;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	setTypeAsChapter(): void;

	/**
	 * 
	 */
	setTypeAsComment(): void;

	/**
	 * 
	 */
	setTypeAsSegmentation(): void;

	/**
	 * 
	 */
	setTypeAsWebLink(url: string, frameTarget: string): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

/**
 * 
 */
declare class Document {
	/**
	 * 
	 */
	bind(eventName: string, function_: any): void;

	/**
	 * 
	 */
	getFilePath(): string;

	/**
	 * 
	 */
	importFiles(arg1: any): boolean;

	/**
	 * 
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void;

	/**
	 * 
	 */
	unbind(eventName: string): void;

}

