import React from 'react'
import Link from 'next/link'
import MovieCard from '../MovieCard';

const peliculas = [
  {
    id: 1,
    titulo: 'La Memoria Infinita',
    imagen: '/portada1.jpg',
    genero: 'Documental',
  },
  {
    id: 2,
    titulo: 'Los Reyes del Mundo',
    imagen: '/portada2.jpg',
    genero: 'Drama',
  },
  {
    id: 3,
    titulo: 'Utama',
    imagen: '/portada3.jpg',
    genero: 'Ficción',
  },
  {
    id: 4,
    titulo: 'La Ley de la Luna',
    imagen: '/portada4.jpg',
    genero: 'Drama',
  },
  {
    id: 5,
    titulo: 'Apocalipto',
    imagen: '/portada5.jpg',
    genero: 'Drama',
  },
  { 
    id: 6,
    titulo: 'bicibleta de los huanca',
    imagen: '/portada6.jpg',
    genero: 'Drama',  
  },
  {
    id: 7,
    titulo: 'two men an  half',
    imagen: '/portada7.jpg',
    genero: 'Drama',
  },
  {
    id: 8,
    titulo: 'tony',
    imagen: '/portada8.jpg',
    genero: 'Drama',
  },
  {
    id: 9,
    titulo: '2012',
    imagen: '/portada9.jpg',  
    genero: 'Drama',
  }
];

const CarCartelera = () => {
  return (
    <>
    <div className='txt-car'>
      <p className='txt-title'>CARTELERA</p>
      <Link href="#">
        <p className='txt-vertodo'>Ver todo</p>
      </Link>
    </div>
    
    <div className="CarCartelera">
        {peliculas.map((peliculas) => (
          <MovieCard
          key={peliculas.id}
          title={peliculas.titulo}
          image={peliculas.imagen}
          genre={peliculas.genero}
          
          />
        ))}
        </div>
    </>
  )
}

export default CarCartelera
