"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  var Switch = false;
  var level = false;

  const handleClick = () => {
    if (level) {
      level = false;
      const video = videoRef.current;
      if (video) {
        video.play();
      }
    }
    if (!Switch) {
      Switch = !Switch;
      const el = document.documentElement;
      el.requestFullscreen();

      const video = videoRef.current;
      let flag1 = false;
      let flag2 = false;
      if (video) {
        video.play();
        video.addEventListener("timeupdate", () => {
          if (video.currentTime >= 26 && video.currentTime < 27.5 && !flag1) {
            flag1 = !flag1;
            video.pause();
          }

          if (video.currentTime >= 92.5 && video.currentTime < 93 && !flag2) {
            flag2 = !flag2;
            video.pause();
            level = true;
            console.log(1);
          }
        });
      }
    }
  };
  useEffect(() => {
    const targetSequence = "isuck";
    let inputBuffer = [];
    const maxBufferLength = targetSequence.length;
    document.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      if (key.length === 1) {
        inputBuffer.push(key);

        if (inputBuffer.length > maxBufferLength) {
          inputBuffer.shift();
        }

        if (inputBuffer.join("") === targetSequence) {
          const video = videoRef.current;
          if (video) {
            video.play();
          }
        }
      }
    });
  });

  return (
    <main className={styles.main} onClick={handleClick}>
      <video
        ref={videoRef}
        controls={false}
        className={styles.video}
        src="https://github.com/NewDarkys/www.darkys.ru/raw/refs/heads/master/public/jarkim.mp4"
      ></video>
    </main>
  );
}
