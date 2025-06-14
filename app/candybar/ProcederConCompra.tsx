'use client'
import React, { useState, useEffect } from 'react'
import { obtenerVectorInicial, calcularVectorFinal, obtenerSeccionRecomendada, obtenerProductosRecomendados } from './recomendaciones'
import PagoQR from './PagoQR'
import Resumen from './Resumen'
import Adicional from './Adicional'

const ProcederConCompra = ({ mostrar, setMostrar, carrito }: { mostrar: boolean, setMostrar: React.Dispatch<React.SetStateAction<boolean>>, carrito: any[] }) => {
  const [vectorInicial, setVectorInicial] = useState<Record<string, number>>({})
  const [vectorFinal, setVectorFinal] = useState<Record<string, number>>({})
  const [seccionRecomendada, setSeccionRecomendada] = useState<string | null>(null)
  const [productosRecomendados, setProductosRecomendados] = useState<any[]>([])
  const [productosAdicionales, setProductosAdicionales] = useState<any[]>([])
  const [qrUrl, setQrUrl] = useState<string | null>(null)
  const [pagoConcretado, setPagoConcretado] = useState(false)

  useEffect(() => {
    if (mostrar) {
      const vectorInit = obtenerVectorInicial(carrito)
      setVectorInicial(vectorInit)

      // 🔥 Detectar si el vector inicial es 0 0 0 0 (solo "CombosEspeciales")
      const esSoloCombos = Object.values(vectorInit).every(val => val === 0)

      if (!esSoloCombos) {
        const vectorFinalizado = calcularVectorFinal(vectorInit)
        setVectorFinal(vectorFinalizado)
        const mejorSeccion = obtenerSeccionRecomendada(vectorFinalizado)
        setSeccionRecomendada(mejorSeccion)

        // 🔥 Obtener los productos recomendados
        obtenerProductosRecomendados(mejorSeccion).then(setProductosRecomendados)
      } else {
        console.log("🔹 Solo se compraron productos de 'CombosEspeciales', no se mostrarán recomendaciones.")
        setProductosRecomendados([]) // 🔥 Vaciar recomendaciones
      }
    }
  }, [mostrar, carrito])

  // ✅ Agregar producto recomendado a "Productos adicionales" con precio corregido
  const agregarProductoAdicional = (producto: any) => {
    setProductosAdicionales(prev => {
      const existe = prev.find(p => p.id === producto.id);
      return existe 
        ? prev.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p)
        : [...prev, { 
            id: producto.id || `temp-${Date.now()}`,  
            nombre: producto.Nombre || 'Producto sin nombre',  
            precio: parseFloat(producto.Precio.replace(' Bs', '')) || 0,  
            cantidad: 1 
          }];
    });
  };

  // ✅ Modificar cantidad sin duplicar productos
  const modificarCantidadProducto = (id: string, incremento: boolean) => {
    setProductosAdicionales(prev => 
      prev.map(p => p.id === id ? { ...p, cantidad: incremento ? p.cantidad + 1 : Math.max(1, p.cantidad - 1) } : p)
    );
  };

  // ✅ Función para obtener la imagen del QR desde MockAPI
  const generarQR = async () => {
    try {
      const res = await fetch('https://6843a91571eb5d1be031462b.mockapi.io/QRS');
      const data = await res.json();
      const aleatorio = data[Math.floor(Math.random() * data.length)];
      console.log("QR generado:", aleatorio.QR);
      setQrUrl(aleatorio.QR);
      setPagoConcretado(false);

      setTimeout(() => {
        setQrUrl(null);
        setPagoConcretado(true);
      }, 10000);
    } catch (err) {
      console.error('Error cargando QR:', err);
    }
  };

  // ✅ Calcular total global
  const totalResumen = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalAdicionales = productosAdicionales.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalFinal = totalResumen + totalAdicionales;

  return (
    <div style={{ textAlign: 'center' }}>
      {/* 🔥 Sección de recomendaciones → Solo se muestra si hay productos recomendados */}
      {productosRecomendados.length > 0 && (
        <>
          <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>¡Te recomendamos estos productos adicionales!</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {productosRecomendados.map((prod) => (
              <div key={prod.id} style={{ textAlign: 'center' }}>
                <img src={prod.imagen} alt={prod.Nombre} width={80} height={80} style={{ borderRadius: '5px' }} />
                <p><strong>{prod.Nombre}</strong></p>
                <p>Bs {parseFloat(prod.Precio.replace(' Bs', ''))}</p>
                <button onClick={() => agregarProductoAdicional(prod)}>Añadir</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 🔥 Sección de resumen */}
      <Resumen carrito={carrito} />

      {/* 🔥 Sección de productos adicionales → Solo se muestra si hay productos añadidos */}
      {productosAdicionales.length > 0 && (
        <Adicional productosAdicionales={productosAdicionales} modificarCantidadProducto={modificarCantidadProducto} />
      )}

      {/* 🔥 Total global */}
      <h2 style={{ marginTop: '20px', fontSize: '20px' }}>Costo total: Bs {totalFinal}</h2>

      {/* 🔥 Sección de pago */}
      <PagoQR qrUrl={qrUrl} pagoConcretado={pagoConcretado} generarQR={generarQR} />
    </div>
  )
}

export default ProcederConCompra