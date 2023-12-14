import React from "react";
function ColorGeneral({isSelected, fill}){



    return(
     
        <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        version="1.1"
        id="svg347"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
       <defs
          id="defs351" />
       <circle
         fill={fill}
          stroke="#4d4295"      
          strokeWidth="3" 
          id="circle345-1"
          cy="16"
          cx="16.0625"
          r="13.5" 
          />
       {isSelected===false &&   	
       <circle
       fill={fill}
          stroke="#4D4295"
          strokeOpacity="0.2"
          strokeWidth="1" 
          id="circle345"
          r="15.5"
          cy="16"
          cx="16"
       />}
     </svg>
     
    )
}
export default ColorGeneral