/* eslint-disable no-unused-vars */
import React from 'react'
import pet1 from '../../assets/images/pet1.png'
import pet2 from '../../assets/images/pet2.png'
import qr from '../../assets/qr.svg'
import RegisteredPetCard from './RegisteredPetCard';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MyPetsStatus = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[336px] md:w-screen h-auto flex flex-col items-left md:items-center bg-[url("/src/assets/bg-patitas.svg")] m-3'>
      <div className='flex items-center gap-2 mb-4'><FaArrowLeft onClick={() => navigate(-1)} /><h1 className='font-poppins text-xl font-bold leading-5 tracking-tight'>Mis mascotas registradas</h1></div>
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mis mascotas registradas (2)</h3>

      <RegisteredPetCard status="En casa" image={pet1} name="Señor Gato" date="08/08/2023" qr={qr} />
      <RegisteredPetCard status="Perdida" image={pet2} name="Sonrisita" date="08/08/2023" qr={qr} />

    </div>

  )
}

export default MyPetsStatus