import React from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

function SelectFilter({ data, label, placeholder, register, name }) {
  return (
    <>
      <Select
        label={label}
        placeholder={placeholder}
        variant="underlined"
        {...register(name)}
      >
        {data.map((element) => (
          <SelectItem key={element} value={element}>
            {element}
          </SelectItem>
        ))}
      </Select>
    </>
  );
}
export default SelectFilter;
