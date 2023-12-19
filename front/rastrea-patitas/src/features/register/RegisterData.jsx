/* eslint-disable no-unused-vars */
import { Button, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GoogleMaps from '../petProfile/GoogleMaps'
import { useForm } from 'react-hook-form'
import { registerUser } from '../../services/api'
import useCurrentLocation from '../../utils/useCurrentLocation'

const RegisterData = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors } } = useForm()

  const registrationData = useLocation().state

  const { location: geo_point, error } = useCurrentLocation()

  const onSubmit = handleSubmit(async (data) => {
    data = { ...data, ...registrationData, geo_point }
    console.log(data)
    try {
      const response = await registerUser(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div className='md:bg-[url("/src/assets/bg-patitas.svg")] md:bg-repeat w-screen h-screen md:flex flex-col justify-center items-center'>
      <form onSubmit={onSubmit} className="flex flex-col items-center w-[360px] md:w-[544px] m-1 gap-2 bg-fondo p-10">
        <h1 className="text-xl">¡Qué gusto que seas parte!</h1>
        <h3 className="text-sm pb-8">Completá los campos siguientes con tus datos</h3>

        <label htmlFor='name' className='text-sm pr-56 md:pr-72'>Nombre completo:</label>
        <Input id='name' type="text" placeholder='Nombre y apellido' color='secondary' variant='bordered'
          {...register("full_name", { required: "El campo nombre completo es requerido" })}
        />

        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <label htmlFor='phone' className='text-sm pr-36 md:pr-56 pt-5'>Número de teléfono <span className='text-gray-500'>(opcional)</span>:</label>
        <Input id='phone' type="tel" placeholder="Ingresá tu número personal" color='secondary' variant='bordered'
          {...register("phone")}
        />

        <h3 className="text-sm pb-8 pt-5 pr-4">Zona para recibir alertas <span className='text-gray-500'>(lo podés editar después)</span></h3>

        <div className='flex flex-col items-center justify-center bg-[url("/src/assets/bg-map.jpg")] bg-cover w-[360px] h-[207px]'>
          <Button type="button" color='primary' variant="solid" className='w-[255px]' >Añadir ubicación actual</Button>
        </div>
        {/* <GoogleMaps /> */}
        <div className='flex items-center'><Input id='accept' type='radio' variant='ghost' className='w-auto rounded-full' size='3xl' {...register("accept", { required: "Debes aceptar los términos y condiciones" })} /><label htmlFor='accept' >Acepto <span className='underline text-blue-500 cursor-pointer'>términos y condiciones</span></label></div>

        <p className="text-red-500 text-sm">{errors.accept?.message}</p>

        <Button type="submit" color='secondary' variant="bordered" className='w-[255px] mt-10'>Crear cuenta</Button>

      </form>
    </div>
  )
}

export default RegisterData;
