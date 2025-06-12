'use client';

import React, { useEffect, useState } from 'react';
import Ranking from '../RankingCard'; // 

interface Pelicula {
    id: string;
    titulo: string;
    poster: string;
    genero: string;
    calificacion: number;
}

const Top = () => {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerPeliculas = async () => {
            try {
                const res = await fetch('https://683b6a5828a0b0f2fdc49f95.mockapi.io/inicio');
                const data = await res.json();

                // Ordena las películas por calificación de mayor a menor
                const peliculasOrdenadas = data.sort((a: Pelicula, b: Pelicula) => b.calificacion - a.calificacion);

                setPeliculas(peliculasOrdenadas);
            } catch (error) {
                console.error('Error al obtener ranking:', error);
            } finally {
                setCargando(false);
            }
        };

        obtenerPeliculas();
    }, []);

    if (cargando) {
        return <p style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>Cargando Ranking…</p>;
    }

    return (
        <div className="Topp">
            {peliculas.map((pelicula, index) => (
                <Ranking
                    key={pelicula.id}
                    title={pelicula.titulo}
                    image={pelicula.poster}
                    genre={pelicula.genero}
                    ranking={index + 1}
                />
            ))}
        </div>
    );
};

export default Top;
