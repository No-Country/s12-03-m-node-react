import React from "react";
import PublicationPet from "../../assets/PublicationPet.svg"
function PublicationMade() {
  return (
    <>
      <h1>¡Publicación realizada!</h1>
      <h2>Aguarda unos segundos mientras generamos tu cartel informativo...</h2>
      <img src={PublicationPet} alt="" />
    </>
  );
}
export default PublicationMade;
