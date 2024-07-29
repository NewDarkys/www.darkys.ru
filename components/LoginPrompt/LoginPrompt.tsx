"use client";
import "./LoginPrompt.css";
import Image from "next/image";
import Typewriter from "typewriter-effect/dist/core";
import React, { useState } from "react";

interface LoginPromptProps {
  tag?: keyof JSX.IntrinsicElements;
}

const LoginPrompt: React.FC<LoginPromptProps> = ({ tag }) => {
  const Tag = tag || "div";
  const [count, onUsernameInput] = useState(0);
  const [PI, onPasswordInput] = useState(0);

  return (
    <Tag className="LoginPrompt">
      <Image
        src={`/LoginLogo.png`}
        alt="LoginLogo"
        className="LoginLogo"
        width="150"
        height="150"
        priority={true}
      />
      <span className="LoginLogoText">Login to 7EYES System Center (SSC)</span>
      <div className="loginForm">
        <input
          className="usernameInput"
          onInput={() => onUsernameInput((count += 1))}
          placeholder="Username"
        ></input>
        <input
          className="passwordInput"
          onInput={() => onPasswordInput}
          placeholder="Password"
        ></input>
      </div>
    </Tag>
  );
};

export default LoginPrompt;
