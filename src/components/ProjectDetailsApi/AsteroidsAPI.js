import axios from 'axios';

export const fetchAsteroids = async () => {
  try {
    const startDate = new Date().toISOString().slice(0, 10); // Today's date
    const endDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days after today
      .toISOString()
      .slice(0, 10);
    const neoApiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=qhDFQHAgO5A3QoRD27n9sv9Kw7j0KtWkItrPweaq`;
    const response = await axios.get(neoApiUrl);
    return response.data.near_earth_objects[startDate];
  } catch (error) {
    console.error('Error fetching asteroids data:', error);
    throw error;
  }
};
