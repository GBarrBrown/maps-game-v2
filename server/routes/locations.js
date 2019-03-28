const express = require('express')
const router = express.Router()
const { getNewLocations } = require('../db/locations')

// GET /api/v1/locations/newLocations
router.get('/newLocations', (req, res) => {
    getNewLocations()
    .then((locations) => {
        res.json(locations)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

module.exports = router