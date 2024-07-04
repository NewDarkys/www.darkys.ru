"use client";
import "./AboutMe.css";
import Image from "next/image";

interface AboutMe {
  tag?: keyof JSX.IntrinsicElements;
}

const AboutMe: React.FC<AboutMe> = ({ tag }) => {
  const Tag = tag || "div";

  return (
    <Tag className="AboutMe animated-gradient-black-red">
      <span className="AlertSpan">
        Hello! This page is under development. More will be in the near future!{" "}
        <br></br>- Darkys
      </span>
    </Tag>
  );
};

export default AboutMe;
