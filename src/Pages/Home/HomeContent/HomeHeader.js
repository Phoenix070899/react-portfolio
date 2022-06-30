import React from "react";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="flex gap-5 items-center py-20">
      <div className="home-content w-6/12 flex flex-col gap-5">
        <div className="content-header">
          <p className="px-2 py-1 bg-dark-blue rounded w-fit font-semibold text-sm text-white">
            Welcome. I'm
          </p>
          <h1 className="text-5xl font-bold text-dark-blue pt-3">
            Nguyễn Trung Dũng
          </h1>
        </div>
        <h3 className="text-xl font-bold">A Fresh Front-end Developer</h3>
        <p className="">
          Graduating as a Designer from FPT Arena Multimedia. While working in
          Lixibox office as a designer, simultaneously, I was learning in detail
          with a front-end developer major as well. Generally, I confidentially
          have basic knowledge in HTML, CSS, JAVASCRIPT, REACTJS and easy to
          adapt under pressure.
        </p>
        <button className="px-4 py-2 w-fit rounded-md text-sm font-semibold text-white hover:opacity-80 transition-all">
          Download my CV
        </button>
      </div>
      <div className="home-img w-6/12 flex items-center justify-center">
        <div className="img w-8/12 aspect-square rounded-full relative">
          <p>playfull</p>
          <p>responsible</p>
          <p>responsible</p>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
