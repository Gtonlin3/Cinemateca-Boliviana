'use client'
import React, { useEffect, useState } from 'react'

interface ComboEspecial {
  id: string
  Nombre: string
  imagen: string
  Descripcion: string
  Stock: number
  Precio: string
}
interface productosSnack {
  id: string
  Nombre: string
  Seccion: string
  imagen: string
  Stock: number
  Precio: string
}


const CandyBar = () => {
  const [combos, setCombos] = useState<ComboEspecial[]>([])
  const [snacks, setSnacks] = useState<productosSnack[]>([])


  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const res = await fetch('https://68423e50e1347494c31c37f5.mockapi.io/CombosEspeciales')
        const data = await res.json()
        setCombos(data.slice(0, 5)) // Tomamos solo los primeros 5 combos
      } catch (error) {
        console.error('Error al cargar los combos:', error)
      }
    }

    fetchCombos()
  }, [])


  

  // 🔥 Función para comprar y reducir el stock en MockAPI
  const comprarProducto = async (id: string, stockActual: number) => {
    if (stockActual > 0) {
      try {
        const nuevoStock = stockActual - 1
        await fetch(`https://68423e50e1347494c31c37f5.mockapi.io/CombosEspeciales/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Stock: nuevoStock })
        })

        // Actualizar el estado para reflejar el cambio sin recargar la página
        setCombos(combos.map(combo => 
          combo.id === id ? { ...combo, Stock: nuevoStock } : combo
        ))
      } catch (error) {
        console.error('Error al actualizar el stock:', error)
      }
    }
  }

  return (
    <>
      <div className='margin'>
        {/* Título principal centrado */}
        <h2 className='titulo' style={{ textAlign: 'center' }}>Candy Bar CINEMATECA BOLIVIANA</h2>

        {/* Subtítulo normal */}
        <h3 className='subtitulo'>COMBOS ESPECIALES</h3>

        {/* Sección de Combos Especiales */}
        <div className="menu">
          <div className="productos-grid">
            {combos.map(combo => (
              <div key={combo.id} className="producto-card">
                <img src={combo.imagen} alt={combo.Nombre} />
                <h3>{combo.Nombre}</h3>
                <p>{combo.Descripcion}</p>
                <p><strong>Stock:</strong> {combo.Stock}</p>
                <p><strong>Precio:</strong> Bs{combo.Precio}</p>
                <button onClick={() => comprarProducto(combo.id, combo.Stock)}>
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Subtítulos adicionales */}
        {/* Sección de Bebidas */}
<h3 className='subtitulo'>Bebidas</h3>


        <h3 className='subtitulo'>Dulces</h3>
        <h3 className='subtitulo'>Comida Rápida</h3>
        <h3 className='subtitulo'>Snacks</h3>
      </div>
    </>
  )
}

export default CandyBar