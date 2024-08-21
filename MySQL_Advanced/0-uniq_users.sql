-- Make a table
-- If table exist, you should not fail
CREATE TABLE IF NOT EXISTS users (
  id int  AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255)
);

INSERT INTO users (email, name) VALUES ('bob@dylan.com', 'Bob');
INSERT INTO users (email, name) VALUES ('sylvie@dylan.com', 'Sylvie');
