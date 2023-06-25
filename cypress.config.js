import { defineConfig } from 'cypress'
import env from "./env.js"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/**/**/**/*.cy.js',
    baseUrl: env.stand,
    screenshotOnRunFailure: false,
   },
  env: {
    login: env.auth.login,
    password: env.auth.password,
    keycloak: {
      url: env.keycloak.url,
      clientId: env.keycloak.clientId,
      grantType: env.keycloak.grantType,
    }
  },
  video: false,
});