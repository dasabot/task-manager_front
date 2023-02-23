import React from "react";
import sprite from "../../assets/sprite.svg";
import "./DropDownBtnS.scss";

export default function DropDownBtnS(props) {
  return (
    <>
      <button className="dropdown-btn-s">
        {props.children}
        <svg className="dropdown-btn-s__icon">
          <use href={sprite + `#icon-triangle`}></use>
        </svg>
      </button>
    </>
  );
}