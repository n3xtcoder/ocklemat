import React, { useContext } from "react";
import "./albumImage.css";
import { AlbumContext } from "../../context/AlbumContext";

const AlbumImage = ({ image }) => {
  const { showImg } = useContext(AlbumContext);
  const handleClick = (image) => {
    showImg(image);
  };

  return (
    <>
      <img
        className="Album_gridImage"
        src={image.url}
        alt={image.title}
        onClick={() => handleClick(image)}
      />
    </>
  );
};

export default AlbumImage;
