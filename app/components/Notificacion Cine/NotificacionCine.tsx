
import NotificacionCineClient from "./NotificacionCineClient";

const NotificacionCine = async () => {
  const respuesta = await fetch(
    'https://6840dca5d48516d1d3599ab7.mockapi.io/peliculas',
    { cache: 'no-store' }
  );

  if (!respuesta.ok) {
    throw new Error(`Failed to fetch: ${respuesta.statusText}`);
  }

  const data = await respuesta.json();
  const pelicula = data[0];

  return (
    <NotificacionCineClient
      titulo={pelicula.titulo}
      formato={pelicula.formato}
      hora={pelicula.f1}
      poster={pelicula.poster}
    />
  );
};

export default NotificacionCine;
