import React from 'react'
import EnlaceNav from '../atomos/EnlaceNav'
import LogoSearch from '../moleculas/LogoSearch'
import Botones from '../moleculas/Botones'
import InfoMovie from '../moleculas/InfoMovie'

const Header = () => {
  return (
    <>
    <div className="barra-superior">
        <div>
            <LogoSearch/>
        </div>
            <EnlaceNav />
            <Botones/>
    </div>
      <InfoMovie/>
    </>
  )
}

export default Header
