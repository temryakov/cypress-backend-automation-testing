const achievementQuery = 
`query achievementQuery($userId: Int) {
    achievements(userId: $userId) {
        id
        code
    }
}`

module.exports = { achievementQuery };