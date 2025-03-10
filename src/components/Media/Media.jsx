import React from "react";
import Video from "../../assets/Video.png";
import Banner from "../../assets/Banner.png";

const Media = () => {
  return (
    <>
      <div className="text-center m-8">
        <h3>With Media +</h3>
        <h1 className="text-4xl bold ">
          Create an OTT platform for your media
        </h1>
        <p>
          Let your video do more than just sit on your website. Curate your
          video repository in a few easy steps and let it drive organic views
          and generate leads.
        </p>
      </div>
      <div className="items-center flex justify-center ">
        <img src={Video}></img>
      </div>
      <div className="mt-30 mb-30">
        <img src={Banner} width="100%" />
      </div>
    </>
  );
};

export default Media;
