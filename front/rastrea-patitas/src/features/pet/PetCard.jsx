/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const PetCard = ({ petData }) => {
  const navigate = useNavigate();
  return (
    <Card className="py-0 flex-col flex-shrink-0 w-[170px] cursor-pointer">
      <CardBody onClick={() => navigate(`/my-pets/registered/${petData._id}`)} className="relative py-0">
        <Chip
          size='sm' color={petData.status.toLowerCase() === 'perdido' && 'primary' || petData.status.toLowerCase() === 'reunido' && 'success' || petData.status.toLowerCase() === 'encontrado' && 'secondary'} className='absolute z-20 top-[10px] right-5'>{petData.status}</Chip>
        <Image
          alt="Card background"
          className="object-cover rounded-xl md:w-[215px] md:h-[215px]"
          src={petData.pet_id?.pet_img[0]?.url}
          width={150}
          height={150}
        ></Image>
      </CardBody>
      <CardHeader className="flex-col items-start">
        <p className="text-tiny uppercase font-bold">{petData.pet_id?.name}</p>
        <div className='flex justify-between w-full gap-1'>
          <small className="text-default-500 pb-2">Hace 2 dias</small>
          <div className='flex gap-1'><CiLocationOn /><small className="text-default-500 pb-2">{petData.last_location}</small></div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default PetCard