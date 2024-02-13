const express = require('express');
const connectDB = require('./utils/db');
const commonRoutes = require('./routes/commonRoutes');
require('dotenv').config();

const app = express();

connectDB();
app.use(express.json());
app.use('/api/common', commonRoutes);
const PORT = process.env.COMMON_PORT;
app.listen(PORT, () => console.log(`Common service running on port ${PORT}`));
