import React from "react";
import BackButton from "../login/BackButton";

const page = () => {
  return (
    <>
      <div className="barra-superior-black">
        <BackButton />
      </div>

      <div className="contacto">
        <h2>Contacto</h2>
        <p className="titulo">Cinemateca Boliviana</p>
        <p>C/Oscar Soria esq. Rosendo Gutierrez</p>
        <p>Tel. +591 2244 40 90 </p>
        <p>comercializacion 77231196</p>
        <p>La Paz – Bolivia</p>
      </div>
    </>
  );
};

export default page;
