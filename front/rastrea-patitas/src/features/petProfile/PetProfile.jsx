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

  const [editProfile, setEditProfile] = useState(false);

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
    <div className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat max-w-full'>

      {isLoading ? (
        <div>Loading...</div>
      ) : (

        <>
        <NavProfile name={pet.name} />
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
        <p className=" text-lg font-bold  text-letra">{pet.name}</p>
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
        
        
        </>



      )}
      
    </div>
  );
}

export default PetProfile;
