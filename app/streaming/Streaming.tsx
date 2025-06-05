'use client'
import React, { useState } from 'react'
import BackButton from '../login/BackButton'
import Logo from '../components/BarraNav/Logo'
import Inicio from './Inicio'
import Estrenos from './Estrenos'
import Peliculas from './Peliculas'
import Series from './Series'
import Image from 'next/image'

const Streaming = () => {
  const [activeTab, setActiveTab] = useState('INICIO')

  // Contenido por pestaña
  const renderContent = () => {
    switch (activeTab) {
      case 'INICIO':
        return (
          <>
            <Inicio />
          </>
        );
      case 'ESTRENOS':
        return (
          <>
            <Estrenos />
          </>
        );
      case 'PELÍCULAS':
        return (
          <>
          <Peliculas />
        </>
        );
        
      case 'SERIES':
        return (
        <>
          <Series />
        </>
        );
      default:
        return null
    }
  }

  return (
    <>
      <div className="barra-superior">
        <BackButton />
        
        <div className="lg-img-txt">
        
              <Image 
                src="/logo-play.svg" 
                alt="LogoCinemateca" 
                width={180} 
                height={40} 
                priority
              />
              
            </div>



      </div>

      <nav className="barra-navegacion">
        <ul>
          {['INICIO', 'ESTRENOS', 'PELÍCULAS', 'SERIES'].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                cursor: 'pointer',
                fontWeight: activeTab === tab ? 'bold' : 'normal',
                color: activeTab === tab ? '#f39c12' : 'white',
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      <div className="contenido-principal" >
        {renderContent()}
      </div>
    </>
  )
}

export default Streaming
