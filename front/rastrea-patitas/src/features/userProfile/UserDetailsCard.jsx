/* eslint-disable no-unused-vars */
import React from 'react';
import { FiEdit } from "react-icons/fi";


/* eslint-disable-next-line react/prop-types */
const UserDetailsCard = ({first_name,  last_name, email, password, phone, postalCode, city, address, onEditClick }) => {
    return (
      <div className="mb-6 relative">
       <div className="flex flex-row justify-end items-start mb-6">
        <div className="flex items-center m-1">
          <button className='text-sm' onClick={onEditClick} style={{ color: '#37474f' }}>Editar</button>
          <div className="ml-2">
            <FiEdit />
          </div>
        </div>
      </div>
        <div className="space-y-2">
          {first_name && <p><span className="font-semibold" >Nombre:</span> {first_name}</p>}
          {last_name && <p><span className="font-semibold">Apellido:</span> {last_name}</p>}
          {email && <p><span className="font-semibold">Email:</span> {email}</p>}
          {password && <p><span className="font-semibold">Contraseña:</span> {password}</p>}
          {phone && <p><span className="font-semibold">Número de teléfono:</span> {phone}</p>}
          {/* {postalCode && <p><span className="font-semibold">Código postal:</span> {postalCode}</p>} */}
          {city && <p><span className="font-semibold">Localidad:</span> {city}</p>}
          {/* {address && <p><span className="font-semibold">Dirección:</span> {address}</p>} */}
        </div>
      </div>
    );
  };



  export default UserDetailsCard;