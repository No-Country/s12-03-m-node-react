import React from "react";
import {useCheckbox,Chip,VisuallyHidden,  tv} from "@nextui-org/react";
import IconHembra from "../../assets/filterModalIcons/hembra.svg"
import IconMacho from "../../assets/filterModalIcons/macho.svg"
import IconNoLoSe from "../../assets/filterModalIcons/noLoSe.svg"

const checkbox = tv({
    slots: {
      base: "border-solid border-1 border-moradoMain bg-white hover:bg-moradoActivo hover:border-moradoActivo",
      content: ""//modificar texto
    },
    variants: {
      isSelected: {
        true: {
          base: "border-solid border-1 border-moradoActivo bg-moradoActivo",
          content: ""//modificar texto
        }
      },
      isFocusVisible: {
        true: { 
          base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
        }
      }
    }
  })
  function CustomCheckboxFilter(props) {
    const {
      children,
      isSelected,
      isFocusVisible,
      getBaseProps,
      getLabelProps,
      getInputProps,
    } = useCheckbox({
      defaultSelected: true,
      ...props
    })
  
    const styles = checkbox({ isSelected, isFocusVisible })
  
    return (
      <label {...getBaseProps()}>
           <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
        
      
        <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        startContent={isSelected === false && null}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
        
      </label>
    );
  }
  export default CustomCheckboxFilter