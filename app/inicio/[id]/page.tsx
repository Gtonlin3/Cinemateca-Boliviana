'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from './BackButton';

interface ContenidoDetalle {
  id: string;
  titulo: string;
  year?: number;
  genero: string;
  duracion?: number;
  categoria?: string;
  calificacion: number;
  descripcion?: string;
  trailer?: string;
  movie?: string;
  formato?: string;
  poster: string;
  portada?: string;
}

const Page = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [detalle, setDetalle] = useState<ContenidoDetalle | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        // Separar el prefijo del ID para saber de qué endpoint viene
        const [tipo, rawId] = id.split('-');
        let baseUrl = '';

        if (tipo === 'estreno') {
          baseUrl = 'https://6840dca5d48516d1d3599ab7.mockapi.io/estrenos';
        } else if (tipo === 'serie') {
          baseUrl = 'https://68419871d48516d1d35c2e01.mockapi.io/series';
        } else if (tipo === 'pelicula') {
          baseUrl = 'https://6840dca5d48516d1d3599ab7.mockapi.io/peliculas';
        }

        const res = await fetch(`${baseUrl}/${rawId}`);
        if (!res.ok) throw new Error('Contenido no encontrado');
        const data = await res.json();
        setDetalle(data);
      } catch (error) {
        console.error('Error al obtener el detalle:', error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [id]);

  if (cargando) return <p className="mensaje-cargando">Cargando detalles…</p>;
  if (!detalle) return <p className="mensaje-cargando">Contenido no encontrado.</p>;

  return (

    <div className="detalle-contenedor">
      <div className="barra-superior">
        <BackButton />
      </div>

      <div className="margin">
        <div className="poster-info">
          <div className="poster-detalle">
            <Image
              src={detalle.poster}
              alt={detalle.titulo}
              width={300}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>

          <div className="info-detalle">
            <h1 className="titulo-detalle">{detalle.titulo}</h1>
            {detalle.year && <p><strong>Año:</strong> {detalle.year}</p>}
            <p><strong>Género:</strong> {detalle.genero}</p>
            <p><strong>Calificación:</strong> {detalle.calificacion}/10</p>
            {detalle.formato && <p><strong>Formato:</strong> {detalle.formato}</p>}
            {detalle.duracion && <p><strong>Duración:</strong> {detalle.duracion} min</p>}
            {detalle.categoria && <p><strong>Categoría:</strong> {detalle.categoria}</p>}

            {detalle.descripcion && (
              <>
                <br />
                <h3>Descripción</h3>
                <p className="descripcion">{detalle.descripcion}</p>
              </>
            )}

            <br />
            <div className="btns">
              {detalle.movie && (
                <Link href={detalle.movie} className="btn-opc">
                  <p className="opciones">Ver</p>
                </Link>
              )}
              <Link href="/calificacion" className="btn-opc">
                <p className="opciones">Calificar</p>
              </Link>
              <Link href="/reseñas" className="btn-opc">
                <p className="opciones">Reseñas</p>
              </Link>
            </div>
          </div>
        </div>

        {detalle.trailer && (
          <div className="video-seccion">
            <h3>Tráiler</h3>
            <div className="video-wrapper">
              <iframe
                src={detalle.trailer.replace('watch?v=', 'embed/')}
                title={`Tráiler de ${detalle.titulo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
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

        .btns {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-opc {
          padding: 10px 20px;
          background-color: #0070f3;
          border-radius: 8px;
          color: white;
          text-decoration: none;
        }

        .btn-opc:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Page;
