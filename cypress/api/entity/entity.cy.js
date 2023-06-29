const AuthHelper = require("../../modules/authHelper");
const PermissionsParser = require("../../modules/PermissionsParser");
const RequestManager = require("../../modules/RequestManager");
const ResponseAssertion = require("../../modules/ResponseAssertion")
const { entityBody } = require("./entity.js");

before(() => {
  return AuthHelper.login()
})

before(() => {
  return AuthHelper.getIdentity()
})

describe('entity', () => {
  it('Entity test case #1', () => {    
    let permission = PermissionsParser.assertScope(cy.identity, 'entity', 'create')
    if (permission === null) {
      RequestManager.sendPostRequest('/api/entity/', entityBody).should((response) => {
      ResponseAssertion.errorStatusForbidden(response)
    })
    } else {
      RequestManager.sendPostRequest('/api/entity/', entityBody).should((response) => {
        ResponseAssertion.successStatusOk(response)
        ResponseAssertion.successBodyCreated(response)
      })
    }
  })
})

