import React from 'react'
import Link from 'next/link'

const EnlaceNav = () => {
  return (
    <nav className="navegacion">
      <div className="grupo">
        <Link href="#" className="enlace-principal">Explorar</Link>
        <div className="submenu">
          <Link href="##" className="item-submenu">Noticias</Link>
          <Link href="#" className="item-submenu">Proyectos</Link>
        </div>
      </div>

      <div className="grupo">
        <Link href="#" className="enlace-principal">Servicios</Link>
        <div className="submenu">
          <Link href="##" className="item-submenu">Promociones</Link>
          <Link href="#" className="item-submenu">Alquiler de salas</Link>
        </div>
      </div>

      <Link href="#" className="enlace-principal">Candy Bar</Link>
      <Link href="##" className="enlace-principal">Membresía</Link>
      <Link href="#" className="enlace-principal">Nosotros</Link>
    </nav>
  )
}

export default EnlaceNav


//  .submenu {
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.25);
//   border: 1px solid #333;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
//   border-radius: 4px;
//   min-width: 160px;
//   z-index: 999;
//   pointer-events: auto;
// }

// .submenu a {
//   display: block;
//   padding: 10px 16px;
//   color: white;
//   text-decoration: none;
//   white-space: nowrap;
// }

// .submenu a:hover {
//   color: #FF5733;
//   background-color: rgba(255, 87, 51, 0.1);
// }

// .grupo:hover .submenu {
//   display: block;
// }


// .enlace-principal {
//   text-decoration: none;
//   color: white;
//   padding: 8px 0;
//   display: inline-block;
// }

// .enlace-principal:hover {
//   color: #FF5733;
// }
