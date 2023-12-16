/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Image } from "@nextui-org/react";
import pet1 from '../../assets/images/pet1.png'
import pet2 from '../../assets/images/pet2.png'
import pet3 from '../../assets/images/pet3.png'
import pet4 from '../../assets/images/pet4.png'
import qr from '../../assets/qr.svg'
import petsImage from '../../assets/my-pets-image.png'
import { PetsContext } from '../../context/PetsContext';
import PetCard from './PetCard';
import RegisteredPetCard from './RegisteredPetCard';
import heart from '../../assets/icons/heart.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";

const MyPets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData;
  console.log(userData)

  return (
    <div className='w-[336px] md:w-screen h-auto flex flex-col items-left md:items-center bg-[url("/src/assets/bg-patitas.svg")] m-3'>
      <h1 className='font-poppins text-xl font-bold leading-5 tracking-tight'>Mis mascotas</h1>

      <div className='flex items-center gap-2 mb-4'>
        <h3 onClick={() => navigate('/my-pets/registered')} className='text-slate-700 font-lato text-base font-light leading-7 cursor-pointer'>
          Mis mascotas registradas (2)
        </h3>
        <IoMdAddCircle onClick={() => console.log('click')} color='#03DAC5' className='w-9 h-9 cursor-pointer' />
      </div>
      <div className='flex overflow-x-auto gap-2 h-[200px] md:h-[270px]'>
        <RegisteredPetCard status="En casa" image={pet1} name="Señor Gato" date="08/08/2023" qr={qr} />
        <RegisteredPetCard status="Perdida" image={pet2} name="Sonrisita" date="08/08/2023" qr={qr} />
      </div>

      <hr className='w-full my-3' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas perdidas (1)</h3>

      <div className='flex overflow-x-auto gap-2 h-[220px] md:h-[300px]'>
        <PetCard status="Perdida" image={pet2} name="Sonrisita" city={'CABA'} />
      </div>

      <hr className='w-full my-3' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas encontradas (1)</h3>
      <div className='flex overflow-x-auto gap-2 h-[220px] md:h-[300px]'>
        <PetCard status="Busco a mi familia" image={pet3} name="Desconocido" city={'Cordoba'} />
      </div>
      {/* <Image alt="Card background"
        className="object-cover rounded-xl"
        src={petsImage}
      ></Image> */}

      <hr className='w-full my-3 m-2 p-2' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas reunidas (1)</h3>
      <div className='bg-blue-50 rounded-lg flex items-center w-auto gap-2 m-2  p-2'>
        <img src={heart} alt="heart" />
        <p className='font-lato text-sm leading-5 text-gray-700'>¡Gracias por reunir a estas mascotas con sus familias!</p>
      </div>
      <div className='flex overflow-x-auto gap-2 h-[220px] md:h-[300px]'>
        <PetCard status="Reunida" image={pet4} name="Maga" city={'Mendoza'} />
      </div>

      {/* <p className='text-slate-700 text-center font-lato text-base font-medium leading-7 tracking-tight w-[255px]'>Aún no tienes mascotas encontradas.
        Si encontraste una mascota, regístrala aquí:</p>

      <button className='w-auto h-[41px] px-4 rounded-lg border-purple-500 text-[#4D4295] border-1.5 bg-blue-50 font-semibold mt-3'>Añadir mascota encontrada</button> */}
    </div>

  )
}

export default MyPets