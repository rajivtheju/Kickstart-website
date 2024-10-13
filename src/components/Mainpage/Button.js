import React from 'react';
import './About.css';
const Button = ({ url, buttonText }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button className='button' onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
