/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import NavProfile from "./NavProfile";
import PetCard from "./PetCard";
import img from "./images/mostachito.jpeg";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  Chip,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import InfoLocation from "./InfoLocation";
import PetState from "./PetState";
import QrCode from "./QrCode";
import PetCharacteristics from "./PetCharacteristics";
import EditPetCharacteristics from "./EditPetCharacteristics";
import { useParams } from "react-router-dom";
import { getAlertByID } from "../../services/api";
import formatDate from "../../utils/formatDate";
import { MdOutlineLocationOn } from "react-icons/md";

import OnliMap from "./OnliMap";
import ModalBlur from "./ModalBlur"; import { Helmet } from "react-helmet";

import Swal from 'sweetalert2'

function PetProfile() {
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getAlertByID(id)
      .then((data) => {
        setAlert(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(id);
  console.log(alert);

  const registeredAgo = formatDate(alert?.createdAt);
  const state = alert?.status;
  const [editProfile, setEditProfile] = useState(false);
  const idPet = alert?.pet_id?._id;
  const namePet = alert?.pet_id?.name;

  function handlerEditProfile() {
    setEditProfile(true);
  }

  function handlerCancelEditProf() {
    setEditProfile(false);
  }

  const handleDetetePet = async () => {
    console.log(`Pet to delete: nombre: ${namePet}, id: ${idPet}`);

    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Una vez eliminado no se pueden revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      });

      if (result.isConfirmed) {
        const response = 5

        if (response.ok) {
          // Si la eliminación fue exitosa, mostrar un mensaje de éxito
          Swal.fire({
            title: "Eliminado",
            text: `${namePet} ha sido eliminado de tus mascotas.`,
            icon: "success"
          });
        } else {
          // Si hay un problema con la eliminación, mostrar un mensaje de error
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al intentar eliminar la mascota.",
            icon: "error"
          });
        }
      }
    } catch (error) {
      console.error("Error al eliminar la mascota:", error);
      // Manejar errores de red u otros errores aquí
    }
  };



  if (isLoading || !alert) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Perfil | Rastrea Patitas</title>
      </Helmet>
      {/* seccion para pantallas pequeñas */}
      <div className='bg-[url("/src/assets/bg-patitas.svg")] bg-repeat w-screen md:hidden'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <NavProfile name={alert.pet_id?.name} />
            <PetCard editProfile={editProfile} petData={alert} />

            {!editProfile ? (
              <div className=" flex justify-around my-4">
                <Button
                  onClick={handleDetetePet}
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
              <p className=" text-lg font-bold  text-letra">
                {alert.pet_id?.name}
              </p>
              <p className=" text-sm font-normal text-[#6B7A85]">
                Registrado el {registeredAgo}
              </p>
            </div>

            <InfoLocation ubicacion={alert.last_location} />

            <PetState editProfile={editProfile} state={state} petName={alert.pet_id?.name} />

            {editProfile ? (
              <EditPetCharacteristics />
            ) : (
              <PetCharacteristics pet={alert} />
            )}

            <QrCode qr={alert.pet_id?.qr.url} />
          </>
        )}
      </div>

      {/* seccion para pantallas medianas y grandes */}
      <div className='bg-[url("/src/assets/bg-patitas.svg")] md:bg-repeat w-screen'>
        <div className="hidden md:block">
          <div className="flex mx-36 justify-center ">
            <div className=" w-[642px]  ">
              <div className="flex flex-row">
                <div className="my-5 flex flex-col flex-1 ">
                  <p className=" text-[45px] font-bold  text-letra">
                    {alert.pet_id?.name}
                  </p>
                  <p className=" text-2xl font-bold text-[#6B7A85]">
                    Registrado el {registeredAgo}
                  </p>
                </div>

                <div className=" flex justify-between w-1/2 mt-5  items-end my-5 ">
                  <Button
                    onClick={handleDetetePet}
                    color="primary"
                    variant="bordered"
                    className="border-moradoMain text-letra font-medium w-36 "
                  >
                    Eliminar perfil
                  </Button>
                  <ModalBlur pet={alert} /> {/**boton editar perfil */}
                </div>
              </div>

              <PetCard editProfile={editProfile} petData={alert} />

              <Card className="w-[636px] h-[310px]  mt-4 md:mb-14 ">
                <div className="p-8">
                  <p className="text-letra font-semibold text-3xl">
                    Características
                  </p>
                  <hr className="mb-4" />
                  <div className="flex flex-row">
                    <div className=" w-1/2 pr-4">
                      <div className="flex justify-between mb-3">
                        <li className="text-lg font-bold list-none">
                          Tipo de animal{" "}
                        </li>{" "}
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {alert?.pet_id?.species}
                        </Chip>
                      </div>

                      <div className="flex justify-between  mb-3">
                        <p className="text-lg font-bold">Sexo </p>{" "}
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {alert?.pet_id?.sex}
                        </Chip>
                      </div>

                      <div className="flex justify-between  mb-3">
                        <li className="text-lg font-bold list-none"> Edad</li>
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {alert?.pet_id?.age}
                        </Chip>{" "}
                      </div>

                      <div className="flex justify-between ">
                        <li className="text-lg font-bold list-none">
                          Tamaño*{" "}
                        </li>{" "}
                        <li className="text-sm font-normal list-none">
                          25-40 cm
                        </li>
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {alert?.pet_id?.size}
                        </Chip>
                      </div>
                    </div>

                    <div className=" w-1/2 pl-4">
                      <div className="flex justify-between  mb-3">
                        <li className="text-lg font-bold list-none">
                          <Breadcrumbs>
                            <BreadcrumbItem>
                              <p className="text-lg text-letra">Apariencia</p>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                              <p className="text-lg">Ojos</p>
                            </BreadcrumbItem>
                          </Breadcrumbs>{" "}
                        </li>{" "}
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {"marron"}
                        </Chip>
                      </div>

                      <div className="flex justify-between  mb-3">
                        <li className="text-lg font-bold list-none">
                          <Breadcrumbs>
                            <BreadcrumbItem>
                              <p className="text-lg text-letra">Apariencia</p>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                              <p className="text-lg">Pelo</p>
                            </BreadcrumbItem>
                          </Breadcrumbs>{" "}
                        </li>{" "}
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {alert?.pet_id?.main_color}
                        </Chip>
                      </div>
                      <div className="flex justify-between  mb-3 ">
                        <p className="text-lg font-bold">Color </p>{" "}
                        <Chip className=" bg-moradoActivo mb-3 text-lg">
                          {alert?.pet_id?.main_color}
                        </Chip>
                      </div>
                    </div>
                  </div>
                  <li className="text-sm font-normal list-none">
                    *De acuerdo a la longitud que hay desde las patas hasta el
                    lomo del animal
                  </li>
                </div>
              </Card>
            </div>

            <div>
              <Card className="w-[447px] h-[347px] ml-8 mt-36 px-6">
                <div className=" flex  mt-3 mb-4 ">
                  <MdOutlineLocationOn className=" text-moradoMain   w-6  h-6 mr-3 font-medium  md:w-7 md:h-8" />
                  <p className="text-sm font-normal text-letra md:text-lg md:font-bold ">
                    {" "}
                    Ubicacion / sector {alert.last_location}{" "}
                  </p>
                </div>

                <OnliMap lat={alert.geo_point[0]} lng={alert.geo_point[1]} />
              </Card>

              <Card className="w-[447px] h-[216px] ml-8 mt-4">
                <p className="mx-4 text-letra font-semibold text-sm md:text-3xl md:pl-6 md:mt-5">
                  Estado actual de tu mascota
                </p>
                <hr className="hidden md:block mx-8" />
                <RadioGroup
                  isDisabled={true}
                  className=" mx-6 mt-3"
                  value={alert.status === "encontrado" ? "en casa" : alert.status}
                >
                  <Radio className="md:mt-4" value="en casa">
                    <p className="  md:text-lg text-[#6B7A85] font-semibold">
                      En casa
                    </p>
                  </Radio>
                  <Radio
                    className="md:mt-1"
                    onClick={() => handlerOpen()}
                    value="perdido"
                  >
                    <p className="md:text-lg text-[#6B7A85] font-semibold">
                      Perdido
                    </p>
                  </Radio>
                </RadioGroup>
              </Card>

              <Card className="w-[447px] h-[310px] ml-8 mt-4 md:mb-14">
                <QrCode qr={alert.pet_id?.qr.url} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetProfile;
//hcacer que se use los radio de la base de datyos
