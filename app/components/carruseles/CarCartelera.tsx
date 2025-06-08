'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';

interface Cartelera {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
}

const CarCartelera = () => {
  const [ cartelera, setCartelera] = useState<Cartelera[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerCartelera = async () => {
      try {
        const res = await fetch('https://683b6a5828a0b0f2fdc49f95.mockapi.io/inicio');
        const data = await res.json();
        setCartelera(data);
      } catch (error) {
        console.error('Error al obtener películas:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerCartelera();
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>Cargando Cartelera…</p>;
  }

  return (
    <>
      <div className="encabezado">

        <div className="CardMovie">
          {cartelera.map((cartelera) => (
            <MovieCard
              key={cartelera.id}
              id={cartelera.id}
              title={cartelera.titulo}
              image={cartelera.poster}
              // genre={cartelera.genero}
              calificacion={cartelera.calificacion}
              type='cartelera'
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default CarCartelera
