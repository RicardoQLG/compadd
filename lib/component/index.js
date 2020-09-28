const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');
const shelljs = require('shelljs');
const config = require('../config');
const { createStructure } = require('../structure');

async function createComponent (argv) {
  const configJson = await config.loadConfig();
  const { components } = configJson;

  configJson.normalized = camelcase(argv.name, {pascalCase: true});
  configJson.path = path.resolve(process.cwd(), components, configJson.normalized);

  createStructure(configJson, argv);
}

module.exports = (yarg) => yarg.command('component [name]', 'Create a component', () => {}, createComponent);