/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router';

const Login = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const navigate = useNavigate()

  return (
    <div className='md:bg-[url("/src/assets/bg-patitas.svg")] md:bg-repeat w-screen h-screen md:flex flex-col justify-center items-center'>
      <form className="flex flex-col items-center w-[360px] md:w-[544px] m-1 gap-6 bg-[url('/src/assets/bg-patitas.svg')] bg-cover bg-fondo p-10">
        <h1 className="text-xl">Inicia Sesión</h1>
        <h3 className="text-sm pb-8">Ingresa tu email y contraseña</h3>

        <Input type="email" label="Email" placeholder='Ingresa tu email' variant='underlined' color='secondary' />
        <Input type={isVisible ? "text" : "password"} label="Contraseña" placeholder="Ingresa tu contraseña" variant='underlined' color='secondary'
          endContent={
            <button type='button' onClick={toggleVisibility} className='focus-outline-none'>{isVisible ? <FaRegEyeSlash /> : <FaRegEye />}</button>
          }
        />
        <p className='text-sm underline text-gray-500 cursor-pointer pr-36'>Olvidé mi contraseña</p>

        <Button type="submit" color='primary' variant="ghost" className='w-[255px] mt-10' >Ingresar</Button>

        <p className='text-sm m-4'>o</p>

        <Button startContent={<FcGoogle size={24} />} type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Continuar con Google</Button>
        <Button startContent={<FaFacebook size={24} />} type="submit" color='primary' variant="solid" className='w-[255px]' >Continuar con Facebook</Button>

        <h3 className="text-sm pb-8">¿No tenés cuenta? <span onClick={() => navigate('/register')} className='underline cursor-pointer'>Registrate aquí</span></h3>
      </form>
    </div>
  )
}

export default Login