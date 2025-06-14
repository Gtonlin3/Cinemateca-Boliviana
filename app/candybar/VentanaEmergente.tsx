import React from 'react'

const VentanaEmergente = ({
  mostrar,
  setMostrar,
  children,
}: {
  mostrar: boolean
  setMostrar: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}) => {
  if (!mostrar) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(18, 18, 18, 0.85)', // fondo oscuro casi negro semitransparente
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        opacity: mostrar ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      onClick={() => setMostrar(false)}
    >
      <div
        style={{
          backgroundColor: '#222',
          padding: '20px',
          borderRadius: '10px',
          width: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 0 15px 4px rgba(255, 127, 0, 0.6)', // sombra naranja brillante
          textAlign: 'center',
          color: '#fff',
          transform: mostrar ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={() => setMostrar(false)}
          style={{
            marginTop: '15px',
            padding: '10px 18px',
            backgroundColor: '#ff7f00', // naranja
            border: 'none',
            borderRadius: '6px',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.4)', // sombra blanca suave
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e67300')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff7f00')}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default VentanaEmergente
