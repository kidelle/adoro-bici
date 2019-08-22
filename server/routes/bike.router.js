const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET for find bike component
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "bikes";`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting bikes. Try again later.`, error);
            res.sendStatus(500);
        })
});

// GET for rentals
router.get('/rentals', (req, res) => {
    const sqlText = `SELECT "rentals"."id", "rentals"."customer_id", "rentals"."bike_id", "rentals"."rental_start", "rentals"."duration", "bikes"."description", "bikes"."bike_size", "bikes"."image", "bikes"."rental_rate"
    FROM "rentals"
    JOIN "bikes" ON "bikes"."id" = "rentals"."bike_id"
    WHERE "rentals"."customer_id" = $1;`;
    pool.query(sqlText, [req.user.id])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting rentals. Try again later.`, error);
            res.sendStatus(500);
        })
});

// GET for details of bike
router.get('/reserve', rejectUnauthenticated, (req, res) => {
    console.log(req.query);
    let bikeId = req.query.bike_id;
    const sqlText = `SELECT "bikes"."id", "bikes"."description", "bikes"."bike_size", "bikes"."image",
    "bikes"."rental_rate"
    FROM "bikes"
    WHERE "bikes"."id" = $1;`;
    const values = [bikeId]
    pool.query(sqlText, values)
        .then((response) => {
            console.log('This is the response.', response);
            res.send(response.rows[0]);
        })
        .catch((error) => {
            console.log(`Error selecting bike. Try again later.`, error);
            res.sendStatus(500);
        })
})

/**
 * POST route template
 */
router.post('/user', rejectUnauthenticated, (req, res) => {
    console.log('IN POST', req.body);
    const sqlText = `INSERT INTO rentals(customer_id, bike_id, rental_start, duration)
                        VALUES($1, $2, $3, $4);`;
    pool.query(sqlText,
        [req.user.id,
        req.body.bikeId,
        req.body.date,
        req.body.duration]
    ).then((response) => {
        console.log('This is the response', response);
        res.sendStatus(200);
    })
        .catch((error) => {
            console.log(`ERROR posting bike, try again later.`, error);
            res.sendStatus(500);
        })


});

// DELETE reservation
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let id = req.params.id; // id of the thing to delete
    console.log('Delete route called with id of', id);
    const sqlText = `DELETE FROM "rentals" WHERE "id" = $1;`;
    const values = [id]
    pool.query(sqlText, values)
        .then((response) => {
            console.log('This is the DELETE', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`ERROR deleting reservation, try again later.`, error);
            res.sendStatus(500);
        })

})

// EDIT reservation
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const updateRental = req.body;
    console.log('Edit route called with id of', req.params.id);
    const sqlText = `UPDATE "rentals"
    SET "rental_start" = $1, "duration" = $2
    WHERE id = $3;`;
    const values = [
        updateRental.date,
        updateRental.duration,
        req.params.id
    ];
    pool.query(sqlText, values)
        .then((response) => {
            console.log('This is the EDIT', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`ERROR editing reservation, try again later.`, error);
            res.sendStatus(500);
        })
})

module.exports = router;