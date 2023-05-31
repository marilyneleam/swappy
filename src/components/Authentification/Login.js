import "./Login.css";

function Login() {
  return (
    <div>
      <div className="header">
        <h3>Se connecter</h3>
      </div>

      <div className="body">
        <div className="auth">
          <label for="auth">
            <p className="label-auth">Pseudo ou e-mail</p>
          </label>
          <input
            type="auth"
            id="auth"
            placeholder="Veuilez saisir votre pseudonyme ou votre adresse mail"
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
          />
        </div>
      </div>

      <div className="footer">
        <a href="http://localhost:3000/">
          <button className="btn btn-cancel">Annuler</button>
        </a>

        <div className="btn-right">
          <button className="btn btn-create">Créer un compte</button>
          <button className="btn btn-login">Se connecter</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
