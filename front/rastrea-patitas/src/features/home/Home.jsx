/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FilterModal from './FilterModal';
import CardsHome from './CardsHome';
import CreateAd from './CreateAd';
import { useAlertsContext } from '../../context/useAlertsContext';
import { Helmet } from 'react-helmet';
import Filtro2 from './Filtro2';


const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const { alerts } = useAlertsContext();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const filteredPets = alerts
        ? alerts.filter((alert) =>
            (filter === 'all' || (alert.status && alert.status && alert.status.toLowerCase() === filter.toLowerCase())) &&
            (alert.pet_id && alert.pet_id.name && alert.pet_id.name.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        : [];

    //Extrae la info del filterModal
    console.log(alerts)
    const [filterData, setFilterData] = useState({});

    useEffect(() => {
       console.log(filterData)
      }, [filterData]);
      const filtroE= alerts? alerts.filter((alert)=>{alert.pet_id.age == filterData.age}
      ):[];
      console.log(alerts[0]?.pet_id.age)

    return (
        <>
             <Helmet>
                 <title>Home | Rastrea Patitas</title>
             </Helmet>   
             
            <div className='bg-[url("/src/assets/bg-patitas.svg")] flex flex-col items-center'>
                <div className="flex flex-col items-center justify-center mb-8 w-[360px] md:w-[600px] lg:w-[900px] gap-6 mt-8 mx-2">

                    {/* search */}
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center justify-between shadow-md w-[280px] h-[40px] lg:w-[440px] border border-gray-300 rounded-xl p-2 bg-white space-x-1">
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

                    {/* button filters */}
                    <div className="overflow-x-auto sm:overflow-visible">
                        <div className="flex justify-between sm:justify-center max-w-[340px] xs:max-w-none">
                            <div className="flex justify-center gap-2 lg:gap-8 lg:mt-2 lg:mb-2 cursor-pointer">

                                <div className={`w-[80px] h-[32px] lg:w-[100px] rounded-xl border ${filter === 'all' ? 'bg-gray-300' : 'bg-white border-indigo-800'} flex justify-center items-center hover:bg-gray-300 hover:border-transparent`}
                                    onClick={() => handleFilterChange('all')} >
                                    <div className="text-black text-sm lg:text-[1rem] leading-tight">Todos</div>
                                </div>
                                <div className={`w-[94px] h-[32px] lg:w-[100px] rounded-xl border ${filter === 'perdido' ? 'bg-gray-300' : 'bg-white border-indigo-800'} flex justify-center items-center hover:bg-gray-300 hover:border-transparent`}
                                    onClick={() => handleFilterChange('perdido')} >
                                    <div className="text-black text-sm lg:text-[1rem] leading-tight">Perdidos</div>
                                </div>
                                <div className={`w-[100px] h-[32px] lg:w-[100px] rounded-xl border ${filter === 'encontrado' ? 'bg-gray-300' : 'bg-white border-indigo-800'} flex justify-center items-center hover:bg-gray-300 hover:border-transparent`}
                                    onClick={() => handleFilterChange('encontrado')} >
                                    <div className="text-black text-sm lg:text-[1rem] leading-tight">Encontrados</div>
                                </div>
                                <div className={`w-[94px] h-[32px] lg:w-[100px] rounded-xl border ${filter === 'reunido' ? 'bg-gray-300' : 'bg-white border-indigo-800'} flex justify-center items-center hover:bg-gray-300 hover:border-transparent`}
                                    onClick={() => handleFilterChange('reunido')} >
                                    <div className="text-black text-sm lg:text-[1rem] leading-tight">Reunidos</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {filteredPets.length === 0 && (
                        <div className='text-center' style={{ color: '#4D4295' }}>
                            ¡No se han encontrado coincidencias con el nombre proporcionado! <br /> Prueba usando el{' '}
                            <span className="cursor-pointer font-extrabold" onClick={handleOpen}>
                                filtro
                            </span>{' '}
                            para una búsqueda más específica
                        </div>
                    )}

                    <CardsHome filteredPets={filteredPets} filtroE={filtroE} />

                    <CreateAd />

                </div>
            </div>
            <FilterModal handleClose={handleClose} open={open} setFilter={setFilterData}  />
          {/*  <Filtro2 handleClose={handleClose} open={open} setFilter={setFilterData} />*/}
        </>
    );
};

export default Home