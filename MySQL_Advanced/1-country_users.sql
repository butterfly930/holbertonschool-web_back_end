-- Make a table
-- If table exists, it should not fail
CREATE TABLE IF NOT EXISTS users1 (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    country ENUM('US', 'CO', 'TN') NOT NULL DEFAULT 'US',
    PRIMARY KEY(id)
);
