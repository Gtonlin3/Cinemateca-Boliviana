import React from 'react'
import BackButton from '../login/BackButton'
import Image from 'next/image'

const Novedades = () => {
  return (
    <>

    <div className="barra-superior-black">
         <BackButton />
    </div>

     <h2 className="titulo">Novedades</h2>
 <h3 className="titulo"> hoy  </h3>
    
<div className='menu'>

    <div className='producto-card'>
        <Image 
            src="/Nov-1.png" 
            alt="Novedades"
            width={300} 
            height={300}
            className='img-novedades'
        />
        <h2 className='titulo'>OFICINAS EN ALQUILER</h2>

        <p className='texto-novedades'>
            Nuestra oficina de alquiler se ha abierto en la calle de la
        
        </p>

    </div>

    <div className='producto-card'>
        <Image 
            src="/Nov-1.png" 
            alt="Novedades"
            width={300} 
            height={300}
            className='img-novedades'
        />
        <h2 className='titulo'>OFICINAS EN ALQUILER</h2>

        <p className='texto-novedades'>
            Nuestra oficina de alquiler se ha abierto en la calle de la
             
        </p>

    </div>


    <div className='producto-card'>
        <Image 
            src="/Nov-1.png" 
            alt="Novedades"
            width={300} 
            height={300}
            className='img-novedades'
        />
        <h2 className='titulo'>OFICINAS EN ALQUILER</h2>

        <p className='texto-novedades'>
            Nuestra oficina de alquiler se ha abierto en la calle de la
         
        </p>

    </div>
  </div>


    </>
  )
}

export default Novedades