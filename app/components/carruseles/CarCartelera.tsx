import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CarCartelera = () => {
  return (
    <>
    <div className='txt-car'>
        <p className='txt-title'>CARTELERA</p>
        <Link href="### VER TODO ###">
            <p className='txt-vertodo'>Ver todo</p>
        </Link>
    </div>
    
     <div className="CarCartelera">
        <Image 
          src="/portada-cm.svg"
          alt="LogoCinemateca" 
          width={380} 
          height= {350}
          priority
        />

        <Image 
          src="/portada-cm.svg"
          alt="LogoCinemateca" 
          width={380} 
          height= {350}
          priority
        />
      </div>
    </>
  )
}

export default CarCartelera
