import React, { useState } from "react";

function SelectImg({ register, name }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const handlerSelected = (e) =>
    e.target.files && setSelectedImages(Array.from(e.target.files));
  return (
    <>
      <section className="relative flex">
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif, .bmp"
          id={name}
          name={name}
          className={!selectedImages[0] ? "file z-10" : "fileImg z-10"}
          {...register(name, {
            onChange: handlerSelected,
          })}
        />
        {selectedImages &&
          selectedImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt="preview"
              className="absolute file"
            />
          ))}
      </section>
    </>
  );
}
export default SelectImg;
