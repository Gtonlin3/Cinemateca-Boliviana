import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const recomendaciones = [
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
  }
];


const CarRecomen = () => {
  return (
    <>
    <div className='txt-car'>
        <p className='txt-title'>RECOMENDACIONES</p>
        <Link href="### VER TODO ###">
            <p className='txt-vertodo'>Ver todo</p>
        </Link>
    </div>

    <div className="CarRecomen">
        {recomendaciones.map((item) => (
          <div key={item.id} className="card-pelicula">
            <Image src={item.imagen} alt={item.titulo} className="img-pelicula" />
            <h3>{item.titulo}</h3>
            <p>{item.genero}</p>
          </div>
        ))}
    </div>
    </>
  )
}

export default CarRecomen