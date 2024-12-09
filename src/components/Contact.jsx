import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hxncakd',    // Remplacer par ton service ID EmailJS
      'template_ibn9ld3',   // Remplacer par ton template ID EmailJS
      formData,             // Les données du formulaire (variables du modèle EmailJS)
      'unvqR_nu-gNwSyLDG'        // Remplacer par ton user ID EmailJS
    ).then(
      (response) => {
        console.log('Email envoyé avec succès!', response.status, response.text);
        setSuccessMessage('Message envoyé avec succès !');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      },
      (err) => {
        console.log('Échec de l\'envoi de l\'email:', err);
        setErrorMessage('Une erreur s\'est produite, veuillez réessayer.');
        setSuccessMessage('');
      }
    );
  };

  return (
    <div>
      <h2 className="contacth2" id="contact">Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='field'>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='field'>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact