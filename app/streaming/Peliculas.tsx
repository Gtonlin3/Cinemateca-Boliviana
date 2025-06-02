import React from 'react'
import CarCartelera from '../components/carruseles/CarCartelera'
import Image from 'next/image'
import MovieCard from '../components/MovieCard'

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

const Peliculas = () => {
  return (
    <>  
    <div className="encabezado">
        <div className='ult'> 
          <div className="primer_rect"></div>
          <p className="ultimas">Ultimas peliculas agregadas</p>
          <div className="segundo_rect"></div>
        </div>
        
        <div className='btns'>
            <button className="btn-genero">
              <p className="genero">Genero</p>
              <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      /> 
            </button>
            <button className="btn-anio">
              <p className="anio">Año</p> 
               <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      /> 
            </button>
            <button className="btn-calidad">
              <p className="calidad">Calidad</p>  
               <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      />
            </button>
            <button className="btn-popularidad">
              <p className="popularidad">Popularidad</p>
               <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      /> 
            </button>
        </div> 
        <div className='titiloo'>
            <div className="rect_vert"></div>
            <h2 className='reciente'>Añadidas recientemente</h2>
        </div>
         <div className="CardMovie">
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

export default Peliculas