import React from 'react';
import Link from 'next/link';
import Calificacion from './calificacion/Calificacion';
import Image from 'next/image';

interface Props {
  id: string;
  title: string;
  image: string; 
  // genre: string; 
  calificacion: number;
  type?: 'movies' | 'estrenos' | 'inicio' | 'cartelera' | 'series'; // Agregado para distinguir rutas
}

const MovieCard = ({ id, title, image,  calificacion, type = 'movies' }: Props) => {
  return (
    <Link href={`/${type}/${id}`} style={{ textDecoration: 'none' }}>
      <div className='movie-card-item'> 
        <div className='card-pelicula'>
          <Image src={image} alt={title} className='img-pelicula'  width={210} height={320} />
        </div>
        <div className='movie-info-wrapper'>
          <p className='titulo-movie'>{title}</p>
          {/* <p className='genero-movie'>{genre}</p> */}
          <Calificacion calificacion={calificacion} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
