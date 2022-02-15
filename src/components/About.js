import React from "react";
import { useMatch, useParams } from "react-router-dom";
import sources from "../data/sources";

export default function About() {
  const {name} = useParams();  // from url about/<name>

  const matchLearningReact = useMatch('/about/Learning%20React'); //Matching data

  const showBuyButton = matchLearningReact;
  return (
    <div>
      <h2> About {name} </h2>
      {showBuyButton && <p><button>Buy now!</button></p>}
      {<img src={sources[name]} alt={name}></img>}
    </div>
  );
}
