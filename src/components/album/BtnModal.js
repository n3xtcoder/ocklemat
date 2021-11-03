import React from "react";
import "./album.css";
import leftArrow from "./icons/leftArrow.svg";
import rightArrow from "./icons/rightArrow.svg";

function BtnModal({ direction, moveSlide }) {
  return (
    <button
      className={direction === "next" ? "btn-modal next" : "btn-modal prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}

export default BtnModal;
