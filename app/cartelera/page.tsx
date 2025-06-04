import React from 'react'
import CarCartelera from '../components/carruseles/CarCartelera'
import BackButton from '../login/BackButton'

const page = () => {
  return (
<>
 <div className="barra-superior-black">
  <BackButton />
 </div>
 <div className='margin'>

    <h2 className="titulo">CARTELERA</h2>
    <CarCartelera />

 </div>

</>
  )
}

export default page
