/* eslint-disable no-unused-vars */
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-orange-200 h-40 p-10'>
      <div className='flex justify-center items-center'>
        <img src="/src/assets/logos/logo_RastreaPatitas.svg" alt="Logo" />
      </div>
      <p className='text-xl font-bold'>USERNAME</p>
    </div>
  )
}

export default Header