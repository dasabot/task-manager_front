import React from "react";
import sprite from "../../assets/sprite.svg";
import "./CircleButton.scss";

export default function CircleButton({ svgId, path }) {
  return (
    <>
      <button className="circleButton">
        <svg className="circleButton__icon">
          <use href={sprite + `#icon-${svgId}`}></use>
        </svg>
      </button>
    </>
  );
}
