/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router';

import logo from '../assets/logos/logo_RastreaPatitas.svg'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center bg-orange-200 h-40 p-10'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Button onClick={() => navigate('/login')} color='primary'>Login</Button>
        <Button onClick={() => navigate('/register')} color='success'>Registro</Button>
        <p className='text-xl font-bold'>USERNAME</p>
      </div>
    </div>
  )
}

export default Header