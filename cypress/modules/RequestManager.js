class RequestManager {
    buildRequestData(method, url, body, accessToken) {
        let requestData = {
            method: method,
            url: url,
            failOnStatusCode: false,
            headers: {
                Authorization: 'Bearer ' + accessToken,
                Connection: 'keep-alive',
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: body
        }
        cy.log(method)
        return requestData
    }
    sendGetRequest = (url, accessToken) => 
        cy.api(this.buildRequestData('GET', url, null, accessToken))

    sendPostRequest = (url, body, accessToken) => 
        cy.api(this.buildRequestData('POST', url, body, accessToken))

    sendPatchRequest = (url, body, accessToken) => 
        cy.api(this.buildRequestData('PATCH', url, body, accessToken))

    sendPutRequest = (url, body, accessToken) => 
        cy.api(this.buildRequestData('PATCH', url, body, accessToken))

    sendDeleteRequest = (url, accessToken) => 
        cy.api(this.buildRequestData('DELETE', url, null, accessToken))
        
    sendGraphQLRequest = (body, variables, accessToken) => 
    cy.api(this.buildRequestData('POST', '/api/gql', 
        {
            "query": body,
            "variables": variables
        }, 
        accessToken))
    
    sendIdentityRequest = (accessToken) => 
        cy.api(this.buildRequestData('GET', '/api/identity', null, accessToken))
}

module.exports = new RequestManager()