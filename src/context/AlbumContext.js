import React, { createContext, useState } from "react";

export const AlbumContext = createContext();

export const AlbumContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const obj = await response.json();
      console.log(obj);
      setAlbums(obj);
    } catch (error) {
      //   console.log(error.response.data.error);
      console.log(error);
    }
  };
  console.log(`Albums >>>`, albums);

  return (
    <AlbumContext.Provider value={{ albums, getData }}>
      {children}
    </AlbumContext.Provider>
  );
};
