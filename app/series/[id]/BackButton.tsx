import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BackButton = () => {
  return (
    <>
    <div className="btn-back">
        <Link href="/streaming">
         <Image 
                   src="/ico-atras.svg"
                   alt="icoAtras"
                   width={26} 
                   height= {26}
                 />       
       </Link>

        

    </div>
        <Link href="/streaming">
         <Image 
                   src="/ico-compartir.svg"
                   alt="icoAtras"
                   width={26} 
                   height= {26}
                 />       
        </Link>
    </>
  )
}

export default BackButton
