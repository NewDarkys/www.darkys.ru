"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    document.addEventListener("click", () => {
      let ambientAudioNode =
        document.querySelector<HTMLAudioElement>(".AmbientAudio");
      if (ambientAudioNode) {
        ambientAudioNode.play();
      }
    });
  });
  return (
    <div className={styles.container}>
      <audio
        src="What Does Anybody Know About Anything.mp3"
        className="AmbientAudio"
        loop
      ></audio>
      <header>ош</header>
      <a>11</a>
    </div>
  );
}
