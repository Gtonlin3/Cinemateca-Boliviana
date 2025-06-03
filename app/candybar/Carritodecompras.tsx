'use client'
import React, { useState } from 'react'

interface ItemCarrito {
  id: string
  nombre: string
  precio: number
  cantidad: number
  stock: number
}

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [mostrarSidebar, setMostrarSidebar] = useState(false)

  const quitarDelCarrito = (id: string) => {
    setCarrito(prev => prev.filter(item => item.id !== id))
  }

  const cambiarCantidad = (id: string, cantidad: number) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad } : item
      )
    )
  }

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <div>
      {/* Ícono del carrito */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'black',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          fontSize: '20px',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={() => setMostrarSidebar(!mostrarSidebar)}
      >
        🛒{cantidadTotal}
      </div>

      {/* Pestaña corrediza */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mostrarSidebar ? 0 : '-300px',
          width: '300px',
          height: '100%',
          backgroundColor: '#fff',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
          padding: '20px',
          transition: 'right 0.3s ease-in-out',
          zIndex: 999,
          overflowY: 'auto'
        }}
      >
        <h2>Carrito</h2>
        {carrito.length === 0 ? (
          <p>Carrito vacío</p>
        ) : (
          <div>
            {carrito.map(item => (
              <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
                <h4>{item.nombre}</h4>
                <p>
                  Cantidad:{' '}
                  <button onClick={() => item.cantidad > 1 && cambiarCantidad(item.id, item.cantidad - 1)}>-</button>
                  {' '}{item.cantidad}{' '}
                  <button onClick={() => item.cantidad < item.stock && cambiarCantidad(item.id, item.cantidad + 1)}>+</button>
                </p>
                <p>Subtotal: Bs {item.precio * item.cantidad}</p>
                <button onClick={() => quitarDelCarrito(item.id)}>Quitar</button>
              </div>
            ))}
            <h3>Total: Bs {total}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default CarritoCompras
