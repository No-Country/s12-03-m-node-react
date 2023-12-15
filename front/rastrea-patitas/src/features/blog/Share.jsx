/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

function Share({ page }) {
  const currentUrlDep = window.location.href; // para deploy
  const currentPageUrl = "https://rastreapatitas.vercel.app/post"; // para rama local

  return (
    <div className="flex justify-end my-6">
      {page !== 'poster' && <p className=" mr-4 text-[#999] text-sm font-medium" >Compartir en: </p>}

      <FacebookShareButton url={currentUrlDep}>
        <FacebookIcon size={32} round={true} className=" mr-3" />
      </FacebookShareButton>

      <TwitterShareButton url={currentUrlDep}>
        <XIcon size={32} round={true} className=" mr-3" />
      </TwitterShareButton>

      {page !== 'poster' && <PinterestShareButton url={currentUrlDep} media={currentUrlDep}>
        <PinterestIcon size={32} round={true} className=" mr-3" />
      </PinterestShareButton>}

      <EmailShareButton url={currentUrlDep}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default Share;
