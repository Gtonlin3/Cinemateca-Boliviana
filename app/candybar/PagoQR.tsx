import React from 'react'

const PagoQR = ({ qrUrl, pagoConcretado, generarQR }: { qrUrl: string | null, pagoConcretado: boolean, generarQR: () => void }) => {
  return (
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

      {qrUrl && !pagoConcretado && (
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
  )
}

export default PagoQR