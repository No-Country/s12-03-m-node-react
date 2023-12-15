/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import ModalAdvertisement from '../hamburgerMenu/ModalAdvertisement';

const CreateAd = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="fixed bottom-10 right-8 sm:bottom-20 sm:right-20 md:bottom-30 md:right-40 lg:bottom-40 lg:right-40 xl:right-60">
        <Link to="#" onClick={handleOpen} className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-400" style={{ backgroundColor: '#03DAC5' }}>
          <IoMdAdd size={30} color="#000000" />
        </Link>
      </div>
      <ModalAdvertisement handleClose={handleClose} open={open} />
    </div>
  )
}

export default CreateAd