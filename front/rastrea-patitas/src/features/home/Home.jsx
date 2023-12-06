/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Footer from "../../ui/Footer";
import FilterModal from './FilterModal';

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='bg-[url("/src/assets/bg-patitas.svg")] h-screen flex flex-col items-center'>
                <div className="flex flex-col items-center justify-center mb-8 w-[360px] md:w-[600px] lg:w-[900px] gap-6 mt-8 mx-2">

                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center justify-between shadow-md w-[280px] h-[40px] lg:w-[440px] border border-gray-300 rounded-full p-2 bg-white space-x-1">
                            <IoSearchSharp className="w-6 h-6" />
                            <input
                                type="text"
                                className="w-full outline-none focus:outline-none p-1"
                                placeholder="Buscar..."
                            />
                        </div>
                        <div className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: '#4D4295' }}>
                            <HiOutlineAdjustmentsHorizontal onClick={handleOpen} className="w-6 h-6 text-white" />
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

                    {/* Cards */}
                    <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-8 mx-auto">

                        <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                            </div>
                            <div >
                                <img className="object-cover w-full h-full rounded-t-lg" src={pet1} alt="pet name" />
                            </div>
                            <div className="ml-1 lg:mt-3 lg:ml-3">
                                <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">Señor Mostachito</h2>
                                <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                    <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                                    <div className='flex flex-row'>
                                        <SlLocationPin className='lg:mt-1' />
                                        <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                            </div>
                            <div>
                                <img className="object-cover w-full h-full rounded-t-lg" src={pet2} alt="pet name" />
                            </div>
                            <div className="ml-1 lg:mt-3 lg:ml-3">
                                <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">Bobby</h2>
                                <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                    <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                                    <div className='flex flex-row'>
                                        <SlLocationPin className='lg:mt-1' />
                                        <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                            </div>
                            <div>
                                <img className="object-cover w-full h-full rounded-t-lg" src={pet3} alt="pet name" />
                            </div>
                            <div className="ml-1 lg:mt-3 lg:ml-3">
                                <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">Hachiko</h2>
                                <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                    <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                                    <div className='flex flex-row'>
                                        <SlLocationPin className='lg:mt-1' />
                                        <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <button className="text-black text-sm py-1 px-3 rounded-xl leading-tight" style={{ backgroundColor: '#4BE6D0' }}>Busco a <br></br> mi familia</button>
                            </div>
                            <div>
                                <img className="object-cover w-full h-full rounded-t-lg" src={pet4} alt="pet name" />
                            </div>
                            <div className="ml-1 lg:mt-3 lg:ml-3">
                                <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">Panqueque</h2>
                                <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                    <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                                    <div className='flex flex-row'>
                                        <SlLocationPin className='lg:mt-1' />
                                        <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <button className="text-black text-sm py-1 px-3 rounded-xl leading-tight" style={{ backgroundColor: '#4BE6D0' }}>Busco a <br></br> mi familia</button>
                            </div>
                            <div>
                                <img className="object-cover w-full h-full rounded-t-lg" src={pet5} alt="pet name" />
                            </div>
                            <div className="ml-1 lg:mt-3 lg:ml-3">
                                <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">Nombre desconocido</h2>
                                <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                    <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                                    <div className='flex flex-row'>
                                        <SlLocationPin className='lg:mt-1' />
                                        <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                            </div>
                            <div>
                                <img className="object-cover w-full h-full rounded-t-lg" src={pet6} alt="pet name" />
                            </div>
                            <div className="ml-1 lg:mt-3 lg:ml-3">
                                <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">Mimi</h2>
                                <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                    <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                                    <div className='flex flex-row'>
                                        <SlLocationPin className='lg:mt-1' />
                                        <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <FilterModal handleClose={handleClose} open={open} />
        </>
    );
};

export default Home
