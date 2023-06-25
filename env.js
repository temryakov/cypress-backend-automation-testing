import {} from 'dotenv/config'

const env = {
    auth: {
        login: process.env.AUTH_USER_LOGIN,
        password: process.env.AUTH_USER_PASSWORD,
    },
    stand: process.env.TEST_STAND,
    keycloak: {
        url: process.env.KEYCLOAK_URL,
        clientId: process.env.CLIENT_ID,
        grantType: process.env.GRANT_TYPE
    }
}

export default env