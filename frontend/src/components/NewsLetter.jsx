import React from "react";

const NewsLetter = () => {
  return (
    <section className=" flex items-center justify-center flex-col bg-gray-200 p-10">
      <h1 className="text-xl font-semibold">Subscribe to our newsletter</h1>
      <p className="mb-3 text-sm">Get daily news on upcomming offers from many suppliers all over the world.</p>
      <div className="flex items-center gap-2">
          <input type="email" placeholder="Email"
          className="border border-none bg-foreground p-1 rounded-md w-[100%]"/>
          <button className="button py-1 px-2 text-sm font-light">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;
