/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input,Tooltip } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";

function FilterModal({ handleClose, open }) {
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
      <Modal
        isOpen={open}
        placement="top"
        onClose={handleClose}
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
                    className="border-solid border-1  border-moradoMain hover:bg-moradoActivo"
                    color=""
                  >
                    Todos
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-solid border-1  border-moradoMain hover:bg-moradoActivo"
                    color=""
                  >
                    Perdidos
                  </Button>
                  <Button
                    variant="ghost"
                    className="border-solid border-1  border-moradoMain hover:bg-moradoActivo"
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
                        key={`${element}-${index}`}
                        value={`${element}-${index}`}
                        className="mx-1"
                        variant="ghost"
                      >
                        {element}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                  
                    <Input
                      type="text"
                      label="Raza"
                      placeholder="Escribe una raza"
                      color="danger"
                      variant="underlined"
                      className=""
                    />
                
                  <label className="flex flex-col gap-1 ">
                    Sexo
                    <select name="select">
                      <option value="value0">
                        Selecciona una opción
                      </option>
                      <option value="value1" className="bg-moradoActivo">Hembra</option>
                      <option value="value2" className="bg-moradoActivo">Macho</option>
                      <option value="value3" className="bg-moradoActivo border-solid border-3  border-moradoMain hover:bg-black">No lo sé</option>
                    </select>
                  </label>
                  
                  <Select label=" Sexo" placeholder="Selecciona una opción" variant="underlined" className="max-w-xs" >
                  
                  <SelectItem value="value1"> Hembra</SelectItem>
                  <SelectItem value="value2">  Macho </SelectItem>
                  <SelectItem value="value3">  No lo sé</SelectItem>
                  </Select>
               
                  <CheckboxGroup
                    className="gap-1"
                    label="Edad"
                    orientation="horizontal"
                  >
                    {edades.map((element, index) => (
                      <Checkbox
                        key={`${element}-${index}`}
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
                        key={`${element}-${index}`}
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
                        key={`${element}-${index}`}
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
                    className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo"
                    color=""
                  >
                    Aplicar filtros
                  </Button>
                </section>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default FilterModal;
