import Image from "next/image";
import Header from "./components/BarraNav/Header";

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
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>

      <div className="eventos">

        <Image 
          src="/portada-cm.svg"
          alt="LogoCinemateca" 
          width={374} 
          height={354} 
          priority
        />

      </div>

    </div>
  </>
  );
}