'use client'
import React, { useEffect, useState, useCallback } from 'react'
import CarritoCompras from './CarritoCompras'

interface ProductoSnack {
  id: string
  Nombre: string
  Seccion: string
  imagen: string
  Stock: number
  Precio: string
}

interface ItemCarrito {
  id: string
  nombre: string
  precio: number
  cantidad: number
  stock: number
  imagen: string
  seccion: string
}

const SECCIONES = ['CombosEspeciales', 'Comida Rápida', 'Bebidas', 'Snacks', 'Dulces']

const botonAgregarStyle: React.CSSProperties = {
  backgroundColor: '#ff6600',    // naranja fuerte
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  fontSize: '1rem',
  boxShadow: '0 2px 8px rgba(255, 255, 255, 0.7)', // sombra blanca suave
}

const botonAgregarHoverStyle: React.CSSProperties = {
  backgroundColor: '#e65c00', // naranja más oscuro para hover
  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.9)', // sombra blanca más intensa
}

const CandyBar: React.FC = () => {
  const [productos, setProductos] = useState<ProductoSnack[]>([])
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('https://68423e50e1347494c31c37f5.mockapi.io/productosSnack')
        const data = await res.json()
        setProductos(data)
      } catch (error) {
        console.error('Error al cargar productos:', error)
      }
    }
    fetchProductos()
  }, [])

  const agregarAlCarrito = useCallback((producto: ProductoSnack) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id)
      const precio = parseFloat(producto.Precio.replace(' Bs', ''))

      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [
        ...prev,
        {
          id: producto.id,
          nombre: producto.Nombre,
          precio,
          cantidad: 1,
          stock: producto.Stock ?? 1,
          imagen: producto.imagen,
          seccion: producto.Seccion,
        },
      ]
    })
  }, [])

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '2rem',
    color: '#ff6600',
    borderBottom: '3px solid #ff6600',
    paddingBottom: '6px',
    marginTop: '40px',
    marginBottom: '20px',
    fontWeight: '700',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }

  const productosGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
  }

  const productoCardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
    cursor: 'default',
  }

  const productoCardHoverStyle: React.CSSProperties = {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    cursor: 'pointer',
  }

  const productoNombreStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '700',
    margin: '10px 0 6px 0',
    color: '#333',
  }

  const infoTextStyle: React.CSSProperties = {
    margin: '4px 0',
    color: '#555',
    fontSize: '0.9rem',
  }

  const [hoverCardId, setHoverCardId] = useState<string | null>(null)

  return (
    <>
      <CarritoCompras carrito={carrito} setCarrito={setCarrito} />

      <div className="margin" style={{ padding: '0 20px', maxWidth: '1100px', margin: 'auto' }}>
        <h2 className="titulo" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '40px', fontSize: '2.8rem', fontWeight: '800', color: '#222', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          Candy Bar CINEMATECA BOLIVIANA
        </h2>

        {SECCIONES.map((seccion) => (
          <div key={seccion}>
            <h3 style={sectionTitleStyle}>
              {seccion.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div style={productosGridStyle}>
              {productos
                .filter((producto) => producto.Seccion === seccion)
                .map((producto) => (
                  <div
                    key={producto.id}
                    style={{
                      ...productoCardStyle,
                      ...(hoverCardId === producto.id ? productoCardHoverStyle : {}),
                    }}
                    onMouseEnter={() => setHoverCardId(producto.id)}
                    onMouseLeave={() => setHoverCardId(null)}
                  >
                    <img
                      src={producto.imagen}
                      alt={producto.Nombre}
                      width={170}
                      height={170}
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                    />
                    <h3 style={productoNombreStyle}>{producto.Nombre}</h3>
                    <p style={infoTextStyle}>
                      <strong>Stock:</strong> {producto.Stock}
                    </p>
                    <p style={infoTextStyle}>
                      <strong>Precio:</strong> {producto.Precio}
                    </p>
                    <button
                      style={
                        hoveredId === producto.id
                          ? { ...botonAgregarStyle, ...botonAgregarHoverStyle }
                          : botonAgregarStyle
                      }
                      onMouseEnter={() => setHoveredId(producto.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CandyBar
