import React from 'react'

const EnlaceNav = () => {
  return (
    <nav className="navegacion">
      <div className="grupo">
        <a href="#" className="enlace-principal">Explorar</a>
        <div className="submenu">
          <a href="##" className="item-submenu">Noticias</a>
          <a href="#" className="item-submenu">Proyectos</a>
        </div>
      </div>

      <div className="grupo">
        <a href="#" className="enlace-principal">Servicios</a>
        <div className="submenu">
          <a href="##" className="item-submenu">Promociones</a>
          <a href="#" className="item-submenu">Alquiler de salas</a>
        </div>
      </div>

      <a href="#" className="enlace-principal">Candy Bar</a>
      <a href="##" className="enlace-principal">Membresía</a>
      <a href="#" className="enlace-principal">Nosotros</a>
    </nav>
  )
}

export default EnlaceNav
