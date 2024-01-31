import axios from 'axios';

export const fetchApodImage = async () => {
  try {
    const apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=qhDFQHAgO5A3QoRD27n9sv9Kw7j0KtWkItrPweaq';
    const response = await axios.get(apodApiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching APOD image data:', error);
    throw error;
  }
};
