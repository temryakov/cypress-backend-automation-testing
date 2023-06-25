const AuthHelper = require("/cypress/modules/authHelper.js");
const RequestManager = require("/cypress/modules/requestManager.js");
const { achievementQuery } = require("./profilePage.js");
const ResponseAssertion = require("../../modules/responseAssertion.js");

let token; 

before(() => {
  return AuthHelper.login().then(() => {
    token = AuthHelper.getAccessToken(); 
  })
})

describe('profilePage', () => {
  it('getProfile', () => {    
    RequestManager.sendGraphQLRequest(achievementQuery, {"userId": 123}, token).should((response) => {
      ResponseAssertion.successOk(response)
    })
  })
})

