module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@navigations': './src/navigations',
          '@pages': './src/pages',
          '@themes': './src/themes',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
}
