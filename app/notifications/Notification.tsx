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
                <p className=''>Novedades</p>
                <div>
                    <Image 
                        src="/portada1.jpg" 
                        alt="portada1" 
                        width={200} 
                        height={300}
                    />
                    <p>Nuevo estreno en Cinemateca</p>
                </div>
                <div>
                    <Image      
                        src="/portada1.jpg" 
                        alt="portada1" 
                        width={200} 
                        height={300}
                    />                    
                    <p>Los Reyes del Mundo</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Notification
