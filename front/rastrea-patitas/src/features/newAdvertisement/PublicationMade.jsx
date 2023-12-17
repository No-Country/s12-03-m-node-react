import React from "react";
import PublicationPet from "../../assets/PublicationPet.svg"
function PublicationMade() {
  return (
    <div className='bg-[url("/src/assets/bg-patitas.svg")] bg-repeat flex flex-col  items-center h-screen		'>
      <h1 className="text-3xl	font-semibold	pt-10	text-center ">¡Publicación realizada!</h1>
      <h2 className="pt-9	text-center ">Aguarda unos segundos mientras generamos tu cartel informativo...</h2>
      <div className="h-screen	flex items-end">
      <img src={PublicationPet} alt="" className=""/></div>
    </div>
  );
}
export default PublicationMade;
