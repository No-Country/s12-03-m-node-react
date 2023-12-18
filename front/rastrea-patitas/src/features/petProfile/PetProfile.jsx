/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import NavProfile from "./NavProfile";
import PetCard from "./PetCard";
import img from "./images/mostachito.jpeg";
import { Button, Card } from "@nextui-org/react";
import InfoLocation from "./InfoLocation";
import PetState from "./PetState";
import QrCode from "./QrCode";
import PetCharacteristics from "./PetCharacteristics";
import EditPetCharacteristics from "./EditPetCharacteristics";
import { useParams } from "react-router-dom";
import { getAlertByID } from "../../services/api";
import formatDate from "../../utils/formatDate";
import { MdOutlineLocationOn } from "react-icons/md";
import GoogleMaps from "./GoogleMaps";


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

  console.log(id)
  console.log(alert)

  const registeredAgo = formatDate(alert?.createdAt);
  const state = alert?.status;
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
      {/* seccion para pantallas pequeÃ±as */}
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
                Registrado el {registeredAgo}
              </p>
            </div>

            <InfoLocation ubicacion={alert.last_location} />

            <PetState editProfile={editProfile} state={state} />

            {editProfile ? (
              <EditPetCharacteristics />
            ) : (
              <PetCharacteristics
                pet={alert}
              />
            )}

            <QrCode qr={alert.pet_id.qr.url} />

          </>)}
      </div>



      {/* seccion para pantallas medianas y grandes */}
      <div className='bg-[url("src/assets/bg-patitas.svg")]  bg-repeat  hidden md:block '>
        <div className="flex mx-36 justify-center ">
          <div className=" w-[642px]  ">
            <div className="flex flex-row">
              <div className="my-5 flex flex-col flex-1 ">
                <p className=" text-[45px] font-bold  text-letra">Hernan</p>
                <p className=" text-2xl font-bold text-[#6B7A85]">
                  Registrado el {registeredAgo}
                </p>
              </div>
              {!editProfile ? (
                <div className=" flex justify-between w-1/2 mt-5  items-end my-5 ">
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
                <div className=" flex justify-between w-1/2 mt-5  items-end my-5 ">
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

            <PetCard editProfile={editProfile} petData={alert} />
          </div>

          <div>
            <Card className="w-[447px] h-[347px] ml-8 mt-36">
              <div className=" flex px-3 my-3 p-4">
                <MdOutlineLocationOn className=" text-moradoMain   w-6  h-6 mr-3 font-medium  md:w-7 md:h-8" />
                <p className="text-sm font-normal text-letra md:text-lg md:font-bold ">
                  {" "}
                  Ubicacion / sector {"ubicacion"}{" "}
                </p>
              </div>

              <GoogleMaps />
            </Card>

            <Card className="w-[447px] h-[216px] ml-8 mt-4">
              <PetState editProfile={editProfile} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetProfile;
//hcacer que se use los radio de la base de datyos