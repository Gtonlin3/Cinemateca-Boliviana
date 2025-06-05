// Calificacion.tsx
import React from "react";
import Image from "next/image";
import styles from "./Calificacion.module.css";

interface Props {
  calificacion: number;
}

const Calificacion = ({ calificacion }: Props) => {
  return (
    <div className={styles.calificacionContainer}>
      <div className={styles.estrellaWrapper}>
        <Image
          src="/estrella_.png"
          width={12}
          height={12}
          alt="Estrella"
          className={styles.estrellaImage}
        />
      </div>
      
      <p className={styles.calificacionPromedio}>
        {(typeof calificacion === 'number' ? calificacion : 0).toFixed(1)}
      </p>

      <p className={styles.calificacionCincoEstrellas}>/10</p>
    </div>
  );
};

export default Calificacion;
