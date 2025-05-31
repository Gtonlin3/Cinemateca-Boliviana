'use client';

import Link from 'next/link';
import React from 'react';

const MenuLateral = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="menu-lateral">
      <div className="menu-header">
        <button className="btn-cerrar" onClick={onClose}>✕</button>
      </div>
      <ul className="menu-items">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/cartelera">Cartelera</Link></li>
        <li><Link href="/Novedades">Novedades</Link></li>
        <li><Link href="/streaming">CinematecaPlay</Link></li>
        <li><Link href="/candybar">Candy Bar</Link></li>
        <li><Link href="/Contacto">Contacto</Link></li>
      </ul>
    </div>
  );
};

export default MenuLateral;
