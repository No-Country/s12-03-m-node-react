import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Accordion,
  AccordionItem,
  Card,
  Chip,
} from "@nextui-org/react";

function AcordionPet({ type, sex, eyes, hair, color }) {
  return (
    <Card className="mx-3 my-4">
      <Accordion>
        {" "}
        <AccordionItem
          key="1"
          aria-label="Características de la mascota"
          title="Características de la mascota"
        >
          <div>
            <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
              <p className="text-sm font-bold">Tipo de animal </p>{" "}
              <Chip className=" bg-moradoActivo mb-2">{type}</Chip>
            </div>

            <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
              <p className="text-sm font-bold">sexo </p>{" "}
              <Chip className=" bg-moradoActivo mb-2">{sex}</Chip>
            </div>

            <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
              <p className="text-sm font-bold">
                <Breadcrumbs>
                  <BreadcrumbItem>Apariencia</BreadcrumbItem>
                  <BreadcrumbItem>Ojos</BreadcrumbItem>
                </Breadcrumbs>{" "}
              </p>{" "}
              <Chip className=" bg-moradoActivo mb-2">{eyes}</Chip>
            </div>

            <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
              <p className="text-sm font-bold">
                <Breadcrumbs>
                  <BreadcrumbItem >Apariencia</BreadcrumbItem>
                  <BreadcrumbItem>Pelo</BreadcrumbItem>
                </Breadcrumbs>{" "}
              </p>{" "}
              <Chip className=" bg-moradoActivo mb-2">{hair}</Chip>
            </div>

            <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
              <p className="text-sm font-bold"> Edad</p>
              <p className="text-sm font-normal">1-2</p>{" "}
              {/* //nose como viene de back */}
              <Chip className=" bg-moradoActivo mb-2">Joven</Chip>{" "}
              {/* //nose como viene de back */}
            </div>

            <div className="flex justify-between px-3 mb-2 border-b border-solid border-moradoMain">
              <p className="text-sm font-bold">Color </p>{" "}
              <Chip className=" bg-moradoActivo mb-2">{color}</Chip>
            </div>

            <div className="flex justify-between px-3">
              <p className="text-sm font-bold">Tamaño* </p>{" "}
              <p className="text-sm font-normal">25-40 cm</p>
              <Chip className=" bg-moradoActivo mb-2">Pequeño</Chip>
            </div>
            <p className="text-sm font-normal">
              *De acuerdo a la longitud que hay desde las patas hasta el lomo
              del animal
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default AcordionPet;
