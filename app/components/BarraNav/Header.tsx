import React from 'react'
import Logo from './Logo'
import BotonLogin from './BotonLogin'
import BotonNav from './BotonNav'

const Header = () => {
  return (
    <>
        <div className="barra-superior">
            <BotonNav/>
            <Logo/>
            <BotonLogin/>
        </div>
    </>
  )
}

export default Header