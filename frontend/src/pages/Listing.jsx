import React from "react";
import NewsLetter from "../components/NewsLetter";

const Listing = () => {
  return (
    <>
      <main className="pt-19 md:relative  flex flex-col items-center justify-center md:pt-27  md:ml-18 md:mr-18 lg:ml-26 lg:mr-26">
        <div className="w-full">
          {/* top */}
          <div className="w-full flex items-center justify-start py-3 text-gray-400 ">
            <h1>Home &gt; Clothings &gt; Men's Wear &gt; Summer Clothing</h1>
          </div>
          <div className="flex flex-row">
            {/* left section */}
            <div >
           
           
            </div>
            {/* right section */}
            <div>
              {/* header */}
              <div></div>
              {/* items */}
              <div></div>
            </div>
          </div>
        </div>
      </main>
      <NewsLetter />
    </>
  );
};

export default Listing;
