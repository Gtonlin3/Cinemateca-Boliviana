import React from "react";
import Image from "next/image";
import BackButton from "./BackButton";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="barra-superior-black">
        <BackButton />
      </div>

      <div className="Login">
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
        <h3 className="titulo">Iniciar Sesion</h3>
        
        <div className="correo">
          <div className="demas">
            <h3 className="correo_o">Ingrese su correo</h3>
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
          </div>
        </div>
        <div className="or">
          <div className="primer_rec"></div>
          <p className="o">or</p>
          <div className="segundo_rec"></div>
        </div>
        <div className="otras_opciones">
          <button className="btn-google">
            <Image
              src="/logo-google.png"
              alt="Logogoogle"
              width={20}
              height={20}
              className="mx-auto mt-5 block"
            />
            Continue with Google
          </button>
          <button className="btn-google">
            <Image
              src="/logo-google.png"
              alt="Logogoogle"
              width={20}
              height={20}
              className="mx-auto mt-5 block"
            />
            Continue with Facebook
          </button>
        </div>
        <div>
            <p className="todavia">Todavia no te creaste una cuenta?</p>
            <Link href="#">
        <p className='txt-vertodo'>presione aqui</p>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
