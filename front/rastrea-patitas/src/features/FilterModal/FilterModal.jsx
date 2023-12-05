import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input,Tooltip } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import { IoIosCloseCircle } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import TooltipContent from "../tooltip/TooltipContent";
function FilterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      


      <Button
        onPress={onOpen}
        className="flex flex-col gap-1 hover:bg-moradoMain "
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        placement="top"
        size="5xl"
        className="w-full   "
        isDismissable={false}
        onClose={onClose} 
        
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
                    <select
                      name="select"
                      className="appearance-none border-solid border-1  border-moradoMain hover:bg-moradoActivo focus:bg-moradoActivo"
                    >
                      <option value="value0"  className="bg-moradoActivo" selected>
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
                    className="border-solid border-2 border-moradoMain text-moradoMain font-semibold hover:bg-moradoActivo hover:border-moradoActivo"
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
