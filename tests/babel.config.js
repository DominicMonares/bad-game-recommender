// only used for testing purposes
// tests won't run unless this is in root
module.exports = {
  "presets": [
    '@babel/preset-env',
    '@babel/preset-react',
    'module:metro-react-native-babel-preset'
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ],
  "sourceMaps": true
};