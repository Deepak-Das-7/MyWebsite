const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolioRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/', portfolioRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
