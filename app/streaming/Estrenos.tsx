import React from 'react'
import Image from 'next/image'
import MovieCard from '../components/MovieCard'

const peliculas = [
  {
    id: 1,
    titulo: 'La Memoria Infinita',
    imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // imagen documental
    genero: 'Documental',
    calificacion: 8.5,
  },
  {
    id: 2,
    titulo: 'Los Reyes del Mundo',
    imagen: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', // imagen drama
    genero: 'Drama',
    calificacion: 8.5,
  },
  {
    id: 9,
    titulo: '2012',
    imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',  // imagen apocalíptica / desastre
    genero: 'Drama',
    calificacion: 7.4,
  }
];

const Estrenos = () => {
  return (
    <>  
    <div className="encabezado">
        <div className='ult'> 
          <div className="primer_rect"></div>
          <p className="ultimas"> Nuevos Estrenos</p>
          <div className="segundo_rect"></div>
        </div>
        
        <div className='btns'>
            <button className="btn-opc">
              <p className="opciones">Genero</p>
              <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      /> 
            </button>
            <button className="btn-opc">
              <p className="opciones">Año</p> 
               <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      /> 
            </button>
            <button className="btn-opc">
              <p className="opciones">Calidad</p>  
               <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      />
            </button>
            <button className="btn-opc">
              <p className="opciones">Popularidad</p>
               <Image
                        src="/ico-menu.svg"
                        alt="LogoNav"
                        width={14}
                        height={14}
                        priority
                      /> 
            </button>
        </div> 
        <div className='titulo-streaming'>
            <div className="rect_vert"></div>
            <h2 className='opciones'>Añadidas recientemente</h2>
        </div>
         <div className="CardMovie">
          {peliculas.map((pelicula) => (
            <MovieCard
              key={pelicula.id}
              title={pelicula.titulo}
              image={pelicula.imagen}
              genre={pelicula.genero}
              calificacion={pelicula.calificacion}
            />
          ))}
        </div>
            
          
        
    </div>
    </>
  )
}

export default Estrenos
