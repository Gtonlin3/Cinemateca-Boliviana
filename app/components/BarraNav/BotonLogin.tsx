import React from 'react'
import Image from 'next/image'

const BotonLogin = () => {
  return (
  <>
  <div className='botones'>

    <Image 
      src="/ico-buscar.svg" 
      alt="IcoLogin" 
      width={26} 
      height={26} 
      priority
    />
    
    <Image 
      src="/ico-notificaciones.svg" 
      alt="IcoLogin" 
      width={26} 
      height={26} 
      priority
    />

    <Image 
      src="/ico-login.svg" 
      alt="IcoLogin" 
      width={26} 
      height={26} 
      priority
    />

  </div>
  </>
  )
}

export default BotonLogin
