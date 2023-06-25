const AuthHelper = require("../../modules/authHelper");
const PermissionsParser = require("../../modules/PermissionsParser");
const RequestManager = require("../../modules/RequestManager");
const ResponseAssertion = require("../../modules/responseAssertion")
const { entityBody } = require("./entity.js");

let token; 
let identity; 

before(() => {
  return AuthHelper.login().then(() => {
    token = AuthHelper.getAccessToken(); 
  })
})

before(() => {
  RequestManager.sendIdentityRequest(token).then((response) => {
    identity = response 
  })
})

describe('entity', () => {
  it('Entity test case #1', () => {    
    RequestManager.sendPostRequest('/api/entity/', entityBody, token).should((response) => {
      let permission = PermissionsParser.assertScope(identity, 'entity', 'create')
      if (permission === null) {
        ResponseAssertion.errorForbidden(response)
      } else {
        ResponseAssertion.successOk(response)
      }
    })
  })
})

