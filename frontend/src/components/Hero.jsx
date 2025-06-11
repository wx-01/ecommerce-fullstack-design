import React, { useState } from "react";
const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <section className="md:mt-4 w-full">
      <div className="md:border md:rounded-sm border-gray-200 bg-foreground flex flex-col md:flex-row p-3  gap-4">
        {/* Left: Category List */}
        <div className="hidden w-full lg:w-1/4 lg:flex  lg:justify-start">
          <div className="flex flex-col gap-1 w-full">
            {categories.map((category) => (
              <a
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border rounded-sm border-foreground px-2 py-1  text-sm xl:text-[17px]
                  ${
                    selectedCategory === category
                      ? "bg-primary-light font-semibold"
                      : ""
                  }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Image */}
        <div className="w-full md:w-3/4 flex justify-center items-center">
          <img
            src="hero.png"
            alt="Hero"
            className="w-full lg:h-full xl:max-h-85 xl:object-contain"
          />
        </div>

        {/* Right: Info Boxes */}
        <div className="hidden md:w-1/4 md:flex flex-col items-center justify-between xl:h-85 gap-2">
          <div className="bg-primary-light text-white w-full p-4 h-6/12 rounded-md flex flex-col gap-2">
            <div className="flex flex-row " >
                    <div className=" size-9 bg-cover"><img src="/user.png"></img></div>
                    <div className="text-black text-sm pl-2 leading-5">Hi, user<br /> let's get started</div>
            </div>
            <div className="button h-7 font-light">Join now</div>
            <div className="btn-container bg-foreground h-7  text-primary">
              Log in
            </div>
          </div>
          <div className="bg-orange-400 text-white w-full p-2 h-3/12 rounded-md leading-5">
            Get US $10 off
            <br /> with a new
            <br /> supplier
          </div>
          <div className="bg-teal-400 text-white w-full p-2 h-3/12 rounded-md leading-5">
            Send quotes with
            <br /> supplier <br />
            preferences
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
