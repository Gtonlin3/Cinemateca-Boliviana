import React from 'react'

const VentanaEmergente = ({ mostrar, setMostrar, children }: { mostrar: boolean, setMostrar: React.Dispatch<React.SetStateAction<boolean>>, children: React.ReactNode }) => {
  if (!mostrar) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        opacity: mostrar ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      onClick={() => setMostrar(false)}
    >
      <div 
        style={{
          backgroundColor: '#222',
          padding: '20px',
          borderRadius: '8px',
          width: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          color: '#fff',
          transform: mostrar ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.3s ease-in-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button 
          onClick={() => setMostrar(false)}
          style={{
            marginTop: '15px',
            padding: '10px 15px',
            backgroundColor: '#ff4444',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default VentanaEmergente