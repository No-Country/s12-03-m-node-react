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
function FilterModal({ handleClose, open, status }) {
  const [width, setWidth] = useState(window.innerWidth);
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
  const [selected, setSelected] = useState("");
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

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
                        <>
                          <RadioGeneral
                            key={element.status + index}
                            register={register}
                            type={"status"}
                            element={element.statusReference}
                          />{" "}
                        </>
                      ))}
                    </fieldset>
                  )}
                  <ModalBody className="bg-white rounded-xl ">
                    {status && (
                      <>
                        <section className="">
                          <p>Añadir fotos</p>
                          <div className="flex gap-4 justify-center">
                            <SelectImg register={register} name={"img"} />
                            <SelectImg register={register} name={"img2"} />
                            <SelectImg register={register} name={"img3"} />
                          </div>
                          <p>Las fotos ayudan a identificar al animal</p>
                        </section>
                        <Input
                          type="text"
                          label={  <IconTooltip labelTitle={"Nombre"}  />}
                          placeholder="Escribe un nombre"
                          color="danger"
                          variant="underlined"
                          className=""
                          {...register("Nombre")}
                        />
                        <input type="radio" value={status} checked  {...register("status")} hidden/>
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
                      name={"especies"}
                    />
                    <Input
                      type="text"
                      label="Raza"
                      placeholder="Escribe una raza"
                      color="danger"
                      variant="underlined"
                      className=""
                      {...register("Raza")}
                    />
                    <fieldset className="flex flex-col ">
                      <legend>Sexo</legend>
                      <section className="flex flex-wrap gap-4 justify-center  ">
                        {sex.map((element, index) => (
                          <>
                            {" "}
                            <RadioSex
                              key={element.sex}
                              register={register}
                              type={"sex"}
                              element={element.sex}
                              typeIcon={element.sexReference}
                            />{" "}
                          </>
                        ))}
                      </section>
                    </fieldset>

                    <fieldset >
                      <IconTooltip labelTitle={"Edad"} data={edades} />
                      <div className="flex flex-wrap  justify-between   ">
                      {edades.map((element, index) => (
                        <>
                          {" "}
                          <RadioGeneral
                            key={element.ageReference}
                            register={register}
                            type={"age"}
                            element={element.ageReference}
                          />{" "}
                        </>
                      ))}</div>
                    </fieldset>

                    {status && (
                      <>
                        {" "}
                        <section>
                          <p>Apariencia</p>
                          <section className="flex gap-4">
                            <SelectFilter
                              data={pelo}
                              placeholder={"Pelo"}
                              register={register}
                              name={"pelo"}
                              {...register("pelo")}
                            />
                            <SelectFilter
                              data={ojos}
                              placeholder={"Ojos"}
                              register={register}
                              name={"ojos"}
                              {...register("ojos")}
                            />
                          </section>
                        </section>
                        <Input
                          type="text"
                          label={  <IconTooltip labelTitle={"Carácteristica especial (opcional)"}  />}

                          placeholder="Describe si tenia alguna particularidad"
                          color="danger"
                          variant="underlined"
                          className=""
                          {...register("caracteristica")}
                        />
                      </>
                    )}
                    <fieldset>
                      <legend>Color principal</legend>
                      <section className="flex flex-wrap  justify-between   ">
                        {coloresDelCuerpo.map((element, index) => (
                          <>
                            {" "}
                            <RadioColor
                              key={element}
                              register={register}
                              element={element}
                            />{" "}
                          </>
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
                        <>
                          {" "}
                          <RadioGeneral
                            key={element}
                            register={register}
                            type={"size"}
                            element={element.sizeReference}
                          />{" "}
                        </>
                      ))}</div>
                    </fieldset>

                    <section className="relative flex  justify-center  items-center ">
                      <img src={mapFilter} alt="" className="" />
                      <Button
                        startContent={<img src={pinPata} alt="" />}
                        className=" bg-moradoMain text-white font-semibold absolute "
                      >
                        Ubicación
                      </Button>
                    </section>
                    {status && (
                      <Input
                        type="text"
                        label="Añadir descripción (opcional)"
                        placeholder="Describe si tenia alguna particularidad"
                        color="danger"
                        variant="underlined"
                        className=""
                        {...register("descripcion")}
                      />
                    )}
                  </ModalBody>
                </ModalBody>
                <ModalFooter className="flex justify-between">
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
                      className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo hover:border-moradoActivo"
                      color=""
                      type="submit"
                    >
                      {status ? "Publicar" : "Aplicar filtros"}
                    </Button>
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
export default FilterModal;
