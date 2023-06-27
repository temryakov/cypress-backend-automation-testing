class RequestManager {
    buildRequestData(method, url, body = null) {
        let requestData = {
            method: method,
            url: url,
            failOnStatusCode: false,
            headers: {
                Authorization: 'Bearer ' + cy.auth.accessToken,
                Connection: 'keep-alive',
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: body
        }
        cy.log(method)
        return requestData
    }
    sendGetRequest = (url) =>
        cy.api(this.buildRequestData('GET', url))

    sendPostRequest = (url, body) =>
        cy.api(this.buildRequestData('POST', url, body))

    sendPatchRequest = (url, body) =>
        cy.api(this.buildRequestData('PATCH', url, body))

    sendPutRequest = (url, body) =>
        cy.api(this.buildRequestData('PATCH', url, body))

    sendDeleteRequest = (url) =>
        cy.api(this.buildRequestData('DELETE', url))
        
    sendGraphQLRequest = (body, variables) =>
    cy.api(this.buildRequestData('POST', '/api/gql', 
        {
            "query": body,
            // "operationName": "...",
            "variables": variables
        }))
}

module.exports = new RequestManager()