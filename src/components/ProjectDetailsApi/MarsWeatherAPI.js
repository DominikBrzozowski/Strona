import axios from 'axios';

export const fetchMarsWeather = async () => {
  try {
    const marsApiUrl = 'http://localhost:3001/mars-weather';
    const response = await axios.get(marsApiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching Mars weather data:', error);
    throw error;
  }
};
