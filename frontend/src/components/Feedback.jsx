import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    phone: '',
    feedback: '',
    age: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', marginTop: '40px' }}>
      <div
        style={{
          width: '80vw',
          boxShadow: '0px 10px 24px 4px rgb(171, 76, 152), 0px 12px 36px 6px #364bde',
        }}
      >
        <form
          className="row g-3"
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'rgb(14,17,17)',
            border: '2px solid rgb(86,88,88)',
            padding: '20px',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          <div className="col-md-6">
            <label htmlFor="name" className="form-label" style={{ fontWeight: '500' }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="university" className="form-label" style={{ fontWeight: '500' }}>
              University/Organization
            </label>
            <input
              type="text"
              className="form-control"
              id="university"
              placeholder="Enter your university/organization"
              value={formData.university}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label" style={{ fontWeight: '500' }}>
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="age" className="form-label" style={{ fontWeight: '500' }}>
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="feedback" className="form-label" style={{ fontWeight: '500', marginBottom: '5px' }}>
              Feedback
            </label>
            <textarea
              className="form-control"
              id="feedback"
              placeholder="Enter your feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="3"
              style={{ marginTop: '30px', marginBottom: '10px' }} 
              required
            ></textarea>
          </div>
          <div className="col-12">
            <label htmlFor="rating" className="form-label" style={{ fontWeight: '500' }}>
              Rating
            </label>
            <input
              type="number"
              className="form-control"
              id="rating"
              placeholder="Rate from 0 to 5"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              required
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(90deg, #ab4c98, #f08644)',
                border: 'none',
              }}
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
