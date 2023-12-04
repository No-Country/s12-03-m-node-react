import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { IoIosCloseCircle } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";

import Footer from "../footer/Footer";
function FilterModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const especies = ["Gato", "Perro", "Otro"];
  const edades = ["Cachorro", "Joven", "Adulto", "Senior"];
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
    "Toy",
    "Pequeño",
    "Mediano",
    "Grande",
    "Extra Grande",
  ];

  return (
    <>
      <h1>asdasda</h1>

      <Button
        onPress={onOpen}
        className="flex flex-col gap-1 hover:bg-moradoMain "
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        placement="top"
        onOpenChange={onOpenChange}
        size="sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Aplica filtros para encontrar mascotas
              </ModalHeader>

              <ModalBody>
                <section>
                  <Button
                    variant="ghost"
                    className="border-solid border-1  border-moradoMain hover:bg-moradoActivo border-moradoActivo"
                    color=""
                  >
                    Todos
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-solid border-1  border-moradoMain hover:bg-moradoActivo border-moradoActivo"
                    color=""
                  >
                    Perdidos
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-solid border-1  border-moradoMain hover:bg-moradoActivo border-moradoActivo"
                    color=""
                  >
                    Encontrados
                  </Button>
                </section>

                <ModalBody>
                  <CheckboxGroup
                    className="gap-1 border-b-moradoMain"
                    label="Especies"
                    orientation="horizontal"
                  >
                    {especies.map((element, index) => (
                      <Checkbox
                        value={`${element}-${index}`}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                  <label htmlFor="">
                    Raza
                    <Input
                      type="text"
                      label="Escribe una raza"
                      color="moradoMain"
                      className="border-b-moradoMain"
                      variant="underlined"
                    />
                  </label>
                  <label className="flex flex-col gap-1 ">
                    Sexo
                    <select name="select">
                      <option value="value0" selected>
                        Selecciona una opción
                      </option>
                      <option value="value1">Hembra</option>
                      <option value="value2">Macho</option>
                      <option value="value3">No lo sé</option>
                    </select>
                  </label>

                  <CheckboxGroup
                    className="gap-1"
                    label="Edad"
                    orientation="horizontal"
                  >
                    {edades.map((element, index) => (
                      <Checkbox
                        value={`${element}-${index}`}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                  <CheckboxGroup
                    className="gap-1"
                    label="Color principal"
                    orientation="horizontal"
                  >
                    {coloresDelCuerpo.map((element, index) => (
                      <Checkbox
                        value={`${element}-${index}`}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                  <CheckboxGroup
                    className="gap-1"
                    label="Tamaño"
                    orientation="horizontal"
                  >
                    {tamañoDelCuerpo.map((element, index) => (
                      <Checkbox
                        value={`${element}-${index}`}
                        className="mx-1 hover:bg-moradoActivo"
                        variant="ghost"
                      >
                        {element}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                  <section>
                    <p>Ubicación</p>
                  </section>
                </ModalBody>
              </ModalBody>
              <ModalFooter className="flex flex-col gap-1">
                <section>
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
                    className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo border-moradoActivo"
                    color=""
                  >
                    Aplicar filtros
                  </Button>
                </section>

                <Footer />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default FilterModal;
