/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";


const PetCard = ({ status, image, name, date, qr }) => {
  return (
    <Card className="py-4 flex-row flex-shrink-0">
      <CardBody className="relative py-2">
        <Chip className='absolute z-20 top-[20px] right-5'>{status}</Chip>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
        ></Image>
      </CardBody>
      <CardHeader className="pb-0 flex-col items-center flex-auto">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500 pb-2">Registrada el {date}</small>
        <img src={qr} alt='qr' />
      </CardHeader>
    </Card>
  )
}

export default PetCard