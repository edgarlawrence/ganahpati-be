// app.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const taxiDataRoutes = require('./routes/TaxiRoutes');
const TestRoutes = require('/routes/TestRoutes')

const app = express();
const PORT = process.env.PORT || 5000;
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