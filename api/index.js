const express = require('express');
const cors = require('cors');
require('dotenv').config();

const taxiDataRoutes = require('../src/routes/TaxiRoutes');
const TestRoutes = require('../src/routes/TestRoutes');

const app = express();

// Middleware
// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:3000", "http://www.localhost:3000"]
// }));


const allowedOrigins = [
    'https://ganahpati-nznp2igww-edgarlawrences-projects.vercel.app', // Frontend domain
  ];
  
  app.use(cors({
      origin: (origin, callback) => {
          if (!origin || allowedOrigins.includes(origin)) {
              callback(null, true);
          } else {
              callback(new Error('Not allowed by CORS'));
          }
      },
      credentials: true,
  }));
app.use(express.json());

// Declare the routes
app.use('/', TestRoutes);
app.use('/api', taxiDataRoutes);

// Export the app for Vercel
module.exports = app;