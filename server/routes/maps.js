const express = require('express')
const router = express.Router()
const { getNewMaps } = require('../db/maps')

// GET /api/v1/maps/new-round
router.get('/new-round', (req, res) => {
    getNewMaps()
    .then((maps) => {
        res.json(maps)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    }) 
})

// POST /api/v1/maps/results/:results


module.exports = router