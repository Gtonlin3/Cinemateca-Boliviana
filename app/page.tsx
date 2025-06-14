import Header from "./components/BarraNav/Header";
import CarNorticias from "./components/carruseles/CarNorticias";
import CarCartelera from "./components/carruseles/CarCartelera";

import Link from "next/link";
import NotificacionCine from "./components/Notificacion Cine/NotificacionCine";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <NotificacionCine />
        <Header />
        <CarNorticias />

        <div className="txt-car">
          <h3 className="titulo">CARTELERA</h3>
          <Link href="./cartelera">
            <h3 className="txt-vertodo">Ver todo</h3>
          </Link>
        </div>

        <CarCartelera />
      </div>
    </>
  );
}

{
  /* <Image
          src="/Portada-Karate.jpeg"
          alt="Logo Cinemateca"
          fill
          className="object-cover"
          priority
          txt-title 
        /> */
}
