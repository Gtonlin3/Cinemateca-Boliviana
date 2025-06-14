import React from 'react'

const Resumen = ({ carrito }: { carrito: any[] }) => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
    color: '#fff', // texto blanco para el modo oscuro
  }

  const boxStyle: React.CSSProperties = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#2a2a2a', // fondo oscuro
    boxShadow: '0 0 10px 2px rgba(255, 127, 0, 0.6)', // sombra naranja
    border: '1px solid #ff7f00', // borde naranja
  }

  const tableStyle: React.CSSProperties = {
    width: '100%',
    fontSize: '16px',
    borderCollapse: 'collapse',
  }

  const thStyle: React.CSSProperties = {
    borderBottom: '2px solid #ff7f00',
    padding: '8px',
    textAlign: 'left',
  }

  const tdStyle: React.CSSProperties = {
    padding: '8px',
    borderBottom: '1px solid #444',
  }

  const totalStyle: React.CSSProperties = {
    textAlign: 'right',
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#ff7f00', // naranja brillante para el total
    textShadow: '0 0 5px rgba(255, 255, 255, 0.6)', // sombra blanca
  }

  return (
    <div style={containerStyle}>
      <h3>Resumen de Compra</h3>
      <div style={boxStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Producto</th>
              <th style={thStyle}>Precio</th>
              <th style={thStyle}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.nombre}</td>
                <td style={tdStyle}>Bs {item.precio}</td>
                <td style={tdStyle}>Bs {item.precio * item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={totalStyle}>
          Total de Compra: Bs{' '}
          {carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}
        </h3>
      </div>
    </div>
  )
}

export default Resumen
