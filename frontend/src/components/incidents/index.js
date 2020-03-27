import React from "react";
import { FiTrash2 } from "react-icons/fi";

import "./styles.css";

export default function Incident(props) {
  return (
    <li>
      <strong>CASO:</strong>
      <p>{props.title}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{props.description}</p>

      <strong>VALOR:</strong>
      <p>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(props.value)}
      </p>

      <button type="button" onClick={props.deleteIncident}>
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </li>
  );
}
