import React, { useState } from "react";
import NavProfile from "./NavProfile";
import PetCard from "./PetCard";
import img from "./images/mostachito.jpeg";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { BiSolidNotepad } from "react-icons/bi";
import AcordionPet from "./AcordionPet";
import AcordionUser from "./AcordionUser";
import InfoLocation from "./infoLocation";
import GoogleMaps from "./GoogleMaps";
import PetState from "./PetState";
import QrCode from "./QrCode";

function PetProfile() {
  const name = "Señor Mostachito";
  const state = "perdido";
  const registeredAgo = "12/12/2023";

  const [editProfile, setEditProfile] = useState(false);

  function handlerEditProfile() {
    setEditProfile(true);
  }

  function handlerCancelEditProf() {
    setEditProfile(false)
  }

  return (
    <div className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat max-w-full'>
      <NavProfile name={name} />
      <PetCard state={state} img={img} editProfile={editProfile} />

      {!editProfile ? (
        <div className=" flex justify-around my-4">
          <Button
            color="primary"
            variant="bordered"
            className="border-moradoMain text-letra font-medium w-36 "
          >
            Eliminar perfil
          </Button>
          <Button
            color="primary"
            variant="bordered"
            className="border-moradoMain text-letra font-medium w-36 "
            onClick={handlerEditProfile}
          >
            Editar perfil
          </Button>
        </div>
      ) : (
        <div className=" flex justify-around my-4">
          <Button
            color="primary"
            variant="bordered"
            className="border-moradoMain text-letra font-medium w-36 "
            onClick={handlerCancelEditProf}
          >
            Cancelar
          </Button>
          <Button
            color="primary"
            variant="bordered"
            className="border-moradoMain text-letra font-medium w-36 "
            
          >
            Guardar perfil
          </Button>
        </div>
      )}

      <div className="mx-5">
        <p className=" text-lg font-bold  text-letra">{name}</p>
        <p className=" text-sm font-normal text-[#6B7A85]">
          Registrado el {registeredAgo}
        </p>
      </div>

      <InfoLocation ubicacion={"Buenos Aires"} />

      <PetState editProfile={editProfile}/>

      <QrCode />

      {/* <div className=" flex   justify-center items-center p-3 ">
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
      </div> */}

      {/* <div className=" flex p-3 items-center">
        <BiSolidNotepad className=" text-moradoMain  flex w-6  h-6 mr-3" />
        <p className="text-sm font-normal text-letra ">
          {" "}
          Notificado el {dateNotif}{" "}
        </p>
      </div> */}

      {/* <InfoLocation ubicacion={'Florencio Varela'} />
      <GoogleMaps  lati={-34.83071416863988} lngi={ -58.27836792867518}/> */}

      {/* <AcordionPet
        type={"gato"}
        sex={"macho"}
        eyes={"Ojos claros"}
        hair={"Pelo corto"}
        color={"Bicolor"}
      /> */}
      {/* <AcordionUser
        userName={"Josefina Lopez"}
        PhoneNumber={"+54 1133086755"}
      /> */}
    </div>
  );
}

export default PetProfile;
