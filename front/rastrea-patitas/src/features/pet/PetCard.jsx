/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { CiLocationOn } from "react-icons/ci";


const PetCard = ({ status, image, name, city }) => {
  return (
    <Card className="py-0 flex-col flex-shrink-0 w-[170px]">
      <CardBody className="relative py-0">
        <Chip
          size='sm' color={status === 'Perdida' && 'primary' || status === 'Reunida' && 'success' || status === 'Busco a mi familia' && 'secondary'} className='absolute z-20 top-[10px] right-5'>{status}</Chip>
        <Image
          alt="Card background"
          className="object-cover rounded-xl md:w-[215px] md:h-[215px]"
          src={image}
          width={150}
          height={150}
        ></Image>
      </CardBody>
      <CardHeader className="flex-col items-start">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <div className='flex justify-between w-full gap-1'>
          <small className="text-default-500 pb-2">Hace 2 dias</small>
          <div className='flex gap-1'><CiLocationOn /><small className="text-default-500 pb-2">{city}</small></div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default PetCard