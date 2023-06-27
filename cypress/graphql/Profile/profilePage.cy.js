const AuthHelper = require("/cypress/modules/authHelper.js");
const RequestManager = require("/cypress/modules/requestManager.js");
const { achievementQuery } = require("./profilePage.js");
const ResponseAssertion = require("../../modules/responseAssertion.js");

before(() => {
  return AuthHelper.login()
})

before(() => {
  return AuthHelper.getIdentity()
})

describe('profilePage', () => {
  it('getProfile', () => {
      RequestManager.sendGraphQLRequest(
          achievementQuery,
          {"userId": cy.identity.user.id}
      )
          .then((response) => {
              ResponseAssertion.successOk(response)
          })
  })
})
