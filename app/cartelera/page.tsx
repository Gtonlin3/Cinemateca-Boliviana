import React from 'react'
import CarCartelera from '../components/carruseles/CarCartelera'
import BackButton from '../login/BackButton'

const page = () => {
  return (
<>
 <div className="barra-superior-black">
  <BackButton />
 </div>

<CarCartelera />

</>
  )
}

export default page
