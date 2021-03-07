import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header/>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a React app for keeping and storing recipes using the MERN stack.
      </p>
      <p className='bg-dark p'>
        <strong>Version</strong> 1.0.0
      </p>
    </div>
  );
};
export default About;
