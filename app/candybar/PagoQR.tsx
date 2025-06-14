import React, { memo, useMemo } from 'react'

interface PagoQRProps {
  qrUrl: string | null
  pagoConcretado: boolean
  generarQR: () => void
}

const buttonStyle = (disabled: boolean) => ({
  marginTop: '15px',
  padding: '10px 15px',
  backgroundColor: disabled ? '#999' : '#00cc66',
  border: 'none',
  borderRadius: '5px',
  color: '#fff',
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'background-color 0.3s ease',
})

const PagoQR: React.FC<PagoQRProps> = ({ qrUrl, pagoConcretado, generarQR }) => {
  const isButtonDisabled = useMemo(() => !!qrUrl, [qrUrl])

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={generarQR} disabled={isButtonDisabled} style={buttonStyle(isButtonDisabled)}>
        Generar QR de Pago
      </button>

      {!pagoConcretado && qrUrl && (
        <div style={{ marginTop: 15 }}>
          <img src={qrUrl} alt="Código QR" width={200} height={200} />
          <p>Escanea el código QR para pagar</p>
        </div>
      )}

      {pagoConcretado && (
        <div style={{ marginTop: 15, fontSize: 18, color: '#00cc66' }}>
          Pago concretado, ¡disfrute su consumo! 
        </div>
      )}
    </div>
  )
}

export default memo(PagoQR)
