// client/src/components/Home.js
import React from 'react';
import './Style.css';

const Home = () => {
  // This is just placeholder data. You should replace it with real data fetching logic.
  const timelineEvents = [
    { date: 'mid-February 2024', event: 'Lunar Lander - *Intuitive Machines 1 (TO2-IM)*' },
    { date: '10 October 2024', event: 'Multiple Europa Flybys - *Europa Clipper*' },
    { date: 'October 2024', event: 'ESA mission to asteroids Didymos and Dimorphos - *Hera*' },
    { date: 'November 2024', event: 'Lunar South Pole Rover - *Griffin Mission 1 (TO 20A VIPER)*' },
    { date: '2024', event: 'Lunar Lander - *Intuitive Machines 2 (PRIME-1)*' },
    { date: '2024', event: 'Lunar Orbiting Small Satellite - *Lunar Trailblazer*' },
    // ... more events
  ];

  return (
    <div className='common-container'>
      <h2 className='common-title'>Strona główna</h2>
      <p className='common-text'>Witaj na mojej stronie</p>
      <div className='timeline-container'>
        <h3 className='timeline-title'>Kalendarium misji kosmicznych</h3>
        <ul className='timeline-list'>
          {timelineEvents.map((item, index) => (
            <li key={index} className='timeline-item'>
              <span className='timeline-date'>{item.date}</span>
              <span className='timeline-event'>{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
