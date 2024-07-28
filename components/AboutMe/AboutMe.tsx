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
      <div className="anketa-container">
        <span className="about_text dpN"> 123</span>
        <div className="anketa">
          <Image
            src={`/LoginLogo.png`}
            alt="7EYES-Logo"
            className="Logo"
            width="150"
            height="150"
            priority={true}
          ></Image>
          <span className="StorySpan">
            <div className="SpanFiller" id="typewriter"></div>
          </span>
        </div>
      </div>
    </Tag>
  );
};

export default AboutMe;
