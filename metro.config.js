/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

var getBlacklistRE = function getBlacklistRE() {
  return new RegExp(
    '(.*\\android\\.*|.*\\__fixtures__\\.*|node_modules[\\\\]react[\\\\]dist[\\\\].*|website\\node_modules\\.*|heapCapture\\bundle.js|.*\\__tests__\\.*)$',
  )
}

const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      blacklistRE: getBlacklistRE(),
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  }
})()
