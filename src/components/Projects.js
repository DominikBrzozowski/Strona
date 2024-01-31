// client/src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Projects = () => {
  return (
    <div className='common-container'>
      <h2 className='common-title'>Strona projektowa</h2>
      <p className='common-text'>
        <h3>Oto krótki opis naszych projektów wykorzystujących API NASA:</h3>
        <h3>1. Pogoda na Marsie:</h3> 
        <p>Otrzymujemy dane o aktualnych warunkach atmosferycznych na Czerwonej Planecie, co pozwala na lepsze zrozumienie jej klimatu.</p>
        <h3>2. Astronomy Picture of the Day (APOD):</h3>
        <p>Codziennie prezentujemy fascynujący obraz kosmosu, wraz z opisem od astronomów.</p>
        <h3> 3. Najbliższe Asteroide:</h3> 
        <p>Śledzimy obiekty zbliżające się do Ziemi, dostarczając informacji o ich rozmiarach, prędkości i trajektorii.</p>
        <h3>4. Geomagnetyczne Burze:</h3> 
        <p>Monitorujemy aktywność słoneczną i jej wpływ na Ziemię, informując o potencjalnych burzach geomagnetycznych.</p>
        <h3>Odkryj szczegóły tych projektów i zanurz się w głębi kosmicznych eksploracji.</h3>
      </p>
      {/* Dodanie przycisku do przejścia do strony ProjectDetails */}
      <Link to="/project-details" className="btn">
        Zobacz szczegóły projektu
      </Link>
    </div>
  );
};

export default Projects;



