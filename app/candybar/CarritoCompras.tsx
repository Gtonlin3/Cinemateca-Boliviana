'use client'
import React, { useState } from 'react'
import ProcederConCompra from './ProcederConCompra'

interface ItemCarrito {
  id: string
  nombre: string
  precio: number
  cantidad: number
  stock: number
  imagen: string
  seccion: string
}

const CarritoCompras = ({ carrito, setCarrito }: { carrito: ItemCarrito[]; setCarrito: React.Dispatch<React.SetStateAction<ItemCarrito[]>> }) => {
  const [mostrarSidebar, setMostrarSidebar] = useState(false)
  const [mostrarCompra, setMostrarCompra] = useState(false) // ✅ MOVIDO dentro del componente

  const quitarDelCarrito = (id: string) => {
    setCarrito(prev => prev.filter(item => item.id !== id))
  }

  const cambiarCantidad = (id: string, cantidad: number) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item
      )
    )
  }

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
        🛒{carrito.reduce((acc, item) => acc + item.cantidad, 0)}
      </div>

      {/* Pestaña corrediza */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: mostrarSidebar ? '20px' : '-300px',
          width: '300px',
          height: '100%',
          backgroundColor: '#fff',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
          padding: '20px',
          transition: 'right 0.3s ease-in-out',
          zIndex: 999,
          overflowY: 'auto',
          display: mostrarSidebar ? 'block' : 'none'
        }}
      >
        <h2>Carrito de Compras</h2>

        {(carrito ?? []).length === 0 ? (
          <p>Carrito vacío</p>
        ) : (
          <div>
            {(carrito ?? []).map(item => (

              <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
                <img src={item.imagen} alt={item.nombre} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                <h4>{item.nombre} - Bs {item.precio}</h4>
                <p><strong>Sección:</strong> {item.seccion}</p>
                <p>Cantidad:{' '}
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}>-</button>
                  {' '}{item.cantidad}{' '}
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}>+</button>
                </p>
                <p>Subtotal: Bs {item.precio * item.cantidad}</p>
                <button onClick={() => quitarDelCarrito(item.id)}>Quitar</button>
              </div>
            ))}
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
              Total de la compra: Bs {carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}
            </h3>
            <button onClick={() => setMostrarCompra(true)}>Realizar compra</button>
            <ProcederConCompra mostrar={mostrarCompra} setMostrar={setMostrarCompra} carrito={carrito} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CarritoCompras