CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS Destinations (
    destination_id SERIAL PRIMARY KEY,
    destination_name VARCHAR(100) NOT NULL,
    country VARCHAR(50),
    city VARCHAR(50),
    description TEXT,
    average_cost DECIMAL(10, 2)
);

CREATE TABLE IF NOT EXISTS Hotels (
    hotel_id SERIAL PRIMARY KEY,
    hotel_name VARCHAR(100) NOT NULL,
    destination_id INT REFERENCES Destinations(destination_id) ON DELETE CASCADE,
    address TEXT,
    contact_number VARCHAR(15),
    price_per_night DECIMAL(10, 2),
    rating DECIMAL(2, 1) CHECK (rating BETWEEN 0 AND 5)
);