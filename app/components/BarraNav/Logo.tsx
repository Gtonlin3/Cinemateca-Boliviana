import Image from 'next/image'
import React from 'react'


const Logo = () => {
  return (
    <>
    <div className="lg-img-txt">

      <Image 
        src="/logo-CM.svg" 
        alt="LogoCinemateca" 
        width={120} 
        height={30} 
        priority
      />
      
    </div>
    </>
  )
}

export default Logo
