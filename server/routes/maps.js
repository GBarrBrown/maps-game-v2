const express = require('express')
const router = express.Router()

// GET /api/v1/maps/new-round
router.get('/new-round', (req, res) => {
    res.json([
        {name: "Paris",
        lat_long: [51.505, -0.09],
        zoom: 7
    },
    "Welly", "Taupo", "Bangkok"
    ])
})

// POST /api/v1/maps/results/:results


module.exports = router