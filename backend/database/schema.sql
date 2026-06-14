CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    status VARCHAR(50) DEFAULT 'In Stock'
);

INSERT INTO inventory (name, quantity, status) VALUES
('Pallets', 150, 'In Stock'),
('Shrink Wrap Rolls', 45, 'In Stock'),
('Forklift Batteries', 3, 'Low Stock');