import React from "react";
import { Link } from "react-router-dom";

import SuccessCheckIcon from "../../assets/images/icons/success-check-icon.svg";

import "./styles.css";

function success() {
  return (
    <div id="page-success">
      <div id="page-success-content" className="container">
        <img src={SuccessCheckIcon} alt="Ícone de sucesso" />
        <h1>Cadastro Salvo!</h1>
        <p>
          Tudo certo, seu cadastro está na nossa lista de professores.
          <br />
          Agora é só ficar de olho no seu WhatsApp.
        </p>
        <Link to="/study" className="study">
          Acessar Lista
        </Link>
      </div>
    </div>
  );
}

export default success;
