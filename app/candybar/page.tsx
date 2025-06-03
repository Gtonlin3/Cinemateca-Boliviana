'use client'

import React from 'react'
import CandyBar from './CandyBar'
import BackButton from '../login/BackButton'
import CarritoCompras from './Carritodecompras'

const Page = () => {
  return (
    <>
      <div className="barra-superior-black">
        <BackButton />
      </div>

      <div>
        <CandyBar />
      </div>

      <div>
        <CarritoCompras />
      </div>
    </>
  )
}

export default Page
