/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logos/logo_RastreaPatitas.svg'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-orange-200 h-40 p-10'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="Logo" />
      </div>
      <p className='text-xl font-bold'>USERNAME</p>
    </div>
  )
}

export default Header