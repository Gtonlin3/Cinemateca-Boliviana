import React from 'react'
import Image from "next/image";
import BackButton from "./BackButton";
import Link from "next/link";

const SingUp = () => {
  return (
    
    <>
       <div className="barra-superior-black">
        <BackButton />
      </div>
      <div className="Registrar">
     
        
        <Image
          src="/loogo_cm.svg"
          alt="LogoCinemateca"
          width={100}
          height={140}
        />
        <Image
          src="/logo-CM.svg"
          alt="LogoCinemateca"
          width={160}
          height={100}
          className="mx-auto mt-5 block"
        />
        <h3 className="titulo">Registrarse</h3>
        
        <div className="correo">
          <div className="demas">
            <h3 className="correo_o">Nombre</h3>
            <input
              type="email"
              placeholder="email@domain.com"
              style={{
                margin: "0px 0px 0px 0px",
                height: "30px",
                width: "340px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
            <h3 className="contra">Usuario</h3>
            <input
              placeholder="******"
              type="contraseña"
              style={{
                margin: "0px 0px 0px 0px",
                height: "30px",
                width: "340px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
            <h3 className="celular">Celular</h3>
            <input
              placeholder="******"
              type="contraseña"
              style={{
                margin: "0px 0px 0px 0px",
                height: "30px",
                width: "340px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
            <h3 className="edad">Edad</h3>
            <input
              placeholder="******"
              type="contraseña"
              style={{
                margin: "0px 0px 0px 0px",
                height: "30px",
                width: "340px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
            <h3 className="correo_o">Correo</h3>
            <input
              placeholder="******"
              type="contraseña"
              style={{
                margin: "0px 0px 0px 0px",
                height: "30px",
                width: "340px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
            <h3 className="contra">Contraseña</h3>
            <input
              placeholder="******"
              type="contraseña"
              style={{
                margin: "0px 0px 0px 0px",
                height: "30px",
                width: "340px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
            <button className="btn-iniciar">
            <p className="sesion">Registrarse</p>
          </button>
          </div>
        </div>
       
        <div>
          
        </div>
      </div>
        </>
  )
}

export default SingUp
