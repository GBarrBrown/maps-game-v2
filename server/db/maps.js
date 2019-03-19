const connection = require('./connection')

module.exports = {
    getNewMaps
}

function getNewMaps(testDb) {
    const db = testDb || connection

    return db('maps')
}