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

// GET for details of bike
router.get('/reserve', (req, res) => {
    console.log(req.query);
    let bikeId = req.query.bike_id;
    const sqlText = `SELECT "bikes"."id", "bikes"."description", "bikes"."bike_size", "bikes"."image",
    "bikes"."rental_rate"
    FROM "bikes"
    WHERE "bikes"."id" = $1;`;
    const values = [bikeId]
    pool.query(sqlText, values)
    .then( (response) => {
        console.log('This is the response.', response);
        res.send(response.rows[0]);
    })
    .catch( (error) => {
        console.log(`Error selecting bike.`, error);
        res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;