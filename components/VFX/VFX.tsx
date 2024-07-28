"use client";
import "./VFX.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface VFX {
  tag?: keyof JSX.IntrinsicElements;
}

const VFX: React.FC<VFX> = ({ tag }) => {
  const Tag = tag || "div";
  useEffect(() => {
    let windowMaxHeight = document.documentElement.clientHeight;
    var elem = document.querySelector<HTMLImageElement>(".acryl")!;
    function me() {
      for (let i = -50; i < windowMaxHeight + 10; i++) {
        setTimeout(() => {
          elem.style.marginTop = `${i}px`;
        }, 5 * i);
      }
      return;
    }
    me();
    setInterval(me, (windowMaxHeight + 10) * 5.01);
  });
  return (
    <Tag className="VFX">
      <audio src="Ambient.mp3" className="AmbientAudio"></audio>
      <audio src="server.mp3" className="serverAudio"></audio>
      <div className="acryl"></div>
      <Image
        src="/beam.png"
        priority={true}
        className="effect"
        alt="decor"
        width={"420"}
        height={"237"}
      ></Image>
    </Tag>
  );
};

export default VFX;
