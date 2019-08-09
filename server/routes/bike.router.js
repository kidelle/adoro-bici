const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "bikes";`;
    pool.query(sqlText)
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (error) => {
            console.log(`Error getting bikes. Try again later.`, error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/reserve', (req, res) => {
    console.log('in /reserve POST:', req.body);
    console.log(req.body);
    const bikeToAdd = req.body;
     

});

module.exports = router;