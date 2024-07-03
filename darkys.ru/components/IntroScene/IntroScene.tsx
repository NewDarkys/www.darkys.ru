"use client";
import React, { useEffect, useRef } from "react";
import "./IntroScene.css";

interface IntroSceneProps {
  tag?: keyof JSX.IntrinsicElements;
  video_src: string;
}

const IntroScene: React.FC<IntroSceneProps> = ({ tag, video_src }) => {
  const Tag = tag || "div";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        const elem = document.querySelector(".IntroScene");
        videoRef.current.addEventListener("ended", (event) => {
          if (elem) {
            elem.classList.add("IntroScene_finished");
          }
        });
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Tag className="IntroScene">
      <video ref={videoRef} src={video_src} controls={false}></video>
    </Tag>
  );
};

export default IntroScene;
