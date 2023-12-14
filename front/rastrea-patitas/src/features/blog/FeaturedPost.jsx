import React from "react";
import allpost from "./allPost.json";
import image1 from "./images/image1.webp";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";
import HeaderBlog from "./HeaderBlog";

function FeaturedPost() {
  const featuredPost = allpost.filter((post) => post.outstanding == true);
  const Navigate = useNavigate();

  return (
    <>
      {/*  seccion para pantallas pequeñas */}
      <section className=" px-5 mt-3 flex flex-col md:hidden ">
        <HeaderBlog title={"blog"} link={""} />

        <h6 className=" text-moradoMain text-sm font-semibold tracking-[3px] pt-2">
          POST DESTACADO
        </h6>

        <h4 className=" text-letra text-lg font-bold">
          {featuredPost[0].title}
        </h4>

        <p className="text-[#4C4C4C] text-sm font-medium py-1">
          Por{" "}
          <span className=" text-moradoMain  pr-3">
            {featuredPost[0].author}
          </span>
          {featuredPost[0].date}
        </p>
        <span className=" text-sm font-normal text-justify">
          {featuredPost[0].previewText}
        </span>
        <img src={image1} alt="image not found" />

        <div className=" flex   justify-center items-center">
          <Button
            onClick={() => Navigate("/post")}
            className="bg-white h-10 w-20 px-4 border border-morado-main flex mt-6"
          >
            Leer más
          </Button>
        </div>
      </section>

      {/* Seccion para pantallas grandes */}
      <section className=" px-24 mt-3  hidden md:block">
        <HeaderBlog title={"blog"} link={""} />
        <div className=" flex">
          <div className=" w-1/2 ">
            <h6 className=" text-moradoMain text-base font-semibold tracking-[3px] pt-2">
              POST DESTACADO
            </h6>
            <h4 className=" text-letra text-5xl font-bold notebook:text-3xl mr-8">
              {featuredPost[0].title}
            </h4>
            <p className="text-[#4C4C4C] text-lg font-medium py-1">
              Por{" "}
              <span className=" text-moradoMain  pr-3">
                {featuredPost[0].author}
              </span>
              {featuredPost[0].date}
            </p>
            <span className=" text-2xl md:whitespace-normal font-normal text-justify notebook:text-xl text-[#6D6E76] ">
              {featuredPost[0].previewText}
            </span>

            <div className=" flex   justify-center items-center">
              <Button
                onClick={() => Navigate("/post")}
                className="bg-white h-10 w-20 px-4 border border-morado-main flex mt-6  "
              >
                Leer más
              </Button>
            </div>
          </div>
          <div className=" flex  w-1/2 justify-end  ">
            <img className="" src={image1} alt="image not found" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedPost;
