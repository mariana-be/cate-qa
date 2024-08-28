//Configuração de tamanho da tela e timeout da automação
//Adicionada a URL e o testIsolation foi adicionado para melhorar a realização de teste e2e
//Documentação sobre testIsolation = https://docs.cypress.io/guides/core-concepts/test-isolation

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 100000,
  responseTimeout: 100000,
  e2e: {
    baseUrl: 'https://fm-site-br/',
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

