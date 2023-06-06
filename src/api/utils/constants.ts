import * as json from "../../json/types";

// The known file types corresponding to each extension.
export const FILE_TYPES_BY_EXTENSION: Record<string, json.FileType> =
  Object.freeze({
    a: "archive.ar",
    apns: "text",
    app: "wrapper.application",
    appex: "wrapper.app-extension",
    bundle: "wrapper.plug-in",
    cpp: "sourcecode.cpp.cpp",
    dylib: "compiled.mach-o.dylib",
    entitlements: "text.plist.entitlements",
    framework: "wrapper.framework",
    gif: "image.gif",
    gpx: "text.xml",
    h: "sourcecode.c.h",
    hpp: "sourcecode.cpp.h",
    m: "sourcecode.c.objc",
    markdown: "text",
    mdimporter: "wrapper.cfbundle",
    modulemap: "sourcecode.module",
    mov: "video.quicktime",
    mp3: "audio.mp3",
    octest: "wrapper.cfbundle",
    pch: "sourcecode.c.h",
    plist: "text.plist.xml",
    png: "image.png",
    sh: "text.script.sh",
    sks: "file.sks",
    storyboard: "file.storyboard",
    strings: "text.plist.strings",
    swift: "sourcecode.swift",
    xcassets: "folder.assetcatalog",
    xcconfig: "text.xcconfig",
    xcdatamodel: "wrapper.xcdatamodel",
    xcodeproj: "wrapper.pb-project",
    xctest: "wrapper.cfbundle",
    xib: "file.xib",
    zip: "archive.zip",
    intentdefinition: "file.intentdefinition",
  });

export const PRODUCT_UTI_EXTENSIONS = Object.freeze({
  application: "app",
  applicationOnDemandInstallCapable: "app",
  framework: "framework",
  dynamicLibrary: "dylib",
  staticLibrary: "a",
  bundle: "bundle",
  octestBundle: "octest",
  unitTestBundle: "xctest",
  uiTestBundle: "xctest",
  appExtension: "appex",
  messagesApplication: "app",
  messagesExtension: "appex",
  stickerPack: "appex",
  watch2Extension: "appex",
  watch2App: "app",
  watch2AppContainer: "app",
});

export const SOURCETREE_BY_FILETYPE: Record<string, json.SourceTree> =
  Object.freeze({
    "compiled.mach-o.dylib": "SDKROOT",
    "sourcecode.text-based-dylib-definition": "SDKROOT",
    "wrapper.framework": "SDKROOT",
  });

export const PROJECT_DEFAULT_BUILD_SETTINGS = Object.freeze({
  all: Object.freeze({
    ALWAYS_SEARCH_USER_PATHS: "NO",
    CLANG_ANALYZER_NONNULL: "YES",
    CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION: "YES_AGGRESSIVE",
    CLANG_CXX_LANGUAGE_STANDARD: "gnu++14",
    CLANG_CXX_LIBRARY: "libc++",
    CLANG_ENABLE_MODULES: "YES",
    CLANG_ENABLE_OBJC_ARC: "YES",
    CLANG_ENABLE_OBJC_WEAK: "YES",
    CLANG_WARN__DUPLICATE_METHOD_MATCH: "YES",
    CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING: "YES",
    CLANG_WARN_BOOL_CONVERSION: "YES",
    CLANG_WARN_COMMA: "YES",
    CLANG_WARN_CONSTANT_CONVERSION: "YES",
    CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS: "YES",
    CLANG_WARN_DIRECT_OBJC_ISA_USAGE: "YES_ERROR",
    CLANG_WARN_DOCUMENTATION_COMMENTS: "YES",
    CLANG_WARN_EMPTY_BODY: "YES",
    CLANG_WARN_ENUM_CONVERSION: "YES",
    CLANG_WARN_INFINITE_RECURSION: "YES",
    CLANG_WARN_INT_CONVERSION: "YES",
    CLANG_WARN_NON_LITERAL_NULL_CONVERSION: "YES",
    CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF: "YES",
    CLANG_WARN_OBJC_LITERAL_CONVERSION: "YES",
    CLANG_WARN_OBJC_ROOT_CLASS: "YES_ERROR",
    CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER: "YES",
    CLANG_WARN_RANGE_LOOP_ANALYSIS: "YES",
    CLANG_WARN_STRICT_PROTOTYPES: "YES",
    CLANG_WARN_SUSPICIOUS_MOVE: "YES",
    CLANG_WARN_UNGUARDED_AVAILABILITY: "YES_AGGRESSIVE",
    CLANG_WARN_UNREACHABLE_CODE: "YES",
    COPY_PHASE_STRIP: "NO",
    ENABLE_STRICT_OBJC_MSGSEND: "YES",
    GCC_C_LANGUAGE_STANDARD: "gnu11",
    GCC_NO_COMMON_BLOCKS: "YES",
    GCC_WARN_64_TO_32_BIT_CONVERSION: "YES",
    GCC_WARN_ABOUT_RETURN_TYPE: "YES_ERROR",
    GCC_WARN_UNDECLARED_SELECTOR: "YES",
    GCC_WARN_UNINITIALIZED_AUTOS: "YES_AGGRESSIVE",
    GCC_WARN_UNUSED_FUNCTION: "YES",
    GCC_WARN_UNUSED_VARIABLE: "YES",
    MTL_FAST_MATH: "YES",
    PRODUCT_NAME: "$(TARGET_NAME)",
    SWIFT_VERSION: "5.0",
  } as const),
  release: Object.freeze({
    DEBUG_INFORMATION_FORMAT: "dwarf-with-dsym",
    ENABLE_NS_ASSERTIONS: "NO",
    MTL_ENABLE_DEBUG_INFO: "NO",
    SWIFT_COMPILATION_MODE: "wholemodule",
    SWIFT_OPTIMIZATION_LEVEL: "-O",
  } as const),
  debug: Object.freeze({
    DEBUG_INFORMATION_FORMAT: "dwarf",
    ENABLE_TESTABILITY: "YES",
    GCC_DYNAMIC_NO_PIC: "NO",
    GCC_OPTIMIZATION_LEVEL: "0",
    GCC_PREPROCESSOR_DEFINITIONS: ["DEBUG=1", "$(inherited)"],
    MTL_ENABLE_DEBUG_INFO: "INCLUDE_SOURCE",
    ONLY_ACTIVE_ARCH: "YES",
    SWIFT_ACTIVE_COMPILATION_CONDITIONS: "DEBUG",
    SWIFT_OPTIMIZATION_LEVEL: "-Onone",
  } as const),
} as const);
