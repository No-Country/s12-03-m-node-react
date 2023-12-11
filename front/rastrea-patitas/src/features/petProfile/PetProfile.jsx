import React from "react";
import NavProfile from "./NavProfile";
import PetCard from "./PetCard";
import img from "./mostachito.jpeg";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { BiSolidNotepad } from "react-icons/bi";
import AcordionPet from "./AcordionPet";
import AcordionUser from "./AcordionUser";
import InfoLocation from    "./infoLocation"

function PetProfile() {
  const name = "Señor Mostachito";
  const state = "perdido";
  const lostAgo = 5;
  const description =
    "Es muy cariñoso le gusta recibir cariño y tirarse al piso para enseñar su pancita. Responde por su nombre.";
  const dateNotif = "11/12/2023";

  return (
    <div className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat max-w-full'>
      <NavProfile name={name} />
      <PetCard state={state} img={img} />

      <div className="mx-3">
        <p className=" text-lg font-bold  text-letra">{name}</p>
        <p className=" text-sm font-normal text-[#6B7A85]">
          Perdido hace {lostAgo} días
        </p>
      </div>

      <div className=" flex   justify-center items-center p-3 ">
        <Card className=" w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold  text-letra">Descripción </h4>
          </CardHeader>
          <CardBody>
            <p className="text-sm font-normal text-letra p-1 text-justify">
              {description}
            </p>
          </CardBody>
        </Card>
      </div>

      <div className=" flex p-3 items-center">
        <BiSolidNotepad className=" text-moradoMain  flex w-6  h-6 mr-3" />
        <p className="text-sm font-normal text-letra ">
          {" "}
          Notificado el {dateNotif}{" "}
        </p>
      </div>

      <InfoLocation ubicacion={'Florencio Varela'} />

      <AcordionPet
        type={"gato"}
        sex={"macho"}
        eyes={"Ojos claros"}
        hair={"Pelo corto"}
        color={"Bicolor"}
      />
      <AcordionUser
        userName={"Josefina Lopez"}
        PhoneNumber={"+54 1133086755"}
      />
    </div>
  );
}

export default PetProfile;
