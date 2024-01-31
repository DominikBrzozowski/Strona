import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: ''
  });
  const [submissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form, e.g., through an API
    console.log(formData);
    
    // Display a browser alert with the submission message
    alert('Thank you for your submission! We will get back to you soon.');
    
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      query: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h2 className='common-title'>Kontakt</h2>
      {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">Imię</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Imię"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nazwisko</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Nazwisko"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="query">Treść wiadomości</label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Treść wiadomości"
            required
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default Contact;