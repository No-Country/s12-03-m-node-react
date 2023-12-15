import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { Button, Tooltip } from "@nextui-org/react";
import TooltipContent from "./TooltipContent";
import { IoIosInformationCircleOutline } from "react-icons/io";

function IconTooltip({ labelTitle, data }) {
  return (
    <>
      <section className="flex gap-2">
        <p className="text-lg	">{labelTitle}</p>
        <Tooltip
          showArrow
          placement="right"
          content={<TooltipContent labelTitle={labelTitle} data={data} />}
          classNames={{
            base: [
              // arrow color
              "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black  bg-moradoActivo",
            ],
          }}
    
        >
          <button>
            <IoIosInformationCircle color="#4BE6D0" title="#4BE6D0" className="bg-black rounded-full" />
          </button>
        </Tooltip>
      </section>
    </>
  );
}
export default IconTooltip;
