const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// If you added custom settings (images, SVG, etc.), modify *config* here
// Example for SVG support:
// const { mergeConfig } = require("metro-config");
// const svgConfig = {
//   transformer: {
//     babelTransformerPath: require.resolve("react-native-svg-transformer"),
//   },
//   resolver: {
//     assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
//     sourceExts: [...config.resolver.sourceExts, "svg"],
//   },
// };
// module.exports = mergeConfig(config, svgConfig);

module.exports = config;
