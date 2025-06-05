import React from "react";
import BackButton from "../login/BackButton";
import Image from "next/image";

const Novedades = () => {
  return (
    <>
        <div className="barra-superior-black">
            <BackButton />
        </div>

      <div className="margin">
            <div>
            <h2 >Novedades</h2>
            </div>
            <p>
            Hoy
            
            </p>
            <hr className="primer_rect"/>
            
            <div className="productos-grid">
                <div className="producto-card">
                    <Image
                    src="/Nov-1.png"
                    alt="Novedades"
                    width={254}
                    height={169}
                    className="img-novedades"
                    />
                    <h2 className="titulo-novedades">OFICINAS EN ALQUILER</h2>

                    <p className="texto-novedades">
                    Nuestra oficina de alquiler se ha abierto en la calle de la
                    </p>
                </div>

                <div className="producto-card">
                    <Image
                    src="/Nov-2.png"
                    alt="Novedades"
                    width={254}
                    height={169}
                    className="img-novedades"
                    />
                    <h2 className="titulo-novedades">NOTAS CRITICAS. VERSIONES DIGITALES - DESCARGA GRATUITAS</h2>

                    <p className="texto-novedades">
                    Gracias al apoyo del FOCUART tenemos el agrado de presentar cuatro Notas críticas en versiones digitales que podrán ser descargadas por los interesados Notas Críticas 22: JORGE SANJINES Notas Críticas
                    </p>
                </div>

                <div className="producto-card">
                    <Image
                    src="/Nov-3.jpg"
                    alt="Novedades"
                    width={254}
                    height={169}
                    className="img-novedades"
                    />
                    <h2 className="titulo-novedades">CATALOGO DE AFICHES DE CINE BOLIVIANO - DESCARGA GRATUITA</h2>

                    <p className="texto-novedades">
                    Incluye afiches desde el año 1930 – WaraWara (José María Velasco Maidana) hasta 2020 Unay (Okie Cardenas). No están todos pero es una muestra representativa de nuestra historia cinematográfica a nivel iconográfico.
                    </p>
                </div>
                <br />
            </div>
      </div>
    </>
  );
};

export default Novedades;
