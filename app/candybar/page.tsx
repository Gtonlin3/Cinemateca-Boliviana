import React from 'react'
import CandyBar from './CandyBar'
import BackButton from '../login/BackButton'

const page = () => {
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

export default page
