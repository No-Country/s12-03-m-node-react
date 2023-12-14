import React,  { useState} from "react";
import IconHembra from "../../../assets/filterModalIcons/hembra.svg";
import IconMacho from "../../../assets/filterModalIcons/macho.svg";
import IconNoLoSe from "../../../assets/filterModalIcons/noLoSe.svg";
import { PiCircleDuotone } from "react-icons/pi";
//<PiCircleDuotone />

function SexCheckbox ({typeIcon}){ 
     


    return(
        <>  
        {typeIcon === "IconHembra" && <img src={IconHembra} alt="" />}
        {typeIcon === "IconMacho"  && <img src={IconMacho} alt="" />}
        {typeIcon === "IconNoLoSe" && <img src={IconNoLoSe} alt="" />}   
        </>
        
    )
}
export default SexCheckbox