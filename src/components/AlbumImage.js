import React from "react";

const AlbumImage = ({ image }) => {
  return (
    <>
      {console.log("imgae en AlbumImage", image.url)}
      <img src={image.url} alt="" />
    </>
  );
};

export default AlbumImage;
