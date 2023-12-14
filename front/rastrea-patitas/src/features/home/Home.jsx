/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FilterModal from './FilterModal';
import CardsHome from './CardsHome';

import { usePetsContext } from '../../context/usePetsContext'

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [searchTerm, setSearchTerm] = useState('');
    const { pets } = usePetsContext(); 

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPets = pets ? pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <>        
            <div className='bg-[url("/src/assets/bg-patitas.svg")] flex flex-col items-center'>
                <div className="flex flex-col items-center justify-center mb-8 w-[360px] md:w-[600px] lg:w-[900px] gap-6 mt-8 mx-2">

                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center justify-between shadow-md w-[280px] h-[40px] lg:w-[440px] border border-gray-300 rounded-full p-2 bg-white space-x-1">
                            <IoSearchSharp className="w-6 h-6" />
                            <input
                                type="text"
                                className="w-full outline-none focus:outline-none p-1"
                                placeholder="Buscar..."
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: '#4D4295' }}>
                            <HiOutlineAdjustmentsHorizontal onClick={handleOpen} className="w-6 h-6 text-white cursor-pointer" />
                        </div>
                    </div>


                    <div className="flex justify-center">
                        <div className="flex justify-center gap-2 lg:gap-8 lg:mt-2 lg:mb-2 cursor-pointer">

                            <div className="w-[100px] h-[30px] lg:w-[110px] bg-white rounded-full border border-indigo-800 flex justify-center items-center hover:bg-gray-300 hover:border-transparent">
                                <div className="text-black text-sm lg:text-[1rem] leading-tight">Todos</div>
                            </div>
                            <div className="w-[100px] h-[30px] lg:w-[110px] bg-white rounded-full border border-indigo-800 flex justify-center items-center hover:bg-gray-300 hover:border-transparent">
                                <div className="text-black text-sm lg:text-[1rem] leading-tight">Perdidos</div>
                            </div>
                            <div className="w-[100px] h-[30px] lg:w-[110px] bg-white rounded-full border border-indigo-800 flex justify-center items-center hover:bg-gray-300 hover:border-transparent">
                                <div className="text-black text-sm lg:text-[1rem] leading-tight">Encontrados</div>
                            </div>
                        </div>
                    </div>
                    
                    <CardsHome filteredPets={filteredPets} />
             
                </div>
            </div>
            <FilterModal handleClose={handleClose} open={open} />
        </>
    );
};

export default Home