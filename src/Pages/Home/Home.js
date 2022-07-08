import React from "react";
import HomeHeader from "./HomeContent/HomeHeader";
import HomeBody from "./HomeBody/HomeBody";
import Experience from "../../Components/Experience/Experience";

function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeBody />
      <Experience />
    </div>
  );
}

export default Home;
