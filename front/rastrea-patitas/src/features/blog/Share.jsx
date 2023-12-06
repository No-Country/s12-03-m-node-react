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

function Share() {
  const currentUrlDep = window.location.href; // para deploy
  const currentPageUrl = "https://rastreapatitas.vercel.app/post"; // para rama local

  return (
    <div className="flex justify-end my-6">
      <p className=" mr-4 text-[#999] text-sm font-medium" >Compartir en: </p>

      <FacebookShareButton  url={currentPageUrl}>
        <FacebookIcon size={32} round={true} className=" mr-3" />
      </FacebookShareButton>

      <TwitterShareButton url={currentPageUrl}>
        <XIcon size={32} round={true} className=" mr-3"/>
      </TwitterShareButton>

      <PinterestShareButton url={currentPageUrl} media={currentPageUrl}>
        <PinterestIcon size={32} round={true} className=" mr-3" />
      </PinterestShareButton>

      <EmailShareButton url={currentPageUrl}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>
  );
}

export default Share;
