'use client'
import React, { useEffect, useState } from 'react'
import BackButton from '../login/BackButton'
import Logo from '../components/BarraNav/Logo'
import Inicio from './Inicio'
import Estrenos from './Estrenos'
import Peliculas from './Peliculas'
import Series from './Series'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'

const Streaming = () => {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')?.toUpperCase()
  const [activeTab, setActiveTab] = useState('INICIO')

  const router = useRouter()

  useEffect(() => {
    if (tabParam && ['INICIO', 'ESTRENOS', 'PELÍCULAS', 'SERIES'].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  const renderContent = () => {
    switch (activeTab) {
      case 'INICIO':
        return <Inicio />
      case 'ESTRENOS':
        return <Estrenos />
      case 'PELÍCULAS':
        return <Peliculas />
      case 'SERIES':
        return <Series />
      default:
        return null
    }
  }

  // Cambiar pestaña y actualizar la URL
  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    router.push(`/streaming?tab=${tab}`)
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
          height={40} />
        </div>
      </div>

      <nav className="barra-navegacion">
        <ul>
          {['INICIO', 'ESTRENOS', 'PELÍCULAS', 'SERIES'].map((tab) => (
            <li
              key={tab}
              onClick={() => handleTabClick(tab)}
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

      <div className="contenido-principal">
        {renderContent()}
      </div>
    </>
  )
}

export default Streaming
