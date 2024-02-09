const express = require('express');
const connectDB = require('./utils/db');
const applicantRoutes = require('./routes/applicantRoutes');
require('dotenv').config();

const app = express();

connectDB();
app.use(express.json());
app.use('/api/applicant', applicantRoutes);
const PORT = process.env.APPLICANT_PORT;
app.listen(PORT, () => console.log(`Applicant service running on port ${PORT}`));
