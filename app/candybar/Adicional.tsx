import React from 'react'

const Adicional = ({ productosAdicionales, modificarCantidadProducto }: { productosAdicionales: any[], modificarCantidadProducto: (id: string, incremento: boolean) => void }) => {
  const totalAdicionales = productosAdicionales.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
      <h3>Productos Adicionales</h3>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <table style={{ width: '100%', fontSize: '16px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Producto</th><th>Precio</th><th>Subtotal</th><th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {productosAdicionales.map((prod, index) => (  
              <tr key={prod.id || `temp-${index}`}>
                <td>{prod.nombre}</td>
                <td>Bs {prod.precio}</td>
                <td>Bs {prod.precio * prod.cantidad}</td>
                <td>
                  <button onClick={() => modificarCantidadProducto(prod.id, true)}>+</button>
                  {prod.cantidad}
                  <button onClick={() => modificarCantidadProducto(prod.id, false)}>−</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 🔥 Total de Productos Adicionales agregado dentro del cuadro */}
        <h3 style={{ textAlign: 'right', marginTop: '10px' }}>Total de Adicionales: Bs {totalAdicionales}</h3>
      </div>
    </div>
  )
}

export default Adicional