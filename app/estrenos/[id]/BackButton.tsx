'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Compartir from '@/app/compartir/Compartir'

const BackButton = () => {
  return (
    <>
      <div className="btn-back">
        <Link href="/streaming">
          <Image src="/ico-atras.svg" alt="icoAtras" width={26} height={26} />
        </Link>

        {/* Botón de Compartir que abre modal */}
        
      </div>
      <Compartir />
    </>
  )
}

export default BackButton
