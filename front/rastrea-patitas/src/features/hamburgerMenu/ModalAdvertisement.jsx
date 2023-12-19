import React, { useState } from "react";
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
  Link,
} from "@nextui-org/react";
import FilterModal from "../home/FilterModal";



function ModalAdvertisement({ handleClose, open }) {
  const [openAdvertusement, setOpenAdvertusement] = useState(false);
  const [status, setStatus] = useState("");
  const handleOpenAdvertusement = () => setOpenAdvertusement(true);
  const handleCloseAdvertusement = () => setOpenAdvertusement(false);

  const handleStatusFound = () => setStatus("Encontrado");
  const handleStatusLost = () => setStatus("Perdido");

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={open}
        onClose={handleClose}
        radius="2xl"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50",
          base: "border-[#292f46]",
          header: "border-b-[1px] border-[#292f46]",
          closeButton:
            "text-white bg-moradoMain hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Añade un anuncio
              </ModalHeader>
              <ModalBody>
                <p>
                  ¿Tu compañero peludo se ha extraviado o has encontrado a una
                  mascota perdida?
                </p>
                <p>Elige la opción que deseas anunciar.</p>
                <Link
                  onClick={() => {
                    handleOpenAdvertusement(), handleStatusLost();
                  }}
                  className="bg-moradoActivo  flex-col items-start h-1/3 px-4 py-6 rounded-2xl text-letra"
                >
                  <p className="font-bold">Mascota perdida</p>
                  <p>
                    Entrega información clave sobre tu compañero peludo perdido.
                  </p>
                </Link>
                <Link
                  onClick={() => {
                    handleOpenAdvertusement(), handleStatusFound();
                  }}
                  className="bg-moradoActivo flex-col items-start h-1/3 px-4 py-6 rounded-2xl text-letra"
                >
                  <p className="font-bold">Mascota encontrada</p>
                  <p>
                    Proporciona detalles sobre una mascota perdida que
                    encontraste.
                  </p>
                </Link>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <FilterModal
        handleClose={handleCloseAdvertusement}
        open={openAdvertusement}
        status={status}
      />
    </>
  );
}
export default ModalAdvertisement;
