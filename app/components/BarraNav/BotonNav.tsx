'use client'

import { useState } from 'react'
import Image from 'next/image'
import MenuLateral from './MenuLateral'

const BotonNav = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false)

  return (
    <>
      <div className="icon-contenedor" onClick={() => setMostrarMenu(!mostrarMenu)}>
        <Image
          src="/ico-menu.svg"
          alt="LogoNav"
          width={24}
          height={24}
          priority
        />
      </div>

      {mostrarMenu && <MenuLateral onClose={() => setMostrarMenu(false)} />}
    </>
  )
}

export default BotonNav