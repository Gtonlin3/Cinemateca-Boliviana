import Image from 'next/image'
import React from 'react'


const Logo = () => {
  return (
    <>
    <div className="lg-img-txt">

      <Image 
        src="/logo-cinemateca.png" 
        alt="Logo Cinemateca" 
        width={36} 
        height={36} 
        priority
      />
    <div>
      <p className="text-lg">Cinemateca </p>
      <p className="text-lg">Boliviana</p>
    </div>
      
    </div>
    </>
  )
}

export default Logo
