import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import Image from 'next/image'

const peliculas = [
  {
    id: 1,
    titulo: 'La Memoria Infinita',
    imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // imagen documental
    genero: 'Documental',
  },
  {
    id: 2,
    titulo: 'Los Reyes del Mundo',
    imagen: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', // imagen drama
    genero: 'Drama',
  },
  {
    id: 9,
    titulo: '2012',
    imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',  // imagen apocalíptica / desastre
    genero: 'Drama',
  }
];


const Inicio = () => {

    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % peliculas.length);
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval);
  }, []);

  const peliculaActual = peliculas[index];

  return (
    <>
    <div>

        <div className="recomendaciones-movies">
          <div className="portada">
            <Image
              src={peliculaActual.imagen}
              alt={peliculaActual.titulo}
              layout="fill"
              objectFit="cover"
              className="imagen-fondo"
            />
            <div className="overlay-texto">
              <h2>{peliculaActual.titulo}</h2>
              <p>{peliculaActual.genero}</p>
            </div>
          </div>
        </div>

        <div className="CardMovie" >
          {peliculas.map((pelicula) => (
            
            <MovieCard
              key={pelicula.id}
              title={pelicula.titulo}
              image={pelicula.imagen}
              genre={pelicula.genero}
            />
          ))}
        </div>

      </div>
    
    </>
  )
}

export default Inicio

