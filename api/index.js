const express = require('express');
const cors = require('cors');
require('dotenv').config();
const taxiDataRoutes = require('../src/routes/TaxiRoutes');
const TestRoutes = require('../src/routes/TestRoutes');

const app = express();
const API_URL = process.env.API_URL;

// Middleware
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://www.localhost:3000"]
}));
app.use(express.json());

// Declare the routes
app.use('/', TestRoutes);
app.use('/api', taxiDataRoutes);

// Export the app for Vercel
module.exports = app;