"use client";
import "./LoginPrompt.css";
import Image from "next/image";

interface LoginPromptProps {
  tag?: keyof JSX.IntrinsicElements;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ tag }) => {
  const Tag = tag || "div";
  let UsernameCounter = 0;
  let PasswordCounter = 0;

  let Username = "Guest";
  let Password = "******";

  function checkInput() {
    if (
      UsernameCounter >= Username.length &&
      PasswordCounter >= Password.length
    ) {
    }
  }

  function onUsernameInput(e: any) {
    UsernameCounter += 1;
    e.target.value = Username.substring(0, UsernameCounter);
    if (UsernameCounter >= Username.length) {
      let elem = document.querySelector<HTMLInputElement>(".passwordInput");
      if (elem) {
        elem.focus();
      }
    }
    checkInput();
  }
  function onPasswordInput(e: any) {
    PasswordCounter += 1;
    e.target.value = Password.substring(0, PasswordCounter);
    checkInput();
  }

  return (
    <Tag className="LoginPrompt">
      <Image
        src={`/LoginLogo.png`}
        alt="LoginLogo"
        className="LoginLogo"
        width="150"
        height="150"
      />
      <span className="LoginLogoText">Login to 7EYES System Center (SSC)</span>
      <div className="loginForm">
        <input
          className="usernameInput"
          onInput={onUsernameInput}
          placeholder="Username"
        ></input>
        <input
          className="passwordInput"
          onInput={onPasswordInput}
          placeholder="Password"
        ></input>
      </div>
    </Tag>
  );
};

export default LoginPrompt;
