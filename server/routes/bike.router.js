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

// GET for rentals
router.get('/rentals', (req, res) => {
    const sqlText = `SELECT "rentals"."id", "rentals"."customer_id", "rentals"."bike_id", "rentals"."rental_start", "rentals"."duration", "bikes"."description", "bikes"."bike_size", "bikes"."image", "bikes"."rental_rate"
    FROM "rentals"
    JOIN "bikes" ON "bikes"."id" = "rentals"."bike_id";`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting rentals. Try again later.`, error);
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
        console.log(`Error selecting bike. Try again later.`, error);
        res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/user', (req, res) => {
    console.log('IN POST', req.body);
    let rentalsId = req.body.bikeId;
    let customerId = req.user.id;
    let rental_start = req.body.date;
    let duration = req.body.duration;
    const sqlText = `INSERT INTO rentals(customer_id, bike_id, rental_start, duration)
                        VALUES($1, $2, $3, $4);`;
    pool.query(sqlText, 
    [req.user.id,
    req.body.bikeId,
    req.body.date,
    req.body.duration]
    ).then( (response) => {
        console.log('This is the response', response);
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log(`ERROR posting bike, try again later.`, error);
        res.sendStatus(500);
    })
    
    
});

router.delete('/:id', (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Delete route called with id of', id);
    const sqlText = `DELETE FROM "rentals" WHERE "id" = $1;`;
    const values = [id]
    pool.query(sqlText, values)
        .then( (response) => {
            console.log('This is the DELETE', response);
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log(`ERROR deleting reservation, try again later.`, error);
            res.sendStatus(500);
        })
    
})

module.exports = router;