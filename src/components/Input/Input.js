import React from "react";
import sprite from "../../assets/sprite.svg";
import "./Input.scss";

export default function Input({ placeholder, type }) {
  return (
    <label className="label-input">
      <input className="label-input__input" placeholder={placeholder} type={type}></input>
      {type === "password" ? (
        <svg className="label-input__icon">
          <use href={sprite + `#icon-eye`}></use>
        </svg>
      ) : null}
    </label>
  );
}
