import React, { useContext, useEffect } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import AlbumImage from "../albumImage/AlbumImage";
import "./album.css";
import CloseIcon from "@material-ui/icons/Close";
import BtnModal from "./BtnModal";
import { Link, Route, useHistory, Switch } from "react-router-dom";

function Album() {
  const { albums, getData } = useContext(AlbumContext);

  useEffect(() => {
    getData();
  }, []);

  ///////////
  //* Slider Controls
  ///////////

  const history = useHistory();

  const nextSlide = (index) => {
    if (index === albums.length - 1) {
      setHistory(albums[0].id);
    } else {
      setHistory(albums[index + 1].id);
    }
  };

  const prevSlide = (index) => {
    if (index === 0) {
      setHistory(albums[albums.length - 1].id);
    } else {
      setHistory(albums[index - 1].id);
    }
  };

  const setHistory = (id) => {
    history?.push({
      pathname: `/slider/${id}`,
      state: { modal: true },
    });
  };

  return (
    <div className="Album_Wrapper">
      {albums && (
        <Switch>
          {" "}
          <Route
            path="/slider/:id"
            children={({ match, history }) => {
              const id = +match?.params.id;
              const imageIndex =
                id && albums.findIndex((image) => image.id === id);
              if (imageIndex < 0) {
                return null;
              }

              const close = (e) => {
                e.stopPropagation();
                history.push("/");
              };

              return (
                <div className="modal open">
                  <div>
                    <img
                      className="modal-image"
                      src={albums[imageIndex].url}
                      alt={albums[imageIndex].title}
                    />

                    <CloseIcon className="modal-close-btn" onClick={close}>
                      close modal
                    </CloseIcon>

                    <BtnModal
                      moveSlide={() => nextSlide(imageIndex)}
                      direction={"next"}
                    />
                    <BtnModal
                      moveSlide={() => prevSlide(imageIndex)}
                      direction={"prev"}
                    />
                  </div>
                </div>
              );
            }}
          />
        </Switch>
      )}

      <div className="Album_GridContainer">
        {albums &&
          albums.map((item, index) => {
            return (
              <Link to={{ pathname: `/slider/${item.id}` }}>
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
