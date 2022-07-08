import React from "react";

function ExperienceComponent({ year, position, place, des1, des2 }) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-orange-primary">{year}</span>
      <h3 className="text-xl">{position}</h3>
      <span className="font-semibold opacity-60">{place}</span>
      <span className="whitespace-pre-wrap">
        {des1}
        <br />
        {des2}
      </span>
    </div>
  );
}

export default ExperienceComponent;
