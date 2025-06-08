'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Compartir from '@/app/compartir/Compartir'

const BackButton = () => {
  return (
    <>
      <div className="btn-back">
        <Link href="/streaming?tab=PELÍCULAS">
          <Image src="/ico-atras.svg" alt="icoAtras" width={26} height={26} />
        </Link>
      </div>
      <Compartir />
    </>
  )
}

export default BackButton
