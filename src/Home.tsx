import React from "react";
import SlideShow from "./components/SlideShow";

const Home = () => {

  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczN9NaDnkJXZbFVz2El4Rf5VW0kXbfZcksx5XNkciT6XxB5DFrtC-Hp8ZmRBYXG4IAS8I6oxuy0DJl13-KzcarplTVrKVgX3lMtHlPZjTLxeY3abfmc=w2400",
    "https://lh3.googleusercontent.com/pw/AP1GczNEOiHYMAnGBInHYEwsUQkM0ENCGmMK9iAAOMwdS1t1nUEuYBqTFQ6K8bnG-VnzRXj-bkZ2omuC378NffFHkpSJSmJ4lWs6DVV-GDRQy7zWYbhSrdk=w2400"
  ];

  return (
    <div className="min-h-screen flex flex-col relative justify-center overflow-hidden" id="home">
      <div className="flex flex-col h-full lg:w-1/2 z-10 mx-auto">
        <div
          className="lg:mt-5 my-cursive fade-in-text text-[#f7f7f7] font-bold text-4xl md:text-5xl text-center bg-clip-text py-4">
          Small Steps <br/>
          <span className="text-red-200 tracking-wider">To Great Flavours</span>
        </div>
        <a href="#menu"
           className="btn btn-outline px-20 py-3 bg-[#f7f7f7] border border-red-200 text-black mx-auto text-center rounded-md relative mt-2">
          MENU
        </a>
      </div>
      <SlideShow className="z-0" images={images}/>
    </div>
  );
};

export default Home;