'use client'

import React from 'react'
import CandyBar from './CandyBar'
import BackButton from '../login/BackButton'
import CarritoCompras from './CarritoCompras'

const Page = () => {
  return (
    <>
      <div className="barra-superior-black">
        <BackButton />
      </div>

      <div>
        <CandyBar />
      </div>

      
    </>
  )
}

export default Page
