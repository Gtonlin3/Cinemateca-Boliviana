import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BotonNav = () => {
  return (
        <>
        <Link href="/##">
          <div className="icon-contenedor">

          <Image
            src="/ico-nav.svg" 
            alt="LogoNav" 
            width={24} 
            height={24}
            priority
          />
          
          </div>
        </Link>
     
    </>
  )
}

export default BotonNav