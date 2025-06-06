'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from './BackButton';

interface EstrenoDetalle {
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
  portada: string;
}

const page = () => {
      const params = useParams();
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      const [estreno, setEstreno] = useState<EstrenoDetalle | null>(null);
      const [cargando, setCargando] = useState(true);
    
      useEffect(() => {
        if (!id) return;
    
        fetch(`https://683b6a5828a0b0f2fdc49f95.mockapi.io/inicio/${id}`)
          .then((res) => {
            if (!res.ok) throw new Error('No se encontró el estreno');
            return res.json();
          })
          .then((data: EstrenoDetalle) => setEstreno(data))
          .catch((err) => console.error(err))
          .finally(() => setCargando(false));
      }, [id]);
    
      if (cargando) return <p className="mensaje-cargando">Cargando detalles…</p>;
      if (!estreno) return <p className="mensaje-cargando">Estreno no encontrado.</p>;
    
  return (
    <div className="detalle-contenedor">
      <div className="barra-superior">
        <BackButton />
      </div>

      <div className="margin">
        <div className="poster-info">
          <div className="poster-detalle">
            <Image
              src={estreno.poster}
              alt={estreno.titulo}
              width={300}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>

          <div className="info-detalle">
            <h1 className="titulo-detalle">{estreno.titulo}</h1>
            <p><strong>Año:</strong> {estreno.year}</p>
            <p><strong>Género:</strong> {estreno.genero}</p>
            <p><strong>Calificación:</strong> {estreno.calificacion}/10</p>
            <p><strong>Formato:</strong> {estreno.formato}</p>
            <p><strong>Duración:</strong> {estreno.duracion} min</p>
            <p><strong>Categoría:</strong> {estreno.categoria}</p>

            <br />
            <h3>Descripción</h3>
            <p className="descripcion">{estreno.descripcion}</p>

            <br />
            <div className="btns">
              <Link href={estreno.movie} className="btn-opc">
                <p className="opciones">Ver</p>
              </Link>
              <Link href="/calificacion" className="btn-opc">
                <p className="opciones">Calificar</p>
              </Link>
              <Link href="/reseñas" className="btn-opc">
                <p className="opciones">Reseñas</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="video-seccion">
          <h3>Tráiler</h3>
          <div className="video-wrapper">
            <iframe
              src={estreno.trailer.replace('watch?v=', 'embed/')}
              title={`Tráiler de ${estreno.titulo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
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
          border-radius: 16px;
          background-color: rgba(34, 33, 33, 0.8);
          padding: 30px;
          font-size: 20px;
          text-align: justify;
        }

        .descripcion {
          margin-top: 1rem;
          line-height: 1.5;
        }

        .video-seccion {
          margin-top: 1rem;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
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
        }

        .mensaje-cargando {
          text-align: center;
          margin-top: 2rem;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default page
