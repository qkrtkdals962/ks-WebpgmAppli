import React from 'react';

const RandomButton = ({ selection, onClick }) => {
  return (
    <button onClick={onClick}>{selection}</button>
  );
};

export default RandomButton;
