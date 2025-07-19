const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
   specPattern: 'tests/UI/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/UI/cypress/support/index.js',
    fixturesFolder: 'tests/UI/cypress/fixtures',
    baseUrl: 'http://lojaebac.ebaconline.art.br',
  },

  // Configuração do Mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/ui',   // pasta onde os relatórios serão gerados
    overwrite: false,
    html: true,
    json: true,
    charts: true
  },

  video: false, 
  screenshotOnRunFailure: true
});
