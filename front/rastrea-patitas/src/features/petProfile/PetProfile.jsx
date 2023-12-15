import React, { useContext, useEffect, useState } from "react";
import NavProfile from "./NavProfile";
import PetCard from "./PetCard";
import img from "./images/mostachito.jpeg";
import { Button } from "@nextui-org/react";
import InfoLocation from "./infoLocation";
import PetState from "./PetState";
import QrCode from "./QrCode";
import PetCharacteristics from "./PetCharacteristics";
import EditPetCharacteristics from "./EditPetCharacteristics";
import { useParams } from "react-router-dom";
import { PetsContext } from "../../context/PetsContext";


function PetProfile() {
  const registeredAgo = "12/12/2023";
  const state = "En casa";
  const [editProfile, setEditProfile] = useState(false);
  const name = "Señor Mostachito";
  function handlerEditProfile() {
    setEditProfile(true);
  }

  function handlerCancelEditProf() {
    setEditProfile(false);
  }

  const { getPetByID, pet } = useContext(PetsContext);
  const { _id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Llamar a getPetByID con el ID obtenido de los parámetros
    getPetByID(_id)
      .then(() => {
        setIsLoading(false); // Marcar como cargado una vez se obtengan los datos
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
        setIsLoading(false); // Marcar como cargado aunque haya error para evitar bucles de carga
      });
  }, [_id, getPetByID]);

  if (isLoading || !pet) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* seccion para pantallas pequeñas */}
      <div className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat max-w-full md:hidden'>

      {isLoading ? (
        <div>Loading...</div>
      ) : (

        <>
          <NavProfile name={name} />
        <PetCard  editProfile={editProfile} />

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

        <PetState editProfile={editProfile} />

        {editProfile ? (
          <EditPetCharacteristics />
        ) : (
          <PetCharacteristics
            type={"gato"}
            sex={"macho"}
            eyes={"Ojos claros"}
            hair={"Pelo corto"}
            color={"Bicolor"}
          />
        )}

        <QrCode />

        </>)}
      </div>

      {/* seccion para pantallas medianas y grandes */}
      <div className=" hidden md:block ">
        <div className="w-2/3 ">
          <div className="flex flex-row">
            <div className="mx-5">
              <p className=" text-4xl font-bold  text-letra">{name}</p>
              <p className=" text-xl font-bold text-[#6B7A85]">
                Registrado el {registeredAgo}
              </p>
            </div>
            {!editProfile ? (
              <div className=" flex justify-between w-1/2 ">
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
              <div className=" flex justify-around ">
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
          </div>

          <PetCard state={state} img={img} editProfile={editProfile} />
        </div>
      </div>
    </>
  );
}

export default PetProfile;
