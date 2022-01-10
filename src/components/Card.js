import React from "react";

export default function Card({ person }) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="br-100 h3 w3 dib"
        alt={person.name}
        src={process.env.PUBLIC_URL + person.imgPath}
      />
      "
    </div>
  );
}
