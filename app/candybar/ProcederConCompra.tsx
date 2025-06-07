'use client'
import React, { useState, useEffect } from 'react'

const ProcederConCompra = ({ mostrar, setMostrar, carrito }: { mostrar: boolean; setMostrar: React.Dispatch<React.SetStateAction<boolean>>; carrito: any[] }) => {
  const [animar, setAnimar] = useState(false)

  useEffect(() => {
    if (mostrar) {
      setAnimar(true)
    } else {
      setTimeout(() => setAnimar(false), 300)
    }
  }, [mostrar])

  if (!animar) return null

  const fechaActual = new Date().toLocaleString()

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
          width: '500px', // ✅ Ajustado para que no desborde
          maxHeight: '90vh', // ⏳ Limita el alto máximo
          overflowY: 'auto', // 🎯 Activa scroll si hay muchos productos
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          color: '#fff',
          transform: mostrar ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.3s ease-in-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginBottom: '20px', fontSize: '22px' }}>REALIZAR PAGO</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Sección de recomendaciones */}
          <div style={{ width: '50%', paddingRight: '10px' }}>
            <h3>Recomendados para ti:</h3>
            <p>Aquí mostraremos los productos sugeridos...</p>
          </div>

          {/* Sección resumen */}
          <div style={{ width: '50%', paddingLeft: '10px', borderLeft: '1px solid #fff' }}>
            <h3>Prefactura</h3>
            <p><strong>Fecha:</strong> {fechaActual}</p>
            <p><strong>Negocio:</strong> Cinemateca Boliviana</p>

            <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '5px' }}>
              <table style={{ width: '100%', fontSize: '14px', marginTop: '10px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Producto</th>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Cantidad</th>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Precio</th>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {(carrito ?? []).map(item => (
                    <tr key={item.id}>
                      <td style={{ padding: '8px' }}>{item.nombre}</td>
                      <td style={{ padding: '8px' }}>{item.cantidad}</td>
                      <td style={{ padding: '8px' }}>Bs {item.precio}</td>
                      <td style={{ padding: '8px' }}>Bs {item.precio * item.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: '15px', fontSize: '20px' }}>Total: Bs {(carrito ?? []).reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</h3>
          </div>
        </div>

        {/* Sección de pago */}
        <div style={{ marginTop: '20px' }}>
          <h3>PAGO</h3>
          <p>Aquí se seleccionará el método de pago...</p>
          <button 
            style={{
              marginTop: '15px',
              padding: '10px 15px',
              backgroundColor: '#00cc66',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Generar QR de Pago
          </button>
        </div>

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

export default ProcederConCompra