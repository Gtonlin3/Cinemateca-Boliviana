import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CarRecomen = () => {
  return (
    <>
    <div className='txt-car'>
        <p className='txt-title'>RECOMENDACIONES</p>
        <Link href="### VER TODO ###">
            <p className='txt-vertodo'>Ver todo</p>
        </Link>
        
    </div>
    <div className='CarRecomen'>
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

export default CarRecomen