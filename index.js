/**
 * @flow
 */

import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// const modules = require.getModules();
// const moduleIds = Object.keys(modules);
// const loadedModuleNames = moduleIds
//   .filter(moduleId => modules[moduleId].isInitialized)
//   .map(moduleId => modules[moduleId].verboseName);
// const waitingModuleNames = moduleIds
//   .filter(moduleId => !modules[moduleId].isInitialized)
//   .map(moduleId => modules[moduleId].verboseName);

// // make sure that the modules you expect to be waiting are actually waiting
// console.log(
//   'loaded:',
//   loadedModuleNames.length,
//   'waiting:',
//   waitingModuleNames.length
// );

// // grab this text blob, and put it in a file named packager/modulePaths.js
// console.log(`module.exports = ${JSON.stringify(loadedModuleNames.sort())};`);
