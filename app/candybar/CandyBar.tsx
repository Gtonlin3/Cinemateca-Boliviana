'use client'
import React, { useEffect, useState } from 'react'
import CarritoCompras from './CarritoCompras'

interface ProductoSnack {
  id: string
  Nombre: string
  Seccion: string
  imagen: string
  Stock: number
  Precio: string
}

interface ComboEspecial {
  id: string
  Nombre: string
  imagen: string
  Descripcion: string
  Stock: number
  Precio: string
}

const CandyBar = () => {
  const [combos, setCombos] = useState<ComboEspecial[]>([])
  const [productos, setProductos] = useState<ProductoSnack[]>([])
  const [carrito, setCarrito] = useState<{ id: string; nombre: string; precio: number; cantidad: number; stock: number }[]>([])

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const res = await fetch('https://68423e50e1347494c31c37f5.mockapi.io/CombosEspeciales')
        const data = await res.json()
        setCombos(data.slice(0, 5))
      } catch (error) {
        console.error('Error al cargar los combos:', error)
      }
    }

    const fetchProductos = async () => {
      try {
        const res = await fetch('https://68423e50e1347494c31c37f5.mockapi.io/productosSnack')
        const data = await res.json()
        setProductos(data)
      } catch (error) {
        console.error('Error al cargar productos:', error)
      }
    }

    fetchCombos()
    fetchProductos()
  }, [])

  const agregarAlCarrito = (producto: ProductoSnack | ComboEspecial) => {
  setCarrito(prev => {
    const existe = prev.find(item => item.id === producto.id)
    if (existe) {
      return prev.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    } else {
      return [...prev, {
        id: producto.id,
        nombre: producto.Nombre,
        precio: parseFloat(producto.Precio.replace(' Bs', '')), 
        cantidad: 1,
        stock: producto.Stock ?? 1 // Si no tiene stock, asignamos 1 por defecto
      }]
    }
  })
}

  return (
    <>
      <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
      <div className='margin'>
        <h2 className='titulo' style={{ textAlign: 'center' }}>Candy Bar CINEMATECA BOLIVIANA</h2>

        {/* Sección de Combos Especiales */}
        <h3 className='subtitulo'>COMBOS ESPECIALES</h3>
        <div className="menu">
          <div className="productos-grid">
            {combos.map(combo => (
              <div key={combo.id} className="producto-card">
                <img src={combo.imagen} alt={combo.Nombre} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                <h3>{combo.Nombre}</h3>
                <p>{combo.Descripcion}</p>
                <p><strong>Stock:</strong> {combo.Stock}</p>
                <p><strong>Precio:</strong> Bs{combo.Precio}</p>
                <button onClick={() => agregarAlCarrito(combo)}>Agregar</button>
              </div>
            ))}
          </div>
        </div>

        {/* Secciones adicionales */}
        {['Comida Rápida', 'Bebidas', 'Snacks', 'Dulces'].map(seccion => (
          <div key={seccion}>
            <h3 className='subtitulo'>{seccion}</h3>
            <div className="menu">
              <div className="productos-grid">
                {productos
                  .filter(producto => producto.Seccion === seccion)
                  .map(producto => (
                    <div key={producto.id} className="producto-card">
                      <img src={producto.imagen} alt={producto.Nombre} style={{ width: '170px', height: '170px', objectFit: 'cover' }} />
                      <h3>{producto.Nombre}</h3>
                      <p><strong>Stock:</strong> {producto.Stock}</p>
                      <p><strong>Precio:</strong> Bs{producto.Precio}</p>
                      <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CandyBar