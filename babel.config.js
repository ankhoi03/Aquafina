module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
],
};
