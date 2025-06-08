import React from 'react'

const Prefactura = ({ carrito }: { carrito: any[] }) => {
  const fechaActual = new Date().toLocaleString()

  return (
    <div style={{ width: '50%', paddingLeft: '10px', borderLeft: '1px solid #fff' }}>
      <h3>Prefactura</h3>
      <p><strong>Fecha:</strong> {fechaActual}</p>
      <p><strong>Negocio:</strong> Cinemateca Boliviana</p>

      <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '5px' }}>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>Bs {item.precio}</td>
                <td>Bs {item.precio * item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Total: Bs {carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</h3>
    </div>
  )
}

export default Prefactura