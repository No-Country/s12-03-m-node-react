/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import pet1 from '../../assets/images/pet1.png'
import pet2 from '../../assets/images/pet2.png'
import qr from '../../assets/qr.svg'
import RegisteredPetCard from './RegisteredPetCard';
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/useUserContext';
import { useAlertsContext } from '../../context/useAlertsContext';

const MyPetsStatus = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { pets } = user;

  const { alerts } = useAlertsContext();
  const userAlerts = alerts.filter((alert) => alert.user_id === user._id);
  const userPets = useLocation().state?.pets
  const { page } = useLocation().state || 'registered'
  console.log(userPets)

  return (
    <div className='w-[336px] md:w-screen h-auto flex flex-col items-left md:items-center bg-[url("/src/assets/bg-patitas.svg")] m-3'>
      <div className='flex items-center gap-2 mb-4'><FaArrowLeft onClick={() => navigate(-1)} /><h1 className='font-poppins text-xl font-bold leading-5 tracking-tight'>Mis mascotas {page}</h1></div>
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mis mascotas registradas (2)</h3>

      {pets.map((pet) => <RegisteredPetCard key={pet._id} petData={pet} />)}

    </div>

  )
}

export default MyPetsStatus