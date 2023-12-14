/* eslint-disable no-unused-vars */
import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import PropTypes from 'prop-types';

/* eslint-disable-next-line react/prop-types */
const CardsHome = ({ filteredPets }) => {

    return(
        <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-8 mx-auto">
            {filteredPets.map(pet => (
                <div key={pet.name} className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] first-letter:flex flex-col relative">
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className="text-white text-sm py-1 px-3 rounded-xl" style={{ backgroundColor: '#4D4295' }}>{pet.status}</button>
                    </div>
                    <div>
                        <img className="object-cover w-full h-full rounded-t-lg" src={pet.pet_img[0].url} alt={pet.name} />
                    </div>
                    <div className="ml-1 lg:mt-3 lg:ml-3">
                        <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">{pet.name}</h2>
                        <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                            <p className="text-[0.7rem] lg:text-[1rem]">Hace 3 días</p>
                            <div className='flex flex-row'>
                                <SlLocationPin className='lg:mt-1' />
                                <p className="text-[0.7rem] lg:text-[1rem] mr-2">Ubicación</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

CardsHome.propTypes = {
    filteredPets: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
  };


export default CardsHome