import styles from "./page.module.css";
import IntroScene from "@/components/IntroScene/IntroScene";
import LoginPrompt from "@/components/LoginPrompt/LoginPrompt";
import AboutMe from "@/components/AboutMe/AboutMe";
import VFX from "@/components/VFX/VFX";

export default function Home() {
  function boot() {
    var app = document.getElementById("typewriter");
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 50,
      cursor: "",
      deleteSpeed: 0,
    });
    typewriter
      .pauseFor(4000)
      .typeString("7EYES Main Research Center. <br>")
      .pauseFor(1000)
      .typeString("Starting ChkSys.svc | <br>")
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
      .pauseFor(2500)
      .deleteChars(2)
      .typeString("- <br>")
      .deleteChars(2)
      .typeString("\\ <br>")
      .deleteChars(2)
      .typeString("| <br>")
      .typeString('<span class="OK">[OK] Core - ✔ <br></span>')
      .typeString('<span class="warn">[WARN] Consciousness - ! <br></span>')
      .typeString('<span class="OK">[OK] Intelligence - ✔ <br></span>')
      .typeString(
        'DARKYS System is <span class="OK">online</span>. Initialating the STLOAD.dmn of the extraterrestrial founder.'
      )
      .pauseFor(9999999)
      .start();
  }

  function Tell(app: any) {
    var typewriterNew = new Typewriter(app, {
      delay: 15,
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
        <br><br><br>
        Hello! I'm Darkys!
        `
      )
      .pauseFor(99999999 ^ 99999)
      .start();
  }

  let UsernameCounter = 0;
  let PasswordCounter = 0;

  let Username = "Guest";
  let Password = "******";

  let startedLogging: boolean;

  function checkInput() {
    const Self = document.querySelector<HTMLDivElement>(".LoginPrompt")!;
    const video = document.querySelector<HTMLVideoElement>(".IntroVideo")!;
    if (
      !startedLogging &&
      UsernameCounter >= Username.length &&
      PasswordCounter >= Password.length &&
      Self
    ) {
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
          if (!isWaypointReached && this.currentTime >= 25.7) {
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
    if (
      UsernameCounter >= Username.length &&
      PasswordCounter < Password.length
    ) {
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
    if (
      PasswordCounter >= Password.length &&
      UsernameCounter < Username.length
    ) {
      let elem = document.querySelector<HTMLInputElement>(".usernameInput");
      if (elem) {
        elem.focus();
      }
    }
    checkInput();
  }
  return (
    <main className={styles.main}>
      <VFX></VFX>
      <IntroScene video_src="IntroVideo.mp4"></IntroScene>
      <LoginPrompt></LoginPrompt>
      <AboutMe></AboutMe>
    </main>
  );
}
