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
        <div className="content-card">
          <div className="card-des">
            <div className="card-des-header">
              <h2 className="text-orange-primary">Music Player App</h2>
              <h3>Personal Projects - HTML, CSS, Javascript</h3>
            </div>
            <p>
              A website allows user control songs, skip next or skip previous
              song. Also users can choose to repeat one song or shuffle playlist
              order.
            </p>
            <div className="card-link flex gap-5">
              <div>
                <LanguageRoundedIcon fontSize="small" />
                <a href="https://phoenix070899.github.io/weather-app/">
                  Website
                </a>
              </div>
              <div>
                <GitHubIcon fontSize="small" />
                <a href="https://github.com/Phoenix070899/weather-app.git">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-img"></div>
        </div>
        <div className="content-card">
          <div className="card-des">
            <div className="card-des-header">
              <h2 className="text-orange-primary">Weather App</h2>
              <h3>Personal Projects - HTML, CSS, SCSS, Javascript</h3>
            </div>
            <p>
              A website allows user search for weather of many cities or get
              their location weather in realtime. I used RestAPI from
              OpenWeatherMap to get data and render into display.
            </p>
            <div className="card-link flex gap-5">
              <div>
                <LanguageRoundedIcon fontSize="small" />
                <a href="https://phoenix070899.github.io/weather-app/">
                  Website
                </a>
              </div>
              <div>
                <GitHubIcon fontSize="small" />
                <a href="https://github.com/Phoenix070899/weather-app.git">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-img"></div>
        </div>
        <div className="content-card">
          <div className="card-des">
            <div className="card-des-header">
              <h2 className="text-orange-primary">Spotify Clone App</h2>
              <h3>
                Personal Projects - HTML, CSS, TailwinCSS, Javascript, ReactJS
                (+ react-router-dom, axios)
              </h3>
            </div>
            <p>
              A website allows user control songs, skip next or skip previous
              song connecting with Spotify. Using axios get, put to interact
              with Spotify API render into display.
            </p>
            <div className="card-link flex gap-5">
              <div>
                <LanguageRoundedIcon fontSize="small" />
                <a href="https://phoenix070899.github.io/weather-app/">
                  Website
                </a>
              </div>
              <div>
                <GitHubIcon fontSize="small" />
                <a href="https://github.com/Phoenix070899/weather-app.git">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="card-img"></div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
