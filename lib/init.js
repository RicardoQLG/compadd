const config = require('./config');

module.exports = (yarg) => yarg.command('init', 'Initialize config', (yargs) => {
  config.createConfig({
    pages: './src/pages',
    components: './src/components',
    typescript: true
  });
});