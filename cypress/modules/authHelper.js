const RequestManager = require("./RequestManager.js");

class AuthHelper {
    constructor() {
        this.accessToken = null;
        cy.auth = {};
        cy.identity = {};
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
                cy.auth.accessToken = this.accessToken;
            }
        });
    }

    getIdentity() {
        cy.api(RequestManager.buildRequestData('GET', '/api/v2/identity'))
            .then((response) => {
                cy.identity = response.body.data
            })
    }
}

module.exports = new AuthHelper();
  