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
    RequestManager.sendPostRequest('/api/entity/', entityBody).should((response) => {
      let permission = PermissionsParser.assertScope(cy.identity, 'entity', 'create')
      if (permission === null) {
        ResponseAssertion.errorStatusForbidden(response)
      } else {
        ResponseAssertion.successStatusOk(response)
        ResponseAssertion.successBodyCreated(response)
      }
    })
  })
})

