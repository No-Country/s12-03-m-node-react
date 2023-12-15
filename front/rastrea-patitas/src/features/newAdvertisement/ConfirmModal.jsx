
import React from "react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

function ConfirmModal({isOpen, onOpenChange}){
    const navigate = useNavigate();
const home=    () => navigate("/home")
return(
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirmar anuncio</ModalHeader>              
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                Seguir editando
                </Button>
                <Button color="primary" onPress={onClose }>
                Si, publicar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
)
}
export default ConfirmModal