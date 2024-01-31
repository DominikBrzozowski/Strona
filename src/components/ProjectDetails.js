import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectDetails.css'; // Make sure this path is correct

const ProjectDetails = ({ projectId }) => {
  const [marsWeather, setMarsWeather] = useState(null);
  const [apodImage, setApodImage] = useState(null);
  const [asteroids, setAsteroids] = useState([]);
  const [geomagneticStorms, setGeomagneticStorms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMarsWeather, setShowMarsWeather] = useState(false);
  const [showApodImage, setShowApodImage] = useState(false);
  const [showAsteroids, setShowAsteroids] = useState(false);
  const [showGeomagneticStorms, setShowGeomagneticStorms] = useState(false);

  useEffect(() => {
    const fetchMarsWeather = async () => {
        try {
          const marsApiUrl = 'http://localhost:3001/mars-weather';
          const marsResponse = await axios.get(marsApiUrl);
          setMarsWeather(marsResponse.data);
        } catch (error) {
          console.error('Error fetching Mars weather data:', error);
        }
      };
      

    const fetchApodImage = async () => {
      try {
        const apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=8BUsEDw3mLUBBlo5Xn2DFBn24GyiXaGR6bbew97Y';
        const apodResponse = await axios.get(apodApiUrl);
        setApodImage(apodResponse.data);
      } catch (error) {
        console.error('Error fetching APOD image:', error);
      }
    };

    const fetchAsteroids = async () => {
      try {
        const startDate = new Date().toISOString().slice(0, 10); // Today's date
        const endDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // 7 days after today
        const neoApiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=8BUsEDw3mLUBBlo5Xn2DFBn24GyiXaGR6bbew97Y`;
        const neoResponse = await axios.get(neoApiUrl);
        
        // Sort asteroids by approach date and time
        const sortedAsteroids = neoResponse.data.near_earth_objects[startDate].sort((a, b) => {
          let dateA = new Date(a.close_approach_data[0].close_approach_date_full);
          let dateB = new Date(b.close_approach_data[0].close_approach_date_full);
          return dateA - dateB;
        });
    
        setAsteroids(sortedAsteroids);
      } catch (error) {
        console.error('Error fetching asteroids data:', error);
      }
    };
    

    const fetchGeomagneticStorms = async () => {
      try {
        const startDate = new Date().toISOString().slice(0, 10); // Today's date
        const endDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days after today
          .toISOString()
          .slice(0, 10);
        const gstApiUrl = `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=8BUsEDw3mLUBBlo5Xn2DFBn24GyiXaGR6bbew97Y`;
        const gstResponse = await axios.get(gstApiUrl);
        setGeomagneticStorms(gstResponse.data);
      } catch (error) {
        console.error('Error fetching geomagnetic storms data:', error);
      }
    };

    const fetchData = async () => {
      await Promise.all([
        fetchMarsWeather(),
        fetchApodImage(),
        fetchAsteroids(),
        fetchGeomagneticStorms(),
      ]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const formattedDistance = (distance) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(distance);
  };

  return (
    <div className="project-details">
      <h2>Szczegóły Projektu</h2>
      {loading ? (
        <p className="loading-text">Ładowanie szczegółów projektu...</p>
      ) : (
        <div>
          <div className="api-section">
            <h3 className="api-section-title" onClick={() => setShowMarsWeather(!showMarsWeather)}>Pogoda na Marsie</h3>
            {showMarsWeather && (
              marsWeather && marsWeather.sol_keys ? (
                <div className="api-section-content">
                  <p>Temperatura atmosferyczna: {marsWeather[marsWeather.sol_keys[0]]?.AT?.av ?? 'N/A'} °C</p>
                  <p>Ciśnienie atmosferyczne: {marsWeather[marsWeather.sol_keys[0]]?.PRE?.av ?? 'N/A'} Pa</p>
                  <p>Pozioma prędkość wiatru: {marsWeather[marsWeather.sol_keys[0]]?.HWS?.av ?? 'N/A'} m/s</p>
                </div>
              ) : (
                <p className="no-data-text">Brak dostępnych danych pogodowych na Marsie</p>
              )
            )}

          </div>

          <div className="api-section-apod">
            <h3 className="api-section-title-apod" onClick={() => setShowApodImage(!showApodImage)}>Astronomiczne zdjęcie dnia</h3>
            {showApodImage && (
              apodImage ? (
                <div className="apod-container">
                  <img src={apodImage.url} alt={apodImage.title} className='apod-image' />
                  <p className='apod-description'>{apodImage.explanation}</p>
                </div>
              ) : (
                <p className="no-data-text">Brak dostępnego obrazu APOD</p>
              )
            )}
          </div>

          <div className="api-section">
            <h3 className="api-section-title" onClick={() => setShowAsteroids(!showAsteroids)}>Najbliższe asteroidy</h3>
            {showAsteroids && (
              asteroids.length > 0 ? (
                <div className="api-section-content">
                  <ul className="api-list">
                    {asteroids.map((asteroid) => (
                      <li key={asteroid.id} className="api-list-item">
                        <strong>Nazwa:</strong> {asteroid.name} | 
                        <strong>Data podejścia:</strong> {asteroid.close_approach_data[0].close_approach_date_full} | 
                        <strong>Najbliższa odległość:</strong> {formattedDistance(asteroid.close_approach_data[0].miss_distance.kilometers)} kilometers
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="no-data-text">Brak danych o planetoidach przez następne 7 dni</p>
              )
            )}
          </div>

          <div className="api-section">
            <h3 className="api-section-title" onClick={() => setShowGeomagneticStorms(!showGeomagneticStorms)}>Burze geomagnetyczne</h3>
            {showGeomagneticStorms && (
              geomagneticStorms.length > 0 ? (
                <div className="api-section-content">
                  <ul className="api-list">
                    {geomagneticStorms.map((storm, index) => (
                      <li key={index} className="api-list-item">
                        <strong>Czas rozpoczęcia:</strong> {storm.startTime} | 
                        <strong>Koniec czasu:</strong> {storm.endTime} | 
                        <strong>Poziom intensywności:</strong> {storm.gstID}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="no-data-text">Brak danych o burzach geomagnetycznych w ciągu najbliższych 7 dni</p>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;






















