/* eslint-disable no-unused-vars */
import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import PropTypes from 'prop-types'

/* eslint-disable-next-line react/prop-types */
const CardsHome = ({ filteredPets }) => {

    const navigate = useNavigate()
    const now = moment();

    return (
        <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-8 mx-auto">
            {filteredPets.map((pet, index) => {

                const dateCreatedAt = moment(pet.createdAt);
                const diffDays = now.diff(dateCreatedAt, 'days'); 

                const BUTTON_COLOR = {
                    perdido: '#4D4295',
                    encontrado: '#4BE6D0',
                    reunido: '#9087CA',
                };

                const buttonColor = BUTTON_COLOR[pet.status] || '#4D4295';

                return (
                    <div className="bg-white rounded-lg shadow-md w-[154px] h-[192px] lg:w-[251px] lg:h-[300px] relative transition ease-in-out transform hover:shadow-2xl cursor-pointer " key={index} onClick={() => navigate(`/home/${pet._id}`)}>
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                        <button className={`text-sm py-1 px-3 rounded-xl ${pet.status === 'encontrado' ? 'text-black' : 'text-white'}`} style={{ backgroundColor: buttonColor }}>{pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}</button>
                        </div>
                        <div>
                            <img className="object-cover w-full h-full rounded-t-lg" src={pet.pet_id.pet_img[0].url} alt={pet.pet_id.name} />
                        </div>
                        <div className="ml-1 lg:mt-3 lg:ml-3">
                            <h2 className="text-sm font-bold lg:text-[1.3rem] justify-start tracking-tight">{pet.pet_id.name}</h2>
                            <div className="flex flex-row justify-between h-[44.74px] space-x-4">
                                <p className="text-[0.7rem] lg:text-[1rem]">Hace {diffDays} días</p>
                                <div className='flex flex-row'>
                                    <SlLocationPin className='lg:mt-1' />
                                    <p className="text-[0.7rem] lg:text-[1rem] mr-2">{pet.last_location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

CardsHome.propTypes = {
    filteredPets: PropTypes.array.isRequired,
};



export default CardsHome