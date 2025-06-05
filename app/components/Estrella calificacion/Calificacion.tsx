// Calificacion.tsx
import React from "react";
import Image from "next/image";
import styles from "./Calificacion.module.css"; 

const Calificacion = () => {
  
  //Poner porps
  return (
    <div className={styles.calificacionContainer}>
      <div className={styles.estrellaWrapper}>
        <Image
          src="/estrella_.png" 
          width={20} 
          height={20} 
          alt="" 
          className={styles.estrellaImage}
        />
      </div>
      <p className={styles.calificacionPromedio}>3.4</p>
      <p className={styles.calificacionCincoEstrellas}>/5</p>
    </div>
  );
};

export default Calificacion;