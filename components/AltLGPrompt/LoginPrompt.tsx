"use client";
import "./LoginPrompt.css";
import Image from "next/image";
import Typewriter from "typewriter-effect/dist/core";

interface LoginPromptProps {
  tag?: keyof JSX.IntrinsicElements;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ tag }) => {
  const Tag = tag || "div";
  function boot() {
    var app = document.getElementById("typewriter");
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 5,
      cursor: "",
      deleteSpeed: 0,
    });
    typewriter
      .pauseFor(150)
      .typeString("7EYES Main Research Center. <br>")
      .pauseFor(150)
      .typeString("Security check | <br>")
      .deleteChars(2)
      .typeString("/ <br>")
      .deleteChars(2)
      .typeString("- <br>")
      .deleteChars(2)
      .typeString("\\ <br>")
      .deleteChars(2)
      .typeString("| <br>")
      .deleteChars(2)
      .typeString("/ <br>")
      .deleteChars(2)
      .typeString("- <br>")
      .deleteChars(2)
      .typeString("\\ <br>")
      .deleteChars(2)
      .typeString("| <br>")
      .deleteChars(2)
      .typeString("/ <br>")
      .deleteChars(2)
      .typeString("- <br>")
      .deleteChars(2)
      .typeString("\\ <br>")
      .deleteChars(2)
      .typeString("| <br>")
      .deleteChars(2)
      .typeString("/ <br>")
      .pauseFor(500)
      .deleteChars(2)
      .typeString("- <br>")
      .deleteChars(2)
      .typeString("\\ <br>")
      .deleteChars(2)
      .typeString("| <br>")
      .typeString('<span class="OK">[OK] Auth - ✔ <br></span>')
      .pauseFor(9999999)
      .start();
  }

  function Tell(app: any) {
    var typewriterNew = new Typewriter(app, {
      delay: 0.05,
      cursor: "",
      deleteSpeed: 0,
      loop: false,
    });
    typewriterNew
      .typeString(
        `
        ALIEBIOS(C)2024 extraterrestrial SYSTEMS, Inc. <br> SENATA 3.33 D-1707 SCIENCE ACPI BIOS Revision 6633 <br> CPU: Tul17 33-Core Processor <br>   Speed: 3333MHz <br> 
        <br>
        USB DEVICES TOTAL: 1 Drive, 1 Keyboard, 1 Mouse, 0 Hub
        <br><br>
        Detected sentient devices:<br>
        YATA6G_1: SEN2021127<br>
        YATA6G_3: NERV_G24 SERVER<br>
        YATA6G_5: WORKERS20060708CORE<br>
        `
      )
      .deleteAll()
      .start();
  }

  let UsernameCounter = 0;

  let Username = "YES ";

  let startedLogging: boolean;

  function checkInput() {
    const Self = document.querySelector<HTMLDivElement>(".LoginPrompt")!;
    const video = document.querySelector<HTMLVideoElement>(".IntroVideo")!;
    if (!startedLogging && UsernameCounter >= Username.length && Self) {
      startedLogging = true;
      let isTyperFinished = true;
      const IntroScene = document.querySelector(".IntroScene")!;
      const anketa_container = document.querySelector(".anketa")!;
      const about_text = document.querySelector(".about_text")!;
      const AmbientAudio =
        document.querySelector<HTMLAudioElement>(".AmbientAudio")!;
      const serverAudio =
        document.querySelector<HTMLAudioElement>(".serverAudio")!;
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible" && !isTyperFinished) {
          serverAudio.play();
        } else {
          serverAudio.pause();
        }
      });
      /*window.onblur = function () {
        if (!isTyperFinished) {
          serverAudio.pause();
        }
      };
      window.onfocus = function () {
        if (!isTyperFinished) {
          serverAudio.play();
        }
      };*/
      Self.classList.add("hidden");
      video.play();
      video.addEventListener("ended", (event) => {
        IntroScene.classList.add("IntroScene_finished");
        boot();
        video.classList.add("IntroScene_finished");
        isTyperFinished = false;
        if (document.visibilityState === "visible") {
          serverAudio.play();
        }
        let isWaypointReached = false;
        function finish_anketa(this: HTMLAudioElement) {
          if (!isWaypointReached && this.currentTime >= 3.3) {
            isWaypointReached = true;
            anketa_container.classList.add("op0");
            about_text.classList.remove("dpN");
            Tell(about_text);
            isTyperFinished = true;

            IntroScene.remove();
          }
        }
        serverAudio.addEventListener("timeupdate", finish_anketa);
        AmbientAudio.play();
      });
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
          autoComplete="off"
          onInput={onUsernameInput}
          placeholder="PROCEED?"
        ></input>
      </div>
    </Tag>
  );
};

export default LoginPrompt;
