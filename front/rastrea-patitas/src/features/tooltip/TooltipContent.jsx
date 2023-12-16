import React from "react";
import AgeAndSize from "./AgeAndSize";
import SpecialFeature from "./SpecialFeature";
import NameTooltip from "./NameTooltip";

function TooltipContent({ labelTitle, data }) {
  return (
    <>
      {labelTitle === "Nombre" && <NameTooltip />}
      {labelTitle === "Carácteristica especial (opcional)" && <SpecialFeature />}
      {data && <AgeAndSize labelTitle={labelTitle} data={data} />}
    </>
  );
}
export default TooltipContent;
