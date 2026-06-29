INSERT INTO inventory (name, quantity, status) VALUES
('Pallets', 150, 'In Stock'),
('Shrink Wrap Rolls', 45, 'In Stock'),
('Forklift Batteries', 3, 'Low Stock');

INSERT INTO routes (route_number, status)
VALUES ('ROUTE-101', 'In Progress');

INSERT INTO deliveries (route_id, address, status)
VALUES
(1, '123 Main St, Grand Forks', 'Pending'),
(1, '456 University Ave, Grand Forks', 'Delivered');

SELECT
    r.route_number,
    r.status AS route_status,
    d.address,
    d.status AS delivery_status
FROM routes r
JOIN deliveries d ON r.id = d.route_id