import React, { useContext, useEffect } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import AlbumImage from "../albumImage/AlbumImage";
import "./album.css";
import CloseIcon from "@material-ui/icons/Close";
import BtnModal from "./BtnModal";

function Album() {
  const {
    albums,
    getData,
    modal,
    setModal,
    clickedImg,
    slideIndex,
    setSlideIndex,
  } = useContext(AlbumContext);
  console.log("clickedImg id >>", clickedImg.id);

  useEffect(() => {
    getData();
  }, []);

  ///////////
  //* Slider Controls
  ///////////

  console.log("slideIndex", slideIndex);

  const nextSlide = () => {
    if (slideIndex >= albums.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }

    // console.log("nextSlide", slideIndex);
  };

  const prevSlide = () => {
    if (slideIndex <= 0) {
      setSlideIndex(albums.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }

    // console.log("PrevSlide", slideIndex);
  };

  const handleOnclick = () => {
    setModal(false);
    console.log(modal);
  };

  return (
    <div className="Album_Wrapper">
      <div className={modal ? "modal open" : "modal"}>
        <div>
          {/* {albums ? <img src={albums[slideIndex].url} alt="" /> : "nothing"} */}
          {slideIndex
            ? console.log("URL displayed >>>", albums[slideIndex].url)
            : console.log("no slideIndex", slideIndex)}
          {albums && (
            <img className="modal-image" src={albums[slideIndex].url} alt="" />
          )}

          <CloseIcon className="modal-close-btn" onClick={handleOnclick}>
            close modal
          </CloseIcon>

          <BtnModal moveSlide={nextSlide} direction={"next"} />
          <BtnModal moveSlide={prevSlide} direction={"prev"} />
        </div>
      </div>
      <div className="Album_GridContainer">
        {albums &&
          albums.map((item, index) => {
            return (
              <AlbumImage
                className="Album_gridImage"
                key={index}
                image={item}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Album;
