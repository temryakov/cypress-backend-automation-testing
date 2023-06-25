class ResponseAssertion {
    errorBadRequest(response) {
        expect(response.status).to.eq(400)
    }
    errorUnathorized(response) {
        expect(response.status).to.eq(401)
    }
    errorForbidden(response) {
        expect(response.status).to.eq(403)
        expect(response.body).to.deep.equal({
            "success": false,
            "message": "Not enough permissions"
        })
    } 
    errorNotFound(response) {
        expect(response.status).to.eq(404)
    }
    errorMethodNotAllowed(response) {
        expect(response.status).to.eq(405)
    }
    successOk(response) {
        expect(response.status).to.eq(200)
    }
    successCreated(response) {
        expect(response.status).to.eq(201)
    }
}

module.exports = new ResponseAssertion()