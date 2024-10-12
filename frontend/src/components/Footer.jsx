import React from 'react';
import { FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-dark text-center text-white py-4" id="footer-low"
      style={{
        marginTop: '40px',
        fontWeight: '500',
        backgroundColor: 'transparent',
        color: 'rgb(86,88,88)',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <div className="p-4" style={{ backgroundColor: 'transparent', color: 'rgb(86,88,88)' }}>
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://x.com/Jinang26" role="button"
            style={{ boxShadow: '0px 4px 12px 2px rgb(171, 76, 152), 0px 5px 16px 3px #364bde' }}>
            <FaTwitter />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="mailto:shahjinang1109@gmail.com" role="button"
            style={{ boxShadow: '0px 4px 12px 2px rgb(171, 76, 152), 0px 5px 16px 3px #364bde' }}>
            <FaGoogle />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/_.jinang._" role="button"
            style={{ boxShadow: '0px 4px 12px 2px rgb(171, 76, 152), 0px 5px 16px 3px #364bde' }}>
            <FaInstagram />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://in.linkedin.com/in/jinang-shah-9292082b6" role="button"
            style={{ boxShadow: '0px 4px 12px 2px rgb(171, 76, 152), 0px 5px 16px 3px #364bde' }}>
            <FaLinkedinIn />
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="https://www.github.com/Jinang12" role="button"
            style={{ boxShadow: '0px 4px 12px 2px rgb(171, 76, 152), 0px 5px 16px 3px #364bde' }}>
            <FaGithub />
          </a>
        </section>

        <section className="footer-links">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 style={{ color: 'rgb(86,88,88)', fontFamily: 'Protest Strike, sans-serif', fontWeight: 200 }}>About me</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Career</a>
                </li>
                <li>
                  <a href="#!" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Experience</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 style={{ color: 'rgb(86,88,88)', fontFamily: 'Protest Strike, sans-serif', fontWeight: 200 }}>Help</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Contact me</a>
                </li>
                <li>
                  <a href="#!" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Support</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 style={{ color: 'rgb(86,88,88)', fontFamily: 'Protest Strike, sans-serif', fontWeight: 200 }}>Explore</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Blog</a>
                </li>
                <li>
                  <a href="#!" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Competitions</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 style={{ color: 'rgb(86,88,88)', fontFamily: 'Protest Strike, sans-serif', fontWeight: 200 }}>Follow me</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://x.com/Jinang26" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Twitter</a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/in/jinang-shah-9292082b6" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_.jinang._" className="text-white" style={{ color: 'rgb(86,88,88)', textDecoration: 'none' }}>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'transparent', color: 'rgb(86,88,88)' }}>
        © 2024 Jinang Shah
      </div>
    </footer>
  );
};

export default Footer;
