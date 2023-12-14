/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Image } from "@nextui-org/react";
import pet1 from '../../assets/images/pet1.png'
import pet2 from '../../assets/images/pet2.png'
import qr from '../../assets/qr.svg'
import petsImage from '../../assets/my-pets-image.png'
import { PetsContext } from '../../context/PetsContext';
import PetCard from './PetCard';

const MyPets = () => {
  const { pets } = useContext(PetsContext)
  console.log(pets)

  return (
    <div className='w-[360px] md:w-screen h-screen flex flex-col items-center bg-[url("/src/assets/bg-patitas.svg")] m-3'>
      <h1 className='font-poppins text-xl font-bold leading-5 tracking-tight'>Mis mascotas</h1>
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mis mascotas registradas (2)</h3>
      <div className='flex overflow-x-auto gap-2'>
        <PetCard status="En casa" image={pet1} name="Señor Gato" date="08/08/2023" qr={qr} />
        <PetCard status="Perdida" image={pet2} name="Sonrisita" date="08/08/2023" qr={qr} />
      </div>

      <hr className='w-full my-3' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas perdidas (1)</h3>

      <div className='flex overflow-x-auto gap-2'>
        <PetCard status="Perdida" image={pet2} name="Sonrisita" date="08/08/2023" qr={qr} />
      </div>

      <hr className='w-full my-3' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas encontradas (0)</h3>
      <Image alt="Card background"
        className="object-cover rounded-xl"
        src={petsImage}
      ></Image>
      <p className='text-slate-700 text-center font-lato text-base font-medium leading-7 tracking-tight w-[255px]'>Aún no tienes mascotas encontradas.
        Si encontraste una mascota, regístrala aquí:</p>

      <button className='w-auto h-[41px] px-4 rounded-lg border-purple-500 text-[#4D4295] border-1.5 bg-blue-50 font-semibold mt-3'>Añadir mascota encontrada</button>
    </div>
  )
}

export default MyPets