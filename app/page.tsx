import Image from "next/image";
import Header from "./components/BarraNav/Header";
import CarNorticias from "./components/carruseles/CarNorticias";
import CarCartelera from "./components/carruseles/CarCartelera";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        
        <Header />
        <CarNorticias />

        <div className="txt-car">
          <p className="txt-title">CARTELERA</p>
          <Link href="./cartelera">
            <p className="txt-vertodo">Ver todo</p>
          </Link>
        </div>

        <CarCartelera />
      </div>
    </>
  );
}

{/* <Image
          src="/Portada-Karate.jpeg"
          alt="Logo Cinemateca"
          fill
          className="object-cover"
          priority
        /> */}