import React from 'react'
import CarCartelera from '../components/carruseles/CarCartelera'
import BackButton from '../login/BackButton'

const page = () => {
  return (
<>
 <div className="barra-superior-black">
  <BackButton />
 </div>
    <h2 className="titulo">Cartelera</h2>
  <CarCartelera />

</>
  )
}

export default page
