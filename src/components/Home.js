import React from "react";
import sources from "../data/sources";
export default function Home() {
  return (
    <div>
      <h2> Home </h2>
      <img src={sources["home"]} alt="home"/>
    </div>
  );
}
