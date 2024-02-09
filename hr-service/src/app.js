const express = require('express');
const connectDB = require('./utils/db');
const hrRoutes = require('./routes/hrRoutes');
require('dotenv').config();

const app = express();

connectDB();
app.use(express.json());
app.use('/api/hr', hrRoutes);
const PORT = process.env.HR_PORT;
app.listen(PORT, () => console.log(`HR service running on port ${PORT}`));
