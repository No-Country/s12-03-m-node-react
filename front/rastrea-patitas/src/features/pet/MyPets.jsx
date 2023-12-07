/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, CardHeader, CardBody, Image, Chip, Button } from "@nextui-org/react";
import pet1 from '../../assets/images/pet1.png'
import pet2 from '../../assets/images/pet2.png'
import pet3 from '../../assets/images/pet3.png'
import qr from '../../assets/qr.svg'
import pets from '../../assets/my-pets-image.png'

const MyPets = () => {
  return (
    <div className='w-[360px] md:w-screen h-screen flex flex-col items-center bg-[url("/src/assets/bg-patitas.svg")] m-3'>
      <h1 className='font-poppins text-xl font-bold leading-5 tracking-tight'>Mis mascotas</h1>
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mis mascotas registradas (2)</h3>
      <div className='overflow-x-auto'>
        <Card className="py-4 flex-row">
          <CardBody className="relative py-2">
            <Chip className='absolute z-20 top-[20px] right-5'>En casa</Chip>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pet1}
            ></Image>
          </CardBody>
          <CardHeader className="pb-0 flex-col items-center flex-auto">
            <p className="text-tiny uppercase font-bold">Duquesa</p>
            <small className="text-default-500 pb-2">Registrada el 08/08/2023</small>
            <img src={qr} alt='qr' />
          </CardHeader>
        </Card>

        <Card className="py-4 flex-row">
          <CardBody className="relative py-2">
            <Chip className='absolute z-20 top-[20px] right-5'>Perdida</Chip>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pet2}
            ></Image>
          </CardBody>
          <CardHeader className="pb-0 flex-col items-center flex-auto">
            <p className="text-tiny uppercase font-bold">Sonrisita</p>
            <small className="text-default-500 pb-2">Registrada el 08/08/2023</small>
            <img src={qr} alt='qr' />
          </CardHeader>
        </Card>
      </div>

      <hr className='w-full my-3' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas perdidas (1)</h3>

      <div className='overflow-x-auto'>
        <Card className="py-4 flex-row">
          <CardBody className="relative py-2">
            <Chip className='absolute z-20 top-[20px] right-5'>En casa</Chip>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pet2}
            ></Image>
          </CardBody>
          <CardHeader className="pb-0 flex-col items-center flex-auto">
            <p className="text-tiny uppercase font-bold">Duquesa</p>
            <small className="text-default-500 pb-2">Registrada el 08/08/2023</small>
            <img src={qr} alt='qr' />
          </CardHeader>
        </Card>

        <Card className="py-4 flex-row">
          <CardBody className="relative py-2">
            <Chip className='absolute z-20 top-[20px] right-5'>Perdida</Chip>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pet3}
            ></Image>
          </CardBody>
          <CardHeader className="pb-0 flex-col items-center flex-auto">
            <p className="text-tiny uppercase font-bold">Chino</p>
            <small className="text-default-500 pb-2">Registrada el 08/08/2023</small>
            <img src={qr} alt='qr' />
          </CardHeader>
        </Card>
      </div>

      <hr className='w-full my-3' />
      <h3 className='text-slate-700 font-lato text-base font-light leading-7'>Mascotas encontradas (0)</h3>
      <Image alt="Card background"
        className="object-cover rounded-xl"
        src={pets}
      ></Image>
      <p className='text-slate-700 text-center font-lato text-base font-medium leading-7 tracking-tight w-[255px]'>Aún no tienes mascotas encontradas.
        Si encontraste una mascota, regístrala aquí:</p>

      <button className='w-auto h-[41px] px-4 rounded-lg border-purple-500 text-[#4D4295] border-1.5 bg-blue-50 font-semibold mt-3'>Añadir mascota encontrada</button>
    </div>
  )
}

export default MyPets