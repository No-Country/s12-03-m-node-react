/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { useNavigate, useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDate';


const RegisteredPetCard = ({ petData }) => {
  const navigate = useNavigate();

  return (
    <Card className="py-2 my-2 flex-row flex-shrink-0 h-[170px] md:h-[240px] cursor-pointer">
      <CardBody onClick={() => navigate(`/my-pets/registered/${petData._id}`)} className="relative py-0">
        <Chip className='absolute z-20 top-[10px] right-5'>{petData.status}</Chip>
        <Image
          alt="Card background"
          className="object-cover rounded-xl md:w-[215px] md:h-[215px]"
          src={petData.pet_id?.pet_img[0]?.url}
          width={150}
          height={150}
        ></Image>
      </CardBody>
      <CardHeader className="pb-0 flex-col items-center flex-auto">
        <p className="text-tiny uppercase font-bold">{petData.pet_id?.name}</p>
        <small className="text-default-500 pb-2">Registrada el {formatDate(petData.createdAt)}</small>
        <img src={petData.pet_id?.qr.url} width={100} alt='qr' />
      </CardHeader>
    </Card>
  )
}

export default RegisteredPetCard