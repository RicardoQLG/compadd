const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');
const shelljs = require('shelljs');
const config = require('../config');
const { createStructure } = require('../structure');

async function createPage (argv) {
  const configJson = await config.loadConfig();
  const { pages } = configJson;

  configJson.normalized = camelcase(argv.name, {pascalCase: true});
  configJson.path = path.resolve(process.cwd(), pages, configJson.normalized);

  createStructure(configJson, argv);
}

module.exports = (yarg) => yarg.command('page [name]', 'Create a page', () => {}, createPage);