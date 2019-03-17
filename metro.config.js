/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 */

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = config;
