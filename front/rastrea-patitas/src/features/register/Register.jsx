/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react'
import React from 'react'

const Register = () => {
  return (
    <form className="flex flex-col items-center w-[360px] m-10 gap-6 bg-[url('/src/assets/bg-patitas.svg')] bg-cover">
      <h1 className="text-xl">Registrate</h1>
      <Input type="email" label="Email" placeholder='Ingresa tu email' variant='underlined' color='secondary' />
      <Input type="password" label="Contraseña" placeholder="Ingresa tu contraseña" variant='underlined' color='secondary' />
      <Input type="password" label="Confirme la contraseña" placeholder="Vuelve a ingresar contraseña" variant='underlined' color='secondary' />

      <Button type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Registrarme</Button>

      <p className='text-sm m-4'>o</p>

      <Button startContent={<img src='/src/assets/icons/google.svg' />} type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Continuar con Google</Button>
      <Button startContent={<img src='/src/assets/icons/facebook.svg' />} type="submit" color='secondary' variant="solid" className='w-[255px]' >Continuar con Facebook</Button>

      <p className='text-xs m-4'>Al registrarse, acepta nuestro Términos de servicio y Política de privacidad . Nunca compartimos su información de contacto con terceros.</p>
    </form>
  )
}

export default Register