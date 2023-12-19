/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/api';


const Register = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { handleSubmit, register, formState: { errors }, getValues } = useForm()

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    // try {
    //   const response = await registerUser(data)
    //   console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }
  })

  return (
    <div className='md:bg-[url("/src/assets/bg-patitas.svg")] md:bg-repeat w-screen h-screen md:flex flex-col justify-center items-center'>
      <form onSubmit={onSubmit} className="flex flex-col items-center w-[360px] md:w-[544px] m-1 gap-6 bg-[url('/src/assets/bg-patitas.svg')] bg-cover bg-fondo p-10">
        <h1 className="text-xl">Registrate</h1>
        <Input type="email" label="Email" placeholder='Ingresa tu email' variant='underlined' color='secondary'
          {...register("email", {
            required: "El campo email es requerido",
            pattern: {
              value: /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Ingresa un email valido",
            },
          })}
        />

        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <Input type={isVisible ? "text" : "password"} label="Contraseña" placeholder="Ingresa tu contraseña" variant='underlined' color='secondary'
          endContent={
            <button type='button' onClick={toggleVisibility} className='focus-outline-none'>{isVisible ? <FaRegEyeSlash /> : <FaRegEye />}</button>
          }
          {...register("password", { required: "El campo contraseña es requerido" })}
        />

        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <Input type={isVisible ? "text" : "password"} label="Confirme la contraseña" placeholder="Vuelve a ingresar contraseña" variant='underlined' color='secondary' endContent={<button type='button' onClick={toggleVisibility} className='focus-outline-none'>{isVisible ? <FaRegEyeSlash /> : <FaRegEye />}</button>}
          {...register("confirmPassword", { required: "El campo confirmar contraseña es requerido", validate: (value) => value === getValues("password") || "Las contraseña no coinciden" })}
        />

        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

        <Button type="submit" color='primary' variant="ghost" className='w-[255px] mt-10'>Registrarme</Button>

        <p className='text-sm m-4'>o</p>

        <Button startContent={<FcGoogle size={24} />} type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Continuar con Google</Button>
        <Button startContent={<FaFacebook size={24} />} type="submit" color='primary' variant="solid" className='w-[255px]' >Continuar con Facebook</Button>

        <p className='text-xs m-4'>Al registrarse, acepta nuestro Términos de servicio y Política de privacidad . Nunca compartimos su información de contacto con terceros.</p>
      </form>
    </div>
  )
}

export default Register