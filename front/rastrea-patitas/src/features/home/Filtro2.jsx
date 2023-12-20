/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@nextui-org/react";
import IconTooltip from "../tooltip/IconTooltip";
import pinPata from "../../assets/filterModalIcons/pinPata.svg";
import mapFilter from "../../assets/filterModalIcons/mapFilter.svg";
import SelectFilter from "./contentFilter/SelectFilter";
import SelectImg from "./contentFilter/SelectImg";
import { useForm } from "react-hook-form";
import RadioColor from "./contentFilter/RadioColor";
import RadioGeneral from "./contentFilter/RadioGeneral";
import RadioSex from "./contentFilter/RadioSex";
import ConfirmModal from "../newAdvertisement/ConfirmModal";
import GoogleMaps from "../petProfile/GoogleMaps";
import axios from "axios";
import Cookies from "js-cookie";
import { useAlertsContext } from "../../context/useAlertsContext";
import { useNavigate } from "react-router-dom";
import PublicationMade from "../newAdvertisement/PublicationMade";

function Filtro2({ handleClose, open, status, setFilter }) {
  const [width, setWidth] = useState(window.innerWidth);

  const { position, alerts } = useAlertsContext();

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const statusRadio = [
    { status: "todos", statusReference: "Todos" },
    { status: "lost", statusReference: "Perdido" },
    { status: "found", statusReference: "Encontrado" },
  ];
  const date = ["Recientes", "Este mes", "Últimos 3 meses", "Este año"];
  const especies = ["Gato", "Perro", "Conejo", "Roedor", "Reptil", "Otro"];
  const sex = [
    { id: 1, sex: "Hembra", sexReference: "IconHembra" },
    { id: 2, sex: "Macho", sexReference: "IconMacho" },
    { id: 2, sex: "No lo sé", sexReference: "IconNoLoSe" },
  ];
  const edades = [
    { age: "0 - 12 meses", ageReference: "Cachorro" },
    { age: "1 - 2 años", ageReference: "Joven" },
    { age: "2 - 7 años", ageReference: "Adulto" },
    { age: "+7 años", ageReference: "Senior" },
  ];
  const pelo = ["Corto", "Largo", "Sin pelo", "Medio"];
  const ojos = ["Claros", "Oscuros"];
  const coloresDelCuerpo = [
    "Blanco",
    "Amarillo",
    "Naranja",
    "Marrón",
    "Gris",
    "Negro",
    "Bicolor",
    "Atigrado",
    "Con manchas",
  ];
  const tamañoDelCuerpo = [
    { size: "1 - 24 cm", sizeReference: "Toy" },
    { size: "25 - 40 cm", sizeReference: "Pequeño" },
    { size: "41 - 60 cm", sizeReference: "Mediano" },
    { size: "61 - 75 cm", sizeReference: "Grande" },
    { size: "+ 75 cm", sizeReference: "Extra Grande" },
  ];

  const onSubmit = handleSubmit((formData) => {
    setFilter(formData);
    const geo_point = [parseFloat(position.lat), parseFloat(position.lng)];
    console.log(geo_point);
  });

  return (
    <>
      <Modal
        isOpen={open}
        placement="top"
        onClose={handleClose}
        size={width > 1024 ? "5xl" : width < 640 ? "sm" : "md"}
        backdrop="blur"
        classNames={{
          closeButton:
            "text-white bg-moradoMain hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent className="bg-moradoFondo">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Aplica filtros para encontrar mascotas
              </ModalHeader>
              <form onSubmit={onSubmit}>
                <ModalBody className="">
                  <fieldset className="flex flex-wrap  justify-between">
                    {statusRadio.map((element, index) => (
                      <div key={element.status + index} className=" flex  ">
                        <RadioGeneral
                          key={element.status + index}
                          register={register}
                          type={"status"}
                          element={element.statusReference}
                        />{" "}
                      </div>
                    ))}
                  </fieldset>

                  <input type="radio" {...register("geo_point")} checked />
                  <ModalBody className="bg-white rounded-xl ">
                    <SelectFilter
                      data={date}
                      label={"Ordenar por fecha"}
                      placeholder={"Selecciona una fecha"}
                      register={register}
                      name={"date"}
                    />

                    <SelectFilter
                      data={especies}
                      label={"Tipo de animal"}
                      placeholder={"Selecciona un tipo de animal"}
                      register={register}
                      name={"species"}
                    />
                    <Input
                      type="text"
                      label="Raza"
                      placeholder="Escribe una raza"
                      color="danger"
                      variant="underlined"
                      className=""
                      {...register("breed")}
                    />
                    <fieldset className="flex flex-col ">
                      <legend>Sexo</legend>
                      <section className="flex flex-wrap gap-4 justify-center  ">
                        {sex.map((element, index) => (
                          <div
                            key={element.sex}
                            className="relative flex justify-center items-center"
                          >
                            {" "}
                            <RadioSex
                              key={element.sex}
                              register={register}
                              type={"sex"}
                              element={element.sex}
                              typeIcon={element.sexReference}
                            />{" "}
                          </div>
                        ))}
                      </section>
                    </fieldset>

                    <fieldset>
                      <IconTooltip labelTitle={"Edad"} data={edades} />
                      <div className="flex flex-wrap  justify-between   ">
                        {edades.map((element, index) => (
                          <div key={element.ageReference} className=" flex  ">
                            {" "}
                            <RadioGeneral
                              key={element.ageReference}
                              register={register}
                              type={"age"}
                              element={element.ageReference}
                            />{" "}
                          </div>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend>Color principal</legend>
                      <section className="flex flex-wrap  justify-between   ">
                        {coloresDelCuerpo.map((element, index) => (
                          <div
                            key={element}
                            className="relative flex justify-center items-center "
                          >
                            {" "}
                            <RadioColor
                              key={element}
                              register={register}
                              element={element}
                            />{" "}
                          </div>
                        ))}
                      </section>
                    </fieldset>
                    <fieldset>
                      <IconTooltip
                        labelTitle={"Tamaño"}
                        data={tamañoDelCuerpo}
                      />
                      <div className="flex flex-wrap  justify-between   ">
                        {tamañoDelCuerpo.map((element, index) => (
                          <div key={element.size} className=" flex  ">
                            {" "}
                            <RadioGeneral
                              key={element}
                              register={register}
                              type={"size"}
                              element={element.sizeReference}
                            />{" "}
                          </div>
                        ))}
                      </div>
                    </fieldset>

                    <GoogleMaps register={register} />
                  </ModalBody>
                </ModalBody>
                <ModalFooter className="flex justify-between">
                  <>
                    <Button
                      variant="ghost"
                      onPress={onClose}
                      className=" text-moradoMain font-semibold hover:bg-moradoActivo border-moradoActivo"
                      color=""
                    >
                      Borrar
                    </Button>

                    <Button
                      variant="ghost"
                      onPress={onClose}
                      className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo hover:border-moradoActivo "
                      color=""
                      type="submit"
                    >
                      "Aplicar filtros"
                    </Button>
                    {/*<ConfirmModal isOpen={isOpen} onClose={onClose} setEnviar={setEnviar}/>  no se como enviar la informacion al usar el segundo modal */}
                  </>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={showModal} backdrop="blur">
        {" "}
        <ModalContent>{(onClose) => <PublicationMade />}</ModalContent>
      </Modal>
    </>
  );
}

export default Filtro2;
