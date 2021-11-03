import React, { useContext, useEffect } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import AlbumImage from "../albumImage/AlbumImage";
import "./album.css";
import CloseIcon from "@material-ui/icons/Close";
import BtnModal from "./BtnModal";
import { Link, Route, useLocation, useHistory } from "react-router-dom";

function Album() {
  const { albums, getData, slideIndex, setSlideIndex } =
    useContext(AlbumContext);

  useEffect(() => {
    getData();
  }, []);

  ///////////
  //* Slider Controls
  ///////////

  const location = useLocation();
  const history = useHistory();
  const { state = {} } = location;
  const { modal } = state;

  const nextSlide = () => {
    if (slideIndex >= albums.length - 1) {
      location.pathname = `/album/${albums[0].id}`;
      setSlideIndex(0);
    } else {
      history?.push({
        pathname: `/album/${albums[slideIndex + 1].id}`,
        state: { modal: true },
      });
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      history?.push({
        pathname: `/album/${albums[albums.length - 1].id}`,
        state: { modal: true },
      });
      setSlideIndex(albums.length - 1);
    } else {
      history?.push({
        pathname: `/album/${albums[slideIndex - 1].id}`,
        state: { modal: true },
      });
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="Album_Wrapper">
      {albums && modal && (
        <Route
          path="/album/:id"
          children={({ match, history }) => {
            const id = +match?.params.id;
            const imageIndex =
              id && albums.findIndex((image) => image.id === id);
            setSlideIndex(imageIndex);

            const close = (e) => {
              e.stopPropagation();
              history.push("/");
            };

            return (
              <div className="modal open">
                <div>
                  <img
                    className="modal-image"
                    src={albums[slideIndex].url}
                    alt={albums[slideIndex].title}
                  />

                  <CloseIcon className="modal-close-btn" onClick={close}>
                    close modal
                  </CloseIcon>

                  <BtnModal moveSlide={nextSlide} direction={"next"} />
                  <BtnModal moveSlide={prevSlide} direction={"prev"} />
                </div>
              </div>
            );
          }}
        />
      )}

      <div className="Album_GridContainer">
        {albums &&
          albums.map((item, index) => {
            return (
              <Link
                to={{ pathname: `/album/${item.id}`, state: { modal: true } }}
              >
                {" "}
                <AlbumImage
                  className="Album_gridImage"
                  key={index}
                  image={item}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Album;
