#!/usr/bin/env node

const yargs = require('yargs');

const init = require('../lib/init');
const page = require('../lib/page');
const component = require('../lib/component');

async function main ()  {
  const yargConstructor = yargs
    .usage('Create pages and components')
    .help('help').alias('help', 'h')
    .version('version', '1.0.0').alias('version', 'V');
  
  init(yargConstructor);
  page(yargConstructor);
  component(yargConstructor);

  const argv = yargConstructor.argv;
}

main();