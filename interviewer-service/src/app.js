const express = require('express');
const connectDB = require('./utils/db');
const interviewerRoutes = require('./routes/interviewerRoutes');
require('dotenv').config();

const app = express();

connectDB();
app.use(express.json());
app.use('/api/interviewer', interviewerRoutes);
const PORT = process.env.INTERVIEWER_PORT;
app.listen(PORT, () => console.log(`Interviewer service running on port ${PORT}`));
