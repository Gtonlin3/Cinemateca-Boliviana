'use client'
import React, { useState } from 'react'
import ProcederConCompra from './ProcederConCompra'
import VentanaEmergente from './VentanaEmergente'

interface ItemCarrito {
  id: string
  nombre: string
  precio: number
  cantidad: number
  stock: number
  imagen: string
  seccion: string
}

const CarritoCompras = ({
  carrito,
  setCarrito,
}: {
  carrito: ItemCarrito[]
  setCarrito: React.Dispatch<React.SetStateAction<ItemCarrito[]>>
}) => {
  const [mostrarSidebar, setMostrarSidebar] = useState(false)
  const [mostrarCompra, setMostrarCompra] = useState(false)

  const quitarDelCarrito = (id: string) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const cambiarCantidad = (id: string, cantidad: number) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, Math.min(cantidad, item.stock)) }
          : item
      )
    )
  }

  const carritoIconStyle: React.CSSProperties = {
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
    cursor: 'pointer',
  }

  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: mostrarSidebar ? '20px' : '-320px',
    width: '320px',
    height: '100%',
    backgroundColor: '#121212', // fondo oscuro tipo modo noche
    boxShadow: '-2px 0 8px rgba(255,165,0,0.6)', // sombra naranja
    padding: '20px',
    transition: 'right 0.3s ease-in-out',
    zIndex: 999,
    overflowY: 'auto',
    color: 'white', // texto blanco para contraste
    display: mostrarSidebar ? 'block' : 'none',
  }

  const buttonStyle: React.CSSProperties = {
    margin: '0 5px',
    padding: '4px 12px',
    cursor: 'pointer',
    backgroundColor: '#ff7f00', // naranja
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.4)',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  }

  const buttonDisabledStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#a05400',
    cursor: 'not-allowed',
    boxShadow: 'none',
  }

  const quitarButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#cc3300',
    marginTop: '10px',
    width: '100%',
    boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.5)',
  }

  const realizarCompraButtonStyle: React.CSSProperties = {
    marginTop: '15px',
    padding: '12px',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: '#ff7f00',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.6)',
    transition: 'background-color 0.3s ease',
  }

  return (
    <div>
      {/* Ícono del carrito */}
      <div style={carritoIconStyle} onClick={() => setMostrarSidebar(!mostrarSidebar)}>
        🛒{carrito.reduce((acc, item) => acc + item.cantidad, 0)}
      </div>

      {/* Pestaña corrediza */}
      <div style={sidebarStyle}>
        <h2>Carrito de Compras</h2>

        {carrito.length === 0 ? (
          <p>Carrito vacío</p>
        ) : (
          <div>
            {carrito.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: '1px solid #444',
                  marginBottom: 15,
                  paddingBottom: 15,
                  borderRadius: '8px',
                  backgroundColor: '#1e1e1e',
                }}
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h4 style={{ margin: '10px 0 5px' }}>
                  {item.nombre} - Bs {item.precio}
                </h4>
                <p>
                  <strong>Sección:</strong> {item.seccion}
                </p>
                <p>
                  Cantidad:{' '}
                  <button
                    style={item.cantidad <= 1 ? buttonDisabledStyle : buttonStyle}
                    onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                    disabled={item.cantidad <= 1}
                  >
                    -
                  </button>
                  <span style={{ margin: '0 10px', fontWeight: 'bold' }}>{item.cantidad}</span>
                  <button
                    style={item.cantidad >= item.stock ? buttonDisabledStyle : buttonStyle}
                    onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                    disabled={item.cantidad >= item.stock}
                  >
                    +
                  </button>
                </p>
                <p>Subtotal: Bs {item.precio * item.cantidad}</p>
                <button style={quitarButtonStyle} onClick={() => quitarDelCarrito(item.id)}>
                  Quitar
                </button>
              </div>
            ))}
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
                marginTop: '20px',
              }}
            >
              Total de la compra: Bs{' '}
              {carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}
            </h3>
            <button
              style={realizarCompraButtonStyle}
              onClick={() => {
                console.log('Activando ventana emergente')
                setMostrarCompra(true)
              }}
            >
              Realizar compra
            </button>
            <VentanaEmergente mostrar={mostrarCompra} setMostrar={setMostrarCompra}>
              <ProcederConCompra
                mostrar={mostrarCompra}
                setMostrar={setMostrarCompra}
                carrito={carrito}
              />
            </VentanaEmergente>
          </div>
        )}
      </div>
    </div>
  )
}

export default CarritoCompras
