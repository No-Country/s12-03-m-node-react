/* eslint-disable no-unused-vars */
import React from "react";
import image1 from "./images/image1.webp";
import allpost from "./allPost.json";
import HeaderBlog from "./HeaderBlog";
import image2 from "./images/image1-2.png";
import image3 from "./images/image1-3.png";
import Share from "./Share";

function pagePost(props) {
  const filterdPost = allpost.filter((post) => post.outstanding == true);

  return (
    <div className="  w-full">
      <main className='bg-[url("src/assets/bg-patitas.svg")] bg-repeat flex justify-center flex-col px-5  md:px-32'>
        <HeaderBlog title={"Post"} link={"blog"} />

        <div className=" w-full h-80 md:h-96 mb-6 ">
          {" "}
          <img className=" w-full h-full object-cover" src={image1} alt="image not found" />
        </div>
        <h4 className=" text-letra text-lg  font-bold md:text-5xl md:px-6 notebook:px-4">
          {filterdPost[0].title}
        </h4>
        <p className="text-[#4C4C4C] text-sm font-medium py-1  md:px-6 notebook:px-4 md:text-lg">
          Por{" "}
          <span className=" text-moradoMain  pr-3  md:px-6 notebook:px-4 ">
            {filterdPost[0].author}
          </span>
          {filterdPost[0].date}
        </p>
        <span className=" text-sm font-normal text-justify  md:px-6 notebook:px-4 md:text-2xl">
          Sabemos lo triste y angustioso que es perder a tu mascota, es tu amigo
          y lo quieres, pondrás todo tu empeño y con esta guía esperamos darte
          consejos para que des los pasos adecuados para encontrarla.
          <h6 className=" font-bold text-[#6D6E76] mt-3">Actúa rápido</h6>
          Sabemos que hay veces que la mascota vuelve sola en poco tiempo, como
          es algo que no se sabe a priori, es importante que con calma y sentido
          común pero empieces la búsqueda cuanto antes.
          <h6 className=" font-bold text-[#6D6E76] mt-3">Buscar en la zona</h6>
          Sabemos que hay veces que la mascota vuelve sola en poco tiempo, como
          es algo que no se sabe a priori, es importante que con calma y sentido
          común pero empieces la búsqueda cuanto antes.
          <h6 className=" font-bold text-[#6D6E76] mt-3 ">
            Consejos para buscar gatos perdidos
          </h6>
          Si es un gato doméstico que no sale habitualmente al exterior, ten en
          cuenta que lo más probable es que se sienta abrumado por los ruidos,
          vehículos, etc… y demás cosas con las que no esté familiarizado.
          <div className="mt-3">
            Es fácil que pueda estar escondido incluso asustado, durante la
            búsqueda ve prestando atención a pequeños rincones, bajos de los
            coches, detrás de árboles o arbustos… llámalo pero no grites
            demasiado, ya que podría asustarse más.
          </div>
          <div className="mt-3">
            Si tienes alguna llamada o algún reclamo habitual como una campana o
            similar utilízalo.
          </div>
        </span>
        <div className=" w-full flex justify-center">
          {" "}
          <img
            className=" mt-4 md:px-6 notebook:px-4 md:w-2/5 "
            src={image2}
            alt="image not found"
          />
        </div>
        <p className=" text-[#6D6E76] text-xs font-light text-center md:px-6 notebook:px-4  md:text-lg">
          Un gato también puede haber quedado atrapado sin poder bajar de un
          árbol u otra zona elevada.
        </p>

        <h6 className=" font-bold text-[#6D6E76] mt-3 md:px-6 notebook:px-4 md:text-2xl">
          Consejos para buscar perros perdidos
        </h6>
        <div className="mt-3 text-sm font-normal text-justify md:px-6 notebook:px-4 md:text-2xl">
          Si tu perro es amigable, es probable que haya buscado la atención de
          otros perros u otras personas. Echa un vistazo a las casas cercanas,
          los parques públicos y cualquier lugar cercano a donde se congregue la
          gente.
        </div>
        <div className="mt-3 text-sm font-normal text-justify md:px-6 notebook:px-4 md:text-2xl">
          Si por el contrario, tu perro es tímido o mayor, es posible que esté
          tratando de esconderse en los arbustos, debajo de los autos o en algún
          jardín.
        </div>
        <div className="mt-3 text-sm font-normal text-justify md:px-6 notebook:px-4 md:text-2xl">
          Los perros suelen ir mucho más lejos que los gatos. Un perro pequeño
          solo puede recorrer apenas un kilómetro para explorar, pero un perro
          grande y joven podría bastante más , aunque por norma general la
          mayoría de los perros se recuperan en zonas cercanas a su hogar.
        </div>

        <div className=" w-full flex justify-center">
          {" "}
          <img
            className=" mt-4 md:px-6 notebook:px-4 md:w-2/5 "
            src={image3}
            alt="image not found"
          />{" "}
        </div>

        <p className=" text-[#6D6E76] text-xs font-light text-center md:text-lg">
          Si tu perro es de determinadas razas, sabes que has de notificar
          cuanto antes a las autoridades locales.
        </p>

        <Share />
      </main>
    </div>
  );
}

export default pagePost;
