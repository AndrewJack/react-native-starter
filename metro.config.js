const modulePaths = require('./modulePaths');
const resolve = require('path').resolve;
const fs = require('fs');

const config = {
  transformer: {
    getTransformOptions: () => {
      const moduleMap = {};
      modulePaths.forEach(path => {
        if (fs.existsSync(path)) {
          moduleMap[resolve(path)] = true;
        }
      });
      return {
        preloadedModules: moduleMap,
        transform: { inlineRequires: { blacklist: moduleMap } },
      };
    },
  },
};

module.exports = config;
