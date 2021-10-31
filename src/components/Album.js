import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
import AlbumImage from "./AlbumImage";

// import "./album.css";

function Album() {
  const { albums, getData } = useContext(AlbumContext);

  //   const [images, setimages] = useState([]);
  //   setimages(albums.url);

  console.log(albums);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gridContainer">
      {albums &&
        albums.map((item, index) => {
          return <AlbumImage key={index} image={item} />;
        })}
    </div>
  );
}

export default Album;
