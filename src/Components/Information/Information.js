import React from "react";
import "./Information.css";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Information() {
  return (
    <div className="mb-5">
      <h3 className="info-header text-orange-primary pb-3">Contact me</h3>
      <div className="info-content">
        <div>
          <ContactPhoneRoundedIcon />
          <span>(+84) 0961 048 128</span>
        </div>
        <div>
          <EmailIcon />
          <span>nguyentrungdung61@gmail.com</span>
        </div>
        <div>
          <LinkedInIcon />
          <a
            href="https://www.linkedin.com/in/trung-d%C5%A9ng-nguy%E1%BB%85n-bbb403240/"
            target="_blank"
            rel="noreferrer noopener"
          >
            linkedin.com/in/trung-dũng-nguyễn
          </a>
        </div>
        <div>
          <GitHubIcon />
          <a
            href="https://github.com/Phoenix070899"
            target="_blank"
            rel="noreferrer noopener"
          >
            github.com/Phoenix070899
          </a>
        </div>
        <div>
          <FacebookRoundedIcon />
          <a
            href="https://www.facebook.com/trungdung.nguyen.1428/"
            target="_blank"
            rel="noreferrer noopener"
          >
            facebook.com/trungdung.nguyen.1428/
          </a>
        </div>
      </div>
    </div>
  );
}

export default Information;
