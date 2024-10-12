import React, { useState } from 'react';

const Socialmediabox = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const images = [
    { name: 'twitter.jpg', title: 'Twitter' },
    { name: 'email.png', title: 'Email' },
    { name: 'linkedin.jpg', title: 'Linkedin' },
    { name: 'instagram.jpg', title: 'Instagram' }
  ];

  const links = [
    { url: 'https://x.com/Jinang26', title: 'Twitter' },
    { url: 'mailto:shahjinang1109@gmail.com', title: 'Email' },
    { url: 'https://in.linkedin.com/in/jinang-shah-9292082b6', title: 'Linkedin' },
    { url: 'https://www.instagram.com/_.jinang._', title: 'Instagram' }
  ];

  return (
    <div className="socialmedia-container">
      <div className="socialmedia-inner">
        {images.map((img, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className={`card ${activeCard === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
            style={{
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0px 4px 12px 2px rgb(171, 76, 152), 0px 5px 16px 3px #364bde',
              marginBottom: '20px',
              backgroundColor: 'rgb(14, 15, 15)',
              border: '2px solid rgb(86, 88, 88)',
            }}
          >
            <img 
              src={`gifs/gifs/${img.name}`} 
              className="card-img-top" 
              alt={`${img.title}`} 
              title={img.title}
              style={{
                width: '100%',
                height: '75%',
                objectFit: 'cover'
              }}
            />
            <div 
              className="card-body"
              style={{
                height: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <a 
                href={links[index].url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: '800',
                  textAlign: 'center',
                }}
              >
                <h5 className="card-title">
                  {img.title}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socialmediabox;
