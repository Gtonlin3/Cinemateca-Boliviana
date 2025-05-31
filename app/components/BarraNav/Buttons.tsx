import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Buttons = () => {
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
    <Link href="./notifications">
        <Image 
        src="/ico-notificaciones.svg" 
        alt="IcoLogin" 
        width={26} 
        height={26} 
        priority
        />
    </Link>

    <Link href="./login">
      <Image 
        src="/ico-login.svg" 
        alt="IcoLogin" 
        width={26} 
        height={26} 
        priority
      />
    </Link>
    
  </div>
  </>
  )
}

export default Buttons
