/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


const RegisteredPetCard = ({ status, image, name, date, qr }) => {
  const navigate = useNavigate();
  return (
    <Card className="py-2 my-2 flex-row flex-shrink-0 h-[170px] md:h-[240px]">
      <CardBody onClick={() => navigate(`/my-pets/${status}/${name}`)} className="relative py-0">
        <Chip className='absolute z-20 top-[10px] right-5'>{status}</Chip>
        <Image
          alt="Card background"
          className="object-cover rounded-xl md:w-[215px] md:h-[215px]"
          src={image}
          width={150}
          height={150}
        ></Image>
      </CardBody>
      <CardHeader className="pb-0 flex-col items-center flex-auto">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500 pb-2">Registrada el {date}</small>
        <img src={qr} width={100} alt='qr' />
      </CardHeader>
    </Card>
  )
}

export default RegisteredPetCard