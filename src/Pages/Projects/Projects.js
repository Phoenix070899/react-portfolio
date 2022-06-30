import React from "react";
import "./Projects.css";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <div className="projects flex flex-col gap-10">
      <div className="projects-header">
        <div className="flex items-center gap-2">
          <span className="w-10 h-1 bg-dark-blue"></span>
          <h3 className="text-dark-blue font-bold">MY PROJECTS</h3>
        </div>
        <h1>Creating functional projects to master my skills</h1>
      </div>
      <div className="projects-content flex flex-col gap-5">
        <div className="content-card flex items-center w-full h-60 rounded-xl border border-dark-blue text-dark-blue overflow-hidden">
          <div className="card-des p-5 h-full flex flex-col justify-between items-start w-6/12">
            <div className="card-des-header">
              <h2>Weather App</h2>
              <h3>Personal Projects - HTML,CSS,SCSS,Javascript</h3>
            </div>
            <p>
              A website allows user search for weather of many cities or get
              their location weather in realtime. I used RestAPI from
              OpenWeatherMap to get data and render into display.
            </p>
            <div className="card-link flex gap-5">
              <div className="flex items-center gap-1">
                <LanguageRoundedIcon fontSize="small" />
                <a href="https://phoenix070899.github.io/weather-app/">
                  Go to Website
                </a>
              </div>
              <div className="flex items-center gap-1">
                <GitHubIcon fontSize="small" />
                <a href="https://github.com/Phoenix070899/weather-app.git">
                  Watch Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-img w-6/12 h-full"></div>
        </div>
        <div className="content-card flex items-center w-full h-60 rounded-xl border border-dark-blue text-dark-blue overflow-hidden">
          <div className="card-des p-5 h-full flex flex-col justify-between items-start w-6/12">
            <div className="card-des-header">
              <h2>Music Player</h2>
              <h3>Personal Projects - HTML,CSS,Javascript</h3>
            </div>
            <p>
              A website allows user search for weather of many cities or get
              their location weather in realtime. I used RestAPI from
              OpenWeatherMap to get data and render into display.
            </p>
            <div className="card-link flex gap-5">
              <div className="flex items-center gap-1">
                <LanguageRoundedIcon fontSize="small" />
                <a href="https://phoenix070899.github.io/weather-app/">
                  Go to Website
                </a>
              </div>
              <div className="flex items-center gap-1">
                <GitHubIcon fontSize="small" />
                <a href="https://github.com/Phoenix070899/weather-app.git">
                  Watch Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-img w-6/12 h-full"></div>
        </div>
        <div className="content-card flex items-center w-full h-60 rounded-xl border border-dark-blue text-dark-blue overflow-hidden">
          <div className="card-des p-5 h-full flex flex-col justify-between items-start w-6/12">
            <div className="card-des-header">
              <h2>Weather App</h2>
              <h3>Personal Projects - HTML,CSS,SCSS,Javascript</h3>
            </div>
            <p>
              A website allows user search for weather of many cities or get
              their location weather in realtime. I used RestAPI from
              OpenWeatherMap to get data and render into display.
            </p>
            <div className="card-link flex gap-5">
              <div className="flex items-center gap-1">
                <LanguageRoundedIcon fontSize="small" />
                <a href="https://phoenix070899.github.io/weather-app/">
                  Go to Website
                </a>
              </div>
              <div className="flex items-center gap-1">
                <GitHubIcon fontSize="small" />
                <a href="https://github.com/Phoenix070899/weather-app.git">
                  Watch Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-img w-6/12 h-full"></div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
