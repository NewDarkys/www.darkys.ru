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
    (function me() {
      var elem = document.querySelector<HTMLImageElement>(".acryl");
      let windowMaxHeight = document.documentElement.clientHeight;
      for (let i = -50; i < windowMaxHeight + 10; i++) {
        setTimeout(() => {
          if (elem) {
            elem.style.marginTop = `${i}px`;
          }
        }, 5 * i);
      }
      setTimeout(me, (windowMaxHeight + 10) * 5);
    })();
  });
  return (
    <Tag className="VFX">
      <div className="acryl"></div>
      <img src="beam.png" className="effect"></img>
    </Tag>
  );
};

export default VFX;
