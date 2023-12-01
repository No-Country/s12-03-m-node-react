/* eslint-disable no-unused-vars */
import React from 'react';
import { MdMenu } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";


const Home = () => {

      return (
        <div className="flex flex-col items-center w-[360px] gap-6 bg-[url('/src/assets/bg-patitas.svg')] bg-cover">
       
            <div className="relative w-[345px] h-[56px] bg-white top-4">
                <div className="absolute w-[24px] h-[24px] top-4 left-[24px]">
                    <MdMenu className="w-7 h-7"/>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black text-lg">
                Inicio
                </div>
            </div>


            <div className="flex items-center justify-center h-[56px] space-x-2">
                <div className="flex items-center justify-between shadow-md w-[280px] h-[40px] border border-gray-300 rounded-xl p-2 bg-white space-x-1">
                    <IoSearchSharp className="w-7 h-7" />     
                    <input
                        type="text"
                        className="w-full outline-none focus:outline-none p-1"     
                        placeholder="Buscar..."
                    />
                </div>
                <div className="flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: '#4D4295' }}>
                    <HiOutlineAdjustmentsHorizontal className="w-7 h-7 text-white" />
                </div>
            </div>


            <div className="flex justify-center">
                <div className="flex justify-center gap-2 cursor-pointer">
                    <div className="w-[100px] h-[30px] bg-white rounded-xl border border-indigo-800 flex justify-center items-center hover:bg-gray-300 hover:border-transparent">
                        <div className="text-black text-sm leading-tight">Todos</div>
                    </div>
                    <div className="w-[100px] h-[30px] bg-white rounded-xl border border-indigo-800 flex justify-center items-center hover:bg-gray-300 hover:border-transparent">
                        <div className="text-black text-sm leading-tight">Perdidos</div>
                    </div>
                    <div className="w-[100px] h-[30px] bg-white rounded-xl border border-indigo-800 flex justify-center items-center hover:bg-gray-300 hover:border-transparent">
                        <div className="text-black text-sm leading-tight">Encontrados</div>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-4 mx-auto">
               

                <div className="bg-white rounded-lg shadow-md h-[192px] flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                    </div>
                    <div className="w-154 h-145">
                        <img className="object-cover w-full h-full rounded-t-lg" src="./src/assets/images/fruit-1.jpeg.png" alt="pet name" />
                    </div>
                    <div className="m-1">
                        <h2 className="text-sm font-bold justify-start tracking-tight">Señor Mostachito</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin />
                                <p className="text-[0.7rem] mr-2">Ubicación</p>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md h-[192px] flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                    </div>
                    <div className="w-154 h-145">
                        <img className="object-cover w-full h-full rounded-t-lg" src="./src/assets/images/fruit-2.jpeg.png" alt="pet name" />
                    </div>
                    <div className="m-1">
                        <h2 className="text-sm font-bold justify-start tracking-tight">Bobby</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin />
                                <p className="text-[0.7rem] mr-2">Ubicación</p>
                            </div>  
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md h-[192px] flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                    </div>
                    <div className="w-154 h-145">
                        <img className="object-cover w-full h-full rounded-t-lg" src="./src/assets/images/fruit-3.jpeg.png" alt="pet name" />
                    </div>
                    <div className="m-1">
                        <h2 className="text-sm font-bold justify-start tracking-tight">Hachiko</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin />
                                <p className="text-[0.7rem] mr-2">Ubicación</p>
                            </div>  
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md h-[192px] flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-black text-sm py-1 px-3 rounded-xl leading-tight" style={{ backgroundColor: '#4BE6D0' }}>Busco a <br></br> mi familia</button>
                    </div>
                    <div className="w-154 h-145">
                        <img className="object-cover w-full h-full rounded-t-lg" src="./src/assets/images/fruit-4.jpeg.png" alt="pet name" />
                    </div>
                    <div className="m-1">
                        <h2 className="text-sm font-bold justify-start tracking-tight">Panqueque</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin />
                                <p className="text-[0.7rem] mr-2">Ubicación</p>
                            </div>  
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md h-[192px] flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-black text-sm py-1 px-3 rounded-xl leading-tight" style={{ backgroundColor: '#4BE6D0' }}>Busco a <br></br> mi familia</button>
                    </div>
                    <div className="w-154 h-145">
                        <img className="object-cover w-full h-full rounded-t-lg" src="./src/assets/images/fruit-5.jpeg.png" alt="pet name" />
                    </div>
                    <div className="m-1">
                        <h2 className="text-sm font-bold justify-start tracking-tight">Nombre desconocido</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin />
                                <p className="text-[0.7rem] mr-2">Ubicación</p>
                            </div>  
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md h-[192px] flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>Perdido</button>
                    </div>
                    <div className="w-154 h-145">
                        <img className="object-cover w-full h-full rounded-t-lg" src="./src/assets/images/fruit-6.jpeg.png" alt="pet name" />
                    </div>
                    <div className="m-1">
                        <h2 className="text-sm font-bold justify-start tracking-tight">Mimi</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin />
                                <p className="text-[0.7rem] mr-2">Ubicación</p>
                            </div>  
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
  };

  export default Home
