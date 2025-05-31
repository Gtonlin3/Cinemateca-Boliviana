import Image from "next/image";
import Header from "./components/BarraNav/Header";
import CarNorticias from "./components/carruseles/CarNorticias";
import CarCartelera from "./components/carruseles/CarCartelera";
import CarRecomen from "./components/carruseles/CarRecomen";

export default function Home() {
  return (
    <>
    <div className="relative w-full h-screen">

      {/* <Image
        src="/Portada-Karate.jpeg"
        alt="Logo Cinemateca"
        fill
        className="object-cover"
        priority
      /> */}
        <Header />
        <CarNorticias />
        <CarCartelera />
        <CarRecomen/>
     

    </div>
  </>
  );
}