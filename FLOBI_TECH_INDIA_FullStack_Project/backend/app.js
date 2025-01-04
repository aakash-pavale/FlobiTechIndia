const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

sequelize.sync()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Error connecting to the database:', err));

module.exports = app;
