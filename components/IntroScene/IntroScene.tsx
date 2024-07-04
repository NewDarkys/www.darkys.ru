"use client";
import React, { useEffect, useRef, useState } from "react";
import "./IntroScene.css";

interface IntroSceneProps {
  tag?: keyof JSX.IntrinsicElements;
  video_src: string;
}

const IntroScene: React.FC<IntroSceneProps> = ({ tag, video_src }) => {
  const Tag = tag || "div";
  const videoRef = useRef<HTMLVideoElement>(null);

  function SkipIntro() {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5.0;
    }
  }

  return (
    <Tag className="IntroScene">
      <video
        className="IntroVideo"
        ref={videoRef}
        src={video_src}
        controls={false}
      ></video>
      <button className="SkipIntro" onClick={SkipIntro}>
        Skip intro. . .
      </button>
    </Tag>
  );
};

export default IntroScene;
