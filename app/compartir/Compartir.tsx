'use client';

import React from 'react';
import Image from 'next/image';

const Compartir = () => {
  const abrirModal = () => {
    const modal = document.getElementById('modalCompartir');
    if (modal) modal.style.display = 'flex';
  };

  const cerrarModal = () => {
    const modal = document.getElementById('modalCompartir');
    if (modal) modal.style.display = 'none';
  };

  const copiarLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link)
      .then(() => {
        alert('Enlace copiado al portapapeles');
        cerrarModal();
      })
      .catch(() => {
        alert('No se pudo copiar el enlace');
      });
  };

  const compartirWhatsApp = () => {
    const texto = encodeURIComponent('Mira esta película en Cinemateca');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${texto}%20${url}`, '_blank');
  };

  const compartirFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const compartirX = () => {
    const texto = encodeURIComponent('Mira esta película en Cinemateca');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${texto}&url=${url}`, '_blank');
  };

  return (
    <>
      <style>{`
        .modal-compartir {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: #222;
          padding: 20px;
          border-radius: 10px;
          width: 80%;
          max-width: 400px;
          color: white;
        }

        .modal-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .modal-header h3 {
          flex-grow: 1;
          text-align: center;
        }

        .modal-opciones button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #333;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 10px;
        }

        .btn-cerrar {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>

      <div className="modal-compartir" id="modalCompartir">
        <div className="modal-content">
          <div className="modal-header">
            <button className="btn-cerrar" onClick={cerrarModal}>×</button>
            <h3>Compartir</h3>
          </div>
          <div className="modal-opciones">
            <button onClick={compartirWhatsApp}><i className="fab fa-whatsapp" /> WhatsApp</button>
            <button onClick={compartirFacebook}><i className="fab fa-facebook" /> Facebook</button>
            <button onClick={compartirX}><i className="fab fa-x-twitter" /> X (Twitter)</button>
            <button onClick={copiarLink}><i className="fas fa-copy" /> Copiar enlace</button>
          </div>
        </div>
      </div>

      <button onClick={abrirModal} style={{ background: 'none', border: 'none', padding: 0, marginLeft: '10px' }}>
        <Image src="/ico-compartir.svg" alt="Compartir" width={26} height={26} />
      </button>
    </>
  );
};

export default Compartir;
