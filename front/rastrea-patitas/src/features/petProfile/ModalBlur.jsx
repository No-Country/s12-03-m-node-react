import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import PetCardMini from "./PetCardMini";
import formatDate from "../../utils/formatDate";

export default function ModalBlur({ pet }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const blur = "yourBlurValue"; // Define blur or use an appropriate value
  const apiKey = import.meta.env.VITE_API_GMAPS;
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const [selectedRadio, setSelectedRadio] = useState(
    pet.status === "encontrado" ? "en casa" : pet.status
  );
  const [name, setName] = useState(pet.pet_id?.name);
  const dateRegistred = formatDate(pet.createdAt);

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(`setName :${name}`);
  };
  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="bordered"
          color="primary"
          onPress={() => handleOpen(blur)}
          className="border-moradoMain text-letra font-medium w-36"
        >
          Editar perfil
        </Button>
      </div>
      <Modal
        className="bg-[url('/src/assets/bg-patitas.svg')] bg-repeat "
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-letra text-3xl font-semibold">
                Editar Datos mascota
              </ModalHeader>
              <ModalBody>
                <div className="w-full flex">
                  <div className="w-[360px] mr-[47px]">
                    {" "}
                    <PetCardMini petData={pet} />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border-b-2 border-solid border-moradoMain p-2 focus:outline-none focus:border-moradoMain h-10 w-80 text-2xl font-bold text-letra"
                      placeholder="Ingrese su nombre"
                      value={name}
                      onChange={(e) => handleNameChange(e)}
                    />
                    <p className="text-lg font-normal text-[#6B7A85]">{`Registrado el ${dateRegistred}`}</p>

                    <div>
                      <p className=" text-letra font-medium text-md ">
                        Estado actual de tu mascota
                      </p>
                      <RadioGroup
                        className="mx-3 mt-3"
                        value={selectedRadio}
                        onChange={(e) => handleRadioChange(e)}
                      >
                        <Radio value="en casa">
                          <p className="text-base text-[#6B7A85] font-semibold">
                            En casa
                          </p>
                        </Radio>
                        <Radio value="perdido">
                          <p className="text-base text-[#6B7A85] font-semibold">
                            Perdido
                          </p>
                        </Radio>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  color="primary"
                  variant="bordered"
                  className="border-moradoMain text-letra font-medium w-36 "
                >
                  Cancelar
                </Button>
                <Button >Guardar Perfil</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
