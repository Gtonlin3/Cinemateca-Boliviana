'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import BackButton from './BackButton';
import  Link from 'next/link';

interface PeliculaDetalle {
  id: string;
  titulo: string;
  year: number;
  genero: string;
  duracion: number;
  categoria: string;
  calificacion: number;
  descripcion: string;
  trailer: string;
  movie: string;
  formato: string;
  poster: string;
  f1: string;
  f2: string;
  f3: string;
}

const CarteleraPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [pelicula, setPelicula] = useState<PeliculaDetalle | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://683b6a5828a0b0f2fdc49f95.mockapi.io/inicio/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se encontró la película');
        return res.json();
      })
      .then((data: PeliculaDetalle) => {
        setPelicula(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) {
    return <p className="mensaje-cargando">Cargando detalles…</p>;
  }

  if (!pelicula) {
    return <p className="mensaje-cargando">Película no encontrada.</p>;
  }

  return (
    <>
    <div className="detalle-contenedor">

      <div className="barra-superior">
        <BackButton />
    </div>

      <div className='margin'>


      

      <div className="poster-info">
        <div className="poster-detalle">
          <Image
            src={pelicula.poster}
            alt={pelicula.titulo}
            width={300}
            height={450}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>

        <div className="info-detalle">
          <h1 className="titulo-detalle">{pelicula.titulo}</h1>
          <p><strong>Año:</strong> {pelicula.year}</p>
          <p><strong>Género:</strong> {pelicula.genero}</p>
          <p><strong>Calificación:</strong> {pelicula.calificacion}/10</p>
          <p><strong>Formato:</strong> {pelicula.formato}</p>
          <p><strong>Duración:</strong> {pelicula.duracion} min</p>
          <p><strong>Categoría:</strong> {pelicula.categoria}</p>
          <br />
          <h3>Descripción</h3>
          <p className="descripcion">{pelicula.descripcion}</p>
         
          {/* <div className="horarios">
            <p><strong>Funciones:</strong></p>
            <ul>
              <li>Función 1: {pelicula.f1}</li>
              <li>Función 2: {pelicula.f2}</li>
              <li>Función 3: {pelicula.f3}</li>
            </ul>
          </div> */}
          <br />

          <div className='btns'>


          <Link href="/##" className="btn-opc">
          <p className="opciones">Comprar</p>
          </Link>
          {/* <Link href={pelicula.movie} className="btn-opc">
            <p className='opciones'>Ver</p>
          </Link> */}
          <Link href="/calificacion" className="btn-opc">
            <p className='opciones'>Calificar</p>
          </Link>
          <Link href="/reseñas" className="btn-opc">
            <p className='opciones'>Sinopsis</p>
          </Link>
        
          </div>
        </div>
      </div>

      <div className="video-seccion">
        <h3>Tráiler</h3>
        <div className="video-wrapper">
          <iframe
            src={pelicula.trailer.replace('watch?v=', 'embed/')}
            title={`Tráiler de ${pelicula.titulo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
      <br />

      </div>

      <style jsx>{`
        // .detalle-contenedor {
        //   max-width: 900px;
        //   margin: 2rem auto;
        //   padding: 0 1rem;
        //   color: #fff;
        //   background-color: #121212;
        // }

        .titulo-detalle {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .poster-info {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          // margin-bottom: 2rem;
          
        }

        .poster-detalle {
          display: flex;
          flex: 1;
          min-width: 280px;
          align-items: center;
          justify-content: center;
          
        }
        

        .info-detalle {
          flex: 2;
          min-width: 300px;
          background-color: red;
          border-radius: 16px;
          background-color: rgba(34, 33, 33, 0.8);  
          padding: 30px;
          font-size: 20px;
          align-items: center;
          justify-content: center;
          text-align: justify;
          }

        .descripcion {
          margin-top: 1rem;
          line-height: 1.5;
        }

        .horarios {
          margin-top: 1.25rem;
        }

        .horarios ul {
          list-style: disc inside;
          margin-left: 1rem;
        }

.video-seccion {
  margin-top: 1rem;
}

.video-seccion h2 {
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  color: #ffffff;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  z-index: 1; /* Asegura que esté por encima */
  pointer-events: auto; /* Asegura que se pueda interactuar */
  touch-action: manipulation; /* Ayuda con gestos táctiles */
}


        // .video-seccion {
        //   margin-top: 1.0rem;
        // }

        // .video-seccion h2 {
        //   margin-bottom: 0.75rem;
        //   font-size: 1.5rem;
        //   color: #ffffff;
        // }

        // .video-wrapper {
        //   position: relative;
        //   padding-bottom: 56.25%;
        //   height: 0;
        //   overflow: hidden;
        //   border-radius: 8px;
        //   margin-bottom: 1.5rem;
        // }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        // .btn-ver-movie {
        //   display: inline-block;
        //   padding: 0.75rem 1.5rem;
        //   background-color: #ff5722;
        //   color: #fff;
        //   text-decoration: none;
        //   border-radius: 5px;
        //   font-weight: bold;
        //   transition: background-color 0.3s ease;
        // }

        .btn-ver-movie:hover {
          background-color: #e64a19;
        }

        .mensaje-cargando {
          text-align: center;
          margin-top: 2rem;
          color: white;
        }
      `}</style>
    </div>
    </>
  );
};

export default CarteleraPage;
