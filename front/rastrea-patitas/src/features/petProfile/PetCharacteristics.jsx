import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
  Card,
  Chip,
} from "@nextui-org/react";

function PetCharacteristics({ pet }) {
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
          >
            <div>
              <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
                <li className="text-sm font-bold list-none">Tipo de animal </li>{" "}
                <Chip className=" bg-moradoActivo mb-2">{pet?.pet_id?.species}</Chip>
              </div>

              <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
                <p className="text-sm font-bold">sexo </p>{" "}
                <Chip className=" bg-moradoActivo mb-2">{pet?.pet_id?.sex}</Chip>
              </div>

              <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
                <li className="text-sm font-bold list-none">
                  <Breadcrumbs>
                    <BreadcrumbItem>Apariencia</BreadcrumbItem>
                    <BreadcrumbItem>Ojos</BreadcrumbItem>
                  </Breadcrumbs>{" "}
                </li>{" "}
                <Chip className=" bg-moradoActivo mb-2">{'marron'}</Chip>
              </div>

              <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
                <li className="text-sm font-bold list-none">
                  <Breadcrumbs>
                    <BreadcrumbItem>Apariencia</BreadcrumbItem>
                    <BreadcrumbItem>Pelo</BreadcrumbItem>
                  </Breadcrumbs>{" "}
                </li>{" "}
                <Chip className=" bg-moradoActivo mb-2">{pet?.pet_id?.main_color}</Chip>
              </div>

              <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
                <li className="text-sm font-bold list-none"> Edad</li>

                {/* //nose como viene de back */}
                <Chip className=" bg-moradoActivo mb-2">{pet?.pet_id?.age}</Chip>{" "}
                {/* //nose como viene de back */}
              </div>

              <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
                <p className="text-sm font-bold">Color </p>{" "}
                <Chip className=" bg-moradoActivo mb-2">{pet?.pet_id?.main_color}</Chip>
              </div>

              <div className="flex justify-between px-3">
                <li className="text-sm font-bold list-none">Tamaño* </li>{" "}
                <li className="text-sm font-normal list-none">25-40 cm</li>
                <Chip className=" bg-moradoActivo mb-2">{pet?.pet_id?.size}</Chip>
              </div>
              <li className="text-sm font-normal list-none">
                *De acuerdo a la longitud que hay desde las patas hasta el lomo
                del animal
              </li>
            </div>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}

export default PetCharacteristics;
