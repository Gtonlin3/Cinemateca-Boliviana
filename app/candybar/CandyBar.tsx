'use client'
import React, { useEffect, useState } from 'react'

interface ProductoCandyBar {
  id: string
  name: string
  tipo: string
  imagen: string
  descripcion: string
  stock: number
  precio: string
}

const CandyBar = () => {
  const [productos, setProductos] = useState<ProductoCandyBar[]>([])

  useEffect(() => {
    const fetchProductos = async () => {
      const res = await fetch('https://683b6a5828a0b0f2fdc49f95.mockapi.io/CandyBar')
      const data = await res.json()
      setProductos(data)
    }

    fetchProductos()
  }, [])

  return (
    <div className="menu">
      <h2>MENU CANDY BAR</h2>
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>Tipo:</strong> {producto.tipo}</p>
            <p><strong>Precio:</strong> Bs{producto.precio}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CandyBar
