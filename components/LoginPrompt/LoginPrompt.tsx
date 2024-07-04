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

  let startedLogging: boolean;

  function checkInput() {
    const Self = document.querySelector<HTMLDivElement>(".LoginPrompt");
    const video = document.querySelector<HTMLVideoElement>(".IntroVideo");
    if (
      !startedLogging &&
      UsernameCounter >= Username.length &&
      PasswordCounter >= Password.length &&
      Self
    ) {
      startedLogging = true;
      Self.classList.add("hidden");
      if (video) {
        const IntroScene = document.querySelector(".IntroScene");
        const AmbientAudio = document.querySelector(".AmbientAudio");
        video.play();
        video.addEventListener("ended", (event) => {
          if (IntroScene && AmbientAudio) {
            IntroScene.classList.add("IntroScene_finished");
            video.classList.add("IntroScene_finished");
            AmbientAudio.play();
          }
        });
      }
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
        priority={true}
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
