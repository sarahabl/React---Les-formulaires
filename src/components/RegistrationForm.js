import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegistrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formData.age, 10) < 18) {
      setError('L\'âge doit être supérieur à 18 ans');
      return;
    }
    setError('');
    console.log(formData);
    // Vous pouvez ajouter le code pour enregistrer les données dans le store ici
  };

  return (
    <div className="container-fluid h-100">
    <div className="row h-100">
      <div className="col-md-6 d-none d-md-block left-section">
      </div>

      {/* Section avec le formulaire */}
      <div className="col-md-6 d-flex justify-content-center align-items-center right-section">
        <form onSubmit={handleSubmit} className="form-container">
          <h2 className="mb-4">Formulaire d'inscription</h2>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Prénom :</label>
            <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Nom :</label>
            <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Âge :</label>
            <input type="number" id="age" name="age" className="form-control" value={formData.age} onChange={handleChange} required />
            {error && <p className="text-danger">{error}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe :</label>
            <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">S'inscrire</button>
        </form>
      </div>
    </div>
  </div>
);
};

export default RegistrationForm;
