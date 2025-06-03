'use client'
import React, { useEffect, useState } from 'react'

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

const SeccionProductos = ({ titulo, productos }: { titulo: string; productos: ProductoSnack[] }) => (
  <div>
    <h3 className='subtitulo' style={{ fontSize: '22px', textAlign: 'left', marginTop: '20px' }}>{titulo}</h3>
    <div className="menu">
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.Nombre} style={{ width: '170px', height: '170px', objectFit: 'cover' }} />
            <h3>{producto.Nombre}</h3>
            <p><strong>Stock:</strong> {producto.Stock}</p>
            <p><strong>Precio:</strong> Bs{producto.Precio}</p>
            <button>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const CandyBar = () => {
  const [combos, setCombos] = useState<ComboEspecial[]>([])
  const [productos, setProductos] = useState<ProductoSnack[]>([])

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

  return (
    <>
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
                <button>Agregar</button>
              </div>
            ))}
          </div>
        </div>

        {/* Secciones adicionales usando el nuevo componente reutilizable */}
        <SeccionProductos titulo="Comida Rápida" productos={productos.filter(p => p.Seccion === 'Comida Rápida')} />
        <SeccionProductos titulo="Bebidas" productos={productos.filter(p => p.Seccion === 'Bebidas')} />
        <SeccionProductos titulo="Snacks" productos={productos.filter(p => p.Seccion === 'Snacks')} />
        <SeccionProductos titulo="Dulces" productos={productos.filter(p => p.Seccion === 'Dulces')} />
      </div>
    </>
  )
}

export default CandyBar