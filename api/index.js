const express = require('express');
const cors = require('cors');
require('dotenv').config();

const taxiDataRoutes = require('../src/routes/TaxiRoutes');
const TestRoutes = require('../src/routes/TestRoutes');

const app = express();

// Middleware
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://www.localhost:3000", "https://ganahpati-fe.vercel.app/"]
}));
app.use(express.json());

// Declare the routes
app.use('/', TestRoutes);
app.use('/api', taxiDataRoutes);

// Export the app for Vercel
module.exports = app;