import { Accordion, AccordionItem, Button, Card } from "@nextui-org/react";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

function AcordionUser({ userName, PhoneNumber }) {
  const handleCall = () => {
    window.location.href = `tel:${PhoneNumber}`;
  };

  return (
    <Card className="mx-3 my-4">
      <Accordion>
        {" "}
        <AccordionItem
          key="2"
          aria-label="Datos del dueño"
          title="Datos del dueño"
        >
          <div>
            <div className="flex justify-between px-3 mb-2 ">
              <FaCircleUser className=" text-moradoMain w-6 h-6" />
              <p className="text-sm font-bold">{userName} </p>{" "}
            </div>

            <div className="flex justify-between items-center px-3 mb-2 ">
              <p className="flex">
                <FaPhone className=" text-moradoMain w-6 h-6 mr-3" />
                {PhoneNumber}
              </p>
              <Button
                color="primary"
                variant="bordered"
                className="border-moradoMain text-moradoMain "
                onClick={handleCall}
              >
                Marcar
              </Button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default AcordionUser;
