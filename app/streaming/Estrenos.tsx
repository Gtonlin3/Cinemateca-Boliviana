'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Image from 'next/image';

interface Estreno {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
}

const EstrenosPage = () => {
  const [estrenos, setEstrenos] = useState<Estreno[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchEstrenos = async () => {
      try {
        const res = await fetch('https://6840dca5d48516d1d3599ab7.mockapi.io/estrenos');
        const data = await res.json();
        setEstrenos(data);
      } catch (err) {
        console.error('Error al obtener estrenos:', err);
      } finally {
        setCargando(false);
      }
    };

    fetchEstrenos();
  }, []);

  if (cargando) return <p style={{ textAlign: 'center', color: 'white' }}>Cargando estrenos...</p>;

  return (
    <div className="encabezado">

      <div className="ult">
        <div className="primer_rect"></div>
        <p className="ultimas">Últimos Estrenos</p>
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
                    priority
                  />
                </button>
              ))}
            </div>

      <div className="titulo-streaming">
        <div className="rect_vert"></div>
        <h2 className="opciones">Añadidas recientemente</h2>
      </div>


      <div className="CardMovie">
        {estrenos.map((e) => (
          <MovieCard
            key={e.id}
            id={e.id}
            title={e.titulo}
            image={e.poster}
            genre={e.genero}
            calificacion={e.calificacion}
            type="estrenos" // 👈 importante para redirigir al detalle correcto
          />
        ))}
      </div>
    </div>
  );
};

export default EstrenosPage;
