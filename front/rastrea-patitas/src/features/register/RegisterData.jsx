/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react'
import React from 'react'

const RegisterData = () => {
  return (
    <form className="flex flex-col items-center w-[360px] m-10 gap-2 bg-fondo p-10">
      <h1 className="text-xl">¡Qué gusto que seas parte!</h1>
      <h3 className="text-sm pb-8">Completá los campos siguientes con tus datos</h3>

      <label htmlFor='name' className='text-sm pr-56'>Nombre completo:</label>
      <Input id='name' type="text" placeholder='Nombre y apellido' color='secondary' variant='bordered' />

      <label htmlFor='phone' className='text-sm pr-36 pt-5'>Número de telefono <span className='text-gray-500'>(opcional)</span>:</label>
      <Input id='phone' type="tel" placeholder="Ingresá tu número personal" color='secondary' variant='bordered' />

      <h3 className="text-sm pb-8 pt-5 pr-4">Zona para recibir alertas <span className='text-gray-500'>(lo podés editar después)</span></h3>

      <div className='flex flex-col items-center justify-center bg-[url("/src/assets/bg-map.jpg")] bg-cover w-[360px] h-[207px]'>
        <Button type="submit" color='primary' variant="solid" className='w-[255px]' >Añadir ubicación</Button>
      </div>

      <div className='flex items-center gap-2 pt-8'><input id='accept' type='radio' className='w-6 h-6' /><label htmlFor='accept' >Acepto <span className='underline text-blue-500 cursor-pointer'>términos y condiciones</span></label></div>

      <Button type="submit" color='primary' variant="bordered" className='w-[255px] mt-10' >Crear cuenta</Button>

    </form>
  )
}

export default RegisterData