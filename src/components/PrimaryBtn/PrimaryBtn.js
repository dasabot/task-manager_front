import React from "react";
import "./PrimaryBtn.scss";

export default function PrimaryBtn(props) {
  return (
    <>
      <button className="primary-btn">{props.children}</button>
    </>
  );
}
