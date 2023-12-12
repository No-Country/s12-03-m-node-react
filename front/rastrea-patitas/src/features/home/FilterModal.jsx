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
} from "@nextui-org/react";
import IconTooltip from "./contentFilter/iconCheckbox/tooltip/IconTooltip";
import CheckboxCustomFilter from "./contentFilter/CheckboxCustomFilter";
import pinPata from "../../assets/filterModalIcons/pinPata.svg";
import mapFilter from "../../assets/filterModalIcons/mapFilter.svg";
import SelectFilter from "./contentFilter/selectFilter";
function FilterModal({ handleClose, open }) {

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


  const date = ["Recientes", "Este mes", "Últimos 3 meses", "Este año"];
  const especies = ["Gato", "Perro", "Otro"];
  //Mas adelante const especies = ["Gato", "Perro","Conejo","Roedor","Reptil", "Otro"];
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
  const coloresDelCuerpo = [
    "Blanco",
    "Amarillo",
    "Naranjo",
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

  return (
    <>
      <Modal
        isOpen={open}
        placement="top"
        onClose={handleClose}
        size={width> 1024 ? "5xl":width< 640 ? "sm":"md"}
        backdrop="blur"
        classNames={{            
          closeButton: "text-white bg-moradoMain hover:bg-white/5 active:bg-white/10",          
        }}
      >
        <ModalContent className="bg-moradoFondo">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Aplica filtros para encontrar mascotas
              </ModalHeader>
              <ModalBody className="">
                <section className="flex justify-between">
                  <Button
                    variant="ghost"
                    className="border-solid border-1 border-moradoMain hover:bg-moradoActivo hover:border-moradoActivo"
                    color=""
                  >
                    Todos
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-solid border-1 border-moradoMain hover:bg-moradoActivo hover:border-moradoActivo"
                    color=""
                  >
                    Perdidos
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-solid border-1 border-moradoMain hover:bg-moradoActivo hover:border-moradoActivo"
                    color=""
                  >
                    Encontrados
                  </Button>
                </section>

                <ModalBody className="bg-white rounded-xl ">
                  <CheckboxGroup
                    className="gap-1 border-b-moradoMain "
                    label="Especies"
                    orientation="horizontal"
                  >
                    {especies.map((element, index) => (
                      <CheckboxCustomFilter
                        key={`${element}-${index}`}
                        value={`${element}-${index}`}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element}
                      </CheckboxCustomFilter>
                    ))}
                  </CheckboxGroup>
                  {/* Capaz lo piden mas adelante
                  <SelectFilter data={date} label={"Ordenar por fecha"} placeholder={"Selecciona una fecha"} />
                  <SelectFilter data={especies}  label={"Tipo de animal"} placeholder={"Selecciona un tipo de animal"} />*/}
                  <Input
                    type="text"
                    label="Raza"
                    placeholder="Escribe una raza"
                    color="danger"
                    variant="underlined"
                    className=""
                  />

                  <CheckboxGroup
                    orientation="horizontal"
                    className="flex "
                    label="Sexo"
                  >
                    {sex.map((element, index) => (
                      <CheckboxCustomFilter
                        key={`${element.id}-${index}`}
                        value={element.sex}
                        className="w-full"
                        variant="ghost"
                        icon={true}
                        i={element.sexReference}
                      >
                        {element.sex}
                      </CheckboxCustomFilter>
                    ))}
                  </CheckboxGroup>

                  <CheckboxGroup
                    label={<IconTooltip labelTitle={"Edad"} data={edades} />}
                    orientation="horizontal"
                    className="flex "
                  >
                    {edades.map((element, index) => (
                      <CheckboxCustomFilter
                        key={`${element.ageReference}-${index}`}
                        value={element.ageReference}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element.ageReference}
                      </CheckboxCustomFilter>
                    ))}
                  </CheckboxGroup>
                  <CheckboxGroup
                    className="gap-1"
                    label="Color principal"
                    orientation="horizontal"
                  >
                    {coloresDelCuerpo.map((element, index) => (
                      <CheckboxCustomFilter
                        key={`${element}-${index}`}
                        value={element} //corregir el tema del valor
                        className="mx-1"
                        variant="ghost"
                        icon={true}
                        colorReference={element}
                      >
                        {element}
                      </CheckboxCustomFilter>
                    ))}
                  </CheckboxGroup>
                  <CheckboxGroup
                    className="gap-1"
                    label={
                      <IconTooltip
                        labelTitle={"Tamaño"}
                        data={tamañoDelCuerpo}
                      />
                    }
                    orientation="horizontal"
                  >
                    {tamañoDelCuerpo.map((element, index) => (
                      <CheckboxCustomFilter
                        key={`${element}-${index}`}
                        value={element.sizeReference}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element.sizeReference}
                      </CheckboxCustomFilter>
                    ))}
                  </CheckboxGroup>
                  <section className="relative flex  justify-center  items-center ">
                    <img src={mapFilter} alt="" className="" />
                    <Button
                      startContent={<img src={pinPata} alt="" />}
                      className=" bg-moradoMain text-white font-semibold absolute "
                    >
                      Ubicación
                    </Button>
                  </section>
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
                    className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo hover:border-moradoActivo"
                    color=""
                  >
                    Aplicar filtros
                  </Button>
                </>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default FilterModal;
