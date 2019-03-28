const connection = require('./connection')

module.exports = {
    getNewLocations
}

function getNewLocations(testDb) {
    const db = testDb || connection

    return db('locations')
}