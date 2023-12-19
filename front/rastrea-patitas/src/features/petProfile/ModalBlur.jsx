import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import PetCardMini from "./PetCardMini";

export default function ModalBlur({ pet}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
       
          <Button  
            
            variant="bordered"
            color="primary"
            onPress={() => handleOpen(blur)}
            className="border-moradoMain text-letra font-medium w-36 "
          >
           Editar perfil
          </Button>
         
      </div>
      <Modal className='bg-[url("/src/assets/bg-patitas.svg")] bg-repeat  h-3/4' backdrop={backdrop} isOpen={isOpen} onClose={onClose} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-letra text-3xl font-semibold">Editar Datos mascota </ModalHeader>
              <ModalBody>
                <div className="w-1/2 h-340px">
                  <PetCardMini petData={pet}/>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
