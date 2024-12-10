const app = require("../src/app"); // Import your Express app
const { createServer } = require("@vercel/node"); // Required for Vercel serverless functions

// Export the serverless function
module.exports = createServer(app);