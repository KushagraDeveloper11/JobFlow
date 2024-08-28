/* eslint-disable no-unused-vars */
import React from 'react';
import loader from './loader.svg'; // Adjust the path if necessary

function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={loader} alt="Loading..." />
    </div>
  );
}

export default Index;
