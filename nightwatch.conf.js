var seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
})

module.exports = {
  // Loads nightwatch-cucumber configuration into main nightwatch.js conf
  // src_folders: [nightwatchCucumber(nightwatchCucumberConf)],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  live_output: false,
  disable_colors: false,

  // Sets configuration for Selenium Server
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },

  // Sets config options for different testing environments defined by the user
  test_settings: {
    default: {
      launch_url: 'https://labs.moduscreate.com/',
      silent: true,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'verbose']
        }
      },
      'screenshots': {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: 'reports/screenshots'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
}
