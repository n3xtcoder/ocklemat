import React from "react";
import "./albumImage.css";

const AlbumImage = ({ image, onClick }) => {
  return (
    <>
      <img
        className="Album_gridImage"
        src={image.thumbnailUrl}
        alt={image.title}
        onClick={onClick}
      />
    </>
  );
};

export default AlbumImage;
