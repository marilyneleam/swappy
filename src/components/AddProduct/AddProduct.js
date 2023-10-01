import "./AddProduct.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [picture, setPicture] = useState();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "description") {
      setDescription(value);
    }
    if (id === "picture") {
      setPicture(value);
    }
  };

  const handleSubmit = () => {
    if (name === "" && description === "" && !picture) {
      return;
    }

    let formData = {
      name: name,
      description: description,
      pictures: [picture],
      opened: true,
      userId: localStorage.getItem("userId"),
      offersId: [],
    };

    console.log(formData);

    axios
      .post("http://localhost:3001/post", formData)
      .then((response) => console.log(response))
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <div className="header">
        <h3>Ajouter un produit</h3>
      </div>

      <div className="body">
        <div className="auth">
          <label for="auth">
            <p className="label-prod">Nom de l'objet</p>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
            placeholder="Veuilez saisir le nom de l'objet"
          />
        </div>
        <div className="auth">
          <label for="auth">
            <p className="label-prod">Description de l'objet</p>
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => handleInputChange(e)}
            id="description"
            placeholder="Veuilez saisir la description de l'objet"
          />
        </div>
        <div className="auth">
          <label for="auth">
            <p className="label-prod">Url de l'image de l'objet</p>
          </label>
          <input
            type="text"
            value={picture}
            onChange={(e) => handleInputChange(e)}
            id="picture"
            placeholder="Veuilez saisir l'url de l'image de l'objet"
          />
        </div>
      </div>

      <div className="footer">
        <Link to="/">
          <button className="btn btn-cancel">Annuler</button>
        </Link>
        <div className="btn-right">
          <button className="btn btn-login" onClick={handleSubmit}>
            Ajouter le produit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
