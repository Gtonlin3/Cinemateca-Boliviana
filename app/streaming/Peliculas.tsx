'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MovieCard from '../components/MovieCard';

interface Pelicula {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
}

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const res = await fetch('https://6840dca5d48516d1d3599ab7.mockapi.io/peliculas');
        const data = await res.json();
        setPeliculas(data);
      } catch (error) {
        console.error('Error al obtener películas:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerPeliculas();
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>Cargando películas…</p>;
  }

  return (
    <div className="encabezado">

      <div className="ult">
        <div className="primer_rect"></div>
        <p className="ultimas">Últimas Películas Agregadas</p>
        <div className="segundo_rect"></div>
      </div>

      <div className="btns">
        {['Género', 'Año', 'Calidad', 'Popularidad'].map((texto) => (
          <button key={texto} className="btn-opc">
            <p className="opciones">{texto}</p>
            <Image
              src="/ico-menu.svg"
              alt="ícono menú"
              width={14}
              height={14}
            />
          </button>
        ))}
      </div>

      <div className="titulo-streaming">
        <div className="rect_vert"></div>
        <h2 className="opciones">Añadidas recientemente</h2>
      </div>

      <div className="CardMovie">
        {peliculas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            id={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.poster}
            // genre={pelicula.genero}
            calificacion={pelicula.calificacion}
          />
        ))}
      </div>

    </div>
  );
};

export default Peliculas;
