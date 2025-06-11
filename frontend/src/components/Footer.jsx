import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="h-full py-8 pl-10 pr-10 md:pl-18 md:pr-18 lg:pl-26 lg:pr-26 flex items-center gap-10 bg-foreground">
        <div className=" flex flex-col gap-2">
          {/* Logo */}
          <div className="w-28 flex  flex-row items-center">
            <img className="size-8.5" src="/logo.png" alt="logo"></img>
            <h1 className="text-xl lg:text-2xl font-bold text-primary-brand ml-1">
              Brand
            </h1>
          </div>
          {/* imfo */}
          <p className="text-wrap">Best information about our products<br /> and services</p>
          {/* social media icons */}
          <div className="flex flex-row gap-2">
            <div className="bg-gray-400 rounded-full size-6 flex items-center justify-center">
              <Facebook className="size-4 text-white fill-current " />
            </div>
            <div className="bg-gray-400 rounded-full size-6 flex items-center justify-center">
              <Twitter className="size-4 text-white fill-current " />
            </div>
            <div className="bg-gray-400 rounded-full size-6 flex items-center justify-center">
              <Linkedin className="size-4 text-white fill-current " />
            </div>
            <div className="bg-gray-400 rounded-full size-6 flex items-center justify-center">
              <Instagram className="size-4 text-white " />
            </div>
            <div className="bg-gray-400 rounded-full size-6 flex items-center justify-center">
              <Youtube className="size-4 text-white  " />
            </div>
          </div>
        </div>
        {/* About */}
        <div className=" flex flex-col gap-2">
          <h1 className="font-semibold">About</h1>
          <div className="flex flex-col gap-1 pb-2">
            <p className="text-gray-500 text-sm ">About US</p>
            <p className="text-gray-500 text-sm ">Find stores</p>
            <p className="text-gray-500 text-sm ">Categories</p>
            <p className="text-gray-500 text-sm ">Blog</p>
          </div>
        </div>
               <div className=" flex flex-col gap-2">
          <h1 className="font-semibold">Partnership</h1>
          <div className="flex flex-col gap-1 pb-2">
            <p className="text-gray-500 text-sm ">About US</p>
            <p className="text-gray-500 text-sm ">Find stores</p>
            <p className="text-gray-500 text-sm ">Categories</p>
            <p className="text-gray-500 text-sm ">Blog</p>
          </div>
        </div>
               <div className=" flex flex-col gap-2">
          <h1 className="font-semibold">Information</h1>
          <div className="flex flex-col gap-1 pb-2">
            <p className="text-gray-500 text-sm ">Help center</p>
            <p className="text-gray-500 text-sm ">Money Refund</p>
            <p className="text-gray-500 text-sm ">Shipping</p>
            <p className="text-gray-500 text-sm ">Contact us</p>
          </div>
        </div>
               <div className=" flex flex-col gap-2">
          <h1 className="font-semibold">For users</h1>
          <div className="flex flex-col gap-1 pb-2">
            <p className="text-gray-500 text-sm ">Login</p>
            <p className="text-gray-500 text-sm ">Register</p>
            <p className="text-gray-500 text-sm ">Settings</p>
            <p className="text-gray-500 text-sm ">My orders</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Get App</h1>
          <img src="./appstore.png" alt="" className="h-10 mb-2"></img>
          <img src="./playstore.png" alt=""  className="h-10 mb-2"></img>
        </div>
      </div>
            <div className="h-full py-4 pl-10 pr-10 md:pl-18 md:pr-18 lg:pl-26 lg:pr-26 flex items-center justify-between gap-10 bg-gray-200">

      <p> &copy; 2023 Ecommerce.</p>
      </div>
    </footer>
  );
};

export default Footer;
