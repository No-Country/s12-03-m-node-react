/* eslint-disable no-unused-vars */
import React from 'react';
import pet1 from "../../assets/images/pet1.png";
import pet2 from "../../assets/images/pet2.png";
import pet3 from "../../assets/images/pet3.png";
import pet4 from "../../assets/images/pet4.png";
import pet5 from "../../assets/images/pet5.png";
import pet6 from "../../assets/images/pet6.png";
import { SlLocationPin } from "react-icons/sl";    

const CardsHome = () => {

    return(
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
    )

}

export default CardsHome