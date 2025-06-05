'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MovieCard from '../components/MovieCard';

interface Estreno {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
  year?: number;
  descripcion?: string;
  trailer?: string;
  movie?: string;
  formato?: string;
  f1?: string;
  f2?: string;
  f3?: string;
  duracion?: number;
  categoria?: string;
}

const Estrenos = () => {
  const [estrenos, setEstrenos] = useState<Estreno[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerEstrenos = async () => {
      try {
        const res = await fetch('https://6840dca5d48516d1d3599ab7.mockapi.io/estrenos');
        const data = await res.json();
        setEstrenos(data);
      } catch (error) {
        console.error('Error al obtener estrenos:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerEstrenos();
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>Cargando estrenos…</p>;
  }

  return (
    <div className="encabezado">
      <div className='ult'> 
        <div className="primer_rect"></div>
        <p className="ultimas"> Nuevos Estrenos</p>
        <div className="segundo_rect"></div>
      </div>
      
      <div className='btns'>
        {['Género', 'Año', 'Calidad', 'Popularidad'].map((texto) => (
          <button key={texto} className="btn-opc">
            <p className="opciones">{texto}</p>
            <Image
              src="/ico-menu.svg"
              alt="ícono menú"
              width={14}
              height={14}
              priority
            />
          </button>
        ))}
      </div> 

      <div className='titulo-streaming'>
        <div className="rect_vert"></div>
        <h2 className='opciones'>Añadidas recientemente</h2>
      </div>

      <div className="CardMovie">
        {estrenos.map((estreno) => (
          <MovieCard
            key={estreno.id}
            id={estreno.id}
            title={estreno.titulo}
            image={estreno.poster}
            genre={estreno.genero}
            calificacion={estreno.calificacion}
          />
        ))}
      </div>
    </div>
  );
};

export default Estrenos;
