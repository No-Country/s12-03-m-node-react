/* eslint-disable no-unused-vars */
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import React from "react";

function EditPetCharacteristics(props) {
  return (
    <div className=" w-full border-b border-solid border-moradoMain mb-4">
      <Card className="mx-3 my-4">
        <Accordion>
          {" "}
          <AccordionItem
            key="1"
            aria-label="Características de la mascota"
            title="Características de la mascota"
            className=" text-sm "
          ></AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}

export default EditPetCharacteristics;

