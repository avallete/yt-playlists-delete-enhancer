/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path')

const DIST_PATH = path.resolve(path.join(__dirname, '..', '..', 'dist'))

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // Load userscript as webextension for E2E testing
  // WARNING: headless mode only work for Electron and Firefox browser
  // Chrome must be run with --headed option.
  on('before:browser:launch', async (_, launchOptions) => {
    launchOptions.extensions.push(DIST_PATH)
    return launchOptions
  })
}
