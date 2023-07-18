/* eslint-disable */
import {TypedDocumentNode as DocumentNode} from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string}
  String: {input: string; output: string}
  Boolean: {input: boolean; output: boolean}
  Int: {input: number; output: number}
  Float: {input: number; output: number}
  Any: {input: any; output: any}
  Int64: {input: any; output: any}
  Map: {input: any; output: any}
  /** Log entries */
  Time: {input: any; output: any}
  /**
   * Timestamp is a point in time. It is always output as RFC3339-compatible time points.
   * It can be input as a RFC3339 string, or as "<4h" for "4 hours in the past" or ">5m"
   * for "5 minutes in the future"
   */
  Timestamp: {input: any; output: any}
  Upload: {input: any; output: any}
}

export type AddTempDlnaipInput = {
  address: Scalars["String"]["input"]
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars["Int"]["input"]>
}

export type AnonymiseDatabaseInput = {
  download?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type AssignSceneFileInput = {
  file_id: Scalars["ID"]["input"]
  scene_id: Scalars["ID"]["input"]
}

export type AutoTagMetadataInput = {
  /** Paths to tag, null for all files */
  paths?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** IDs of performers to tag files with, or "*" for all */
  performers?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** IDs of studios to tag files with, or "*" for all */
  studios?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** IDs of tags to tag files with, or "*" for all */
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type AutoTagMetadataOptions = {
  __typename?: "AutoTagMetadataOptions"
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars["String"]["output"]>>
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars["String"]["output"]>>
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars["String"]["output"]>>
}

export type BackupDatabaseInput = {
  download?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type BaseFile = {
  basename: Scalars["String"]["output"]
  created_at: Scalars["Time"]["output"]
  fingerprints: Array<Fingerprint>
  id: Scalars["ID"]["output"]
  mod_time: Scalars["Time"]["output"]
  parent_folder_id: Scalars["ID"]["output"]
  path: Scalars["String"]["output"]
  size: Scalars["Int64"]["output"]
  updated_at: Scalars["Time"]["output"]
  zip_file_id?: Maybe<Scalars["ID"]["output"]>
}

export enum BlobsStorageType {
  /** Database */
  Database = "DATABASE",
  /** Filesystem */
  Filesystem = "FILESYSTEM",
}

export type BulkGalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<BulkUpdateIds>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  scene_ids?: InputMaybe<BulkUpdateIds>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<BulkUpdateIds>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type BulkImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  gallery_ids?: InputMaybe<BulkUpdateIds>
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<BulkUpdateIds>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<BulkUpdateIds>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type BulkMovieUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
}

export type BulkPerformerUpdateInput = {
  alias_list?: InputMaybe<BulkUpdateStrings>
  aliases?: InputMaybe<Scalars["String"]["input"]>
  birthdate?: InputMaybe<Scalars["String"]["input"]>
  career_length?: InputMaybe<Scalars["String"]["input"]>
  circumcised?: InputMaybe<CircumisedEnum>
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  country?: InputMaybe<Scalars["String"]["input"]>
  death_date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  disambiguation?: InputMaybe<Scalars["String"]["input"]>
  ethnicity?: InputMaybe<Scalars["String"]["input"]>
  eye_color?: InputMaybe<Scalars["String"]["input"]>
  fake_tits?: InputMaybe<Scalars["String"]["input"]>
  favorite?: InputMaybe<Scalars["Boolean"]["input"]>
  gender?: InputMaybe<GenderEnum>
  hair_color?: InputMaybe<Scalars["String"]["input"]>
  height?: InputMaybe<Scalars["String"]["input"]>
  height_cm?: InputMaybe<Scalars["Int"]["input"]>
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  instagram?: InputMaybe<Scalars["String"]["input"]>
  measurements?: InputMaybe<Scalars["String"]["input"]>
  penis_length?: InputMaybe<Scalars["Float"]["input"]>
  piercings?: InputMaybe<Scalars["String"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  tag_ids?: InputMaybe<BulkUpdateIds>
  tattoos?: InputMaybe<Scalars["String"]["input"]>
  twitter?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  weight?: InputMaybe<Scalars["Int"]["input"]>
}

export type BulkSceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  code?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  gallery_ids?: InputMaybe<BulkUpdateIds>
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  movie_ids?: InputMaybe<BulkUpdateIds>
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<BulkUpdateIds>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<BulkUpdateIds>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  urls?: InputMaybe<BulkUpdateStrings>
}

export enum BulkUpdateIdMode {
  Add = "ADD",
  Remove = "REMOVE",
  Set = "SET",
}

export type BulkUpdateIds = {
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  mode: BulkUpdateIdMode
}

export type BulkUpdateStrings = {
  mode: BulkUpdateIdMode
  values?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type CircumcisionCriterionInput = {
  modifier: CriterionModifier
  value?: InputMaybe<Array<CircumisedEnum>>
}

export enum CircumisedEnum {
  Cut = "CUT",
  Uncut = "UNCUT",
}

export type CleanMetadataInput = {
  /** Do a dry run. Don't delete any files */
  dryRun: Scalars["Boolean"]["input"]
  paths?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type ConfigDlnaInput = {
  /** True if DLNA service should be enabled by default */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces?: InputMaybe<Array<Scalars["String"]["input"]>>
  serverName?: InputMaybe<Scalars["String"]["input"]>
  /** Order to sort videos */
  videoSortOrder?: InputMaybe<Scalars["String"]["input"]>
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type ConfigDlnaResult = {
  __typename?: "ConfigDLNAResult"
  /** True if DLNA service should be enabled by default */
  enabled: Scalars["Boolean"]["output"]
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces: Array<Scalars["String"]["output"]>
  serverName: Scalars["String"]["output"]
  /** Order to sort videos */
  videoSortOrder: Scalars["String"]["output"]
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs: Array<Scalars["String"]["output"]>
}

export type ConfigDefaultSettingsInput = {
  autoTag?: InputMaybe<AutoTagMetadataInput>
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: InputMaybe<Scalars["Boolean"]["input"]>
  /** If true, delete generated files checkbox will be checked by default */
  deleteGenerated?: InputMaybe<Scalars["Boolean"]["input"]>
  generate?: InputMaybe<GenerateMetadataInput>
  identify?: InputMaybe<IdentifyMetadataInput>
  scan?: InputMaybe<ScanMetadataInput>
}

export type ConfigDefaultSettingsResult = {
  __typename?: "ConfigDefaultSettingsResult"
  autoTag?: Maybe<AutoTagMetadataOptions>
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars["Boolean"]["output"]>
  /** If true, delete generated supporting files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars["Boolean"]["output"]>
  generate?: Maybe<GenerateMetadataOptions>
  identify?: Maybe<IdentifyMetadataTaskOptions>
  scan?: Maybe<ScanMetadataOptions>
}

export type ConfigDisableDropdownCreate = {
  __typename?: "ConfigDisableDropdownCreate"
  performer: Scalars["Boolean"]["output"]
  studio: Scalars["Boolean"]["output"]
  tag: Scalars["Boolean"]["output"]
}

export type ConfigDisableDropdownCreateInput = {
  performer?: InputMaybe<Scalars["Boolean"]["input"]>
  studio?: InputMaybe<Scalars["Boolean"]["input"]>
  tag?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ConfigGeneralInput = {
  /** Path to backup directory */
  backupDirectoryPath?: InputMaybe<Scalars["String"]["input"]>
  /** Path to blobs - required for filesystem blob storage */
  blobsPath?: InputMaybe<Scalars["String"]["input"]>
  /** Where to store blobs */
  blobsStorage?: InputMaybe<BlobsStorageType>
  /** Path to cache */
  cachePath?: InputMaybe<Scalars["String"]["input"]>
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5?: InputMaybe<Scalars["Boolean"]["input"]>
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Custom Performer Image Location */
  customPerformerImageLocation?: InputMaybe<Scalars["String"]["input"]>
  /** Path to the SQLite database */
  databasePath?: InputMaybe<Scalars["String"]["input"]>
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Array of file regexp to exclude from Video Scans */
  excludes?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex?: InputMaybe<Scalars["String"]["input"]>
  /** Array of gallery zip file extensions */
  galleryExtensions?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Path to generated files */
  generatedPath?: InputMaybe<Scalars["String"]["input"]>
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Array of image file extensions */
  imageExtensions?: InputMaybe<Array<Scalars["String"]["input"]>>
  /**
   * ffmpeg stream input args - injected before input file
   *   These are applied when live transcoding
   */
  liveTranscodeInputArgs?: InputMaybe<Array<Scalars["String"]["input"]>>
  /**
   * ffmpeg stream output args - injected before output file
   *   These are applied when live transcoding
   */
  liveTranscodeOutputArgs?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Whether to log http access */
  logAccess?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Name of the log file */
  logFile?: InputMaybe<Scalars["String"]["input"]>
  /** Minimum log level */
  logLevel?: InputMaybe<Scalars["String"]["input"]>
  /** Whether to also output to stderr */
  logOut?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Maximum session cookie age */
  maxSessionAge?: InputMaybe<Scalars["Int"]["input"]>
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: InputMaybe<StreamingResolutionEnum>
  /** Max generated transcode size */
  maxTranscodeSize?: InputMaybe<StreamingResolutionEnum>
  /** Path to import/export files */
  metadataPath?: InputMaybe<Scalars["String"]["input"]>
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks?: InputMaybe<Scalars["Int"]["input"]>
  /** Password */
  password?: InputMaybe<Scalars["String"]["input"]>
  /** Include audio stream in previews */
  previewAudio?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars["String"]["input"]>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars["String"]["input"]>
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars["Float"]["input"]>
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars["Int"]["input"]>
  /** Python path - resolved using path if unset */
  pythonPath?: InputMaybe<Scalars["String"]["input"]>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars["String"]["input"]>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars["String"]["input"]>
  /** Path to scrapers */
  scrapersPath?: InputMaybe<Scalars["String"]["input"]>
  /** Stash-box instances used for tagging */
  stashBoxes?: InputMaybe<Array<StashBoxInput>>
  /** Array of file paths to content */
  stashes?: InputMaybe<Array<StashConfigInput>>
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration?: InputMaybe<Scalars["Boolean"]["input"]>
  /**
   * ffmpeg transcode input args - injected before input file
   *   These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs?: InputMaybe<Array<Scalars["String"]["input"]>>
  /**
   * ffmpeg transcode output args - injected before output file
   *   These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Comma separated list of proxies to allow traffic from */
  trustedProxies?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Username */
  username?: InputMaybe<Scalars["String"]["input"]>
  /** Array of video file extensions */
  videoExtensions?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm?: InputMaybe<HashAlgorithm>
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ConfigGeneralResult = {
  __typename?: "ConfigGeneralResult"
  /** API Key */
  apiKey: Scalars["String"]["output"]
  /** Path to backup directory */
  backupDirectoryPath: Scalars["String"]["output"]
  /** Path to blobs - required for filesystem blob storage */
  blobsPath: Scalars["String"]["output"]
  /** Where to store blobs */
  blobsStorage: BlobsStorageType
  /** Path to cache */
  cachePath: Scalars["String"]["output"]
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5: Scalars["Boolean"]["output"]
  /** Path to the config file used */
  configFilePath: Scalars["String"]["output"]
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders: Scalars["Boolean"]["output"]
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos: Scalars["Boolean"]["output"]
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars["String"]["output"]>
  /** Path to the SQLite database */
  databasePath: Scalars["String"]["output"]
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange: Scalars["Boolean"]["output"]
  /** Array of file regexp to exclude from Video Scans */
  excludes: Array<Scalars["String"]["output"]>
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex: Scalars["String"]["output"]
  /** Array of gallery zip file extensions */
  galleryExtensions: Array<Scalars["String"]["output"]>
  /** Path to generated files */
  generatedPath: Scalars["String"]["output"]
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes: Array<Scalars["String"]["output"]>
  /** Array of image file extensions */
  imageExtensions: Array<Scalars["String"]["output"]>
  /**
   * ffmpeg stream input args - injected before input file
   *   These are applied when live transcoding
   */
  liveTranscodeInputArgs: Array<Scalars["String"]["output"]>
  /**
   * ffmpeg stream output args - injected before output file
   *   These are applied when live transcoding
   */
  liveTranscodeOutputArgs: Array<Scalars["String"]["output"]>
  /** Whether to log http access */
  logAccess: Scalars["Boolean"]["output"]
  /** Name of the log file */
  logFile?: Maybe<Scalars["String"]["output"]>
  /** Minimum log level */
  logLevel: Scalars["String"]["output"]
  /** Whether to also output to stderr */
  logOut: Scalars["Boolean"]["output"]
  /** Maximum session cookie age */
  maxSessionAge: Scalars["Int"]["output"]
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>
  /** Path to import/export files */
  metadataPath: Scalars["String"]["output"]
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks: Scalars["Int"]["output"]
  /** Password */
  password: Scalars["String"]["output"]
  /** Include audio stream in previews */
  previewAudio: Scalars["Boolean"]["output"]
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd: Scalars["String"]["output"]
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart: Scalars["String"]["output"]
  /** Preset when generating preview */
  previewPreset: PreviewPreset
  /** Preview segment duration, in seconds */
  previewSegmentDuration: Scalars["Float"]["output"]
  /** Number of segments in a preview file */
  previewSegments: Scalars["Int"]["output"]
  /** Python path - resolved using path if unset */
  pythonPath: Scalars["String"]["output"]
  /**
   * Scraper CDP path. Path to chrome executable or remote address
   * @deprecated use ConfigResult.scraping instead
   */
  scraperCDPPath?: Maybe<Scalars["String"]["output"]>
  /**
   * Whether the scraper should check for invalid certificates
   * @deprecated use ConfigResult.scraping instead
   */
  scraperCertCheck: Scalars["Boolean"]["output"]
  /**
   * Scraper user agent string
   * @deprecated use ConfigResult.scraping instead
   */
  scraperUserAgent?: Maybe<Scalars["String"]["output"]>
  /** Path to scrapers */
  scrapersPath: Scalars["String"]["output"]
  /** Stash-box instances used for tagging */
  stashBoxes: Array<StashBox>
  /** Array of file paths to content */
  stashes: Array<StashConfig>
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration: Scalars["Boolean"]["output"]
  /**
   * ffmpeg transcode input args - injected before input file
   *   These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs: Array<Scalars["String"]["output"]>
  /**
   * ffmpeg transcode output args - injected before output file
   *   These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs: Array<Scalars["String"]["output"]>
  /**
   * Comma separated list of proxies to allow traffic from
   * @deprecated no longer supported
   */
  trustedProxies?: Maybe<Array<Scalars["String"]["output"]>>
  /** Username */
  username: Scalars["String"]["output"]
  /** Array of video file extensions */
  videoExtensions: Array<Scalars["String"]["output"]>
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm: HashAlgorithm
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails: Scalars["Boolean"]["output"]
}

export type ConfigImageLightboxInput = {
  displayMode?: InputMaybe<ImageLightboxDisplayMode>
  resetZoomOnNav?: InputMaybe<Scalars["Boolean"]["input"]>
  scaleUp?: InputMaybe<Scalars["Boolean"]["input"]>
  scrollAttemptsBeforeChange?: InputMaybe<Scalars["Int"]["input"]>
  scrollMode?: InputMaybe<ImageLightboxScrollMode>
  slideshowDelay?: InputMaybe<Scalars["Int"]["input"]>
}

export type ConfigImageLightboxResult = {
  __typename?: "ConfigImageLightboxResult"
  displayMode?: Maybe<ImageLightboxDisplayMode>
  resetZoomOnNav?: Maybe<Scalars["Boolean"]["output"]>
  scaleUp?: Maybe<Scalars["Boolean"]["output"]>
  scrollAttemptsBeforeChange: Scalars["Int"]["output"]
  scrollMode?: Maybe<ImageLightboxScrollMode>
  slideshowDelay?: Maybe<Scalars["Int"]["output"]>
}

export type ConfigInterfaceInput = {
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: InputMaybe<Scalars["Boolean"]["input"]>
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: InputMaybe<Scalars["Boolean"]["input"]>
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Custom CSS */
  css?: InputMaybe<Scalars["String"]["input"]>
  cssEnabled?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Custom Locales */
  customLocales?: InputMaybe<Scalars["String"]["input"]>
  customLocalesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Set to true to disable creating new objects via the dropdown menus */
  disableDropdownCreate?: InputMaybe<ConfigDisableDropdownCreateInput>
  /** Funscript Time Offset */
  funscriptOffset?: InputMaybe<Scalars["Int"]["input"]>
  /** Handy Connection Key */
  handyKey?: InputMaybe<Scalars["String"]["input"]>
  imageLightbox?: InputMaybe<ConfigImageLightboxInput>
  /** Custom Javascript */
  javascript?: InputMaybe<Scalars["String"]["input"]>
  javascriptEnabled?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Interface language */
  language?: InputMaybe<Scalars["String"]["input"]>
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: InputMaybe<Scalars["Int"]["input"]>
  /** Ordered list of items that should be shown in the menu */
  menuItems?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: InputMaybe<Scalars["Boolean"]["input"]>
  /** True if we should send notifications to the desktop */
  notificationsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Show scene scrubber by default */
  showScrubber?: InputMaybe<Scalars["Boolean"]["input"]>
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Slideshow Delay */
  slideshowDelay?: InputMaybe<Scalars["Int"]["input"]>
  /** Enable sound on mouseover previews */
  soundOnPreview?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Wall playback type */
  wallPlayback?: InputMaybe<Scalars["String"]["input"]>
  /** Show title and tags in wall view */
  wallShowTitle?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ConfigInterfaceResult = {
  __typename?: "ConfigInterfaceResult"
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars["Boolean"]["output"]>
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars["Boolean"]["output"]>
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars["Boolean"]["output"]>
  /** Custom CSS */
  css?: Maybe<Scalars["String"]["output"]>
  cssEnabled?: Maybe<Scalars["Boolean"]["output"]>
  /** Custom Locales */
  customLocales?: Maybe<Scalars["String"]["output"]>
  customLocalesEnabled?: Maybe<Scalars["Boolean"]["output"]>
  /** Fields are true if creating via dropdown menus are disabled */
  disableDropdownCreate: ConfigDisableDropdownCreate
  /** @deprecated Use disableDropdownCreate */
  disabledDropdownCreate: ConfigDisableDropdownCreate
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars["Int"]["output"]>
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars["String"]["output"]>
  imageLightbox: ConfigImageLightboxResult
  /** Custom Javascript */
  javascript?: Maybe<Scalars["String"]["output"]>
  javascriptEnabled?: Maybe<Scalars["Boolean"]["output"]>
  /** Interface language */
  language?: Maybe<Scalars["String"]["output"]>
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars["Int"]["output"]>
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars["String"]["output"]>>
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars["Boolean"]["output"]>
  /** True if we should send desktop notifications */
  notificationsEnabled?: Maybe<Scalars["Boolean"]["output"]>
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars["Boolean"]["output"]>
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars["Boolean"]["output"]>
  /**
   * Slideshow Delay
   * @deprecated Use imageLightbox.slideshowDelay
   */
  slideshowDelay?: Maybe<Scalars["Int"]["output"]>
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars["Boolean"]["output"]>
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: Maybe<Scalars["Boolean"]["output"]>
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars["String"]["output"]>
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars["Boolean"]["output"]>
}

/** All configuration settings */
export type ConfigResult = {
  __typename?: "ConfigResult"
  defaults: ConfigDefaultSettingsResult
  dlna: ConfigDlnaResult
  general: ConfigGeneralResult
  interface: ConfigInterfaceResult
  scraping: ConfigScrapingResult
  ui: Scalars["Map"]["output"]
}

export type ConfigScrapingInput = {
  /** Tags blacklist during scraping */
  excludeTagPatterns?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars["String"]["input"]>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars["String"]["input"]>
}

export type ConfigScrapingResult = {
  __typename?: "ConfigScrapingResult"
  /** Tags blacklist during scraping */
  excludeTagPatterns: Array<Scalars["String"]["output"]>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars["String"]["output"]>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck: Scalars["Boolean"]["output"]
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars["String"]["output"]>
}

export enum CriterionModifier {
  /** >= AND <= */
  Between = "BETWEEN",
  /** = */
  Equals = "EQUALS",
  Excludes = "EXCLUDES",
  /** > */
  GreaterThan = "GREATER_THAN",
  Includes = "INCLUDES",
  /** INCLUDES ALL */
  IncludesAll = "INCLUDES_ALL",
  /** IS NULL */
  IsNull = "IS_NULL",
  /** < */
  LessThan = "LESS_THAN",
  /** MATCHES REGEX */
  MatchesRegex = "MATCHES_REGEX",
  /** < OR > */
  NotBetween = "NOT_BETWEEN",
  /** != */
  NotEquals = "NOT_EQUALS",
  /** NOT MATCHES REGEX */
  NotMatchesRegex = "NOT_MATCHES_REGEX",
  /** IS NOT NULL */
  NotNull = "NOT_NULL",
}

export type Dlnaip = {
  __typename?: "DLNAIP"
  ipAddress: Scalars["String"]["output"]
  /** Time until IP will be no longer allowed/disallowed */
  until?: Maybe<Scalars["Time"]["output"]>
}

export type DlnaStatus = {
  __typename?: "DLNAStatus"
  allowedIPAddresses: Array<Dlnaip>
  recentIPAddresses: Array<Scalars["String"]["output"]>
  running: Scalars["Boolean"]["output"]
  /** If not currently running, time until it will be started. If running, time until it will be stopped */
  until?: Maybe<Scalars["Time"]["output"]>
}

export type DateCriterionInput = {
  modifier: CriterionModifier
  value: Scalars["String"]["input"]
  value2?: InputMaybe<Scalars["String"]["input"]>
}

export type DestroyFilterInput = {
  id: Scalars["ID"]["input"]
}

/** Directory structure of a path */
export type Directory = {
  __typename?: "Directory"
  directories: Array<Scalars["String"]["output"]>
  parent?: Maybe<Scalars["String"]["output"]>
  path: Scalars["String"]["output"]
}

export type DisableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars["Int"]["input"]>
}

export type EnableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars["Int"]["input"]>
}

export type ExportObjectTypeInput = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>
  ids?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type ExportObjectsInput = {
  galleries?: InputMaybe<ExportObjectTypeInput>
  images?: InputMaybe<ExportObjectTypeInput>
  includeDependencies?: InputMaybe<Scalars["Boolean"]["input"]>
  movies?: InputMaybe<ExportObjectTypeInput>
  performers?: InputMaybe<ExportObjectTypeInput>
  scenes?: InputMaybe<ExportObjectTypeInput>
  studios?: InputMaybe<ExportObjectTypeInput>
  tags?: InputMaybe<ExportObjectTypeInput>
}

export enum FilterMode {
  Galleries = "GALLERIES",
  Images = "IMAGES",
  Movies = "MOVIES",
  Performers = "PERFORMERS",
  Scenes = "SCENES",
  SceneMarkers = "SCENE_MARKERS",
  Studios = "STUDIOS",
  Tags = "TAGS",
}

export type FindFilterType = {
  direction?: InputMaybe<SortDirectionEnum>
  page?: InputMaybe<Scalars["Int"]["input"]>
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: InputMaybe<Scalars["Int"]["input"]>
  q?: InputMaybe<Scalars["String"]["input"]>
  sort?: InputMaybe<Scalars["String"]["input"]>
}

export type FindGalleriesResultType = {
  __typename?: "FindGalleriesResultType"
  count: Scalars["Int"]["output"]
  galleries: Array<Gallery>
}

export type FindGalleryChaptersResultType = {
  __typename?: "FindGalleryChaptersResultType"
  chapters: Array<GalleryChapter>
  count: Scalars["Int"]["output"]
}

export type FindImagesResultType = {
  __typename?: "FindImagesResultType"
  count: Scalars["Int"]["output"]
  /** Total file size in bytes */
  filesize: Scalars["Float"]["output"]
  images: Array<Image>
  /** Total megapixels of the images */
  megapixels: Scalars["Float"]["output"]
}

export type FindJobInput = {
  id: Scalars["ID"]["input"]
}

export type FindMoviesResultType = {
  __typename?: "FindMoviesResultType"
  count: Scalars["Int"]["output"]
  movies: Array<Movie>
}

export type FindPerformersResultType = {
  __typename?: "FindPerformersResultType"
  count: Scalars["Int"]["output"]
  performers: Array<Performer>
}

export type FindSceneMarkersResultType = {
  __typename?: "FindSceneMarkersResultType"
  count: Scalars["Int"]["output"]
  scene_markers: Array<SceneMarker>
}

export type FindScenesResultType = {
  __typename?: "FindScenesResultType"
  count: Scalars["Int"]["output"]
  /** Total duration in seconds */
  duration: Scalars["Float"]["output"]
  /** Total file size in bytes */
  filesize: Scalars["Float"]["output"]
  scenes: Array<Scene>
}

export type FindStudiosResultType = {
  __typename?: "FindStudiosResultType"
  count: Scalars["Int"]["output"]
  studios: Array<Studio>
}

export type FindTagsResultType = {
  __typename?: "FindTagsResultType"
  count: Scalars["Int"]["output"]
  tags: Array<Tag>
}

export type Fingerprint = {
  __typename?: "Fingerprint"
  type: Scalars["String"]["output"]
  value: Scalars["String"]["output"]
}

export type FloatCriterionInput = {
  modifier: CriterionModifier
  value: Scalars["Float"]["input"]
  value2?: InputMaybe<Scalars["Float"]["input"]>
}

export type Folder = {
  __typename?: "Folder"
  created_at: Scalars["Time"]["output"]
  id: Scalars["ID"]["output"]
  mod_time: Scalars["Time"]["output"]
  parent_folder_id?: Maybe<Scalars["ID"]["output"]>
  path: Scalars["String"]["output"]
  updated_at: Scalars["Time"]["output"]
  zip_file_id?: Maybe<Scalars["ID"]["output"]>
}

/** Gallery type */
export type Gallery = {
  __typename?: "Gallery"
  chapters: Array<GalleryChapter>
  /** @deprecated Use files.fingerprints */
  checksum: Scalars["String"]["output"]
  cover?: Maybe<Image>
  created_at: Scalars["Time"]["output"]
  date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use files.mod_time */
  file_mod_time?: Maybe<Scalars["Time"]["output"]>
  files: Array<GalleryFile>
  folder?: Maybe<Folder>
  id: Scalars["ID"]["output"]
  image_count: Scalars["Int"]["output"]
  /**
   * The images in the gallery
   * @deprecated Use findImages
   */
  images: Array<Image>
  organized: Scalars["Boolean"]["output"]
  /** @deprecated Use files.path */
  path?: Maybe<Scalars["String"]["output"]>
  performers: Array<Performer>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  scenes: Array<Scene>
  studio?: Maybe<Studio>
  tags: Array<Tag>
  title?: Maybe<Scalars["String"]["output"]>
  updated_at: Scalars["Time"]["output"]
  url?: Maybe<Scalars["String"]["output"]>
}

export type GalleryAddInput = {
  gallery_id: Scalars["ID"]["input"]
  image_ids: Array<Scalars["ID"]["input"]>
}

export type GalleryChapter = {
  __typename?: "GalleryChapter"
  created_at: Scalars["Time"]["output"]
  gallery: Gallery
  id: Scalars["ID"]["output"]
  image_index: Scalars["Int"]["output"]
  title: Scalars["String"]["output"]
  updated_at: Scalars["Time"]["output"]
}

export type GalleryChapterCreateInput = {
  gallery_id: Scalars["ID"]["input"]
  image_index: Scalars["Int"]["input"]
  title: Scalars["String"]["input"]
}

export type GalleryChapterUpdateInput = {
  gallery_id: Scalars["ID"]["input"]
  id: Scalars["ID"]["input"]
  image_index: Scalars["Int"]["input"]
  title: Scalars["String"]["input"]
}

export type GalleryCreateInput = {
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  scene_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title: Scalars["String"]["input"]
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type GalleryDestroyInput = {
  /**
   * If true, then the zip file will be deleted if the gallery is zip-file-based.
   * If gallery is folder-based, then any files not associated with other
   * galleries will be deleted, along with the folder, if it is not empty.
   */
  delete_file?: InputMaybe<Scalars["Boolean"]["input"]>
  delete_generated?: InputMaybe<Scalars["Boolean"]["input"]>
  ids: Array<Scalars["ID"]["input"]>
}

export type GalleryFile = BaseFile & {
  __typename?: "GalleryFile"
  basename: Scalars["String"]["output"]
  created_at: Scalars["Time"]["output"]
  fingerprints: Array<Fingerprint>
  id: Scalars["ID"]["output"]
  mod_time: Scalars["Time"]["output"]
  parent_folder_id: Scalars["ID"]["output"]
  path: Scalars["String"]["output"]
  size: Scalars["Int64"]["output"]
  updated_at: Scalars["Time"]["output"]
  zip_file_id?: Maybe<Scalars["ID"]["output"]>
}

export type GalleryFilterType = {
  AND?: InputMaybe<GalleryFilterType>
  NOT?: InputMaybe<GalleryFilterType>
  OR?: InputMaybe<GalleryFilterType>
  /** Filter by average image resolution */
  average_resolution?: InputMaybe<ResolutionCriterionInput>
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  /** Filter by zip-file count */
  file_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries that have chapters. `true` or `false` */
  has_chapters?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<IntCriterionInput>
  /** Filter by number of images in this gallery */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  /** Filter to include/exclude galleries that were created from zip */
  is_zip?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by organized */
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>
  /** Filter galleries by performer age at time of gallery */
  performer_age?: InputMaybe<IntCriterionInput>
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter galleries that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter to only include galleries with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter to only include galleries with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  title?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export type GalleryRemoveInput = {
  gallery_id: Scalars["ID"]["input"]
  image_ids: Array<Scalars["ID"]["input"]>
}

export type GalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  id: Scalars["ID"]["input"]
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  primary_file_id?: InputMaybe<Scalars["ID"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  scene_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type GenderCriterionInput = {
  modifier: CriterionModifier
  value?: InputMaybe<GenderEnum>
}

export enum GenderEnum {
  Female = "FEMALE",
  Intersex = "INTERSEX",
  Male = "MALE",
  NonBinary = "NON_BINARY",
  TransgenderFemale = "TRANSGENDER_FEMALE",
  TransgenderMale = "TRANSGENDER_MALE",
}

export type GenerateApiKeyInput = {
  clear?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type GenerateMetadataInput = {
  clipPreviews?: InputMaybe<Scalars["Boolean"]["input"]>
  covers?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate transcodes even if not required */
  forceTranscodes?: InputMaybe<Scalars["Boolean"]["input"]>
  imagePreviews?: InputMaybe<Scalars["Boolean"]["input"]>
  interactiveHeatmapsSpeeds?: InputMaybe<Scalars["Boolean"]["input"]>
  /** marker ids to generate for */
  markerIDs?: InputMaybe<Array<Scalars["ID"]["input"]>>
  markerImagePreviews?: InputMaybe<Scalars["Boolean"]["input"]>
  markerScreenshots?: InputMaybe<Scalars["Boolean"]["input"]>
  markers?: InputMaybe<Scalars["Boolean"]["input"]>
  /** overwrite existing media */
  overwrite?: InputMaybe<Scalars["Boolean"]["input"]>
  phashes?: InputMaybe<Scalars["Boolean"]["input"]>
  previewOptions?: InputMaybe<GeneratePreviewOptionsInput>
  previews?: InputMaybe<Scalars["Boolean"]["input"]>
  /** scene ids to generate for */
  sceneIDs?: InputMaybe<Array<Scalars["ID"]["input"]>>
  sprites?: InputMaybe<Scalars["Boolean"]["input"]>
  transcodes?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type GenerateMetadataOptions = {
  __typename?: "GenerateMetadataOptions"
  clipPreviews?: Maybe<Scalars["Boolean"]["output"]>
  covers?: Maybe<Scalars["Boolean"]["output"]>
  imagePreviews?: Maybe<Scalars["Boolean"]["output"]>
  interactiveHeatmapsSpeeds?: Maybe<Scalars["Boolean"]["output"]>
  markerImagePreviews?: Maybe<Scalars["Boolean"]["output"]>
  markerScreenshots?: Maybe<Scalars["Boolean"]["output"]>
  markers?: Maybe<Scalars["Boolean"]["output"]>
  phashes?: Maybe<Scalars["Boolean"]["output"]>
  previewOptions?: Maybe<GeneratePreviewOptions>
  previews?: Maybe<Scalars["Boolean"]["output"]>
  sprites?: Maybe<Scalars["Boolean"]["output"]>
  transcodes?: Maybe<Scalars["Boolean"]["output"]>
}

export type GeneratePreviewOptions = {
  __typename?: "GeneratePreviewOptions"
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars["String"]["output"]>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars["String"]["output"]>
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars["Float"]["output"]>
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars["Int"]["output"]>
}

export type GeneratePreviewOptionsInput = {
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars["String"]["input"]>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars["String"]["input"]>
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars["Float"]["input"]>
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars["Int"]["input"]>
}

export enum HashAlgorithm {
  Md5 = "MD5",
  /** oshash */
  Oshash = "OSHASH",
}

export type HierarchicalMultiCriterionInput = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
  excludes?: InputMaybe<Array<Scalars["ID"]["input"]>>
  modifier: CriterionModifier
  value?: InputMaybe<Array<Scalars["ID"]["input"]>>
}

export type IdentifyFieldOptions = {
  __typename?: "IdentifyFieldOptions"
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars["Boolean"]["output"]>
  field: Scalars["String"]["output"]
  strategy: IdentifyFieldStrategy
}

export type IdentifyFieldOptionsInput = {
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: InputMaybe<Scalars["Boolean"]["input"]>
  field: Scalars["String"]["input"]
  strategy: IdentifyFieldStrategy
}

export enum IdentifyFieldStrategy {
  /** Never sets the field value */
  Ignore = "IGNORE",
  /**
   * For multi-value fields, merge with existing.
   * For single-value fields, ignore if already set
   */
  Merge = "MERGE",
  /**
   * Always replaces the value if a value is found.
   *   For multi-value fields, any existing values are removed and replaced with the
   *   scraped values.
   */
  Overwrite = "OVERWRITE",
}

export type IdentifyMetadataInput = {
  /** Options defined here override the configured defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>
  /** paths of scenes to identify - ignored if scene ids are set */
  paths?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** scene ids to identify */
  sceneIDs?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySourceInput>
}

export type IdentifyMetadataOptions = {
  __typename?: "IdentifyMetadataOptions"
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<Array<IdentifyFieldOptions>>
  /** defaults to true if not provided */
  includeMalePerformers?: Maybe<Scalars["Boolean"]["output"]>
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars["Boolean"]["output"]>
  setOrganized?: Maybe<Scalars["Boolean"]["output"]>
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: Maybe<Scalars["String"]["output"]>
  /** defaults to true if not provided */
  skipMultipleMatches?: Maybe<Scalars["Boolean"]["output"]>
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: Maybe<Scalars["String"]["output"]>
  /** defaults to true if not provided */
  skipSingleNamePerformers?: Maybe<Scalars["Boolean"]["output"]>
}

export type IdentifyMetadataOptionsInput = {
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: InputMaybe<Array<IdentifyFieldOptionsInput>>
  /** defaults to true if not provided */
  includeMalePerformers?: InputMaybe<Scalars["Boolean"]["input"]>
  /** defaults to true if not provided */
  setCoverImage?: InputMaybe<Scalars["Boolean"]["input"]>
  setOrganized?: InputMaybe<Scalars["Boolean"]["input"]>
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: InputMaybe<Scalars["String"]["input"]>
  /** defaults to true if not provided */
  skipMultipleMatches?: InputMaybe<Scalars["Boolean"]["input"]>
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: InputMaybe<Scalars["String"]["input"]>
  /** defaults to true if not provided */
  skipSingleNamePerformers?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type IdentifyMetadataTaskOptions = {
  __typename?: "IdentifyMetadataTaskOptions"
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptions>
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySource>
}

export type IdentifySource = {
  __typename?: "IdentifySource"
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptions>
  source: ScraperSource
}

export type IdentifySourceInput = {
  /** Options defined for a source override the defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>
  source: ScraperSourceInput
}

export type Image = {
  __typename?: "Image"
  /** @deprecated Use files.fingerprints */
  checksum?: Maybe<Scalars["String"]["output"]>
  created_at: Scalars["Time"]["output"]
  date?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use visual_files */
  file: ImageFileType
  /** @deprecated Use files.mod_time */
  file_mod_time?: Maybe<Scalars["Time"]["output"]>
  /** @deprecated Use visual_files */
  files: Array<ImageFile>
  galleries: Array<Gallery>
  id: Scalars["ID"]["output"]
  o_counter?: Maybe<Scalars["Int"]["output"]>
  organized: Scalars["Boolean"]["output"]
  /** @deprecated Use files.path */
  path: Scalars["String"]["output"]
  paths: ImagePathsType
  performers: Array<Performer>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  studio?: Maybe<Studio>
  tags: Array<Tag>
  title?: Maybe<Scalars["String"]["output"]>
  updated_at: Scalars["Time"]["output"]
  url?: Maybe<Scalars["String"]["output"]>
  visual_files: Array<VisualFile>
}

export type ImageDestroyInput = {
  delete_file?: InputMaybe<Scalars["Boolean"]["input"]>
  delete_generated?: InputMaybe<Scalars["Boolean"]["input"]>
  id: Scalars["ID"]["input"]
}

export type ImageFile = BaseFile & {
  __typename?: "ImageFile"
  basename: Scalars["String"]["output"]
  created_at: Scalars["Time"]["output"]
  fingerprints: Array<Fingerprint>
  height: Scalars["Int"]["output"]
  id: Scalars["ID"]["output"]
  mod_time: Scalars["Time"]["output"]
  parent_folder_id: Scalars["ID"]["output"]
  path: Scalars["String"]["output"]
  size: Scalars["Int64"]["output"]
  updated_at: Scalars["Time"]["output"]
  width: Scalars["Int"]["output"]
  zip_file_id?: Maybe<Scalars["ID"]["output"]>
}

export type ImageFileType = {
  __typename?: "ImageFileType"
  height: Scalars["Int"]["output"]
  mod_time: Scalars["Time"]["output"]
  size: Scalars["Int"]["output"]
  width: Scalars["Int"]["output"]
}

export type ImageFilterType = {
  AND?: InputMaybe<ImageFilterType>
  NOT?: InputMaybe<ImageFilterType>
  OR?: InputMaybe<ImageFilterType>
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include images with these galleries */
  galleries?: InputMaybe<MultiCriterionInput>
  /**  Filter by image id */
  id?: InputMaybe<IntCriterionInput>
  /** Filter to only include images missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>
  /** Filter by organized */
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter images that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter to only include images with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter to only include images with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>
  /** Filter to only include images with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include images with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  title?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export enum ImageLightboxDisplayMode {
  FitX = "FIT_X",
  FitXy = "FIT_XY",
  Original = "ORIGINAL",
}

export enum ImageLightboxScrollMode {
  PanY = "PAN_Y",
  Zoom = "ZOOM",
}

export type ImagePathsType = {
  __typename?: "ImagePathsType"
  image?: Maybe<Scalars["String"]["output"]>
  preview?: Maybe<Scalars["String"]["output"]>
  thumbnail?: Maybe<Scalars["String"]["output"]>
}

export type ImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  gallery_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id: Scalars["ID"]["input"]
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  primary_file_id?: InputMaybe<Scalars["ID"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type ImagesDestroyInput = {
  delete_file?: InputMaybe<Scalars["Boolean"]["input"]>
  delete_generated?: InputMaybe<Scalars["Boolean"]["input"]>
  ids: Array<Scalars["ID"]["input"]>
}

export enum ImportDuplicateEnum {
  Fail = "FAIL",
  Ignore = "IGNORE",
  Overwrite = "OVERWRITE",
}

export enum ImportMissingRefEnum {
  Create = "CREATE",
  Fail = "FAIL",
  Ignore = "IGNORE",
}

export type ImportObjectsInput = {
  duplicateBehaviour: ImportDuplicateEnum
  file: Scalars["Upload"]["input"]
  missingRefBehaviour: ImportMissingRefEnum
}

export type IntCriterionInput = {
  modifier: CriterionModifier
  value: Scalars["Int"]["input"]
  value2?: InputMaybe<Scalars["Int"]["input"]>
}

export type Job = {
  __typename?: "Job"
  addTime: Scalars["Time"]["output"]
  description: Scalars["String"]["output"]
  endTime?: Maybe<Scalars["Time"]["output"]>
  id: Scalars["ID"]["output"]
  progress?: Maybe<Scalars["Float"]["output"]>
  startTime?: Maybe<Scalars["Time"]["output"]>
  status: JobStatus
  subTasks?: Maybe<Array<Scalars["String"]["output"]>>
}

export enum JobStatus {
  Cancelled = "CANCELLED",
  Finished = "FINISHED",
  Ready = "READY",
  Running = "RUNNING",
  Stopping = "STOPPING",
}

export type JobStatusUpdate = {
  __typename?: "JobStatusUpdate"
  job: Job
  type: JobStatusUpdateType
}

export enum JobStatusUpdateType {
  Add = "ADD",
  Remove = "REMOVE",
  Update = "UPDATE",
}

export type LatestVersion = {
  __typename?: "LatestVersion"
  release_date: Scalars["String"]["output"]
  shorthash: Scalars["String"]["output"]
  url: Scalars["String"]["output"]
  version: Scalars["String"]["output"]
}

export type LogEntry = {
  __typename?: "LogEntry"
  level: LogLevel
  message: Scalars["String"]["output"]
  time: Scalars["Time"]["output"]
}

export enum LogLevel {
  Debug = "Debug",
  Error = "Error",
  Info = "Info",
  Progress = "Progress",
  Trace = "Trace",
  Warning = "Warning",
}

export type MarkerStringsResultType = {
  __typename?: "MarkerStringsResultType"
  count: Scalars["Int"]["output"]
  id: Scalars["ID"]["output"]
  title: Scalars["String"]["output"]
}

export type MigrateBlobsInput = {
  deleteOld?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type MigrateInput = {
  backupPath: Scalars["String"]["input"]
}

export type MigrateSceneScreenshotsInput = {
  deleteFiles?: InputMaybe<Scalars["Boolean"]["input"]>
  overwriteExisting?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type MoveFilesInput = {
  /** valid only for single file id. If empty, existing basename is used */
  destination_basename?: InputMaybe<Scalars["String"]["input"]>
  /** valid for single or multiple file ids */
  destination_folder?: InputMaybe<Scalars["String"]["input"]>
  /** valid for single or multiple file ids */
  destination_folder_id?: InputMaybe<Scalars["ID"]["input"]>
  ids: Array<Scalars["ID"]["input"]>
}

export type Movie = {
  __typename?: "Movie"
  aliases?: Maybe<Scalars["String"]["output"]>
  back_image_path?: Maybe<Scalars["String"]["output"]>
  /** @deprecated MD5 hash of name, use name directly */
  checksum: Scalars["String"]["output"]
  created_at: Scalars["Time"]["output"]
  date?: Maybe<Scalars["String"]["output"]>
  director?: Maybe<Scalars["String"]["output"]>
  /** Duration in seconds */
  duration?: Maybe<Scalars["Int"]["output"]>
  front_image_path?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  scene_count: Scalars["Int"]["output"]
  scenes: Array<Scene>
  studio?: Maybe<Studio>
  synopsis?: Maybe<Scalars["String"]["output"]>
  updated_at: Scalars["Time"]["output"]
  url?: Maybe<Scalars["String"]["output"]>
}

export type MovieCreateInput = {
  aliases?: InputMaybe<Scalars["String"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  /** Duration in seconds */
  duration?: InputMaybe<Scalars["Int"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars["String"]["input"]>
  name: Scalars["String"]["input"]
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  synopsis?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type MovieDestroyInput = {
  id: Scalars["ID"]["input"]
}

export type MovieFilterType = {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  director?: InputMaybe<StringCriterionInput>
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>
  /** Filter to only include movies missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<StringCriterionInput>
  /** Filter to only include movies where performer appears in a scene */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter to only include movies with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  synopsis?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export type MovieUpdateInput = {
  aliases?: InputMaybe<Scalars["String"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  duration?: InputMaybe<Scalars["Int"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars["String"]["input"]>
  id: Scalars["ID"]["input"]
  name?: InputMaybe<Scalars["String"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  synopsis?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type MultiCriterionInput = {
  excludes?: InputMaybe<Array<Scalars["ID"]["input"]>>
  modifier: CriterionModifier
  value?: InputMaybe<Array<Scalars["ID"]["input"]>>
}

export type Mutation = {
  __typename?: "Mutation"
  addGalleryImages: Scalars["Boolean"]["output"]
  /** Enables an IP address for DLNA for an optional duration */
  addTempDLNAIP: Scalars["Boolean"]["output"]
  /** Anonymise the database in a separate file. Optionally returns a link to download the database file */
  anonymiseDatabase?: Maybe<Scalars["String"]["output"]>
  /** Backup the database. Optionally returns a link to download the database file */
  backupDatabase?: Maybe<Scalars["String"]["output"]>
  bulkGalleryUpdate?: Maybe<Array<Gallery>>
  bulkImageUpdate?: Maybe<Array<Image>>
  bulkMovieUpdate?: Maybe<Array<Movie>>
  bulkPerformerUpdate?: Maybe<Array<Performer>>
  bulkSceneUpdate?: Maybe<Array<Scene>>
  configureDLNA: ConfigDlnaResult
  configureDefaults: ConfigDefaultSettingsResult
  /** Change general configuration options */
  configureGeneral: ConfigGeneralResult
  configureInterface: ConfigInterfaceResult
  configureScraping: ConfigScrapingResult
  configureUI: Scalars["Map"]["output"]
  configureUISetting: Scalars["Map"]["output"]
  deleteFiles: Scalars["Boolean"]["output"]
  destroySavedFilter: Scalars["Boolean"]["output"]
  /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
  disableDLNA: Scalars["Boolean"]["output"]
  /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
  enableDLNA: Scalars["Boolean"]["output"]
  /** Returns a link to download the result */
  exportObjects?: Maybe<Scalars["String"]["output"]>
  galleriesUpdate?: Maybe<Array<Maybe<Gallery>>>
  galleryChapterCreate?: Maybe<GalleryChapter>
  galleryChapterDestroy: Scalars["Boolean"]["output"]
  galleryChapterUpdate?: Maybe<GalleryChapter>
  galleryCreate?: Maybe<Gallery>
  galleryDestroy: Scalars["Boolean"]["output"]
  galleryUpdate?: Maybe<Gallery>
  /** Generate and set (or clear) API key */
  generateAPIKey: Scalars["String"]["output"]
  /** Decrements the o-counter for an image. Returns the new value */
  imageDecrementO: Scalars["Int"]["output"]
  imageDestroy: Scalars["Boolean"]["output"]
  /** Increments the o-counter for an image. Returns the new value */
  imageIncrementO: Scalars["Int"]["output"]
  /** Resets the o-counter for a image to 0. Returns the new value */
  imageResetO: Scalars["Int"]["output"]
  imageUpdate?: Maybe<Image>
  imagesDestroy: Scalars["Boolean"]["output"]
  imagesUpdate?: Maybe<Array<Maybe<Image>>>
  /** Performs an incremental import. Returns the job ID */
  importObjects: Scalars["ID"]["output"]
  /** Start auto-tagging. Returns the job ID */
  metadataAutoTag: Scalars["ID"]["output"]
  /** Clean metadata. Returns the job ID */
  metadataClean: Scalars["ID"]["output"]
  /** Start a full export. Outputs to the metadata directory. Returns the job ID */
  metadataExport: Scalars["ID"]["output"]
  /** Start generating content. Returns the job ID */
  metadataGenerate: Scalars["ID"]["output"]
  /** Identifies scenes using scrapers. Returns the job ID */
  metadataIdentify: Scalars["ID"]["output"]
  /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
  metadataImport: Scalars["ID"]["output"]
  /** Start a scan. Returns the job ID */
  metadataScan: Scalars["ID"]["output"]
  migrate: Scalars["Boolean"]["output"]
  /** Migrates blobs from the old storage system to the current one */
  migrateBlobs: Scalars["ID"]["output"]
  /** Migrate generated files for the current hash naming */
  migrateHashNaming: Scalars["ID"]["output"]
  /** Migrates legacy scene screenshot files into the blob storage */
  migrateSceneScreenshots: Scalars["ID"]["output"]
  /**
   * Moves the given files to the given destination. Returns true if successful.
   *   Either the destination_folder or destination_folder_id must be provided. If both are provided, the destination_folder_id takes precedence.
   *   Destination folder must be a subfolder of one of the stash library paths.
   *   If provided, destination_basename must be a valid filename with an extension that
   *   matches one of the media extensions.
   *   Creates folder hierarchy if needed.
   */
  moveFiles: Scalars["Boolean"]["output"]
  movieCreate?: Maybe<Movie>
  movieDestroy: Scalars["Boolean"]["output"]
  movieUpdate?: Maybe<Movie>
  moviesDestroy: Scalars["Boolean"]["output"]
  performerCreate?: Maybe<Performer>
  performerDestroy: Scalars["Boolean"]["output"]
  performerUpdate?: Maybe<Performer>
  performersDestroy: Scalars["Boolean"]["output"]
  reloadPlugins: Scalars["Boolean"]["output"]
  /** Reload scrapers */
  reloadScrapers: Scalars["Boolean"]["output"]
  removeGalleryImages: Scalars["Boolean"]["output"]
  /** Removes an IP address from the temporary DLNA whitelist */
  removeTempDLNAIP: Scalars["Boolean"]["output"]
  /** Run plugin task. Returns the job ID */
  runPluginTask: Scalars["ID"]["output"]
  saveFilter: SavedFilter
  sceneAssignFile: Scalars["Boolean"]["output"]
  sceneCreate?: Maybe<Scene>
  /** Decrements the o-counter for a scene. Returns the new value */
  sceneDecrementO: Scalars["Int"]["output"]
  sceneDestroy: Scalars["Boolean"]["output"]
  /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
  sceneGenerateScreenshot: Scalars["String"]["output"]
  /** Increments the o-counter for a scene. Returns the new value */
  sceneIncrementO: Scalars["Int"]["output"]
  /** Increments the play count for the scene. Returns the new play count value. */
  sceneIncrementPlayCount: Scalars["Int"]["output"]
  sceneMarkerCreate?: Maybe<SceneMarker>
  sceneMarkerDestroy: Scalars["Boolean"]["output"]
  sceneMarkerUpdate?: Maybe<SceneMarker>
  sceneMerge?: Maybe<Scene>
  /** Resets the o-counter for a scene to 0. Returns the new value */
  sceneResetO: Scalars["Int"]["output"]
  /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
  sceneSaveActivity: Scalars["Boolean"]["output"]
  sceneUpdate?: Maybe<Scene>
  scenesDestroy: Scalars["Boolean"]["output"]
  scenesUpdate?: Maybe<Array<Maybe<Scene>>>
  setDefaultFilter: Scalars["Boolean"]["output"]
  setup: Scalars["Boolean"]["output"]
  /** Run batch performer tag task. Returns the job ID. */
  stashBoxBatchPerformerTag: Scalars["String"]["output"]
  stopAllJobs: Scalars["Boolean"]["output"]
  stopJob: Scalars["Boolean"]["output"]
  studioCreate?: Maybe<Studio>
  studioDestroy: Scalars["Boolean"]["output"]
  studioUpdate?: Maybe<Studio>
  studiosDestroy: Scalars["Boolean"]["output"]
  /** Submit fingerprints to stash-box instance */
  submitStashBoxFingerprints: Scalars["Boolean"]["output"]
  /** Submit performer as draft to stash-box instance */
  submitStashBoxPerformerDraft?: Maybe<Scalars["ID"]["output"]>
  /** Submit scene as draft to stash-box instance */
  submitStashBoxSceneDraft?: Maybe<Scalars["ID"]["output"]>
  tagCreate?: Maybe<Tag>
  tagDestroy: Scalars["Boolean"]["output"]
  tagUpdate?: Maybe<Tag>
  tagsDestroy: Scalars["Boolean"]["output"]
  tagsMerge?: Maybe<Tag>
}

export type MutationAddGalleryImagesArgs = {
  input: GalleryAddInput
}

export type MutationAddTempDlnaipArgs = {
  input: AddTempDlnaipInput
}

export type MutationAnonymiseDatabaseArgs = {
  input: AnonymiseDatabaseInput
}

export type MutationBackupDatabaseArgs = {
  input: BackupDatabaseInput
}

export type MutationBulkGalleryUpdateArgs = {
  input: BulkGalleryUpdateInput
}

export type MutationBulkImageUpdateArgs = {
  input: BulkImageUpdateInput
}

export type MutationBulkMovieUpdateArgs = {
  input: BulkMovieUpdateInput
}

export type MutationBulkPerformerUpdateArgs = {
  input: BulkPerformerUpdateInput
}

export type MutationBulkSceneUpdateArgs = {
  input: BulkSceneUpdateInput
}

export type MutationConfigureDlnaArgs = {
  input: ConfigDlnaInput
}

export type MutationConfigureDefaultsArgs = {
  input: ConfigDefaultSettingsInput
}

export type MutationConfigureGeneralArgs = {
  input: ConfigGeneralInput
}

export type MutationConfigureInterfaceArgs = {
  input: ConfigInterfaceInput
}

export type MutationConfigureScrapingArgs = {
  input: ConfigScrapingInput
}

export type MutationConfigureUiArgs = {
  input: Scalars["Map"]["input"]
}

export type MutationConfigureUiSettingArgs = {
  key: Scalars["String"]["input"]
  value?: InputMaybe<Scalars["Any"]["input"]>
}

export type MutationDeleteFilesArgs = {
  ids: Array<Scalars["ID"]["input"]>
}

export type MutationDestroySavedFilterArgs = {
  input: DestroyFilterInput
}

export type MutationDisableDlnaArgs = {
  input: DisableDlnaInput
}

export type MutationEnableDlnaArgs = {
  input: EnableDlnaInput
}

export type MutationExportObjectsArgs = {
  input: ExportObjectsInput
}

export type MutationGalleriesUpdateArgs = {
  input: Array<GalleryUpdateInput>
}

export type MutationGalleryChapterCreateArgs = {
  input: GalleryChapterCreateInput
}

export type MutationGalleryChapterDestroyArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationGalleryChapterUpdateArgs = {
  input: GalleryChapterUpdateInput
}

export type MutationGalleryCreateArgs = {
  input: GalleryCreateInput
}

export type MutationGalleryDestroyArgs = {
  input: GalleryDestroyInput
}

export type MutationGalleryUpdateArgs = {
  input: GalleryUpdateInput
}

export type MutationGenerateApiKeyArgs = {
  input: GenerateApiKeyInput
}

export type MutationImageDecrementOArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationImageDestroyArgs = {
  input: ImageDestroyInput
}

export type MutationImageIncrementOArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationImageResetOArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationImageUpdateArgs = {
  input: ImageUpdateInput
}

export type MutationImagesDestroyArgs = {
  input: ImagesDestroyInput
}

export type MutationImagesUpdateArgs = {
  input: Array<ImageUpdateInput>
}

export type MutationImportObjectsArgs = {
  input: ImportObjectsInput
}

export type MutationMetadataAutoTagArgs = {
  input: AutoTagMetadataInput
}

export type MutationMetadataCleanArgs = {
  input: CleanMetadataInput
}

export type MutationMetadataGenerateArgs = {
  input: GenerateMetadataInput
}

export type MutationMetadataIdentifyArgs = {
  input: IdentifyMetadataInput
}

export type MutationMetadataScanArgs = {
  input: ScanMetadataInput
}

export type MutationMigrateArgs = {
  input: MigrateInput
}

export type MutationMigrateBlobsArgs = {
  input: MigrateBlobsInput
}

export type MutationMigrateSceneScreenshotsArgs = {
  input: MigrateSceneScreenshotsInput
}

export type MutationMoveFilesArgs = {
  input: MoveFilesInput
}

export type MutationMovieCreateArgs = {
  input: MovieCreateInput
}

export type MutationMovieDestroyArgs = {
  input: MovieDestroyInput
}

export type MutationMovieUpdateArgs = {
  input: MovieUpdateInput
}

export type MutationMoviesDestroyArgs = {
  ids: Array<Scalars["ID"]["input"]>
}

export type MutationPerformerCreateArgs = {
  input: PerformerCreateInput
}

export type MutationPerformerDestroyArgs = {
  input: PerformerDestroyInput
}

export type MutationPerformerUpdateArgs = {
  input: PerformerUpdateInput
}

export type MutationPerformersDestroyArgs = {
  ids: Array<Scalars["ID"]["input"]>
}

export type MutationRemoveGalleryImagesArgs = {
  input: GalleryRemoveInput
}

export type MutationRemoveTempDlnaipArgs = {
  input: RemoveTempDlnaipInput
}

export type MutationRunPluginTaskArgs = {
  args?: InputMaybe<Array<PluginArgInput>>
  plugin_id: Scalars["ID"]["input"]
  task_name: Scalars["String"]["input"]
}

export type MutationSaveFilterArgs = {
  input: SaveFilterInput
}

export type MutationSceneAssignFileArgs = {
  input: AssignSceneFileInput
}

export type MutationSceneCreateArgs = {
  input: SceneCreateInput
}

export type MutationSceneDecrementOArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationSceneDestroyArgs = {
  input: SceneDestroyInput
}

export type MutationSceneGenerateScreenshotArgs = {
  at?: InputMaybe<Scalars["Float"]["input"]>
  id: Scalars["ID"]["input"]
}

export type MutationSceneIncrementOArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationSceneIncrementPlayCountArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationSceneMarkerCreateArgs = {
  input: SceneMarkerCreateInput
}

export type MutationSceneMarkerDestroyArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationSceneMarkerUpdateArgs = {
  input: SceneMarkerUpdateInput
}

export type MutationSceneMergeArgs = {
  input: SceneMergeInput
}

export type MutationSceneResetOArgs = {
  id: Scalars["ID"]["input"]
}

export type MutationSceneSaveActivityArgs = {
  id: Scalars["ID"]["input"]
  playDuration?: InputMaybe<Scalars["Float"]["input"]>
  resume_time?: InputMaybe<Scalars["Float"]["input"]>
}

export type MutationSceneUpdateArgs = {
  input: SceneUpdateInput
}

export type MutationScenesDestroyArgs = {
  input: ScenesDestroyInput
}

export type MutationScenesUpdateArgs = {
  input: Array<SceneUpdateInput>
}

export type MutationSetDefaultFilterArgs = {
  input: SetDefaultFilterInput
}

export type MutationSetupArgs = {
  input: SetupInput
}

export type MutationStashBoxBatchPerformerTagArgs = {
  input: StashBoxBatchPerformerTagInput
}

export type MutationStopJobArgs = {
  job_id: Scalars["ID"]["input"]
}

export type MutationStudioCreateArgs = {
  input: StudioCreateInput
}

export type MutationStudioDestroyArgs = {
  input: StudioDestroyInput
}

export type MutationStudioUpdateArgs = {
  input: StudioUpdateInput
}

export type MutationStudiosDestroyArgs = {
  ids: Array<Scalars["ID"]["input"]>
}

export type MutationSubmitStashBoxFingerprintsArgs = {
  input: StashBoxFingerprintSubmissionInput
}

export type MutationSubmitStashBoxPerformerDraftArgs = {
  input: StashBoxDraftSubmissionInput
}

export type MutationSubmitStashBoxSceneDraftArgs = {
  input: StashBoxDraftSubmissionInput
}

export type MutationTagCreateArgs = {
  input: TagCreateInput
}

export type MutationTagDestroyArgs = {
  input: TagDestroyInput
}

export type MutationTagUpdateArgs = {
  input: TagUpdateInput
}

export type MutationTagsDestroyArgs = {
  ids: Array<Scalars["ID"]["input"]>
}

export type MutationTagsMergeArgs = {
  input: TagsMergeInput
}

export type PHashDuplicationCriterionInput = {
  /** Currently unimplemented */
  distance?: InputMaybe<Scalars["Int"]["input"]>
  duplicated?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type Performer = {
  __typename?: "Performer"
  alias_list: Array<Scalars["String"]["output"]>
  /** @deprecated Use alias_list */
  aliases?: Maybe<Scalars["String"]["output"]>
  birthdate?: Maybe<Scalars["String"]["output"]>
  career_length?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Not used */
  checksum?: Maybe<Scalars["String"]["output"]>
  circumcised?: Maybe<CircumisedEnum>
  country?: Maybe<Scalars["String"]["output"]>
  created_at: Scalars["Time"]["output"]
  death_date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  disambiguation?: Maybe<Scalars["String"]["output"]>
  ethnicity?: Maybe<Scalars["String"]["output"]>
  eye_color?: Maybe<Scalars["String"]["output"]>
  fake_tits?: Maybe<Scalars["String"]["output"]>
  favorite: Scalars["Boolean"]["output"]
  gallery_count: Scalars["Int"]["output"]
  gender?: Maybe<GenderEnum>
  hair_color?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use height_cm */
  height?: Maybe<Scalars["String"]["output"]>
  height_cm?: Maybe<Scalars["Int"]["output"]>
  id: Scalars["ID"]["output"]
  ignore_auto_tag: Scalars["Boolean"]["output"]
  image_count: Scalars["Int"]["output"]
  image_path?: Maybe<Scalars["String"]["output"]>
  instagram?: Maybe<Scalars["String"]["output"]>
  measurements?: Maybe<Scalars["String"]["output"]>
  movie_count: Scalars["Int"]["output"]
  movies: Array<Movie>
  name: Scalars["String"]["output"]
  o_counter?: Maybe<Scalars["Int"]["output"]>
  penis_length?: Maybe<Scalars["Float"]["output"]>
  performer_count: Scalars["Int"]["output"]
  piercings?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  scene_count: Scalars["Int"]["output"]
  scenes: Array<Scene>
  stash_ids: Array<StashId>
  tags: Array<Tag>
  tattoos?: Maybe<Scalars["String"]["output"]>
  twitter?: Maybe<Scalars["String"]["output"]>
  updated_at: Scalars["Time"]["output"]
  url?: Maybe<Scalars["String"]["output"]>
  weight?: Maybe<Scalars["Int"]["output"]>
}

export type PerformerCreateInput = {
  alias_list?: InputMaybe<Array<Scalars["String"]["input"]>>
  aliases?: InputMaybe<Scalars["String"]["input"]>
  birthdate?: InputMaybe<Scalars["String"]["input"]>
  career_length?: InputMaybe<Scalars["String"]["input"]>
  circumcised?: InputMaybe<CircumisedEnum>
  country?: InputMaybe<Scalars["String"]["input"]>
  death_date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  disambiguation?: InputMaybe<Scalars["String"]["input"]>
  ethnicity?: InputMaybe<Scalars["String"]["input"]>
  eye_color?: InputMaybe<Scalars["String"]["input"]>
  fake_tits?: InputMaybe<Scalars["String"]["input"]>
  favorite?: InputMaybe<Scalars["Boolean"]["input"]>
  gender?: InputMaybe<GenderEnum>
  hair_color?: InputMaybe<Scalars["String"]["input"]>
  height?: InputMaybe<Scalars["String"]["input"]>
  height_cm?: InputMaybe<Scalars["Int"]["input"]>
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars["String"]["input"]>
  instagram?: InputMaybe<Scalars["String"]["input"]>
  measurements?: InputMaybe<Scalars["String"]["input"]>
  name: Scalars["String"]["input"]
  penis_length?: InputMaybe<Scalars["Float"]["input"]>
  piercings?: InputMaybe<Scalars["String"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  stash_ids?: InputMaybe<Array<StashIdInput>>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  tattoos?: InputMaybe<Scalars["String"]["input"]>
  twitter?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  weight?: InputMaybe<Scalars["Int"]["input"]>
}

export type PerformerDestroyInput = {
  id: Scalars["ID"]["input"]
}

export type PerformerFilterType = {
  AND?: InputMaybe<PerformerFilterType>
  NOT?: InputMaybe<PerformerFilterType>
  OR?: InputMaybe<PerformerFilterType>
  /** Filter by age */
  age?: InputMaybe<IntCriterionInput>
  /** Filter by aliases */
  aliases?: InputMaybe<StringCriterionInput>
  /** Filter by birth year */
  birth_year?: InputMaybe<IntCriterionInput>
  /** Filter by birthdate */
  birthdate?: InputMaybe<DateCriterionInput>
  /** Filter by career length */
  career_length?: InputMaybe<StringCriterionInput>
  /** Filter by ciricumcision */
  circumcised?: InputMaybe<CircumcisionCriterionInput>
  /** Filter by country */
  country?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by death date */
  death_date?: InputMaybe<DateCriterionInput>
  /** Filter by death year */
  death_year?: InputMaybe<IntCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  disambiguation?: InputMaybe<StringCriterionInput>
  /** Filter by ethnicity */
  ethnicity?: InputMaybe<StringCriterionInput>
  /** Filter by eye color */
  eye_color?: InputMaybe<StringCriterionInput>
  /** Filter by fake tits value */
  fake_tits?: InputMaybe<StringCriterionInput>
  /** Filter by favorite */
  filter_favorites?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>
  /** Filter by gender */
  gender?: InputMaybe<GenderCriterionInput>
  /** Filter by hair color */
  hair_color?: InputMaybe<StringCriterionInput>
  /** Filter by height */
  height?: InputMaybe<StringCriterionInput>
  /** Filter by height in cm */
  height_cm?: InputMaybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include performers missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  /** Filter by measurements */
  measurements?: InputMaybe<StringCriterionInput>
  name?: InputMaybe<StringCriterionInput>
  /** Filter by o count */
  o_counter?: InputMaybe<IntCriterionInput>
  /** Filter by penis length value */
  penis_length?: InputMaybe<FloatCriterionInput>
  /** Filter by performers where performer appears with another performer in scene/image/gallery */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by piercings */
  piercings?: InputMaybe<StringCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>
  /** Filter by studios where performer appears in scene/image/gallery */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include performers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tattoos */
  tattoos?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
  /** Filter by weight */
  weight?: InputMaybe<IntCriterionInput>
}

export type PerformerUpdateInput = {
  alias_list?: InputMaybe<Array<Scalars["String"]["input"]>>
  aliases?: InputMaybe<Scalars["String"]["input"]>
  birthdate?: InputMaybe<Scalars["String"]["input"]>
  career_length?: InputMaybe<Scalars["String"]["input"]>
  circumcised?: InputMaybe<CircumisedEnum>
  country?: InputMaybe<Scalars["String"]["input"]>
  death_date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  disambiguation?: InputMaybe<Scalars["String"]["input"]>
  ethnicity?: InputMaybe<Scalars["String"]["input"]>
  eye_color?: InputMaybe<Scalars["String"]["input"]>
  fake_tits?: InputMaybe<Scalars["String"]["input"]>
  favorite?: InputMaybe<Scalars["Boolean"]["input"]>
  gender?: InputMaybe<GenderEnum>
  hair_color?: InputMaybe<Scalars["String"]["input"]>
  height?: InputMaybe<Scalars["String"]["input"]>
  height_cm?: InputMaybe<Scalars["Int"]["input"]>
  id: Scalars["ID"]["input"]
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars["String"]["input"]>
  instagram?: InputMaybe<Scalars["String"]["input"]>
  measurements?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  penis_length?: InputMaybe<Scalars["Float"]["input"]>
  piercings?: InputMaybe<Scalars["String"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  stash_ids?: InputMaybe<Array<StashIdInput>>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  tattoos?: InputMaybe<Scalars["String"]["input"]>
  twitter?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  weight?: InputMaybe<Scalars["Int"]["input"]>
}

export type PhashDistanceCriterionInput = {
  distance?: InputMaybe<Scalars["Int"]["input"]>
  modifier: CriterionModifier
  value: Scalars["String"]["input"]
}

export type Plugin = {
  __typename?: "Plugin"
  description?: Maybe<Scalars["String"]["output"]>
  hooks?: Maybe<Array<PluginHook>>
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  tasks?: Maybe<Array<PluginTask>>
  url?: Maybe<Scalars["String"]["output"]>
  version?: Maybe<Scalars["String"]["output"]>
}

export type PluginArgInput = {
  key: Scalars["String"]["input"]
  value?: InputMaybe<PluginValueInput>
}

export type PluginHook = {
  __typename?: "PluginHook"
  description?: Maybe<Scalars["String"]["output"]>
  hooks?: Maybe<Array<Scalars["String"]["output"]>>
  name: Scalars["String"]["output"]
  plugin: Plugin
}

export type PluginResult = {
  __typename?: "PluginResult"
  error?: Maybe<Scalars["String"]["output"]>
  result?: Maybe<Scalars["String"]["output"]>
}

export type PluginTask = {
  __typename?: "PluginTask"
  description?: Maybe<Scalars["String"]["output"]>
  name: Scalars["String"]["output"]
  plugin: Plugin
}

export type PluginValueInput = {
  a?: InputMaybe<Array<PluginValueInput>>
  b?: InputMaybe<Scalars["Boolean"]["input"]>
  f?: InputMaybe<Scalars["Float"]["input"]>
  i?: InputMaybe<Scalars["Int"]["input"]>
  o?: InputMaybe<Array<PluginArgInput>>
  str?: InputMaybe<Scalars["String"]["input"]>
}

export enum PreviewPreset {
  /** X264_FAST */
  Fast = "fast",
  /** X264_MEDIUM */
  Medium = "medium",
  /** X264_SLOW */
  Slow = "slow",
  /** X264_SLOWER */
  Slower = "slower",
  /** X264_ULTRAFAST */
  Ultrafast = "ultrafast",
  /** X264_VERYFAST */
  Veryfast = "veryfast",
  /** X264_VERYSLOW */
  Veryslow = "veryslow",
}

/** The query root for this schema */
export type Query = {
  __typename?: "Query"
  allGalleries: Array<Gallery>
  allImages: Array<Image>
  allMovies: Array<Movie>
  allPerformers: Array<Performer>
  allSceneMarkers: Array<SceneMarker>
  allScenes: Array<Scene>
  allStudios: Array<Studio>
  allTags: Array<Tag>
  /** Returns the current, complete configuration */
  configuration: ConfigResult
  /** Returns an array of paths for the given path */
  directory: Directory
  dlnaStatus: DlnaStatus
  findDefaultFilter?: Maybe<SavedFilter>
  /**
   * Returns any groups of scenes that are perceptual duplicates within the queried distance
   * and the difference between their duration is smaller than durationDiff
   */
  findDuplicateScenes: Array<Array<Scene>>
  findGalleries: FindGalleriesResultType
  findGallery?: Maybe<Gallery>
  findImage?: Maybe<Image>
  /** A function which queries Scene objects */
  findImages: FindImagesResultType
  findJob?: Maybe<Job>
  /** Find a movie by ID */
  findMovie?: Maybe<Movie>
  /** A function which queries Movie objects */
  findMovies: FindMoviesResultType
  /** Find a performer by ID */
  findPerformer?: Maybe<Performer>
  /** A function which queries Performer objects */
  findPerformers: FindPerformersResultType
  findSavedFilter?: Maybe<SavedFilter>
  findSavedFilters: Array<SavedFilter>
  /** Find a scene by ID or Checksum */
  findScene?: Maybe<Scene>
  findSceneByHash?: Maybe<Scene>
  /** A function which queries SceneMarker objects */
  findSceneMarkers: FindSceneMarkersResultType
  /** A function which queries Scene objects */
  findScenes: FindScenesResultType
  findScenesByPathRegex: FindScenesResultType
  /** Find a studio by ID */
  findStudio?: Maybe<Studio>
  /** A function which queries Studio objects */
  findStudios: FindStudiosResultType
  findTag?: Maybe<Tag>
  findTags: FindTagsResultType
  jobQueue?: Maybe<Array<Job>>
  latestversion: LatestVersion
  /** @deprecated Use listScrapers(types: [GALLERY]) */
  listGalleryScrapers: Array<Scraper>
  /** @deprecated Use listScrapers(types: [MOVIE]) */
  listMovieScrapers: Array<Scraper>
  /** @deprecated Use listScrapers(types: [PERFORMER]) */
  listPerformerScrapers: Array<Scraper>
  /** @deprecated Use listScrapers(types: [SCENE]) */
  listSceneScrapers: Array<Scraper>
  /** List available scrapers */
  listScrapers: Array<Scraper>
  logs: Array<LogEntry>
  /** Get marker strings */
  markerStrings: Array<Maybe<MarkerStringsResultType>>
  /** Retrieve random scene markers for the wall */
  markerWall: Array<SceneMarker>
  parseSceneFilenames: SceneParserResultType
  /** List available plugin operations */
  pluginTasks?: Maybe<Array<PluginTask>>
  /** List loaded plugins */
  plugins?: Maybe<Array<Plugin>>
  /** Organize scene markers by tag for a given scene ID */
  sceneMarkerTags: Array<SceneMarkerTag>
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>
  /** Retrieve random scenes for the wall */
  sceneWall: Array<Scene>
  /**
   * Scrape a list of performers from a query
   * @deprecated use scrapeSinglePerformer with scraper_id = builtin_freeones
   */
  scrapeFreeonesPerformerList: Array<Scalars["String"]["output"]>
  /**
   * Scrapes a complete gallery record based on an existing gallery
   * @deprecated use scrapeSingleGallery
   */
  scrapeGallery?: Maybe<ScrapedGallery>
  /** Scrapes a complete gallery record based on a URL */
  scrapeGalleryURL?: Maybe<ScrapedGallery>
  /** Scrapes a complete movie record based on a URL */
  scrapeMovieURL?: Maybe<ScrapedMovie>
  /** Scrape for multiple performers */
  scrapeMultiPerformers: Array<Array<ScrapedPerformer>>
  /** Scrape for multiple scenes */
  scrapeMultiScenes: Array<Array<ScrapedScene>>
  /**
   * Scrapes a complete performer record based on a scrapePerformerList result
   * @deprecated use scrapeSinglePerformer
   */
  scrapePerformer?: Maybe<ScrapedPerformer>
  /**
   * Scrape a list of performers based on name
   * @deprecated use scrapeSinglePerformer
   */
  scrapePerformerList: Array<ScrapedPerformer>
  /** Scrapes a complete performer record based on a URL */
  scrapePerformerURL?: Maybe<ScrapedPerformer>
  /**
   * Scrapes a complete scene record based on an existing scene
   * @deprecated use scrapeSingleScene
   */
  scrapeScene?: Maybe<ScrapedScene>
  /** Scrapes a complete scene record based on a URL */
  scrapeSceneURL?: Maybe<ScrapedScene>
  /** Scrape for a single gallery */
  scrapeSingleGallery: Array<ScrapedGallery>
  /** Scrape for a single movie */
  scrapeSingleMovie: Array<ScrapedMovie>
  /** Scrape for a single performer */
  scrapeSinglePerformer: Array<ScrapedPerformer>
  /** Scrape for a single scene */
  scrapeSingleScene: Array<ScrapedScene>
  /** Scrapes content based on a URL */
  scrapeURL?: Maybe<ScrapedContent>
  /** Get stats */
  stats: StatsResultType
  systemStatus: SystemStatus
  validateStashBoxCredentials: StashBoxValidationResult
  version: Version
}

/** The query root for this schema */
export type QueryDirectoryArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>
  path?: InputMaybe<Scalars["String"]["input"]>
}

/** The query root for this schema */
export type QueryFindDefaultFilterArgs = {
  mode: FilterMode
}

/** The query root for this schema */
export type QueryFindDuplicateScenesArgs = {
  distance?: InputMaybe<Scalars["Int"]["input"]>
  duration_diff?: InputMaybe<Scalars["Float"]["input"]>
}

/** The query root for this schema */
export type QueryFindGalleriesArgs = {
  filter?: InputMaybe<FindFilterType>
  gallery_filter?: InputMaybe<GalleryFilterType>
}

/** The query root for this schema */
export type QueryFindGalleryArgs = {
  id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryFindImageArgs = {
  checksum?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
}

/** The query root for this schema */
export type QueryFindImagesArgs = {
  filter?: InputMaybe<FindFilterType>
  image_filter?: InputMaybe<ImageFilterType>
  image_ids?: InputMaybe<Array<Scalars["Int"]["input"]>>
}

/** The query root for this schema */
export type QueryFindJobArgs = {
  input: FindJobInput
}

/** The query root for this schema */
export type QueryFindMovieArgs = {
  id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryFindMoviesArgs = {
  filter?: InputMaybe<FindFilterType>
  movie_filter?: InputMaybe<MovieFilterType>
}

/** The query root for this schema */
export type QueryFindPerformerArgs = {
  id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryFindPerformersArgs = {
  filter?: InputMaybe<FindFilterType>
  performer_filter?: InputMaybe<PerformerFilterType>
}

/** The query root for this schema */
export type QueryFindSavedFilterArgs = {
  id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryFindSavedFiltersArgs = {
  mode?: InputMaybe<FilterMode>
}

/** The query root for this schema */
export type QueryFindSceneArgs = {
  checksum?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["ID"]["input"]>
}

/** The query root for this schema */
export type QueryFindSceneByHashArgs = {
  input: SceneHashInput
}

/** The query root for this schema */
export type QueryFindSceneMarkersArgs = {
  filter?: InputMaybe<FindFilterType>
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>
}

/** The query root for this schema */
export type QueryFindScenesArgs = {
  filter?: InputMaybe<FindFilterType>
  scene_filter?: InputMaybe<SceneFilterType>
  scene_ids?: InputMaybe<Array<Scalars["Int"]["input"]>>
}

/** The query root for this schema */
export type QueryFindScenesByPathRegexArgs = {
  filter?: InputMaybe<FindFilterType>
}

/** The query root for this schema */
export type QueryFindStudioArgs = {
  id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryFindStudiosArgs = {
  filter?: InputMaybe<FindFilterType>
  studio_filter?: InputMaybe<StudioFilterType>
}

/** The query root for this schema */
export type QueryFindTagArgs = {
  id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryFindTagsArgs = {
  filter?: InputMaybe<FindFilterType>
  tag_filter?: InputMaybe<TagFilterType>
}

/** The query root for this schema */
export type QueryListScrapersArgs = {
  types: Array<ScrapeContentType>
}

/** The query root for this schema */
export type QueryMarkerStringsArgs = {
  q?: InputMaybe<Scalars["String"]["input"]>
  sort?: InputMaybe<Scalars["String"]["input"]>
}

/** The query root for this schema */
export type QueryMarkerWallArgs = {
  q?: InputMaybe<Scalars["String"]["input"]>
}

/** The query root for this schema */
export type QueryParseSceneFilenamesArgs = {
  config: SceneParserInput
  filter?: InputMaybe<FindFilterType>
}

/** The query root for this schema */
export type QuerySceneMarkerTagsArgs = {
  scene_id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QuerySceneStreamsArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>
}

/** The query root for this schema */
export type QuerySceneWallArgs = {
  q?: InputMaybe<Scalars["String"]["input"]>
}

/** The query root for this schema */
export type QueryScrapeFreeonesPerformerListArgs = {
  query: Scalars["String"]["input"]
}

/** The query root for this schema */
export type QueryScrapeGalleryArgs = {
  gallery: GalleryUpdateInput
  scraper_id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryScrapeGalleryUrlArgs = {
  url: Scalars["String"]["input"]
}

/** The query root for this schema */
export type QueryScrapeMovieUrlArgs = {
  url: Scalars["String"]["input"]
}

/** The query root for this schema */
export type QueryScrapeMultiPerformersArgs = {
  input: ScrapeMultiPerformersInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export type QueryScrapeMultiScenesArgs = {
  input: ScrapeMultiScenesInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export type QueryScrapePerformerArgs = {
  scraped_performer: ScrapedPerformerInput
  scraper_id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryScrapePerformerListArgs = {
  query: Scalars["String"]["input"]
  scraper_id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryScrapePerformerUrlArgs = {
  url: Scalars["String"]["input"]
}

/** The query root for this schema */
export type QueryScrapeSceneArgs = {
  scene: SceneUpdateInput
  scraper_id: Scalars["ID"]["input"]
}

/** The query root for this schema */
export type QueryScrapeSceneUrlArgs = {
  url: Scalars["String"]["input"]
}

/** The query root for this schema */
export type QueryScrapeSingleGalleryArgs = {
  input: ScrapeSingleGalleryInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export type QueryScrapeSingleMovieArgs = {
  input: ScrapeSingleMovieInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export type QueryScrapeSinglePerformerArgs = {
  input: ScrapeSinglePerformerInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export type QueryScrapeSingleSceneArgs = {
  input: ScrapeSingleSceneInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export type QueryScrapeUrlArgs = {
  ty: ScrapeContentType
  url: Scalars["String"]["input"]
}

/** The query root for this schema */
export type QueryValidateStashBoxCredentialsArgs = {
  input: StashBoxInput
}

export type RemoveTempDlnaipInput = {
  address: Scalars["String"]["input"]
}

export type ResolutionCriterionInput = {
  modifier: CriterionModifier
  value: ResolutionEnum
}

export enum ResolutionEnum {
  /** 8K */
  EightK = "EIGHT_K",
  /** 5K */
  FiveK = "FIVE_K",
  /** 4K */
  FourK = "FOUR_K",
  /** 1080p */
  FullHd = "FULL_HD",
  /** 8K+ */
  Huge = "HUGE",
  /** 240p */
  Low = "LOW",
  /** 1440p */
  QuadHd = "QUAD_HD",
  /** 360p */
  R360P = "R360P",
  /** 7K */
  SevenK = "SEVEN_K",
  /** 6K */
  SixK = "SIX_K",
  /** 480p */
  Standard = "STANDARD",
  /** 720p */
  StandardHd = "STANDARD_HD",
  /** 144p */
  VeryLow = "VERY_LOW",
  /**
   * 1920p
   * @deprecated Use 4K instead
   */
  VrHd = "VR_HD",
  /** 540p */
  WebHd = "WEB_HD",
}

export type SaveFilterInput = {
  /** JSON-encoded filter string */
  filter: Scalars["String"]["input"]
  /** provide ID to overwrite existing filter */
  id?: InputMaybe<Scalars["ID"]["input"]>
  mode: FilterMode
  name: Scalars["String"]["input"]
}

export type SavedFilter = {
  __typename?: "SavedFilter"
  /** JSON-encoded filter string */
  filter: Scalars["String"]["output"]
  id: Scalars["ID"]["output"]
  mode: FilterMode
  name: Scalars["String"]["output"]
}

/** Filter options for meta data scannning */
export type ScanMetaDataFilterInput = {
  /** If set, files with a modification time before this time point are ignored by the scan */
  minModTime?: InputMaybe<Scalars["Timestamp"]["input"]>
}

export type ScanMetadataInput = {
  /** Filter options for the scan */
  filter?: InputMaybe<ScanMetaDataFilterInput>
  paths?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate covers during scan */
  scanGenerateCovers?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate image previews during scan */
  scanGenerateImagePreviews?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate phashes during scan */
  scanGeneratePhashes?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate previews during scan */
  scanGeneratePreviews?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate sprites during scan */
  scanGenerateSprites?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Strip file extension from title */
  stripFileExtension?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Set name, date, details from metadata (if present) */
  useFileMetadata?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ScanMetadataOptions = {
  __typename?: "ScanMetadataOptions"
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews: Scalars["Boolean"]["output"]
  /** Generate covers during scan */
  scanGenerateCovers: Scalars["Boolean"]["output"]
  /** Generate image previews during scan */
  scanGenerateImagePreviews: Scalars["Boolean"]["output"]
  /** Generate phashes during scan */
  scanGeneratePhashes: Scalars["Boolean"]["output"]
  /** Generate previews during scan */
  scanGeneratePreviews: Scalars["Boolean"]["output"]
  /** Generate sprites during scan */
  scanGenerateSprites: Scalars["Boolean"]["output"]
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails: Scalars["Boolean"]["output"]
  /**
   * Strip file extension from title
   * @deprecated Not implemented
   */
  stripFileExtension: Scalars["Boolean"]["output"]
  /**
   * Set name, date, details from metadata (if present)
   * @deprecated Not implemented
   */
  useFileMetadata: Scalars["Boolean"]["output"]
}

export type Scene = {
  __typename?: "Scene"
  captions?: Maybe<Array<VideoCaption>>
  /** @deprecated Use files.fingerprints */
  checksum?: Maybe<Scalars["String"]["output"]>
  code?: Maybe<Scalars["String"]["output"]>
  created_at: Scalars["Time"]["output"]
  date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  director?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use files */
  file: SceneFileType
  file_mod_time?: Maybe<Scalars["Time"]["output"]>
  files: Array<VideoFile>
  galleries: Array<Gallery>
  id: Scalars["ID"]["output"]
  interactive: Scalars["Boolean"]["output"]
  interactive_speed?: Maybe<Scalars["Int"]["output"]>
  /** The last time play count was updated */
  last_played_at?: Maybe<Scalars["Time"]["output"]>
  movies: Array<SceneMovie>
  o_counter?: Maybe<Scalars["Int"]["output"]>
  organized: Scalars["Boolean"]["output"]
  /** @deprecated Use files.fingerprints */
  oshash?: Maybe<Scalars["String"]["output"]>
  /** @deprecated Use files.path */
  path: Scalars["String"]["output"]
  paths: ScenePathsType
  performers: Array<Performer>
  /** @deprecated Use files.fingerprints */
  phash?: Maybe<Scalars["String"]["output"]>
  /** The number ot times a scene has been played */
  play_count?: Maybe<Scalars["Int"]["output"]>
  /** The total time a scene has spent playing */
  play_duration?: Maybe<Scalars["Float"]["output"]>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  /** The time index a scene was left at */
  resume_time?: Maybe<Scalars["Float"]["output"]>
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>
  scene_markers: Array<SceneMarker>
  stash_ids: Array<StashId>
  studio?: Maybe<Studio>
  tags: Array<Tag>
  title?: Maybe<Scalars["String"]["output"]>
  updated_at: Scalars["Time"]["output"]
  /** @deprecated Use urls */
  url?: Maybe<Scalars["String"]["output"]>
  urls?: Maybe<Array<Scalars["String"]["output"]>>
}

export type SceneCreateInput = {
  code?: InputMaybe<Scalars["String"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  /**
   * The first id will be assigned as primary. Files will be reassigned from
   *   existing scenes if applicable. Files must not already be primary for another scene
   */
  file_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  gallery_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  movies?: InputMaybe<Array<SceneMovieInput>>
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  stash_ids?: InputMaybe<Array<StashIdInput>>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  urls?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type SceneDestroyInput = {
  delete_file?: InputMaybe<Scalars["Boolean"]["input"]>
  delete_generated?: InputMaybe<Scalars["Boolean"]["input"]>
  id: Scalars["ID"]["input"]
}

export type SceneFileType = {
  __typename?: "SceneFileType"
  audio_codec?: Maybe<Scalars["String"]["output"]>
  bitrate?: Maybe<Scalars["Int"]["output"]>
  duration?: Maybe<Scalars["Float"]["output"]>
  framerate?: Maybe<Scalars["Float"]["output"]>
  height?: Maybe<Scalars["Int"]["output"]>
  size?: Maybe<Scalars["String"]["output"]>
  video_codec?: Maybe<Scalars["String"]["output"]>
  width?: Maybe<Scalars["Int"]["output"]>
}

export type SceneFilterType = {
  AND?: InputMaybe<SceneFilterType>
  NOT?: InputMaybe<SceneFilterType>
  OR?: InputMaybe<SceneFilterType>
  /** Filter by audio codec */
  audio_codec?: InputMaybe<StringCriterionInput>
  /** Filter by captions */
  captions?: InputMaybe<StringCriterionInput>
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>
  code?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  director?: InputMaybe<StringCriterionInput>
  /** Filter Scenes that have an exact phash match available */
  duplicated?: InputMaybe<PHashDuplicationCriterionInput>
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include scenes which have markers. `true` or `false` */
  has_markers?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<IntCriterionInput>
  /** Filter by interactive */
  interactive?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by InteractiveSpeed */
  interactive_speed?: InputMaybe<IntCriterionInput>
  /** Filter to only include scenes missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  /** Filter to only include scenes with this movie */
  movies?: InputMaybe<MultiCriterionInput>
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>
  /** Filter by organized */
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by file oshash */
  oshash?: InputMaybe<StringCriterionInput>
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>
  /** Filter scenes by performer age at time of scene */
  performer_age?: InputMaybe<IntCriterionInput>
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter scenes that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter to only include scenes with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter to only include scenes with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by file phash */
  phash?: InputMaybe<StringCriterionInput>
  /** Filter by file phash distance */
  phash_distance?: InputMaybe<PhashDistanceCriterionInput>
  /** Filter by play count */
  play_count?: InputMaybe<IntCriterionInput>
  /** Filter by play duration (in seconds) */
  play_duration?: InputMaybe<IntCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>
  /** Filter by resume time */
  resume_time?: InputMaybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>
  /** Filter to only include scenes with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include scenes with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  title?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
  /** Filter by video codec */
  video_codec?: InputMaybe<StringCriterionInput>
}

export type SceneHashInput = {
  checksum?: InputMaybe<Scalars["String"]["input"]>
  oshash?: InputMaybe<Scalars["String"]["input"]>
}

export type SceneMarker = {
  __typename?: "SceneMarker"
  created_at: Scalars["Time"]["output"]
  id: Scalars["ID"]["output"]
  /** The path to the preview image for this marker */
  preview: Scalars["String"]["output"]
  primary_tag: Tag
  scene: Scene
  /** The path to the screenshot image for this marker */
  screenshot: Scalars["String"]["output"]
  seconds: Scalars["Float"]["output"]
  /** The path to stream this marker */
  stream: Scalars["String"]["output"]
  tags: Array<Tag>
  title: Scalars["String"]["output"]
  updated_at: Scalars["Time"]["output"]
}

export type SceneMarkerCreateInput = {
  primary_tag_id: Scalars["ID"]["input"]
  scene_id: Scalars["ID"]["input"]
  seconds: Scalars["Float"]["input"]
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title: Scalars["String"]["input"]
}

export type SceneMarkerFilterType = {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter to only include scene markers with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by cscene reation time */
  scene_created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by scene date */
  scene_date?: InputMaybe<DateCriterionInput>
  /** Filter to only include scene markers attached to a scene with these tags */
  scene_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by lscene ast update time */
  scene_updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter to only include scene markers with this tag */
  tag_id?: InputMaybe<Scalars["ID"]["input"]>
  /** Filter to only include scene markers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
}

export type SceneMarkerTag = {
  __typename?: "SceneMarkerTag"
  scene_markers: Array<SceneMarker>
  tag: Tag
}

export type SceneMarkerUpdateInput = {
  id: Scalars["ID"]["input"]
  primary_tag_id: Scalars["ID"]["input"]
  scene_id: Scalars["ID"]["input"]
  seconds: Scalars["Float"]["input"]
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title: Scalars["String"]["input"]
}

export type SceneMergeInput = {
  destination: Scalars["ID"]["input"]
  /**
   * If destination scene has no files, then the primary file of the
   *   first source scene will be assigned as primary
   */
  source: Array<Scalars["ID"]["input"]>
  values?: InputMaybe<SceneUpdateInput>
}

export type SceneMovie = {
  __typename?: "SceneMovie"
  movie: Movie
  scene_index?: Maybe<Scalars["Int"]["output"]>
}

export type SceneMovieId = {
  __typename?: "SceneMovieID"
  movie_id: Scalars["ID"]["output"]
  scene_index?: Maybe<Scalars["String"]["output"]>
}

export type SceneMovieInput = {
  movie_id: Scalars["ID"]["input"]
  scene_index?: InputMaybe<Scalars["Int"]["input"]>
}

export type SceneParserInput = {
  capitalizeTitle?: InputMaybe<Scalars["Boolean"]["input"]>
  ignoreOrganized?: InputMaybe<Scalars["Boolean"]["input"]>
  ignoreWords?: InputMaybe<Array<Scalars["String"]["input"]>>
  whitespaceCharacters?: InputMaybe<Scalars["String"]["input"]>
}

export type SceneParserResult = {
  __typename?: "SceneParserResult"
  code?: Maybe<Scalars["String"]["output"]>
  date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  director?: Maybe<Scalars["String"]["output"]>
  gallery_ids?: Maybe<Array<Scalars["ID"]["output"]>>
  movies?: Maybe<Array<SceneMovieId>>
  performer_ids?: Maybe<Array<Scalars["ID"]["output"]>>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  scene: Scene
  studio_id?: Maybe<Scalars["ID"]["output"]>
  tag_ids?: Maybe<Array<Scalars["ID"]["output"]>>
  title?: Maybe<Scalars["String"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type SceneParserResultType = {
  __typename?: "SceneParserResultType"
  count: Scalars["Int"]["output"]
  results: Array<SceneParserResult>
}

export type ScenePathsType = {
  __typename?: "ScenePathsType"
  caption?: Maybe<Scalars["String"]["output"]>
  chapters_vtt?: Maybe<Scalars["String"]["output"]>
  funscript?: Maybe<Scalars["String"]["output"]>
  interactive_heatmap?: Maybe<Scalars["String"]["output"]>
  preview?: Maybe<Scalars["String"]["output"]>
  screenshot?: Maybe<Scalars["String"]["output"]>
  sprite?: Maybe<Scalars["String"]["output"]>
  stream?: Maybe<Scalars["String"]["output"]>
  vtt?: Maybe<Scalars["String"]["output"]>
  webp?: Maybe<Scalars["String"]["output"]>
}

export type SceneStreamEndpoint = {
  __typename?: "SceneStreamEndpoint"
  label?: Maybe<Scalars["String"]["output"]>
  mime_type?: Maybe<Scalars["String"]["output"]>
  url: Scalars["String"]["output"]
}

export type SceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>
  code?: InputMaybe<Scalars["String"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  gallery_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id: Scalars["ID"]["input"]
  movies?: InputMaybe<Array<SceneMovieInput>>
  o_counter?: InputMaybe<Scalars["Int"]["input"]>
  organized?: InputMaybe<Scalars["Boolean"]["input"]>
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** The number ot times a scene has been played */
  play_count?: InputMaybe<Scalars["Int"]["input"]>
  /** The total time a scene has spent playing */
  play_duration?: InputMaybe<Scalars["Float"]["input"]>
  primary_file_id?: InputMaybe<Scalars["ID"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  /** The time index a scene was left at */
  resume_time?: InputMaybe<Scalars["Float"]["input"]>
  stash_ids?: InputMaybe<Array<StashIdInput>>
  studio_id?: InputMaybe<Scalars["ID"]["input"]>
  tag_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  urls?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type ScenesDestroyInput = {
  delete_file?: InputMaybe<Scalars["Boolean"]["input"]>
  delete_generated?: InputMaybe<Scalars["Boolean"]["input"]>
  ids: Array<Scalars["ID"]["input"]>
}

/** Type of the content a scraper generates */
export enum ScrapeContentType {
  Gallery = "GALLERY",
  Movie = "MOVIE",
  Performer = "PERFORMER",
  Scene = "SCENE",
}

export type ScrapeMultiPerformersInput = {
  /** Instructs to query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
}

export type ScrapeMultiScenesInput = {
  /** Instructs to query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
}

export type ScrapeSingleGalleryInput = {
  /** Instructs to query by gallery id */
  gallery_id?: InputMaybe<Scalars["ID"]["input"]>
  /** Instructs to query by gallery fragment */
  gallery_input?: InputMaybe<ScrapedGalleryInput>
  /** Instructs to query by string */
  query?: InputMaybe<Scalars["String"]["input"]>
}

export type ScrapeSingleMovieInput = {
  /** Instructs to query by movie id */
  movie_id?: InputMaybe<Scalars["ID"]["input"]>
  /** Instructs to query by gallery fragment */
  movie_input?: InputMaybe<ScrapedMovieInput>
  /** Instructs to query by string */
  query?: InputMaybe<Scalars["String"]["input"]>
}

export type ScrapeSinglePerformerInput = {
  /** Instructs to query by performer id */
  performer_id?: InputMaybe<Scalars["ID"]["input"]>
  /** Instructs to query by performer fragment */
  performer_input?: InputMaybe<ScrapedPerformerInput>
  /** Instructs to query by string */
  query?: InputMaybe<Scalars["String"]["input"]>
}

export type ScrapeSingleSceneInput = {
  /** Instructs to query by string */
  query?: InputMaybe<Scalars["String"]["input"]>
  /** Instructs to query by scene fingerprints */
  scene_id?: InputMaybe<Scalars["ID"]["input"]>
  /** Instructs to query by scene fragment */
  scene_input?: InputMaybe<ScrapedSceneInput>
}

export enum ScrapeType {
  /** From existing object */
  Fragment = "FRAGMENT",
  /** From text query */
  Name = "NAME",
  /** From URL */
  Url = "URL",
}

/** Scraped Content is the forming union over the different scrapers */
export type ScrapedContent =
  | ScrapedGallery
  | ScrapedMovie
  | ScrapedPerformer
  | ScrapedScene
  | ScrapedStudio
  | ScrapedTag

export type ScrapedGallery = {
  __typename?: "ScrapedGallery"
  date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  performers?: Maybe<Array<ScrapedPerformer>>
  studio?: Maybe<ScrapedStudio>
  tags?: Maybe<Array<ScrapedTag>>
  title?: Maybe<Scalars["String"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type ScrapedGalleryInput = {
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

/** A movie from a scraping operation... */
export type ScrapedMovie = {
  __typename?: "ScrapedMovie"
  aliases?: Maybe<Scalars["String"]["output"]>
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars["String"]["output"]>
  date?: Maybe<Scalars["String"]["output"]>
  director?: Maybe<Scalars["String"]["output"]>
  duration?: Maybe<Scalars["String"]["output"]>
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  rating?: Maybe<Scalars["String"]["output"]>
  stored_id?: Maybe<Scalars["ID"]["output"]>
  studio?: Maybe<ScrapedStudio>
  synopsis?: Maybe<Scalars["String"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type ScrapedMovieInput = {
  aliases?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  duration?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  rating?: InputMaybe<Scalars["String"]["input"]>
  synopsis?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
}

/** A performer from a scraping operation... */
export type ScrapedPerformer = {
  __typename?: "ScrapedPerformer"
  aliases?: Maybe<Scalars["String"]["output"]>
  birthdate?: Maybe<Scalars["String"]["output"]>
  career_length?: Maybe<Scalars["String"]["output"]>
  circumcised?: Maybe<Scalars["String"]["output"]>
  country?: Maybe<Scalars["String"]["output"]>
  death_date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  disambiguation?: Maybe<Scalars["String"]["output"]>
  ethnicity?: Maybe<Scalars["String"]["output"]>
  eye_color?: Maybe<Scalars["String"]["output"]>
  fake_tits?: Maybe<Scalars["String"]["output"]>
  gender?: Maybe<Scalars["String"]["output"]>
  hair_color?: Maybe<Scalars["String"]["output"]>
  height?: Maybe<Scalars["String"]["output"]>
  /**
   * This should be a base64 encoded data URL
   * @deprecated use images instead
   */
  image?: Maybe<Scalars["String"]["output"]>
  images?: Maybe<Array<Scalars["String"]["output"]>>
  instagram?: Maybe<Scalars["String"]["output"]>
  measurements?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  penis_length?: Maybe<Scalars["String"]["output"]>
  piercings?: Maybe<Scalars["String"]["output"]>
  remote_site_id?: Maybe<Scalars["String"]["output"]>
  /** Set if performer matched */
  stored_id?: Maybe<Scalars["ID"]["output"]>
  tags?: Maybe<Array<ScrapedTag>>
  tattoos?: Maybe<Scalars["String"]["output"]>
  twitter?: Maybe<Scalars["String"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
  weight?: Maybe<Scalars["String"]["output"]>
}

export type ScrapedPerformerInput = {
  aliases?: InputMaybe<Scalars["String"]["input"]>
  birthdate?: InputMaybe<Scalars["String"]["input"]>
  career_length?: InputMaybe<Scalars["String"]["input"]>
  circumcised?: InputMaybe<Scalars["String"]["input"]>
  country?: InputMaybe<Scalars["String"]["input"]>
  death_date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  disambiguation?: InputMaybe<Scalars["String"]["input"]>
  ethnicity?: InputMaybe<Scalars["String"]["input"]>
  eye_color?: InputMaybe<Scalars["String"]["input"]>
  fake_tits?: InputMaybe<Scalars["String"]["input"]>
  gender?: InputMaybe<Scalars["String"]["input"]>
  hair_color?: InputMaybe<Scalars["String"]["input"]>
  height?: InputMaybe<Scalars["String"]["input"]>
  instagram?: InputMaybe<Scalars["String"]["input"]>
  measurements?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  penis_length?: InputMaybe<Scalars["String"]["input"]>
  piercings?: InputMaybe<Scalars["String"]["input"]>
  remote_site_id?: InputMaybe<Scalars["String"]["input"]>
  /** Set if performer matched */
  stored_id?: InputMaybe<Scalars["ID"]["input"]>
  tattoos?: InputMaybe<Scalars["String"]["input"]>
  twitter?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  weight?: InputMaybe<Scalars["String"]["input"]>
}

export type ScrapedScene = {
  __typename?: "ScrapedScene"
  code?: Maybe<Scalars["String"]["output"]>
  date?: Maybe<Scalars["String"]["output"]>
  details?: Maybe<Scalars["String"]["output"]>
  director?: Maybe<Scalars["String"]["output"]>
  duration?: Maybe<Scalars["Int"]["output"]>
  file?: Maybe<SceneFileType>
  fingerprints?: Maybe<Array<StashBoxFingerprint>>
  /** This should be a base64 encoded data URL */
  image?: Maybe<Scalars["String"]["output"]>
  movies?: Maybe<Array<ScrapedMovie>>
  performers?: Maybe<Array<ScrapedPerformer>>
  remote_site_id?: Maybe<Scalars["String"]["output"]>
  studio?: Maybe<ScrapedStudio>
  tags?: Maybe<Array<ScrapedTag>>
  title?: Maybe<Scalars["String"]["output"]>
  /** @deprecated use urls */
  url?: Maybe<Scalars["String"]["output"]>
  urls?: Maybe<Array<Scalars["String"]["output"]>>
}

export type ScrapedSceneInput = {
  code?: InputMaybe<Scalars["String"]["input"]>
  date?: InputMaybe<Scalars["String"]["input"]>
  details?: InputMaybe<Scalars["String"]["input"]>
  director?: InputMaybe<Scalars["String"]["input"]>
  remote_site_id?: InputMaybe<Scalars["String"]["input"]>
  title?: InputMaybe<Scalars["String"]["input"]>
  url?: InputMaybe<Scalars["String"]["input"]>
  urls?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type ScrapedStudio = {
  __typename?: "ScrapedStudio"
  image?: Maybe<Scalars["String"]["output"]>
  name: Scalars["String"]["output"]
  remote_site_id?: Maybe<Scalars["String"]["output"]>
  /** Set if studio matched */
  stored_id?: Maybe<Scalars["ID"]["output"]>
  url?: Maybe<Scalars["String"]["output"]>
}

export type ScrapedTag = {
  __typename?: "ScrapedTag"
  name: Scalars["String"]["output"]
  /** Set if tag matched */
  stored_id?: Maybe<Scalars["ID"]["output"]>
}

export type Scraper = {
  __typename?: "Scraper"
  /** Details for gallery scraper */
  gallery?: Maybe<ScraperSpec>
  id: Scalars["ID"]["output"]
  /** Details for movie scraper */
  movie?: Maybe<ScraperSpec>
  name: Scalars["String"]["output"]
  /** Details for performer scraper */
  performer?: Maybe<ScraperSpec>
  /** Details for scene scraper */
  scene?: Maybe<ScraperSpec>
}

export type ScraperSource = {
  __typename?: "ScraperSource"
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: Maybe<Scalars["ID"]["output"]>
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars["String"]["output"]>
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: Maybe<Scalars["Int"]["output"]>
}

export type ScraperSourceInput = {
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: InputMaybe<Scalars["ID"]["input"]>
  /** Stash-box endpoint */
  stash_box_endpoint?: InputMaybe<Scalars["String"]["input"]>
  /** Index of the configured stash-box instance to use. Should be unset if scraper_id is set */
  stash_box_index?: InputMaybe<Scalars["Int"]["input"]>
}

export type ScraperSpec = {
  __typename?: "ScraperSpec"
  supported_scrapes: Array<ScrapeType>
  /** URLs matching these can be scraped with */
  urls?: Maybe<Array<Scalars["String"]["output"]>>
}

export type SetDefaultFilterInput = {
  /** JSON-encoded filter string - null to clear */
  filter?: InputMaybe<Scalars["String"]["input"]>
  mode: FilterMode
}

export type SetupInput = {
  /** Empty to indicate database storage for blobs */
  blobsLocation: Scalars["String"]["input"]
  /** Empty to indicate default */
  cacheLocation: Scalars["String"]["input"]
  /** Empty to indicate $HOME/.stash/config.yml default */
  configLocation: Scalars["String"]["input"]
  /** Empty to indicate default */
  databaseFile: Scalars["String"]["input"]
  /** Empty to indicate default */
  generatedLocation: Scalars["String"]["input"]
  stashes: Array<StashConfigInput>
}

export enum SortDirectionEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StashBox = {
  __typename?: "StashBox"
  api_key: Scalars["String"]["output"]
  endpoint: Scalars["String"]["output"]
  name: Scalars["String"]["output"]
}

/** If neither performer_ids nor performer_names are set, tag all performers */
export type StashBoxBatchPerformerTagInput = {
  /** Stash endpoint to use for the performer tagging */
  endpoint: Scalars["Int"]["input"]
  /** Fields to exclude when executing the performer tagging */
  exclude_fields?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** If set, only tag these performer ids */
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** If set, only tag these performer names */
  performer_names?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Refresh performers already tagged by StashBox if true. Only tag performers with no StashBox tagging if false */
  refresh: Scalars["Boolean"]["input"]
}

export type StashBoxDraftSubmissionInput = {
  id: Scalars["String"]["input"]
  stash_box_index: Scalars["Int"]["input"]
}

export type StashBoxFingerprint = {
  __typename?: "StashBoxFingerprint"
  algorithm: Scalars["String"]["output"]
  duration: Scalars["Int"]["output"]
  hash: Scalars["String"]["output"]
}

export type StashBoxFingerprintSubmissionInput = {
  scene_ids: Array<Scalars["String"]["input"]>
  stash_box_index: Scalars["Int"]["input"]
}

export type StashBoxInput = {
  api_key: Scalars["String"]["input"]
  endpoint: Scalars["String"]["input"]
  name: Scalars["String"]["input"]
}

export type StashBoxPerformerQueryInput = {
  /** Instructs query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** Query by query string */
  q?: InputMaybe<Scalars["String"]["input"]>
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars["Int"]["input"]
}

export type StashBoxPerformerQueryResult = {
  __typename?: "StashBoxPerformerQueryResult"
  query: Scalars["String"]["output"]
  results: Array<ScrapedPerformer>
}

export type StashBoxSceneQueryInput = {
  /** Query by query string */
  q?: InputMaybe<Scalars["String"]["input"]>
  /** Instructs query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars["Int"]["input"]
}

export type StashBoxValidationResult = {
  __typename?: "StashBoxValidationResult"
  status: Scalars["String"]["output"]
  valid: Scalars["Boolean"]["output"]
}

export type StashConfig = {
  __typename?: "StashConfig"
  excludeImage: Scalars["Boolean"]["output"]
  excludeVideo: Scalars["Boolean"]["output"]
  path: Scalars["String"]["output"]
}

/** Stash configuration details */
export type StashConfigInput = {
  excludeImage: Scalars["Boolean"]["input"]
  excludeVideo: Scalars["Boolean"]["input"]
  path: Scalars["String"]["input"]
}

export type StashId = {
  __typename?: "StashID"
  endpoint: Scalars["String"]["output"]
  stash_id: Scalars["String"]["output"]
}

export type StashIdCriterionInput = {
  /**
   * If present, this value is treated as a predicate.
   *   That is, it will filter based on stash_ids with the matching endpoint
   */
  endpoint?: InputMaybe<Scalars["String"]["input"]>
  modifier: CriterionModifier
  stash_id?: InputMaybe<Scalars["String"]["input"]>
}

export type StashIdInput = {
  endpoint: Scalars["String"]["input"]
  stash_id: Scalars["String"]["input"]
}

export type StatsResultType = {
  __typename?: "StatsResultType"
  gallery_count: Scalars["Int"]["output"]
  image_count: Scalars["Int"]["output"]
  images_size: Scalars["Float"]["output"]
  movie_count: Scalars["Int"]["output"]
  performer_count: Scalars["Int"]["output"]
  scene_count: Scalars["Int"]["output"]
  scenes_duration: Scalars["Float"]["output"]
  scenes_played: Scalars["Int"]["output"]
  scenes_size: Scalars["Float"]["output"]
  studio_count: Scalars["Int"]["output"]
  tag_count: Scalars["Int"]["output"]
  total_o_count: Scalars["Int"]["output"]
  total_play_count: Scalars["Int"]["output"]
  total_play_duration: Scalars["Float"]["output"]
}

export enum StreamingResolutionEnum {
  /** 4k */
  FourK = "FOUR_K",
  /** 1080p */
  FullHd = "FULL_HD",
  /** 240p */
  Low = "LOW",
  /** Original */
  Original = "ORIGINAL",
  /** 480p */
  Standard = "STANDARD",
  /** 720p */
  StandardHd = "STANDARD_HD",
}

export type StringCriterionInput = {
  modifier: CriterionModifier
  value: Scalars["String"]["input"]
}

export type Studio = {
  __typename?: "Studio"
  aliases: Array<Scalars["String"]["output"]>
  /** @deprecated MD5 hash of name, use name directly */
  checksum: Scalars["String"]["output"]
  child_studios: Array<Studio>
  created_at: Scalars["Time"]["output"]
  details?: Maybe<Scalars["String"]["output"]>
  gallery_count: Scalars["Int"]["output"]
  id: Scalars["ID"]["output"]
  ignore_auto_tag: Scalars["Boolean"]["output"]
  image_count: Scalars["Int"]["output"]
  image_path?: Maybe<Scalars["String"]["output"]>
  movie_count: Scalars["Int"]["output"]
  movies: Array<Movie>
  name: Scalars["String"]["output"]
  parent_studio?: Maybe<Studio>
  performer_count: Scalars["Int"]["output"]
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars["Int"]["output"]>
  rating100?: Maybe<Scalars["Int"]["output"]>
  scene_count: Scalars["Int"]["output"]
  stash_ids: Array<StashId>
  updated_at: Scalars["Time"]["output"]
  url?: Maybe<Scalars["String"]["output"]>
}

export type StudioGallery_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type StudioImage_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type StudioMovie_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type StudioPerformer_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type StudioScene_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type StudioCreateInput = {
  aliases?: InputMaybe<Array<Scalars["String"]["input"]>>
  details?: InputMaybe<Scalars["String"]["input"]>
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars["String"]["input"]>
  name: Scalars["String"]["input"]
  parent_id?: InputMaybe<Scalars["ID"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  stash_ids?: InputMaybe<Array<StashIdInput>>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type StudioDestroyInput = {
  id: Scalars["ID"]["input"]
}

export type StudioFilterType = {
  AND?: InputMaybe<StudioFilterType>
  NOT?: InputMaybe<StudioFilterType>
  OR?: InputMaybe<StudioFilterType>
  /** Filter by studio aliases */
  aliases?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include studios missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<StringCriterionInput>
  /** Filter to only include studios with this parent studio */
  parents?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export type StudioUpdateInput = {
  aliases?: InputMaybe<Array<Scalars["String"]["input"]>>
  details?: InputMaybe<Scalars["String"]["input"]>
  id: Scalars["ID"]["input"]
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  parent_id?: InputMaybe<Scalars["ID"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  rating100?: InputMaybe<Scalars["Int"]["input"]>
  stash_ids?: InputMaybe<Array<StashIdInput>>
  url?: InputMaybe<Scalars["String"]["input"]>
}

export type Subscription = {
  __typename?: "Subscription"
  /** Update from the metadata manager */
  jobsSubscribe: JobStatusUpdate
  loggingSubscribe: Array<LogEntry>
  scanCompleteSubscribe: Scalars["Boolean"]["output"]
}

export type SystemStatus = {
  __typename?: "SystemStatus"
  appSchema: Scalars["Int"]["output"]
  configPath?: Maybe<Scalars["String"]["output"]>
  databasePath?: Maybe<Scalars["String"]["output"]>
  databaseSchema?: Maybe<Scalars["Int"]["output"]>
  status: SystemStatusEnum
}

export enum SystemStatusEnum {
  NeedsMigration = "NEEDS_MIGRATION",
  Ok = "OK",
  Setup = "SETUP",
}

export type Tag = {
  __typename?: "Tag"
  aliases: Array<Scalars["String"]["output"]>
  children: Array<Tag>
  created_at: Scalars["Time"]["output"]
  description?: Maybe<Scalars["String"]["output"]>
  gallery_count: Scalars["Int"]["output"]
  id: Scalars["ID"]["output"]
  ignore_auto_tag: Scalars["Boolean"]["output"]
  image_count: Scalars["Int"]["output"]
  image_path?: Maybe<Scalars["String"]["output"]>
  name: Scalars["String"]["output"]
  parents: Array<Tag>
  performer_count: Scalars["Int"]["output"]
  scene_count: Scalars["Int"]["output"]
  scene_marker_count: Scalars["Int"]["output"]
  updated_at: Scalars["Time"]["output"]
}

export type TagGallery_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type TagImage_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type TagPerformer_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type TagScene_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type TagScene_Marker_CountArgs = {
  depth?: InputMaybe<Scalars["Int"]["input"]>
}

export type TagCreateInput = {
  aliases?: InputMaybe<Array<Scalars["String"]["input"]>>
  child_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  description?: InputMaybe<Scalars["String"]["input"]>
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars["String"]["input"]>
  name: Scalars["String"]["input"]
  parent_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
}

export type TagDestroyInput = {
  id: Scalars["ID"]["input"]
}

export type TagFilterType = {
  AND?: InputMaybe<TagFilterType>
  NOT?: InputMaybe<TagFilterType>
  OR?: InputMaybe<TagFilterType>
  /** Filter by tag aliases */
  aliases?: InputMaybe<StringCriterionInput>
  /** Filter by number f child tags the tag has */
  child_count?: InputMaybe<IntCriterionInput>
  /** Filter by child tags */
  children?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by tag description */
  description?: InputMaybe<StringCriterionInput>
  /** Filter by number of galleries with this tag */
  gallery_count?: InputMaybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** Filter by number of images with this tag */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include tags missing this property */
  is_missing?: InputMaybe<Scalars["String"]["input"]>
  /** Filter by number of markers with this tag */
  marker_count?: InputMaybe<IntCriterionInput>
  /** Filter by tag name */
  name?: InputMaybe<StringCriterionInput>
  /** Filter by number of parent tags the tag has */
  parent_count?: InputMaybe<IntCriterionInput>
  /** Filter by parent tags */
  parents?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by number of performers with this tag */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter by number of scenes with this tag */
  scene_count?: InputMaybe<IntCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
}

export type TagUpdateInput = {
  aliases?: InputMaybe<Array<Scalars["String"]["input"]>>
  child_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
  description?: InputMaybe<Scalars["String"]["input"]>
  id: Scalars["ID"]["input"]
  ignore_auto_tag?: InputMaybe<Scalars["Boolean"]["input"]>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  parent_ids?: InputMaybe<Array<Scalars["ID"]["input"]>>
}

export type TagsMergeInput = {
  destination: Scalars["ID"]["input"]
  source: Array<Scalars["ID"]["input"]>
}

export type TimestampCriterionInput = {
  modifier: CriterionModifier
  value: Scalars["String"]["input"]
  value2?: InputMaybe<Scalars["String"]["input"]>
}

export type Version = {
  __typename?: "Version"
  build_time: Scalars["String"]["output"]
  hash: Scalars["String"]["output"]
  version?: Maybe<Scalars["String"]["output"]>
}

export type VideoCaption = {
  __typename?: "VideoCaption"
  caption_type: Scalars["String"]["output"]
  language_code: Scalars["String"]["output"]
}

export type VideoFile = BaseFile & {
  __typename?: "VideoFile"
  audio_codec: Scalars["String"]["output"]
  basename: Scalars["String"]["output"]
  bit_rate: Scalars["Int"]["output"]
  created_at: Scalars["Time"]["output"]
  duration: Scalars["Float"]["output"]
  fingerprints: Array<Fingerprint>
  format: Scalars["String"]["output"]
  frame_rate: Scalars["Float"]["output"]
  height: Scalars["Int"]["output"]
  id: Scalars["ID"]["output"]
  mod_time: Scalars["Time"]["output"]
  parent_folder_id: Scalars["ID"]["output"]
  path: Scalars["String"]["output"]
  size: Scalars["Int64"]["output"]
  updated_at: Scalars["Time"]["output"]
  video_codec: Scalars["String"]["output"]
  width: Scalars["Int"]["output"]
  zip_file_id?: Maybe<Scalars["ID"]["output"]>
}

export type VisualFile = ImageFile | VideoFile

export type GetScenesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>
  sceneFilter?: InputMaybe<SceneFilterType>
}>

export type GetScenesQuery = {
  __typename?: "Query"
  findScenes: {
    __typename?: "FindScenesResultType"
    count: number
    scenes: Array<{
      __typename?: "Scene"
      id: string
      play_count?: number | null
      details?: string | null
      rating100?: number | null
      o_counter?: number | null
      date?: string | null
      title?: string | null
      performers: Array<{__typename?: "Performer"; name: string}>
      studio?: {__typename?: "Studio"; name: string} | null
      files: Array<{
        __typename?: "VideoFile"
        basename: string
        duration: number
      }>
      tags: Array<{__typename?: "Tag"; name: string; id: string}>
    }>
  }
}

export type GetImagesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>
  imageFilter?: InputMaybe<ImageFilterType>
}>

export type GetImagesQuery = {
  __typename?: "Query"
  findImages: {
    __typename?: "FindImagesResultType"
    count: number
    images: Array<{
      __typename?: "Image"
      id: string
      date?: string | null
      rating100?: number | null
      o_counter?: number | null
      title?: string | null
      performers: Array<{__typename?: "Performer"; name: string}>
      studio?: {__typename?: "Studio"; name: string} | null
      tags: Array<{__typename?: "Tag"; name: string; id: string}>
    }>
  }
}

export type GetMarkersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>
  markerFilter?: InputMaybe<SceneMarkerFilterType>
}>

export type GetMarkersQuery = {
  __typename?: "Query"
  findSceneMarkers: {
    __typename?: "FindSceneMarkersResultType"
    count: number
    scene_markers: Array<{
      __typename?: "SceneMarker"
      id: string
      title: string
      seconds: number
      primary_tag: {__typename?: "Tag"; name: string}
      scene: {
        __typename?: "Scene"
        id: string
        date?: string | null
        details?: string | null
        play_count?: number | null
        rating100?: number | null
        o_counter?: number | null
        title?: string | null
        performers: Array<{__typename?: "Performer"; name: string}>
        studio?: {__typename?: "Studio"; name: string} | null
        tags: Array<{__typename?: "Tag"; id: string; name: string}>
      }
    }>
  }
}

export const GetScenesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {kind: "Name", value: "GetScenes"},
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {kind: "Variable", name: {kind: "Name", value: "filter"}},
          type: {
            kind: "NamedType",
            name: {kind: "Name", value: "FindFilterType"},
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {kind: "Name", value: "sceneFilter"},
          },
          type: {
            kind: "NamedType",
            name: {kind: "Name", value: "SceneFilterType"},
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {kind: "Name", value: "findScenes"},
            arguments: [
              {
                kind: "Argument",
                name: {kind: "Name", value: "filter"},
                value: {
                  kind: "Variable",
                  name: {kind: "Name", value: "filter"},
                },
              },
              {
                kind: "Argument",
                name: {kind: "Name", value: "scene_filter"},
                value: {
                  kind: "Variable",
                  name: {kind: "Name", value: "sceneFilter"},
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {kind: "Field", name: {kind: "Name", value: "count"}},
                {
                  kind: "Field",
                  name: {kind: "Name", value: "scenes"},
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {kind: "Field", name: {kind: "Name", value: "id"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "play_count"},
                      },
                      {kind: "Field", name: {kind: "Name", value: "details"}},
                      {kind: "Field", name: {kind: "Name", value: "rating100"}},
                      {kind: "Field", name: {kind: "Name", value: "o_counter"}},
                      {kind: "Field", name: {kind: "Name", value: "date"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "performers"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "studio"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                          ],
                        },
                      },
                      {kind: "Field", name: {kind: "Name", value: "title"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "files"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "basename"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "duration"},
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "tags"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                            {kind: "Field", name: {kind: "Name", value: "id"}},
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetScenesQuery, GetScenesQueryVariables>
export const GetImagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {kind: "Name", value: "GetImages"},
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {kind: "Variable", name: {kind: "Name", value: "filter"}},
          type: {
            kind: "NamedType",
            name: {kind: "Name", value: "FindFilterType"},
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {kind: "Name", value: "imageFilter"},
          },
          type: {
            kind: "NamedType",
            name: {kind: "Name", value: "ImageFilterType"},
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {kind: "Name", value: "findImages"},
            arguments: [
              {
                kind: "Argument",
                name: {kind: "Name", value: "filter"},
                value: {
                  kind: "Variable",
                  name: {kind: "Name", value: "filter"},
                },
              },
              {
                kind: "Argument",
                name: {kind: "Name", value: "image_filter"},
                value: {
                  kind: "Variable",
                  name: {kind: "Name", value: "imageFilter"},
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {kind: "Field", name: {kind: "Name", value: "count"}},
                {
                  kind: "Field",
                  name: {kind: "Name", value: "images"},
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {kind: "Field", name: {kind: "Name", value: "id"}},
                      {kind: "Field", name: {kind: "Name", value: "date"}},
                      {kind: "Field", name: {kind: "Name", value: "rating100"}},
                      {kind: "Field", name: {kind: "Name", value: "o_counter"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "performers"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "studio"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                          ],
                        },
                      },
                      {kind: "Field", name: {kind: "Name", value: "title"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "tags"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                            {kind: "Field", name: {kind: "Name", value: "id"}},
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetImagesQuery, GetImagesQueryVariables>
export const GetMarkersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: {kind: "Name", value: "GetMarkers"},
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {kind: "Variable", name: {kind: "Name", value: "filter"}},
          type: {
            kind: "NamedType",
            name: {kind: "Name", value: "FindFilterType"},
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {kind: "Name", value: "markerFilter"},
          },
          type: {
            kind: "NamedType",
            name: {kind: "Name", value: "SceneMarkerFilterType"},
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {kind: "Name", value: "findSceneMarkers"},
            arguments: [
              {
                kind: "Argument",
                name: {kind: "Name", value: "filter"},
                value: {
                  kind: "Variable",
                  name: {kind: "Name", value: "filter"},
                },
              },
              {
                kind: "Argument",
                name: {kind: "Name", value: "scene_marker_filter"},
                value: {
                  kind: "Variable",
                  name: {kind: "Name", value: "markerFilter"},
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {kind: "Field", name: {kind: "Name", value: "count"}},
                {
                  kind: "Field",
                  name: {kind: "Name", value: "scene_markers"},
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {kind: "Field", name: {kind: "Name", value: "id"}},
                      {kind: "Field", name: {kind: "Name", value: "title"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "primary_tag"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "name"},
                            },
                          ],
                        },
                      },
                      {kind: "Field", name: {kind: "Name", value: "seconds"}},
                      {
                        kind: "Field",
                        name: {kind: "Name", value: "scene"},
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {kind: "Field", name: {kind: "Name", value: "id"}},
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "date"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "details"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "play_count"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "rating100"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "o_counter"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "performers"},
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {kind: "Name", value: "name"},
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "studio"},
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {kind: "Name", value: "name"},
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "title"},
                            },
                            {
                              kind: "Field",
                              name: {kind: "Name", value: "tags"},
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {kind: "Name", value: "id"},
                                  },
                                  {
                                    kind: "Field",
                                    name: {kind: "Name", value: "name"},
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMarkersQuery, GetMarkersQueryVariables>
