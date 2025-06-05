import React from 'react';
import Link from 'next/link';
import Calificacion from './calificacion/Calificacion';

interface Props {
  id: string;
  title: string;
  image: string; 
  genre: string; 
  calificacion: number;
  type?: 'movies' | 'estrenos'; // Agregado para distinguir rutas
}

const MovieCard = ({ id, title, image, genre, calificacion, type = 'movies' }: Props) => {
  return (
    <Link href={`/${type}/${id}`} style={{ textDecoration: 'none' }}>
      <div className='movie-card-item'> 
        <div className='card-pelicula'>
          <img src={image} alt={title} className='img-pelicula' />
        </div>
        <div className='movie-info-wrapper'>
          <p className='titulo-movie'>{title}</p>
          <p className='genero-movie'>{genre}</p>
          <Calificacion calificacion={calificacion} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
