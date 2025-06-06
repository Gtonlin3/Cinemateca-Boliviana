import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import Image from 'next/image';

interface Inicio {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
  portada: string;
}

const InicioPage = () => {
  const [inicio, setInicio] = useState<Inicio[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchInicio = async () => {
      try {
        const res = await fetch('https://683b6a5828a0b0f2fdc49f95.mockapi.io/inicio');
        const data = await res.json();
        setInicio(data);
      } catch (err) {
        console.error('Error al obtener estrenos:', err);
      } finally {
        setCargando(false);
      }
    };

    fetchInicio();
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', color: 'white' }}>Cargando inicio...</p>;
  }

  // Tomamos la primera película para la portada
  const peliculaDestacada = inicio[0];

  return (
    <div>
      {/* Portada principal */}
      {peliculaDestacada && (
        <div className="recomendaciones-movies">
          <div className="portada">
            <Image
              src={peliculaDestacada.portada}
              alt={peliculaDestacada.titulo}
              fill
              style={{ objectFit: 'cover' }}
              className="imagen-fondo-streaming"
              priority
            />
            <div className="overlay-texto">
              <h2>{peliculaDestacada.titulo}</h2>
              <p>{peliculaDestacada.genero}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lista de películas */}
      <div className="CardMovie">
        {inicio.map((inicio) => (
          <MovieCard
            key={inicio.id}
            id={inicio.id}
            title={inicio.titulo}
            image={inicio.poster}
            // genre={inicio.genero}
            calificacion={inicio.calificacion}
            type="inicio"
          />
        ))}
      </div>
    </div>
  );
};

export default InicioPage;
