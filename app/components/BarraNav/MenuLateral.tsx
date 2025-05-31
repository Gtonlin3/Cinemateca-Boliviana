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
        <li><a href="/">Inicio</a></li>
        <li><a href="/cartelera">Cartelera</a></li>
        <li><a href="/Novedades">Novedades</a></li>
        <Link href="/streaming">
            <li><a href="/Streamig">CinematecaPlay</a></li>
        </Link>
        <li><a href="/CandyBar">Candy Bar</a></li>
        <li><a href="/Contacto">Contacto</a></li>
      </ul>
    </div>
  );
};

export default MenuLateral;
