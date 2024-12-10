const { createServer } = require('@vercel/node'); // Import Vercel's Node.js adapter
const app = require('./index'); // Import your Express app

// Export as a serverless function
module.exports = createServer(app);