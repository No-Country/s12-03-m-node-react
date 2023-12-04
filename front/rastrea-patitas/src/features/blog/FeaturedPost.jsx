import React from "react";
import allpost from "./allPost.json";
import image1 from "./images/image1.webp";
import { Button } from "@nextui-org/button";

function FeaturedPost() {
  const featuredPost = allpost.filter((post) => post.outstanding == true);

  return (
    <section className=" px-5  flex flex-col">
      <h6 className=" text-moradoMain text-sm font-semibold tracking-[3px]">
        POST DESTACADO
      </h6>
      <h4 className=" text-letra text-lg font-bold">{featuredPost[0].title}</h4>
      <p className="text-[#4C4C4C] text-sm font-medium py-1">
        Por <span className=" text-moradoMain">{featuredPost[0].author}</span>
        {featuredPost[0].date}
      </p>
      <span className=" text-sm font-normal text-justify">
        {featuredPost[0].previewText}
      </span>
      <img src={image1} alt="image not found" />

      <div className=" flex   justify-center items-center">
        <Button className="bg-white h-10 w-20 px-4 border border-morado-main flex mt-6">
          Leer más
        </Button>
      </div>
    </section>
  );
}

export default FeaturedPost;
