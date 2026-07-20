-- Clear out any existing data to prevent duplicate primary key errors during testing
TRUNCATE TABLE deliveries, routes, inventory RESTART IDENTITY CASCADE;

-- 1. Insert Mock Inventory Data (With Red Bull and Beer)
INSERT INTO inventory (name, quantity, status) VALUES
('Red Bull Original 12oz 24-Pack', 120, 'In Stock'),
('Red Bull Sugarfree 12oz 24-Pack', 65, 'In Stock'),
('Bud Light 24-Pack Cans', 200, 'In Stock'),
('Coors Light 24-Pack Cans', 15, 'Low Stock'),
('Coca-Cola 12oz 24-Pack', 150, 'In Stock'),
('Monster Energy Original', 0, 'Out of Stock');

-- 2. Insert Mock Routes
INSERT INTO routes (route_number, status) VALUES
('ROUTE-101', 'In Progress'),
('ROUTE-102', 'Pending'),
('ROUTE-103', 'Completed');

-- 3. Insert Mock Deliveries linked to those Routes
INSERT INTO deliveries (route_id, address, status) VALUES
(1, '123 North Washington St, Grand Forks, ND', 'Pending'),
(1, '456 Columbia Rd, Grand Forks, ND', 'Delivered'),
(1, '789 32nd Ave S, Grand Forks, ND', 'Failed'),
(2, '555 University Ave, Grand Forks, ND', 'Pending'),
(2, '888 Gateway Dr, Grand Forks, ND', 'Pending'),
(3, '111 Demers Ave, Grand Forks, ND', 'Delivered');