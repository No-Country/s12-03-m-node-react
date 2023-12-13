/* eslint-disable no-unused-vars */
import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import UserDetailsCard from './UserDetailsCard';


const UserProfile = () => {
  return (
    <div className='mx-auto pb-8 w-[360px]'>
      <ProfilePhoto />
      <div className='mb-3'>
        <h2 className='text-lg text-center font-semibold' style={{ color: '#4D4295' }}>Detalles del perfil</h2>
      </div>
      <div className='border-b-2 border-gray-300 w-full'></div>
    
      
      <div className='border-b-2 border-gray-300 w-full'>
        <div className='ml-4'>
          <UserDetailsCard
              first_name="Lucía"
              last_name="Ramirez"
              email="lucia@gmail.com"
              password="********"
              phone="123456789"
          />
        </div>
      </div>

      <div className='border-b-2 border-gray-300 w-full'>
        <div className='ml-4'>
          <UserDetailsCard
              postalCode="645654"
              city="Cali, Colombia"
              address="Av. El Poblado"
          />
        </div>
      </div>

      <div className="mt-6 ml-4">
        <a href="./privacy" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-violet-900">
          Políticas de privacidad
        </a>
      </div>

      <div className='ml-4 mt-12' style={{ color: '#4D4295' }}>
        <button className="rounded-lg hover:bg-gray-300 border border-gray-400 w-30 gap-2 py-2 px-2 text-xs">Eliminar cuenta</button>
      </div>

    </div>
  );
};



export default UserProfile;
