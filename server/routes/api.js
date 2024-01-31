// server/routes/api.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint for fetching weather data from InSight Mars Weather Service API
router.get('/mars-weather', async (req, res) => {
  try {
    const apiUrl = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching Mars weather data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
