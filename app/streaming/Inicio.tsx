import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import Image from 'next/image';
import Link from 'next/link';

interface Inicio {
  id: string;
  titulo: string;
  poster: string;
  genero: string;
  calificacion: number;
}

const InicioPage = () => {
  const [inicio, setInicio] = useState<Inicio[]>([]);
  const [cargando, setCargando] = useState(true);
  const [indicePortada, setIndicePortada] = useState(0);

  useEffect(() => {
    const fetchInicio = async () => {
      try {
        const urls = [
          'https://6840dca5d48516d1d3599ab7.mockapi.io/estrenos',
          'https://68419871d48516d1d35c2e01.mockapi.io/series',
          'https://6840dca5d48516d1d3599ab7.mockapi.io/peliculas'
        ];

        const respuestas = await Promise.all(urls.map((url) => fetch(url)));
        const datos = await Promise.all(respuestas.map((res) => res.json()));

        const contenidoCombinado: Inicio[] = [
          ...datos[0].map((item: Inicio) => ({ ...item, id: `estreno-${item.id}` })),
          ...datos[1].map((item: Inicio) => ({ ...item, id: `serie-${item.id}` })),
          ...datos[2].map((item: Inicio) => ({ ...item, id: `pelicula-${item.id}` }))
        ];

        setInicio(contenidoCombinado);
      } catch (err) {
        console.error('Error al obtener contenido:', err);
      } finally {
        setCargando(false);
      }
    };

    fetchInicio();
  }, []);

  useEffect(() => {
    if (inicio.length === 0) return;

    const intervalo = setInterval(() => {
      setIndicePortada((prev) => (prev + 1) % inicio.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [inicio]);

  if (cargando) {
    return <p style={{ textAlign: 'center', color: 'white' }}>Cargando contenido...</p>;
  }

  const peliculaDestacada = inicio[indicePortada];

  return (
    <div>
      {/* Portada principal */}
      {peliculaDestacada && (
        <div className="recomendaciones-movies" style={{ position: 'relative' }}>
          <button
            onClick={() => setIndicePortada((prev) => (prev - 1 + inicio.length) % inicio.length)}
            className="flecha-navegacion izquierda"
          >
            ◀
          </button>

          <Link href={`/inicio/${peliculaDestacada.id}`} passHref>
            <div className="portada" style={{ cursor: 'pointer' }}>
              <Image
                src={peliculaDestacada.poster}
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
          </Link>

          <button
            onClick={() => setIndicePortada((prev) => (prev + 1) % inicio.length)}
            className="flecha-navegacion derecha"
          >
            ▶
          </button>
        </div>
      )}

      {/* Lista de películas */}
      <div className="CardMovie">
        {inicio.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            title={item.titulo}
            image={item.poster}
            // genre={item.genero} // ✅ Este campo es obligatorio
            calificacion={item.calificacion}
            type="inicio"
          />
        ))}
      </div>
    </div>
  );
};

export default InicioPage;
