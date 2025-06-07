'use client'
import React, { useState, useEffect } from 'react'
import { obtenerVectorInicial } from './recomendaciones'

const ProcederConCompra = ({ 
  mostrar, 
  setMostrar, 
  carrito 
}: {
  mostrar: boolean
  setMostrar: React.Dispatch<React.SetStateAction<boolean>>
  carrito: any[]
}) => {
  const [animar, setAnimar] = useState(false)
  const [vectorInicial, setVectorInicial] = useState<Record<string, number>>({})
  const [qrUrl, setQrUrl] = useState<string | null>(null)
  const [pagoConcretado, setPagoConcretado] = useState(false)

  useEffect(() => {
    if (mostrar) {
      setAnimar(true)
      // Resetear estado cuando se abra la ventana emergente
      setQrUrl(null)
      setPagoConcretado(false)

      // Calcular el vector inicial
      const vector = obtenerVectorInicial(carrito)
      setVectorInicial(vector)
    } else {
      setTimeout(() => setAnimar(false), 300)
    }
  }, [mostrar, carrito])

  const fechaActual = new Date().toLocaleString()

  // ✅ Función para generar el QR de pago
  const generarQR = async () => {
    try {
      const res = await fetch('https://6843a91571eb5d1be031462b.mockapi.io/QRS')
      const data = await res.json()
      const aleatorio = data[Math.floor(Math.random() * data.length)]
      setQrUrl(aleatorio.QR)
      setPagoConcretado(false)

      // Mostrar QR 10 segundos y luego cambiar mensaje
      setTimeout(() => {
        setQrUrl(null)
        setPagoConcretado(true)
      }, 10000)
    } catch (err) {
      console.error('Error cargando QR:', err)
    }
  }

  if (!animar) return null

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
          width: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
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
          {/* 🔥 Sección recomendada: mostramos el vector inicial */}
          <div style={{ width: '50%', paddingRight: '10px' }}>
            <h3>Vector Inicial calculado:</h3>
            <pre
              style={{
                textAlign: 'left',
                background: '#333',
                padding: '10px',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '14px'
              }}
            >
              {JSON.stringify(vectorInicial, null, 2)}
            </pre>
          </div>

          {/* 🔥 Sección de prefactura */}
          <div style={{ width: '50%', paddingLeft: '10px', borderLeft: '1px solid #fff' }}>
            <h3>Prefactura</h3>
            <p>
              <strong>Fecha:</strong> {fechaActual}
            </p>
            <p>
              <strong>Negocio:</strong> Cinemateca Boliviana
            </p>

            <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '5px' }}>
              <table
                style={{
                  width: '100%',
                  fontSize: '14px',
                  marginTop: '10px',
                  borderCollapse: 'collapse'
                }}
              >
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Producto</th>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Cantidad</th>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Precio</th>
                    <th style={{ borderBottom: '1px solid white', padding: '8px' }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {(carrito ?? []).map((item) => (
                    <tr key={item.id}>
                      <td style={{ padding: '8px' }}>{item.nombre}</td>
                      <td style={{ padding: '8px' }}>{item.cantidad}</td>
                      <td style={{ padding: '8px' }}>Bs {item.precio}</td>
                      <td style={{ padding: '8px' }}>
                        Bs {item.precio * item.cantidad}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: '15px', fontSize: '20px' }}>
              Total: Bs {(carrito ?? []).reduce((acc, item) => acc + item.precio * item.cantidad, 0)}
            </h3>
          </div>
        </div>

        {/* 🔥 Sección de pago */}
        <div style={{ marginTop: '20px' }}>
          <h3>PAGO</h3>
          <button
            onClick={generarQR}
            disabled={!!qrUrl}
            style={{
              marginTop: '15px',
              padding: '10px 15px',
              backgroundColor: qrUrl ? '#999' : '#00cc66',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              cursor: qrUrl ? 'not-allowed' : 'pointer'
            }}
          >
            Generar QR de Pago
          </button>

          {qrUrl && (
            <div style={{ marginTop: '15px' }}>
              <img src={qrUrl} alt="Código QR" width={200} height={200} />
              <p>Escanea el código QR para pagar</p>
            </div>
          )}

          {pagoConcretado && (
            <div style={{ marginTop: '15px', fontSize: '18px', color: '#00cc66' }}>
              Pago concretado, ¡disfrute su consumo! 🎉
            </div>
          )}
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