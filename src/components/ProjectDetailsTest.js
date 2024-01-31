import React, { useState } from 'react';
import './ProjectDetails.css';
import { fetchMarsWeather } from './ProjectDetailsApi/MarsWeatherAPI';
import { fetchApodImage } from './ProjectDetailsApi/ApodImageAPI';
import { fetchAsteroids } from './ProjectDetailsApi/AsteroidsAPI';
import { fetchGeomagneticStorms } from './ProjectDetailsApi/GeomagneticStormsAPI';

const ProjectDetails = () => {
  const [loading, setLoading] = useState(false);
  const [marsWeather, setMarsWeather] = useState(null);
  const [apodImage, setApodImage] = useState(null);
  const [asteroids, setAsteroids] = useState(null);
  const [geomagneticStorms, setGeomagneticStorms] = useState(null);

  const fetchData = async (apiType) => {
    try {
      setLoading(true);
      switch (apiType) {
        case 'marsWeather':
          const marsWeatherData = await fetchMarsWeather();
          setMarsWeather(marsWeatherData);
          break;
        case 'apodImage':
          const apodImageData = await fetchApodImage();
          setApodImage(apodImageData);
          break;
        case 'asteroids':
          const asteroidsData = await fetchAsteroids();
          setAsteroids(asteroidsData);
          break;
        case 'geomagneticStorms':
          const geomagneticStormsData = await fetchGeomagneticStorms();
          setGeomagneticStorms(geomagneticStormsData);
          break;
        default:
          break;
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Project Details</h2>
      <div className="buttons-container">
        <button onClick={() => fetchData('marsWeather')}>Fetch Mars Weather</button>
        <button onClick={() => fetchData('apodImage')}>Fetch Astronomy Picture of the Day</button>
        <button onClick={() => fetchData('asteroids')}>Fetch Closest Asteroids</button>
        <button onClick={() => fetchData('geomagneticStorms')}>Fetch Geomagnetic Storms</button>
      </div>
      {loading ? (
        <p>Loading project details...</p>
      ) : (
        <div className="details-container">
          {/* Tutaj umieść kod do wyświetlania danych */}
          {/* Przykład: */}
          {marsWeather && (
            <div>
              <h3>Mars Weather</h3>
              <p>Atmospheric Temperature: {marsWeather.atmosphericTemperature}</p>
              <p>Atmospheric Pressure: {marsWeather.atmosphericPressure}</p>
              <p>Horizontal Wind Speed: {marsWeather.horizontalWindSpeed}</p>
            </div>
          )}
          {apodImage && (
            <div>
              <h3>Astronomy Picture of the Day</h3>
              <img src={apodImage.url} alt={apodImage.title} />
              <p>{apodImage.explanation}</p>
            </div>
          )}
          {asteroids && (
            <div>
              <h3>Closest Asteroids</h3>
              {/* Wyświetl asteroidy tutaj */}
            </div>
          )}
          {geomagneticStorms && (
            <div>
                <h3>Geomagnetic Storms</h3>
                    <ul>
                        {geomagneticStorms.map((storm, index) => (
                        <li key={index}>
                        <p>Date: {storm.startDate} - {storm.endDate}</p>
                        <p>Geomagnetic Storm Type: {storm.stormType}</p>
                        <p>Intensity Level: {storm.intensity}</p>
                        </li>
                        ))}
                    </ul>
            </div>
           )}
  
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
