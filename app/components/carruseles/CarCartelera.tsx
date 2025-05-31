import React from 'react'
import Link from 'next/link'

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
    titulo: 'La Ley de la Luna',
    imagen: '/portada5.jpg',
    genero: 'Drama',
  },
  { 
    id: 6,
    titulo: 'La Ley de la Luna',
    imagen: '/portada6.jpg',
    genero: 'Drama',  
  },
  {
    id: 7,
    titulo: 'La Ley de la Luna',
    imagen: '/portada7.jpg',
    genero: 'Drama',
  },
  {
    id: 8,
    titulo: 'La Ley de la Luna',
    imagen: '/portada8.jpg',
    genero: 'Drama',
  },
  {
    id: 9,
    titulo: 'La Ley de la Luna',
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
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="card-pelicula">
            <img src={pelicula.imagen} alt={pelicula.titulo} className="img-pelicula" />
            <h3>{pelicula.titulo}</h3>
            <p>{pelicula.genero}</p>
          </div>
        ))}
    </div>
    </>
  )
}

export default CarCartelera
