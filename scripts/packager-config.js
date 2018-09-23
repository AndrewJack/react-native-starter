module.exports = {
  transformer: {
    getTransformOptions: () => {
      return {
        transform: { inlineRequires: true },
      };
    },
  },
}
