class ResponseAssertion {
    errorStatusBadRequest(response) {
        expect(response.status).to.eq(400)
    }
    errorStatusUnathorized(response) {
        expect(response.status).to.eq(401)
    }
    erroStatusForbidden(response) {
        expect(response.status).to.eq(403)
    } 
    errorStatusNotFound(response) {
        expect(response.status).to.eq(404)
    }
    errorStatusMethodNotAllowed(response) {
        expect(response.status).to.eq(405)
    }
    successStatusOk(response) {
        expect(response.status).to.eq(200)
    }
    successStatusCreated(response) {
        expect(response.status).to.eq(201)
    }

    assertBodyStructure(responseBody, assertionBody) {
        for (let key in assertionBody) {
            if (assertionBody[key] instanceof Object && !Array.isArray(assertionBody[key])) {
                this.assertBodyStructure(responseBody[key], assertionBody[key]); // If field contains nested object then call recursive.
            } else {
                let fieldAssertion = assertionBody[key];

                /* If assertion is provided as array, then first element is type of assertion and second - is expected value  */

                if (Array.isArray(fieldAssertion)) { 
                switch (fieldAssertion[0]) { 
                    case 'equals':
                        expect(responseBody).to.have.property(key).which.equals(fieldAssertion[1]) // Check whether the field is equal to certain value
                        break;
                    default:
                        break;
                    }
                } else {
                    switch (fieldAssertion) {
                        case 'exists':
                            expect(responseBody).to.have.property(key) // Check whether the field exists
                            break;
                        case 'string':
                            expect(responseBody[key]).to.be.a('string') // Check whether the field is string
                            break;
                        case 'number':
                            expect(responseBody[key]).to.be.a('number') // Check whether the field is number
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    successBodyCreated(response) {
        const assertions = {
            success: ['equals', true],
            message: ['equals', 'Successfully created'],
            data: {
                id: 'number',
                createdAt: 'number',
            },
        };
        this.assertBodyStructure(response.body, assertions);
    }
}

module.exports = new ResponseAssertion()