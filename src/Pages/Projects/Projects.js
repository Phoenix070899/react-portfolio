import {useState} from "react";
import "./Projects.css";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Modal, Typography, Box } from "@mui/material";
import SwiperComponent from "../../Components/Swiper/Swiper";

function Projects() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="projects flex flex-col gap-5 mb-10">
        <div className="projects-header">
          <div className="flex items-center gap-2">
            <span className="w-10 h-1 bg-dark-blue"></span>
            <h3 className="text-dark-blue font-bold">MINERVA TECHNOLOGY'S PROJECT</h3>
          </div>
          <h1>Joining in a task management system project for a bank</h1>
        </div>
        <div className="projects-content flex flex-col gap-5">
          <div className="content-card">
            <div className="card-des">
              <div className="card-des-header">
                <h2 className="text-orange-primary">Task Management System</h2>
                <h3>SCSS, Antd-Des, Typescript, ReactJS, Redux Toolkit</h3>
              </div>
              <p>
                A website shows all the approved documents, policies,
                organization structure. I was in charged of implementing new
                Calendar, Notify features. They alows users to create, edit,
                remove tasks, events and notify anyone who involved.
              </p>
            </div>
            <div className="card-img" style={{cursor: 'pointer'}} onClick={() => setOpen(true)}>
            </div>
          </div>
        </div>
      </div>
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
                song. Also users can choose to repeat one song or shuffle
                playlist order.
              </p>
              <div className="card-link flex gap-5">
                <div>
                  <LanguageRoundedIcon fontSize="small" />
                  <a
                    href="https://phoenix070899.github.io/music-player/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                </div>
                <div>
                  <GitHubIcon fontSize="small" />
                  <a
                    href="https://github.com/Phoenix070899/music-player.git"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
                  <a
                    href="https://phoenix070899.github.io/weather-app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                </div>
                <div>
                  <GitHubIcon fontSize="small" />
                  <a
                    href="https://github.com/Phoenix070899/weather-app.git"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card-img"></div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <SwiperComponent />
      </Modal>
    </>
  );
}
export default Projects;
