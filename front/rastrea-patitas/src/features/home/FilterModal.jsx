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

function FilterModal({ handleClose, open, status }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFilesChange = (e) => {
    setSelectedImages(Array.from(e.target.files));
    console.log(selectedImages);
  }
  console.log(selectedImages)

  const { position } = useAlertsContext()

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

  const onSubmit = handleSubmit(async (formData) => {
    const geo_point = [position.lat, position.lng];

    console.log(formData);

    try {
      const petResponse = await axios.post("https://s12-03-m-node-react.vercel.app/api/pets", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer " + Cookies.get("token")
        }
      });

      console.log('Respuesta del servidor para /api/pets:', petResponse);
      const alertData = {
        pet_id: petResponse.data._id,
        geo_point,
        status: formData.status,
        date: new Date().toISOString(),
        alert_description: formData?.alert_description,
        special_characteristics: formData?.special_characteristics,
      };
      console.log(alertData)

      if (petResponse.status === 201) {
        const alertResponse = await axios.post("https://s12-03-m-node-react.vercel.app/api/alerts", alertData, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Cookies.get("token")
          }
        });

        console.log('Respuesta del servidor para /api/alerts:', alertResponse);
      } else {
        // Manejar el caso en que la primera solicitud no fue exitosa
        console.log('La primera solicitud no fue exitosa:', petResponse);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
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
                {status
                  ? "Nuevo anuncio"
                  : "Aplica filtros para encontrar mascotas"}
              </ModalHeader>
              <form onSubmit={onSubmit}>
                <ModalBody className="">
                  {!status && (
                    <fieldset className="flex flex-wrap  justify-between">
                      {statusRadio.map((element, index) => (
                        <div key={element.status + index} className=" flex  " >
                          <RadioGeneral
                            key={element.status + index}
                            register={register}
                            type={"status"}
                            element={element.statusReference}
                          />{" "}
                        </div>
                      ))}
                    </fieldset>
                  )}
                  <input type="radio" {...register("geo_point")} checked />
                  <ModalBody className="bg-white rounded-xl ">
                    {status && (
                      <>
                        <section className="">
                          <p>Añadir fotos</p>
                          <div className="flex gap-4 justify-center">
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              {...register("pet_img.0")}
                              onChange={handleFilesChange}
                            />

                          </div>
                          <p>Las fotos ayudan a identificar al animal</p>
                        </section>
                        <Input
                          type="text"
                          label={<IconTooltip labelTitle={"Nombre"} />}
                          placeholder="Escribe un nombre"
                          color="danger"
                          variant="underlined"
                          className=""
                          {...register("name")}
                        />
                        <input type="radio" value={status} checked  {...register("status")} hidden />
                      </>
                    )}

                    {!status && (
                      <SelectFilter
                        data={date}
                        label={"Ordenar por fecha"}
                        placeholder={"Selecciona una fecha"}
                        register={register}
                        name={"date"}
                      />
                    )}
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
                            key={element.sex} className="relative flex justify-center items-center">

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

                    <fieldset >
                      <IconTooltip labelTitle={"Edad"} data={edades} />
                      <div className="flex flex-wrap  justify-between   ">
                        {edades.map((element, index) => (
                          <div
                            key={element.ageReference} className=" flex  ">
                            {" "}
                            <RadioGeneral
                              key={element.ageReference}
                              register={register}
                              type={"age"}
                              element={element.ageReference}
                            />{" "}
                          </div>
                        ))}</div>
                    </fieldset>

                    {status && (
                      <>
                        {" "}
                        <section>
                          <p>Apariencia</p>
                          <section className="flex gap-4">
                            <SelectFilter
                              label={"Pelo"}
                              data={pelo}
                              placeholder={"Pelo"}
                              register={register}
                              name={"pelo"}
                              {...register("hair")}
                            />
                            <SelectFilter
                              label={"Ojos"}
                              data={ojos}
                              placeholder={"Ojos"}
                              register={register}
                              name={"ojos"}
                              {...register("eyes")}
                            />
                          </section>
                        </section>
                        <Input
                          type="text"
                          label={<IconTooltip labelTitle={"Carácteristica especial (opcional)"} />}

                          placeholder="Describe si tenia alguna particularidad"
                          color="danger"
                          variant="underlined"
                          className=""
                          {...register("special_characteristics")}
                        />
                      </>
                    )}
                    <fieldset>
                      <legend>Color principal</legend>
                      <section className="flex flex-wrap  justify-between   ">
                        {coloresDelCuerpo.map((element, index) => (
                          <div key={element} className="relative flex justify-center items-center " >
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
                        ))}</div>
                    </fieldset>

                    <GoogleMaps register={register} />

                    {status && (
                      <Input
                        type="text"
                        label="Añadir descripción (opcional)"
                        placeholder="Describe si tenia alguna particularidad"
                        color="danger"
                        variant="underlined"
                        className=""
                        {...register("alert_description")}
                      />
                    )}
                  </ModalBody>
                </ModalBody>
                <ModalFooter className={status ? "flex justify-center " : "flex justify-between"}>
                  <>
                    {!status && (
                      <Button
                        variant="ghost"
                        onPress={onClose}
                        className=" text-moradoMain font-semibold hover:bg-moradoActivo border-moradoActivo"
                        color=""
                      >
                        Borrar
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      onPress={onClose}
                      className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo hover:border-moradoActivo "
                      color=""
                      type="submit"
                    >
                      {status ? "Publicar" : "Aplicar filtros"}
                    </Button>
                    {/*<ConfirmModal isOpen={isOpen} onClose={onClose} setEnviar={setEnviar}/>  no se como enviar la informacion al usar el segundo modal */}
                  </>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterModal