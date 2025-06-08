"use client";

import React, { useState, useEffect } from 'react';
import styles from './NotificacionCine.module.css'; 


interface TicketInfo {
  pelicula: string;
  lugar: string;
  sala: string;
  horaFuncionISO: string;
}

const NotificacionUI: React.FC<{ ticket: TicketInfo }> = ({ ticket }) => {
    const horaFormateada = new Date(ticket.horaFuncionISO).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    return (
        <div className={styles.contenedorNotificacionFixed}>
            <div className={styles.cajaNotificacion}>
                <div className={styles.bordeGradiente}></div>
                <header className={styles.encabezado}>
                    <div className={styles.iconoApp}><span>🎬</span><div className={styles.brilloIcono}></div></div>
                    <h1 className={styles.tituloApp}>{ticket.lugar}</h1>
                    <span className={styles.horaActual}>• ahora</span>
                </header>
                <div className={styles.cuerpo}>
                    <div className={styles.filaTitulo}><span className={styles.iconoPalomitas}>🍿</span><h2 className={styles.tituloPrincipal}>¡Tu función está por comenzar!</h2></div>
                    <p className={styles.descripcion}>
                        <span className={styles.nombrePelicula}>&quot;{ticket.pelicula}&quot;</span> en{" "}
                        <span className={styles.salaCine}>{ticket.lugar} - {ticket.sala}</span> a las{" "}
                        <span className={styles.horaFuncion}>{horaFormateada}</span>
                    </p>
                    <p className={styles.textoUrgente}>¡No llegues tarde!</p>
                </div>
                <div className={styles.brilloSutil}></div>
            </div>
        </div>
    );
};


interface RecordatorioFuncionCineProps {
    datosFuncionPrueba: TicketInfo;
    minutosAntes: number;
}
const RecordatorioFuncionCine: React.FC<RecordatorioFuncionCineProps> = ({ datosFuncionPrueba, minutosAntes }) => {
    const [mostrarNotificacion, setMostrarNotificacion] = useState<boolean>(false);

    useEffect(() => {
        const horaFuncionDate = new Date(datosFuncionPrueba.horaFuncionISO);
        const ahora = new Date();
        const tiempoInicioRecordatorio = new Date(horaFuncionDate.getTime() - minutosAntes * 60 * 1000);

        if (ahora > horaFuncionDate) {
            setMostrarNotificacion(false);
            return;
        }

        let timerId: NodeJS.Timeout | undefined;
        if (ahora >= tiempoInicioRecordatorio && ahora < horaFuncionDate) {
            setMostrarNotificacion(true);
        } else if (ahora < tiempoInicioRecordatorio) {
            const delayParaMostrar = tiempoInicioRecordatorio.getTime() - ahora.getTime();
            if (delayParaMostrar > 0) {
                timerId = setTimeout(() => {
                    if (new Date() < horaFuncionDate) setMostrarNotificacion(true);
                }, delayParaMostrar);
            }
        }
        return () => { if (timerId) clearTimeout(timerId); };
    }, [datosFuncionPrueba, minutosAntes]);

    useEffect(() => {
        if (mostrarNotificacion) {
            const horaFuncionDate = new Date(datosFuncionPrueba.horaFuncionISO);
            const ahora = new Date();
            const duracionVisiblePostFuncion = 30 * 60 * 1000;
            const tiempoRestanteParaOcultar = (horaFuncionDate.getTime() + duracionVisiblePostFuncion) - ahora.getTime();
            let hideTimerId: NodeJS.Timeout | undefined;

            if (tiempoRestanteParaOcultar > 0) {
                hideTimerId = setTimeout(() => setMostrarNotificacion(false), tiempoRestanteParaOcultar);
            } else if (ahora > new Date(horaFuncionDate.getTime() + duracionVisiblePostFuncion)) {
                setMostrarNotificacion(false);
            }
            return () => { if (hideTimerId) clearTimeout(hideTimerId); };
        }
    }, [mostrarNotificacion, datosFuncionPrueba.horaFuncionISO]);

    if (!mostrarNotificacion) return null;
    return <NotificacionUI ticket={datosFuncionPrueba} />;
};



export const GestorNotificacionesGlobal: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [ticketDePrueba, setTicketDePrueba] = useState<TicketInfo | null>(null);

  const MINUTOS_ANTES_DEL_AVISO = 0; // Configura tus 20 minutos aquí

  useEffect(() => {
    setIsClient(true);

    const ahoraCliente = new Date();
    // Función de prueba: (MINUTOS_ANTES_DEL_AVISO + un pequeño margen para verla aparecer) minutos en el futuro
    const horaFuncionCliente = new Date(ahoraCliente.getTime() + (MINUTOS_ANTES_DEL_AVISO + 2) * 60 * 1000);
    
    const nuevoTicket: TicketInfo = {
      pelicula: "Estreno Global",
      lugar: "Cinemateca Mundial",
      sala: "Sala Principal",
      horaFuncionISO: horaFuncionCliente.toISOString(),
    };
    setTicketDePrueba(nuevoTicket);

  }, []);

  if (!isClient || !ticketDePrueba) {
    return null;
  }

  
  return (
    <RecordatorioFuncionCine
      datosFuncionPrueba={ticketDePrueba}
      minutosAntes={MINUTOS_ANTES_DEL_AVISO}
    />
  );
};

