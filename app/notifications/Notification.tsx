import React from 'react'
import Logo from '../components/BarraNav/Logo'
import BackButton from './BackButton'
import Image from 'next/image'


const Notification = () => {
  return (
    <>  
        <div className="barra-superior">
            <BackButton/>
            <Logo/>      
        </div>

        <div className='notifications'>
            <div>
               <h3>Notificaciones</h3> 
            </div>
            <div>
                <p className=''>Recordatorio</p>
                <div className="primer_rec"></div>
                <div className='primero'>
                    <Image 
                        src="/not-1.svg"
                        alt="portada1" 
                        width={60} 
                        height={60}
                    /> 
                    <p className='texto'>Nuevo estreno: “El Río Oculto” se estrena este viernes a las 19:00. ¡No te lo pierdas!</p>
                </div>
                <p className=''>Novedades</p>
                <div className="primer_rec"></div>
                <div className='primero'>
                    <Image 
                        src="/not-2.svg"
                        alt="portada1" 
                        width={60} 
                        height={60}
                    /> 
                    <p className='texto'>Nuevo estreno: “El Río Oculto” se estrena este viernes a las 19:00. ¡No te lo pierdas!</p>
                </div>

                <div className='primero'>
                    <Image 
                        src="/not-3.svg"
                        alt="portada1" 
                        width={60} 
                        height={60}
                    />
                    <p className='texto'>Cine boliviano destacado: Este domingo función única de “Cuestión de Fe”, con foro post-proyección.</p>
                </div>
                
                <p className=''>Promociones</p>
                <div className="primer_rec"></div>
                <div className='primero'>
                    <Image 
                        src="/not-4.svg"
                        alt="portada1" 
                        width={60} 
                        height={60}
                    />
                    <p className='texto'>2x1 entre semana: De lunes a miércoles, todas las funciones nacionales con 2x1.</p>
                </div>
                <div className='primero'>
                    <Image 
                        src="/not-4.svg"
                        alt="portada1" 
                        width={60} 
                        height={60}
                    />
                    <p className='texto'>20% de descuento: Si compras tus entradas con Billetera Móvil, obtienes un 20% de descuento.</p>
                </div>
                <div className='primero'>
                    <Image 
                        src="/not-4.svg"
                        alt="portada1" 
                        width={60} 
                        height={60}
                    />
                    <p className='texto'>Entrada gratuita: Este sábado, entrada libre para estudiantes con carnet vigente (cupos limitados).</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Notification
