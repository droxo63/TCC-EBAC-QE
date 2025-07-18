const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    specPattern: 'tests/UI/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}, 
    supportFile: false
  },

  // Configuração do Mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    // pasta onde os relatórios serão gerados
    reportDir: 'reports/ui',   
    overwrite: false,
    html: true,
    json: true,
    charts: true
  },

  video: false, 
  screenshotOnRunFailure: true
});
