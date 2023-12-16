import { Button, Card } from "@nextui-org/react";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Input } from "@nextui-org/react";
import GoogleMaps from "./GoogleMaps";

function ChangePetState({ petName, handlerClose }) {
  return (
    <div>
      <Card className="mx-3 my-4">
        <div className=" flex justify-around items-center  w-full border-b border-solid border-[ #A1A1AC] mb-4">
          <p className="mx-4 text-letra font-bold text-lg">
            Confirmar cambio de estado
          </p>
          <Button onClick={() => handlerClose()} isIconOnly radius="full" className=" bg-white">
            {" "}
            <IoMdCloseCircle className=" text-moradoMain w-6 h-6" />
          </Button>
        </div>

        <div>
          <span className="mx-4 text-letra font-normal text-sm  flex justify-center">
            {`Sentimos mucho que ${petName} se haya perdido. Para ayudarte en la
            búsqueda, por favor comparte la siguiente información:`}
          </span>

          <p className=" text-sm text-letra font-bold mx-4 my-4">
            Característica especial
          </p>
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
          <Input
            type="description"
            placeholder="Describe si tenia alguna particularidad"
            className="border-b border-moradoMain focus:outline-none m-4"
          />
        </div>

        <p className=" text-sm text-letra font-bold mx-4 my-4">
          Ubicación donde se perdió
        </p>
        <GoogleMaps />

        <div className=" mx-4 my-4">
          {" "}
          <p className=" text-sm text-letra font-bold ">
            Añadir descripción{" "}
            <span className=" text-[#D9D9D9] ">(hasta 200 caracteres)</span>
          </p>
          <Input className="border border-moradoMain rounded-md h-[130px]" />
          {/*falta validar la longitud */}
        </div>

        <div className=" w-full flex justify-center">
          <Button
            color="primary"
            variant="bordered"
            className="border-moradoMain text-moradoMain font-medium w-36  mb-4"
          >
            Publicar
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ChangePetState;
