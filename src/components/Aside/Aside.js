import React from "react";
import CircleButton from "../CircleButton/CircleButton";
import "./Aside.scss";
import sprite from "../../assets/sprite.svg";

export default function Aside() {
  return (
    <div className="aside">
      <div className="aside__container">
        <div className="aside-logo">
          <svg className="aside-logo__icon">
            <use href={sprite + "#icon-logo"}></use>
          </svg>
        </div>
        <ul className="aside__buttons-list">
          <li className="aside__button-container">
            <CircleButton path={""} svgId={"home"}></CircleButton>
          </li>
          <li className="aside__button-container">
            <CircleButton path={""} svgId={"profile"}></CircleButton>
          </li>
          <li className="aside__button-container">
            <CircleButton path={""} svgId={"user"}></CircleButton>
          </li>
          <li className="aside__button-container">
            <CircleButton path={""} svgId={"document"}></CircleButton>
          </li>
        </ul>
      </div>
      <CircleButton path={""} svgId={"logout"}></CircleButton>
    </div>
  );
}
