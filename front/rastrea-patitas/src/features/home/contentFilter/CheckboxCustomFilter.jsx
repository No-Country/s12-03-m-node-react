import React, { useState } from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import SexCheckbox from "./SexCheckbox";
import CheckboxColor from "./CheckboxColor";
const checkbox = tv({
  slots: {
    base: 'border-solid border-1 border-moradoMain bg-white hover:bg-moradoActivo hover:border-moradoActivo',
    content: "w-full", //modificar texto
  },
  variants: {
    isSelected: {
      true: {
        base:'border-solid border-1 border-moradoActivo bg-moradoActivo' ,
        content:' w-full', //modificar texto
      },
    },
    isFocusVisible: {
      true: {
        base: 'outline-none ring-2 ring-focus ring-offset-2 ring-offset-background',
      },
    },
  },
});
function CustomCheckboxFilter(props) {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
    icon,
    i,
    colorReference,

  } = useCheckbox({
    defaultSelected: true,
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });
  
 

  return (
    <label {...getBaseProps()} >
      <VisuallyHidden>
        <input {...getInputProps()} />

      </VisuallyHidden>
      
      
     {icon!==true ?
     <>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color='primary'
        startContent={isSelected === false && null}
        variant='faded'
        {...getLabelProps()}
        
      >
       
        {children  }
      </Chip> 
     

      </>
      : 
      props.colorReference  ?      
       <>
       <CheckboxColor typeIcon={props.value} isSelected={isSelected} /> 
      </>
      :<>
        <SexCheckbox typeIcon={props.i} /> 
      </>
      }
      
     
    
    </label>
  );
}
export default CustomCheckboxFilter;
