'use client'
import React, { useState, useEffect } from 'react'
import { obtenerVectorInicial, calcularVectorFinal, obtenerSeccionRecomendada, obtenerProductoRecomendado } from './recomendaciones'
import Prefactura from './Prefactura'
import PagoQR from './PagoQR'

const ProcederConCompra = ({ mostrar, setMostrar, carrito }: { mostrar: boolean, setMostrar: React.Dispatch<React.SetStateAction<boolean>>, carrito: any[] }) => {
  const [vectorInicial, setVectorInicial] = useState<Record<string, number>>({})
  const [vectorFinal, setVectorFinal] = useState<Record<string, number>>({})
  const [seccionRecomendada, setSeccionRecomendada] = useState<string | null>(null)
  const [productoRecomendado, setProductoRecomendado] = useState<any | null>(null)
  const [qrUrl, setQrUrl] = useState<string | null>(null)
  const [pagoConcretado, setPagoConcretado] = useState(false)

  useEffect(() => {
    if (mostrar) {
      const vectorInit = obtenerVectorInicial(carrito)
      const vectorFinalizado = calcularVectorFinal(vectorInit)
      setVectorInicial(vectorInit)
      setVectorFinal(vectorFinalizado)
      const mejorSeccion = obtenerSeccionRecomendada(vectorFinalizado)
      setSeccionRecomendada(mejorSeccion)

      // 🔥 Obtener el producto recomendado
      obtenerProductoRecomendado(mejorSeccion).then(setProductoRecomendado)
    }
  }, [mostrar, carrito])

  // ✅ Función para obtener la imagen del QR desde MockAPI
  const generarQR = async () => {
    try {
      const res = await fetch('https://6843a91571eb5d1be031462b.mockapi.io/QRS')
      const data = await res.json()
      const aleatorio = data[Math.floor(Math.random() * data.length)]
      console.log("QR generado:", aleatorio.QR) // 🔥 Depuración
      setQrUrl(aleatorio.QR)
      setPagoConcretado(false)

      setTimeout(() => {
        setQrUrl(null)
        setPagoConcretado(true)
      }, 10000)
    } catch (err) {
      console.error('Error cargando QR:', err)
    }
  }

  return (
    <div>
      <h2 style={{ marginBottom: '20px', fontSize: '22px' }}>REALIZAR PAGO</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* 🔥 Sección recomendada */}
        <div style={{ width: '50%', paddingRight: '10px' }}>
          <h3>Vector Inicial:</h3>
          <pre>{JSON.stringify(vectorInicial, null, 2)}</pre>

          <h3>Vector Resultado:</h3>
          <pre>{JSON.stringify(vectorFinal, null, 2)}</pre>

          <h3>Sección Recomendada:</h3>
          <p><strong>{seccionRecomendada}</strong></p>

          {/* 🔥 Mostrar producto recomendado */}
          <h3>Producto Recomendado:</h3>
          {productoRecomendado ? (
            <div>
              <img src={productoRecomendado.imagen} alt={productoRecomendado.Nombre} width={60} height={60} style={{ borderRadius: '5px' }} />
              <strong>{productoRecomendado.Nombre}</strong> - Bs {productoRecomendado.Precio}
            </div>
          ) : (
            <p>No hay producto disponible para recomendar.</p>
          )}
        </div>

        {/* 🔥 Sección de prefactura */}
        <Prefactura carrito={carrito} />
      </div>

      {/* 🔥 Sección de pago */}
      <PagoQR qrUrl={qrUrl} pagoConcretado={pagoConcretado} generarQR={generarQR} />
    </div>
  )
}

export default ProcederConCompra