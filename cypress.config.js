const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
   specPattern: 'tests/UI/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/UI/cypress/support/index.js',
    fixturesFolder: 'tests/UI/cypress/fixtures',
    baseUrl: 'http://lojaebac.ebaconline.art.br',
  },

 
  reporter: 'mochawesome',
 reporterOptions: {
  reportDir: 'reports/ui',
  overwrite: false,
  html: false,   
  json: true,
  charts: true
}
,

  video: false, 
  screenshotOnRunFailure: true
});
