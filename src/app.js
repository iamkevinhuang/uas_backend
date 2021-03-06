const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const programRoutes = require('./routes/program');

const app = express();


// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use('/api', [authRoutes, studentRoutes, programRoutes]);

module.exports = app;