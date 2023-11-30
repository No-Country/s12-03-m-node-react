/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='md:bg-[url("/src/assets/bg-patitas.svg")] md:bg-repeat w-screen h-screen md:flex flex-col justify-center items-center'>
      <form className="flex flex-col items-center w-[360px] md:w-[544px] m-10 gap-6 bg-[url('/src/assets/bg-patitas.svg')] bg-cover bg-fondo p-10">
        <h1 className="text-xl">Registrate</h1>
        <Input type="email" label="Email" placeholder='Ingresa tu email' variant='underlined' color='secondary' />
        <Input type={isVisible ? "text" : "password"} label="Contraseña" placeholder="Ingresa tu contraseña" variant='underlined' color='secondary'
          endContent={
            <button type='button' onClick={toggleVisibility} className='focus-outline-none'>{isVisible ? <FaRegEyeSlash /> : <FaRegEye />}</button>
          }
        />
        <Input type={isVisible ? "text" : "password"} label="Confirme la contraseña" placeholder="Vuelve a ingresar contraseña" variant='underlined' color='secondary' endContent={<button type='button' onClick={toggleVisibility} className='focus-outline-none'>{isVisible ? <FaRegEyeSlash /> : <FaRegEye />}</button>} />

        <Button type="submit" color='primary' variant="ghost" className='w-[255px] mt-10' >Registrarme</Button>

        <p className='text-sm m-4'>o</p>

        <Button startContent={<FcGoogle size={24} />} type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Continuar con Google</Button>
        <Button startContent={<FaFacebook size={24} />} type="submit" color='primary' variant="solid" className='w-[255px]' >Continuar con Facebook</Button>

        <p className='text-xs m-4'>Al registrarse, acepta nuestro Términos de servicio y Política de privacidad . Nunca compartimos su información de contacto con terceros.</p>
      </form>
    </div>
  )
}

export default Register