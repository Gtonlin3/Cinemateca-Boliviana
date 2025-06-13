// NotificacionCineClient.tsx
'use client';

import React, { useEffect, useState } from 'react';
import styles from "./NotificacionCine.module.css";

interface Props {
  titulo: string;
  formato: string;
  hora: string;
  poster: string;
}

const NotificacionCineClient = ({ titulo, formato, hora, poster }: Props) => {
  const [visible, setVisible] = useState(true);

  // Ocultar después de 8 segundos
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={styles.contenedorNotificacionFixed}
      onClick={() => setVisible(false)} 
    >
      <div className={styles.cajaNotificacion}>
        <div className={styles.cuerpo}>
          <div className={styles.filaTitulo}>
            <span className={styles.iconoPalomitas}>🍿</span>
            <h2 className={styles.tituloPrincipal}>
              ¡Tu función está por comenzar!
            </h2>
          </div>
          <p className={styles.descripcion}>
            <span className={styles.nombrePelicula}>{titulo}</span>{" "}
            en <span className={styles.salaCine}>Cinemateca Boliviana - {formato}</span>{" "}
            a las <span className={styles.horaFuncion}>{hora}</span>
          </p>

          <p className={styles.textoUrgente}>¡No llegues tarde!</p>
        </div>

        <div className={styles.brilloSutil}></div>
      </div>
    </div>
  );
};

export default NotificacionCineClient;
