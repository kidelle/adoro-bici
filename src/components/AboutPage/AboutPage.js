import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="about-image">
      <img src="/images/bikes_sand.jpg" alt="bikes" height="300" width="1100"></img>
    </div>
    <div className="home-container">
      <h1 className="home-title">About Us...</h1>
    </div>
    <div className="about-container">
      <h3 className="about">
        'Adoro Bici' has been serving the residents and
         visitors to Madeline Island for over 5 years.
         We love bikes! It's the best way to explore and have
         adventures! We want to make it easy for you to reserve
         and rent a bike or moped so that you can make your way
         around this beautiful island and enjoy all that it has to offer.
      </h3>
    </div>
  </div>
);

export default AboutPage;
