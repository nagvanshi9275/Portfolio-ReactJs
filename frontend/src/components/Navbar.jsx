import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import jinangImage from './jinang-img.jpg';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar'>
        <div className='icon-container'>
          <div className="profile-container">
            <img src={jinangImage} alt="Jinang Shah" className="profile-img" />
            <h1>JINANG SHAH</h1>
          </div>
          <div className="icon-group">
            <a href='https://in.linkedin.com/in/jinang-shah-9292082b6' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className="icon" />
            </a>
            <a href='https://www.github.com/Jinang12' target='_blank' rel='noopener noreferrer'>
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
