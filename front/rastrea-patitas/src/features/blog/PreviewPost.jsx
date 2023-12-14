import { Button } from "@nextui-org/button";
import React from "react";

function PreviewPost({ image, title, previewText, author, date, linkButton }) {
  return (
    <section className="md:flex md:my-5">
      <img className=" w-full  md:w-96 md:pr-9" src={image} alt="image not found " />
      <div>
        <h4 className=" text-letra text-lg font-bold md:text-3xl ">{title}</h4>
        <p className="text-[#4C4C4C] text-sm font-medium py-3 md:text-lg">
          Por <span className=" text-moradoMain pr-3">{author}</span>
          {date}
        </p>
        <span className=" text-sm font-normal text-justify md:text-2xl">{previewText}</span>
        <div className=" flex   justify-center items-center">
          <Button className="bg-white h-10 w-20 px-4 border border-morado-main flex my-6">
            Leer más
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PreviewPost;
