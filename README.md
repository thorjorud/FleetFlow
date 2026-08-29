# FleetFlow

A full-stack logistics and route management web application built to streamline inventory tracking, route planning, and delivery fulfillment status updates. Inspired by real-world route helper experience with Viking Coca-Cola, this project was developed as an independent summer engineering project using the PERN stack.

---

## Tech Stack & Architecture

FleetFlow follows a strict **Model-View-Controller (MVC)** architectural pattern inside a modular `backend/src/` directory to ensure separation of concerns, maintainable code organization, and predictable API routing.

*   **Frontend:** React (Vite)
*   **Backend:** Node.js, Express.js
*   **Database:** PostgreSQL (managed via `pg` connection pool with custom SQL schemas and seed data)
*   **Data Validation:** Zod schema validation

---

## Project Structure
This repository contains both the frontend client and the backend API separated into root-level directories.
```text
fleetflow/
├── backend/              # Node.js, Express, and PostgreSQL API
├── frontend/             # React (Vite) client application
└── .gitignore            # Root repository git ignore rules
```
### **Backend Directory Breakdown**

```text
backend/
├── src/
│   ├── controllers/      # Request handlers for deliveries, inventory, & routes
│   ├── database/         # PostgreSQL connection pool (db.js), schema, & seed files
│   ├── middleware/       # Zod schemas and request validation middleware
│   ├── models/           # Database query layers for data access
│   └── routes/           # Express API route declarations
├── .env                  # Environment variables (git-ignored)
├── package.json
└── server.js             # Application entry point
```
### **Frontend Directory Breakdown**

```text
frontend/
├── src/
│   ├── components/       # Reusable UI & dashboard components (DeliveryDashboard, InventoryForm, InventoryTable)
│   ├── services/         # API service modules for backend communication (deliveries, inventory, routes)
│   ├── App.jsx           # Main application root component
│   └── main.jsx          # React application entry point
├── package.json
└── vite.config.js        # Vite bundler configuration
```

---

## API Endpoints & Modules

### **1. Deliveries** (`/api/deliveries`)
*   `GET /api/deliveries` - Retrieve all delivery records ordered by ID ascending
*   `GET /api/deliveries/:id` - Fetch a single delivery record by its unique ID
*   `PATCH /api/deliveries/:id/status` - Update the status of a specific delivery record (Validated via Zod)

### **2. Inventory** (`/api/inventory`)
*   `GET /api/inventory` - Retrieve all inventory items ordered by ID ascending
*   `GET /api/inventory/:id` - Fetch a single inventory item by its unique ID
*   `POST /api/inventory` - Create a new inventory record (Validated via Zod)
*   `PUT /api/inventory/:id` - Update an existing inventory record completely (Validated via Zod)
*   `DELETE /api/inventory/:id` - Delete an inventory record by ID

### **3. Routes** (`/api/routes`)
*   `GET /api/routes` - Retrieve all route schedules ordered by ID ascending
*   `GET /api/routes/:id` - Fetch a single route record by its unique ID
*   `POST /api/routes` - Create a new route entry (Validated via Zod)
*   `PATCH /api/routes/:id/status` - Update the status of a specific route (Validated via Zod)
*   `DELETE /api/routes/:id` - Delete a route configuration by ID

---

## Getting Started & Local Setup

### **Prerequisites**
*   [Node.js](https://nodejs.org/) installed locally
*   PostgreSQL installed and running locally (or managed via pgAdmin)

### **1. Clone the Repository**
```bash
git clone https://github.com/thorjorud/fleetflow.git
cd fleetflow/backend
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a .env file in the root of the backend/ directory and add your configuration:
```bash
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=fleetflow
```

### **4. Initialize the Database**
Set up your relational tables and seed data using the SQL scripts provided in ```src/database/```:
* Run ```schema.sql``` to create your inventory, routes, and deliveries tables.
* Run ```seeds.sql``` to populate initial test data.

### **5. Run the Development Server**
Start the server with hot-reloading:
```bash
npm run dev
```

---

## Frontend

### **Frontend Architecture**
*   **Client Framework:** Built with React and bundled via Vite for high-performance hot-module replacement.
*   **API Services:** Modular service files (`deliveriesApi.js`, `inventoryApi.js`, `routesApi.js`) handle asynchronous HTTP requests to the backend server.
*   **UI Components:** Includes real-time dashboard tracking, inventory tables, and dynamic form management.

### **Running the Frontend Locally**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---
