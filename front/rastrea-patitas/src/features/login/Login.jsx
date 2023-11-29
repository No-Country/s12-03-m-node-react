import { Button, Input } from '@nextui-org/react'
import React from 'react'

const Login = () => {
  return (
    <form className="flex flex-col items-center w-[360px] m-10 gap-6 bg-[url('/src/assets/bg-patitas.svg')] bg-cover">
      <h1 className="text-xl">Inicia Sesión</h1>
      <h3 className="text-sm pb-8">Ingresa tu email y contraseña</h3>

      <Input type="email" label="Email" placeholder='Ingresa tu email' variant='underlined' color='secondary' />
      <Input type="password" label="Contraseña" placeholder="Ingresa tu contraseña" variant='underlined' color='secondary' />
      <p className='text-sm underline text-gray-500 pr-52 cursor-pointer'>Olvidé mi contraseña</p>


      <Button type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Ingresar</Button>

      <p className='text-sm m-4'>o</p>

      <Button type="submit" color='secondary' variant="ghost" className='w-[255px] mt-10' >Continuar con Google</Button>
      <Button type="submit" color='primary' variant="solid" className='w-[255px]' >Continuar con Facebook</Button>

      <h3 className="text-sm pb-8">¿No tenés cuenta? <span className='underline cursor-pointer'>Registrate aquí</span></h3>

    </form>
  )
}

export default Login