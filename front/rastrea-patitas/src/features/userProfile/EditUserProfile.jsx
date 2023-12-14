/* eslint-disable no-unused-vars */
import React from 'react';
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const EditUserProfile = () => {

const Navigate = useNavigate();

  return (
    <div className='mx-auto pb-8 w-[360px]'>
 
      <GrLinkPrevious className='mt-8 ml-2 cursor-pointer' onClick={()=>Navigate("/profile")} />
      
      <div className='ml-2'>
        <h2 className='flex justify-center text-lg font-semibold' style={{ color: '#4D4295' }}>Detalles del perfil</h2>
      </div>
      
      <div className='border-b-2 border-gray-300 w-full'></div>

      <form className='space-y-4 mt-10 border border-gray-300 rounded-md p-2 m-2'>

        <div>
          <label htmlFor='firstName' className='block text-sm font-medium mt-2 text-gray-700'>
            Nombre
          </label>
          <div className='border border-gray-300 rounded-md p-2'>
            <input
              type='text'
              id='first_name'
              name='first_name'
              className='mt-1 block w-full border-none focus:outline-none'
              defaultValue='Lucía'
            />
          </div>
        </div>
        
        <div>
          {/* ... */}
        </div>

        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='inline-flex justify-center py-2 px-4 cursor-pointer border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
