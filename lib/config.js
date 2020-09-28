const fs = require('fs');
const path = require('path');
const stringify = require('json-stable-stringify');

async function loadConfig() {
  const configPath = path.resolve(process.cwd(), 'compaddrc.json');
  const configContent = fs.readFileSync(configPath);
  const configJson = JSON.parse(configContent.toString());
    
  return configJson;
}

async function createConfig(configJson) {
  const configPath = path.resolve(process.cwd(), 'compaddrc.json');
  const configContent = stringify(configJson, { space: '  ' });

  fs.writeFileSync(configPath, configContent, "utf8");
}

module.exports = {
  loadConfig,
  createConfig,
}