import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import Image from 'next/image'

const peliculas = [
  {
    id: '1',
    title: 'La Memoria Infinita',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    genre: 'Documental',
  },
  {
    id: '2',
    title: 'Los Reyes del Mundo',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    genre: 'Drama',
  },
  {
    id: '9',
    title: '2012',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    genre: 'Drama',
  },
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
              src={peliculaActual.image}     // “imagen” en lugar de “image”
              alt={peliculaActual.title}      // “titulo” en lugar de “title”
              fill                             // usa “fill” en lugar de layout
              style={{ objectFit: 'contain' }} // objectFit va en style cuando usamos fill
              className="imagen-fondo-streaming"
              priority
            />
            <div className="overlay-texto">
              <h2>{peliculaActual.title}</h2>
              <p>{peliculaActual.genre}</p>
            </div>
          </div>
        </div>

        <div className="CardMovie" >
          {peliculas.map((pelicula) => (
            
            <MovieCard
              key={pelicula.id}                // “id” en lugar de “id”
              id={pelicula.id}                 // “id” en lugar de “id”
              title={pelicula.title}           // “titulo” en lugar de “title”
              image={pelicula.image}           // “imagen” en lugar de “image”
              genre={pelicula.genre}           // “genero” en lugar de “genre”
            />
          ))}
        </div>

      </div>
    
    </>
  )
}

export default Inicio

