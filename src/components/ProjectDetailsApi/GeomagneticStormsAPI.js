import axios from 'axios';

export const fetchGeomagneticStorms = async () => {
  try {
    const startDate = new Date().toISOString().slice(0, 10); // Today's date
    const endDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days after today
      .toISOString()
      .slice(0, 10);
    const gstApiUrl = `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=qhDFQHAgO5A3QoRD27n9sv9Kw7j0KtWkItrPweaq`;
    const response = await axios.get(gstApiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching geomagnetic storms data:', error);
    throw error;
  }
};
