import React from "react";
import ExperienceComponent from "./ExperienceComponent";

function Experience() {
  return (
    <div className="flex flex-col items-center gap-10 my-5">
      <div className="flex flex-col items-center">
        <h4>Experience & Education</h4>
        <h2>What I did</h2>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <ExperienceComponent
          year="2022 - PRESENT"
          position="Frontend Developer"
          place="Self-taught"
          des1="I have studied HTML, CSS, JS and ReactJS through various sources such as F8, Freecodecamp.org, w3schools
          and practice coding mock projects. I believe I have quite enough knowledge in them to contribute value to the company. With little time of training, I certain that I will become much better and complete all the task that you give me. 
          "
        />
        <ExperienceComponent
          year="2021 - 2022"
          position="GRAPHIC DESIGNER"
          place="Lixbox Cosmetics"
          des1="
            - Create visual style for events on E-commerce platform (Shopee, Lazada, Tiki)"
          des2="- Create banner, visual design on Shop-in-shop and for advertising- Edit and render videos form multiple sources"
        />
        <ExperienceComponent
          year="2021 - 2022"
          position="MULTIMEDIA"
          place="FPT Arena Multimedia"
          des1="- Semester 1: Graphic Design"
          des2="- Semester 2: Website & Digital Design"
        />
        <ExperienceComponent
          year="2017 - 2021"
          position="Bachelor's Degree of Corporate Finance"
          place="University of Economics HCMC"
          des1="GPA: 8.0"
        />
      </div>
    </div>
  );
}

export default Experience;
