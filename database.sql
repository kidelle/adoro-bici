
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE bikes
(
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (20) NOT NULL,
    "description" VARCHAR (300) NOT NULL,
    "bike_size" VARCHAR (20) NOT NULL,
    "image" VARCHAR (150) NOT NULL,
    "rental_rate" VARCHAR
);

CREATE TABLE customers
(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (20) NOT NULL,
    "last_name" VARCHAR (20) NOT NULL,
    "street_address" VARCHAR (20) NOT NULL,
    "city" VARCHAR (50) NOT NULL,
    "state" VARCHAR (2) NOT NULL,
    "zip_code" VARCHAR (20) NOT NULL,
    "phone_number" VARCHAR (30) NOT NULL,
    "email" VARCHAR (100) NOT NULL
);

CREATE TABLE rentals
(
    "id" SERIAL PRIMARY KEY,
    "customer_id" INTEGER,
    "bike_id" INTEGER,
    "rental_start" TIMESTAMP,
    "duration" VARCHAR
);

CREATE TABLE login_info
(
    "id" SERIAL PRIMARY KEY,
    "user_name" VARCHAR,
    "password" VARCHAR,
    "custonmer_id" VARCHAR
);

CREATE TABLE orders
(
    "id" SERIAL PRIMARY KEY,
    "customer_id" INTEGER,
    "item_description" VARCHAR
);

CREATE TABLE line_item
(
    "id" SERIAL PRIMARY KEY,
    "order_id" INTEGER,
    "product_id" INTEGER
);

CREATE TABLE products
(
    "id" SERIAL PRIMARY KEY,
    "item_description" VARCHAR,
    "item_price" NUMERIC,
    "item_image" VARCHAR,
    "item_quantity" INTEGER
);

INSERT INTO "bikes"
    ("type", "description", "bike_size", "image", "rental_rate")
VALUES
    ('Bicycle', 'Kona - Rove Street - Road Bike', 'Size: 52', 'images/bike_black.jpg', '$10/hour, $36/day'),
    ('Bicycle', 'Peugeot - Park Street - Road Bike', 'Size: 50', 'images/bike-peugeot.jpg', '$10/hour, $36/day'),
    ('Bicycle', 'Kona - Maple Street - Road Bike', 'Size: 48', 'images/bike_white.jpg', '$10/hour, $36/day');


INSERT INTO "bikes"
    ("type", "description", "bike_size", "image", "rental_rate")
VALUES
    ('Moped', '2015 Taotao Ruckster', 'Size: 50cc', 'images/moped_pink.jpg', '$28/hour, $105/day'),
    ('Moped', '2006 Vespa GTS', 'Size: 50cc', 'images/moped_blue.jpg', '$28/hour, $105/day'),
    ('Moped', '2017 Vespa GTV', 'Size: 125cc', 'images/moped_red.jpg', '$28/hour, $105/day'),
    ('Moped', '2003 Aprilia Atlantic Maxi', 'Size: 125cc', 'images/moped_orange.jpg', '$28/hour, $105/day');
