import React from "react";
import sprite from "../../assets/sprite.svg";
import "./SignUpWithBtn.scss";

export default function SignUpWithBtn({ type }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <button className="sign-up-with-btn">
        <svg className="sign-up-with-btn__icon">
          <use href={sprite + `#icon-${type}`}></use>
        </svg>
        {`Sign up with ${capitalizeFirstLetter(type)}`}
      </button>
    </>
  );
}
