'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import MovieCard from '../components/MovieCard'

interface  Series {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
}

const Series = () => {
  const [series, setSeries] = useState<Series[]>([]);
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {
      const fetchSeries = async () => {
        try {
          const res = await fetch('https://68419871d48516d1d35c2e01.mockapi.io/series');
          const data = await res.json();
          setSeries(data);
        } catch (err) {
          console.error('Error al obtener estrenos:', err);
        } finally {
          setCargando(false);
        }
      };
  
      fetchSeries();
    }, []);
  
    if (cargando) return <p style={{ textAlign: 'center', color: 'white' }}>Cargando Series...</p>;

  return (
   <>
      <div className="encabezado">

        <div className='ult'> 
          <div className="primer_rect"></div>
          <p className="ultimas">Ultimas Series Agregadas</p>
          <div className="segundo_rect"></div>
        </div>
        
        <div className="btns">
                {['Género', 'Año', 'Calidad', 'Popularidad'].map((texto) => (
                  <button key={texto} className="btn-opc">
                    <p className="opciones">{texto}</p>
                    <Image
                      src="/ico-menu.svg"
                      alt="ícono menú"
                      width={14}
                      height={14}
                    />
                  </button>
                ))}
              </div>

        <div className='titulo-streaming'>
            <div className="rect_vert"></div>
            <h2 className='opciones'>Añadidas recientemente</h2>
        </div>

         <div className="CardMovie">
        {series.map((s) => (
          <MovieCard
            key={s.id}
            id={s.id}
            title={s.titulo}
            image={s.poster}
            // genre={s.genero}
            calificacion={s.calificacion}
            type="series" // 👈 importante para redirigir al detalle correcto
          />
        ))}
      </div>
    </div>
   </>
  )
}

export default Series