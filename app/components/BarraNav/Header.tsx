import React from 'react'
import Logo from './Logo'
import BotonNav from './BotonNav'
import Buttons from './Buttons'

const Header = () => {
  return (
    <>
        <div className="barra-superior">
            <BotonNav/>
            <Logo/>
            <Buttons/>
        </div>
    </>
  )
}

export default Header