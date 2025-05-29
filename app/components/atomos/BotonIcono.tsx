import Image from 'next/image'
import React from 'react'

const BotonIcono = () => {
  return (
    <>
    <div className='Button-Ico'>
      <a href="##">
        <Image src="/icono-search.svg" alt="icono-buscar" width={40} height={40} priority/>
      </a>
    </div>

      
    </>
  )
}

export default BotonIcono
