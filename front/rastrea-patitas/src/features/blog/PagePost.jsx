import React from "react";
import image1 from "./images/image1.webp";
import Footer from "../../ui/Footer";
import allpost from "./allPost.json";

function pagePost(props) {
  const filterdPost = allpost.filter((post) => post.outstanding == true);

  return (
    <div className="  w-full">
      <main className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat flex justify-center flex-col px-5'>
        <img src={image1} alt="image not found" />
        <h4 className=" text-letra text-lg font-bold">
          {filterdPost[0].title}
        </h4>
        <p className="text-[#4C4C4C] text-sm font-medium py-1">
          Por{" "}
          <span className=" text-moradoMain  pr-3">
            {filterdPost[0].author}
          </span>
          {filterdPost[0].date}
        </p>
        <span className=" text-sm font-normal text-justify">
          Sabemos lo triste y angustioso que es perder a tu mascota, es tu amigo
          y lo quieres, pondrás todo tu empeño y con esta guía esperamos darte
          consejos para que des los pasos adecuados para encontrarla.
          <h6>Actúa rápido</h6>
          Sabemos que hay veces que la mascota vuelve sola en poco tiempo, como
          es algo que no se sabe a priori, es importante que con calma y sentido
          común pero empieces la búsqueda cuanto antes.
        </span>
      </main>
      <Footer />
    </div>
  );
}

export default pagePost;
