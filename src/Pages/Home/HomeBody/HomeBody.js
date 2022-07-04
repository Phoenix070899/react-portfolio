import React from "react";
import "./HomeBody.css";

function HomeBody() {
  return (
    <div className="flex flex-col items-center py-10">
      <h4>Specializing</h4>
      <h2>What I use</h2>
      <div className="flex flex-wrap gap-10 text-black justify-center items-center py-5">
        <img
          src="https://i.ibb.co/m6Tdj1L/icons8-html-5-144.png"
          alt="icons8-html-5-144"
          border="0"
        />
        <img
          src="https://i.ibb.co/S3PgykK/icons8-css3-144.png"
          alt="icons8-html-5-144"
          border="0"
        />
        <img
          src="https://i.ibb.co/zSrmWsF/icons8-javascript-144.png"
          alt="icons8-html-5-144"
          border="0"
        />
        <img
          src="https://i.ibb.co/hy9kxMK/icons8-sass-144.png"
          alt="icons8-html-5-144"
          border="0"
        />
        <img
          className="tailwind"
          src="https://i.ibb.co/T87G5qk/tailwindcss-logo-icon-170649.png"
          alt="icons8-html-5-144"
          border="0"
        />
        <img
          src="https://i.ibb.co/GtdDd8K/kisspng-bootstrap-responsive-web-design-web-development-lo-5af676c0755361-6918533815261016964806.png"
          alt="kisspng-bootstrap-responsive-web-design-web-development-lo-5af676c0755361-6918533815261016964806"
          border="0"
        />
        <img
          src="https://i.ibb.co/QKbG1MC/icons8-react-native-144.png"
          alt="icons8-html-5-144"
          border="0"
        />
      </div>
    </div>
  );
}

export default HomeBody;
