const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: 'tests/UI/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false
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
