import React from "react";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="flex flex-col-reverse gap-5 items-center py-20 md:flex-row">
      <div className="home-content flex flex-col gap-3 md:w-6/12">
        <div className="content-header">
          <p className="px-2 py-1 bg-dark-blue rounded w-fit font-semibold text-sm text-white">
            Welcome. I'm
          </p>
          <h1 className="text-5xl font-bold text-dark-blue pt-3 md:text-4xl">
            Nguyễn Trung Dũng
          </h1>
        </div>
        <h3 className="text-xl font-bold">A Front-end Developer</h3>
        <p className="">
          Graduating as a Designer from FPT Arena Multimedia. While working in
          Lixibox office as a designer, simultaneously, I was learning in detail
          with a front-end developer major as well. Generally, I confidentially
          have basic knowledge in HTML, CSS, JAVASCRIPT, REACTJS and easy to
          adapt under pressure.
        </p>
        <a href="/src/assets/Nguyễn Trung Dũng - Resume.pdf" download>
          <button className="px-4 py-2 w-fit rounded-md text-sm font-semibold text-white hover:opacity-80 transition-all">
            Download my CV
          </button>
        </a>
      </div>
      <div className="home-img w-full flex items-center justify-center md:w-8/12">
        <div className="img w-8/12 mb-10 aspect-square rounded-full relative"></div>
      </div>
    </div>
  );
}

export default HomeHeader;
