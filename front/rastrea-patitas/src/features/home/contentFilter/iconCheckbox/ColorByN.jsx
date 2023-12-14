import React from "react";
function ColorByN({isSelected}){
    return(
        <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="white"   />
        <circle cx="16" cy="16" r="15.5" stroke="#4D4295" strokeOpacity={isSelected===false ? "0.2":undefined } strokeWidth={isSelected===true ? "1":undefined} />
        <circle cx="32" cy="16" r="16" fill="black" stroke={isSelected===true ? "#4D4295":undefined}  strokeWidth={isSelected===true ? "1" :undefined} />
        </svg>
    )
}
export default ColorByN