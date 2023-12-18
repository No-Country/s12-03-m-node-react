/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavProfile from "./NavProfile";
import PetCard from "./PetCard";
import { Button } from "@nextui-org/react";
import InfoLocation from "./InfoLocation";
import PetState from "./PetState";
import QrCode from "./QrCode";
import PetCharacteristics from "./PetCharacteristics";
import EditPetCharacteristics from "./EditPetCharacteristics";
import { useParams } from "react-router-dom";
import { getAlertByID } from "../../services/api";
import formatDate from "../../utils/formatDate";

function PetProfile() {
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getAlertByID(id).then((data) => {
      setAlert(data);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
    })
  }, [id]);

  const [editProfile, setEditProfile] = useState(false);

  function handlerEditProfile() {
    setEditProfile(true);
  }

  function handlerCancelEditProf() {
    setEditProfile(false);
  }

  if (isLoading || !alert) {
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
            <NavProfile name={alert.pet_id.name} />
            <PetCard editProfile={editProfile} petData={alert} />

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
              <p className=" text-lg font-bold  text-letra">{alert.pet_id.name}</p>
              <p className=" text-sm font-normal text-[#6B7A85]">
                Registrado el {formatDate(alert.createdAt)}
              </p>
            </div>

            <InfoLocation ubicacion={alert.last_location} />

            <PetState editProfile={editProfile} />

            {editProfile ? (
              <EditPetCharacteristics />
            ) : (
              <PetCharacteristics
                type={alert.pet_id.species}
                sex={alert.pet_id.sex}
                eyes={"Ojos claros"}
                hair={"Pelo corto"}
                color={alert.pet_id.main_color}
              />
            )}

            <QrCode qr={alert.pet_id.qr.url} />

          </>)}
      </div>

      {/* seccion para pantallas medianas y grandes */}
      <div className=" hidden md:block ">
        <div className="w-2/3 ">
          <div className="flex flex-row">
            <div className="mx-5">
              <p className=" text-4xl font-bold  text-letra">{alert.pet_id.name}</p>
              <p className=" text-xl font-bold text-[#6B7A85]">
                Registrado el {formatDate(alert.createdAt)}
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

          <PetCard petData={alert} editProfile={editProfile} />
        </div>
      </div>
    </>
  );
}

export default PetProfile;
