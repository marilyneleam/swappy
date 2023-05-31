import "./Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    if (email == "" || password == "") {
      return;
    }

    let formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    axios
      .post("http://localhost:3001/login", formData)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <div className="header">
        <h3>Se connecter</h3>
      </div>

      <div className="body">
        <div className="auth">
          <label for="auth">
            <p className="label-auth">E-mail</p>
          </label>
          <input
            type="auth"
            id="auth"
            placeholder="Veuilez saisir votre votre adresse mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="password">
          <label for="password">
            <p className="label-auth">Mot de passe</p>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Veuillez saisir votre mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="footer">
        <Link to="/">
          <button className="btn btn-cancel">Annuler</button>
        </Link>

        <div className="btn-right">
          <button className="btn btn-login" onClick={handleSubmit}>
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
