/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import pet1 from '../../assets/images/pet1.png'
import pet2 from '../../assets/images/pet2.png'
import pet3 from '../../assets/images/pet3.png'
import pet4 from '../../assets/images/pet4.png'
import PetCard from './PetCard';
import RegisteredPetCard from './RegisteredPetCard';
import heart from '../../assets/icons/heart.svg'
import { useNavigate } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";
import { useUserContext } from '../../context/useUserContext';
import { useAlertsContext } from '../../context/useAlertsContext'


const MyPets = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { pets } = user;

  const { alerts } = useAlertsContext();
  const userAlerts = alerts.filter((alert) => alert.user_id === user._id);

  console.log(userAlerts)


  return (
    <div className='w-[336px] md:w-screen h-auto flex flex-col items-left md:items-center bg-[url("/src/assets/bg-patitas.svg")] m-3'>
      <h1 className='font-poppins text-xl font-bold leading-5 tracking-tight'>Mis mascotas</h1>

      <div className='flex items-center gap-2 mb-4'>
        <h3 onClick={() => navigate('/my-pets/registered', { state: { page: 'registered', user, alerts: userAlerts, pets } })} className='text-slate-700 font-lato text-base font-light leading-7 cursor-pointer'>
          Mis mascotas registradas (2)
        </h3>
        <IoMdAddCircle onClick={() => console.log('click')} color='#03DAC5' className='w-9 h-9 cursor-pointer' />
      </div>
      <div className='flex overflow-x-auto gap-2 h-[200px] md:h-[270px]'>
        {pets.map((pet) => <RegisteredPetCard key={pet._id} petData={pet} />)}
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

      <hr className='w-full my-3 m-2 p-2' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas reunidas (1)</h3>
      <div className='bg-blue-50 rounded-lg flex items-center w-auto gap-2 m-2  p-2'>
        <img src={heart} alt="heart" />
        <p className='font-lato text-sm leading-5 text-gray-700'>¡Gracias por reunir a estas mascotas con sus familias!</p>
      </div>
      <div className='flex overflow-x-auto gap-2 h-[220px] md:h-[300px]'>
        <PetCard status="Reunida" image={pet4} name="Maga" city={'Mendoza'} />
      </div>
    </div>

  )
}

export default MyPets