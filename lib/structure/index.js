const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');
const shelljs = require('shelljs');

const getIndexModel = (ext, componentName) => (fs
  .readFileSync(path.resolve(__dirname, `../models/index.${ext}`))
  .toString()
  .replace(/\$\{componentName\}/g, componentName)
);

const getStyleModel = (ext) => (fs
  .readFileSync(path.resolve(__dirname, `../models/styles.${ext}`))
  .toString()
);

async function createIndexFile(configJson) {
  const { normalized } = configJson;
  const ext = configJson.typescript ? 'tsx' : 'js';
  const file = path.resolve(configJson.path, `index.${ext}`);
  fs.writeFileSync(file, getIndexModel(ext, normalized));
}

async function createStyleFile(configJson) {
  const ext = configJson.typescript ? 'ts' : 'js';
  const file = path.resolve(configJson.path, `styles.${ext}`);
  fs.writeFileSync(file, getStyleModel(ext));
}

async function createStructure (configJson, argv) {
  shelljs.mkdir('-p', configJson.path);

  const indexPromise = createIndexFile(configJson);
  const stylePromise = createStyleFile(configJson);

  await Promise.all([indexPromise, stylePromise]);
}

module.exports = {
  createStructure
}