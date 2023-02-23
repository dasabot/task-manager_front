import React from "react";
import sprite from "../../assets/sprite.svg";
import DropDownBtnS from "../DropDownBtnS/DropDownBtnS";
import "./LoginPage.scss";
import loginImage from "../../assets/image-login-2.png";
import Input from "../Input/Input";
import SignUpWithBtn from "../SignUpWithBtn/SignUpWithBtn";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

export default function LoginPage() {
  return (
    <>
      <div className="login">
        <div className="login-bg">
          <div className="logo">
            <svg className="logo__icon">
              <use href={sprite + `#icon-logo-2`}></use>
            </svg>
          </div>
          <span className="login-bg__description">
            Stay organized and efficient with a powerful task management
            platform
          </span>
          <img
            className="login-bg__image"
            src={loginImage}
            alt="abstraction"
          ></img>
        </div>
        <div className="login-content">
          <div className="language-btn-container">
            <DropDownBtnS>Language</DropDownBtnS>
          </div>
          <span className="login-content__title">Create Account</span>
          <form className="login-content__form">
            <Input placeholder="First name" type="text"></Input>
            <Input placeholder="Last name" type="text"></Input>
            <Input placeholder="Email" type="email"></Input>
            <Input placeholder="Password" type="password"></Input>
          </form>
          <span className="login-content__separator">or</span>
          <div className="login-content__sign-up-with-block">
            <SignUpWithBtn type="google"></SignUpWithBtn>
            <SignUpWithBtn type="facebook"></SignUpWithBtn>
          </div>
          <div className="login-content__create-acc-btn">
            <PrimaryBtn>Create Account</PrimaryBtn>
          </div>
          <span className="login-content__hint">
            Allready have an account? 
            <a className="login-content__hint login-content__hint--link">
              Log in
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
