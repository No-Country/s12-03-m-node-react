/* eslint-disable no-unused-vars */
import React from 'react';
//import {Avatar} from "@nextui-org/react";
import { useUserContext } from '../../context/useUserContext';

const ProfilePhoto = () => {

  const { user } = useUserContext();

  return (
    <div className="flex justify-center m-10 gap-2">
        <div className="flex items-center">
          <img className="w-[110px] h-[110px]" src={user.profile_img.url} />
        </div>
        
        <div className="flex flex-col items-start ml-1" style={{ color: '#4D4295' }}>
            <button className="rounded-md hover:bg-gray-300 border border-gray-400 w-30 gap-2 py-2 px-1 text-xs">Subir foto</button>
            <button className="rounded-md hover:bg-gray-300 border border-gray-400 mt-2 w-30 py-2 px-1 text-xs">Eliminar foto</button>
        </div>
    </div>
  );
};

export default ProfilePhoto;

