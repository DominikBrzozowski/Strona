const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;
const NASA_API_KEY = '8BUsEDw3mLUBBlo5Xn2DFBn24GyiXaGR6bbew97Y';

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/mars-weather', async (req, res) => {
  try {
    const apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`;
    const response = await axios.get(apiUrl);

    if (response.data.sol_keys.length === 0) {
      res.status(200).json({ message: 'No Mars weather data available at the moment.' });
    } else {
      const lastSol = response.data.sol_keys[response.data.sol_keys.length - 1];
      res.json(response.data[lastSol]);
    }
  } catch (error) {
    console.error('Error fetching Mars weather data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});





