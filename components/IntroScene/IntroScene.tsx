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

  return (
    <Tag className="IntroScene">
      <video
        className="IntroVideo"
        ref={videoRef}
        src={video_src}
        controls={false}
      ></video>
    </Tag>
  );
};

export default IntroScene;
