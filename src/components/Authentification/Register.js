import React, { useState } from "react";
import "./Login.css";

function Register() {
  const [pseudo, setPseudo] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [dateBirth, setDateBirth] = useState();
  const [cp, setCp] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "pseudo") {
      setPseudo(value);
    }
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
    if (id === "dateofbirth") {
      setDateBirth(value);
    }
    if (id === "cp") {
      setCp(value);
    }
    if (id === "city") {
      setCity(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      dateBirth,
      cp,
      city,
      phone
    );
  };

  return (
    <div className="page-sign">
      <div className="header">
        <h3>Créer un compte</h3>
      </div>

      <div className="form-body">
        <div className="pseudo">
          <label className="form-label" for="pseudo">
            <p className="label-auth">Pseudo</p>
          </label>
          <input
            className="form-input"
            type="text"
            value={pseudo}
            onChange={(e) => handleInputChange(e)}
            id="psedo"
            placeholder="Veuillez saisir un pseudonyme"
          />
        </div>
        <div className="username">
          <div className="name">
            <label className="form-label" for="firstName">
              <p className="label-auth50">Prénom</p>
            </label>
            <input
              className="user-input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="Veuillez saisir votre prénom"
            />
          </div>
          <div className="surname">
            <label className="form-label" for="lastName">
              <p className="label-auth50">Nom</p>
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              value={lastName}
              className="user-input"
              onChange={(e) => handleInputChange(e)}
              placeholder="Veuillez saisir votre nom"
            />
          </div>
        </div>
        <div className="email">
          <label className="form-label" for="email">
            <p className="label-auth">Email</p>
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Veuillez saisir votre adresse mail"
          />
        </div>
        <div className="password">
          <label className="form-label" for="password">
            <p className="label-auth">Mot de Passe</p>
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Veuillez saisir votre mot de passe"
          />
        </div>
        <div className="confirm-password">
          <label className="form-label" for="confirmPassword">
            <p className="label-auth">Confirmation du mot de passe</p>
          </label>
          <input
            className="form-input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Veuillez confirmer votre mot de passe"
          />
        </div>

        <div className="dateofbirth">
          <label for="dateofbirth" className="form-label">
            <p className="label-auth">Date de naissance</p>
          </label>
          <input
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            max="2005-05-31"
            value={dateBirth}
            className="form-input"
          />
        </div>
        <div className="adress">
          <div className="cp">
            <label className="form-label" for="password">
              <p className="label-auth50">Code postal</p>
            </label>
            <input
              className="user-input"
              type="cp"
              id="cp"
              value={cp}
              onChange={(e) => handleInputChange(e)}
              placeholder="Veuillez saisir votre code postal"
            />
          </div>
          <div className="city">
            <label className="form-label" for="password">
              <p className="label-auth50">Ville</p>
            </label>
            <input
              className="user-input"
              type="city"
              id="city"
              value={city}
              onChange={(e) => handleInputChange(e)}
              placeholder="Veuillez saisir votre ville"
            />
          </div>
        </div>
        <div className="phone">
          <label for="phone" className="form-label">
            <p className="label-auth">Téléphone</p>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            placeholder="01 23 45 67 89"
            className="form-input"
          />
        </div>
      </div>

      <div className="footer">
        <a href="http://localhost:3000/">
          <button className="btn btn-cancel">Annuler</button>
        </a>

        <div className="btn-right">
          <button className="btn btn-create">Se connecter</button>
          <button className="btn btn-login" onClick={handleSubmit}>
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
