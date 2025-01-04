const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const contact = await Contact.create({ name, email, phone, message });
        res.status(201).json({ message: 'Form submitted successfully', contact });
    } catch (error) {
        res.status(500).json({ error: 'Error saving form submission' });
    }
});

module.exports = router;
