import React from 'react'

const Resumen = ({ carrito }: { carrito: any[] }) => {
  return (
    <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
      <h3>Resumen de Compra</h3>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <table style={{ width: '100%', fontSize: '16px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Producto</th><th>Precio</th><th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>Bs {item.precio}</td>
                <td>Bs {item.precio * item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={{ textAlign: 'right', marginTop: '10px' }}>Total de Compra: Bs {carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</h3>
      </div>
    </div>
  )
}

export default Resumen