"use client";
import "./Vidak.css";
import React, { useEffect } from "react";

const Vidak = () => {
  useEffect(() => {
    console.log("i fire once");
  }, []);
  return <div className="Vidak"></div>;
};

export default Vidak;
