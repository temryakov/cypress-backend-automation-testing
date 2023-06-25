class AuthHelper {
  constructor() {
    this.accessToken = null;
  }
  
  login() {
    return cy.request({
      method: 'POST',
      url: Cypress.env('keycloak').url,
      failOnStatusCode: false,
      form: true,
      body: {
        username: Cypress.env('login'),
        password: Cypress.env('password'),
        grant_type: Cypress.env('keycloak').grantType,
        client_id: Cypress.env('keycloak').clientId,
      },
    }).then((response) => {
      if (response.body && response.body.access_token) {
        this.accessToken = response.body.access_token;
      }
    });
  }
  
  getAccessToken() {
    return this.accessToken;
  }
}
  
module.exports = new AuthHelper();
  