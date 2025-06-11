import React from "react";
import {
  Heart,
  MenuIcon,
  MessageSquareText,
  ShoppingCart,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 bg-foreground ">
      {/* desktp */}
      <div className="hidden container md:flex items-center flex-col">
        {/* Top Section */}
        <div className="h-16 w-screen flex justify-between items-center border-b-1 border-gray-200">
          <div className="size-full ml-10 mr-10 md:ml-18 md:mr-18 lg:ml-26 lg:mr-26 flex items-center gap-10">
            {/* Logo */}
            <div className="w-28 flex  flex-row items-center">
              <img className="size-8.5" src="/logo.png" alt="logo"></img>
              <h1 className="text-xl lg:text-2xl font-bold text-primary-brand ml-1">
                Brand
              </h1>
            </div>
            {/* search section */}
            <div className="w-full flex c-border rounded-md md:h-[30px] lg:h-[35px] md:flex-3 ml-2 mr-8 flex-row">
              <div className="input flex flex-row items-center flex-3">
                <input
                  type="search"
                  required
                  placeholder="Search"
                  className="c-border w-full h-full p-1 outline-none  rounded-l-md"
                />
              </div>
              <div className="flex items-center flex-1 ">
                <select
                  name=""
                  id=""
                  className="w-full h-full c-border outline-none text-[15px] font-sm"
                >
                  <option value="">All category</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
                </select>
              </div>
              <div className="flex ">
                <button
                  type="submit"
                  className="button h-full md:w-20 lg:w-25 rounded-r-md"
                >
                  Search
                </button>
              </div>
            </div>
            {/* navigation icons */}
            <div className="flex  items-center justify-end">
              <div className="flex flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center justify-between gap-0.75 ">
                  <User className="size-4.5 text-gray-500 fill-current" />
                  <p className="text-[10px] text-gray-500">Profile</p>
                </div>
                <div className="flex flex-col  items-center justify-between gap-0.75">
                  <MessageSquareText className="size-4.5 text-gray-500 fill-current" />
                  <p className="text-[10px] text-gray-500">Message</p>
                </div>
                <div className="flex flex-col  items-center justify-between gap-0.75">
                  <Heart className="size-4.5 text-gray-500 fill-current" />
                  <p className="text-[10px] text-gray-500">Orders</p>
                </div>
                <div className="flex flex-col  items-center justify-between gap-0.75">
                  <ShoppingCart className="size-4.5 text-gray-500 fill-current" />
                  <p className="text-[10px] text-gray-500">My Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom Section */}
        <div className="h-11 w-screen flex justify-between items-center border-b-1 border-gray-200">
          <div className="size-full ml-10 mr-10 md:ml-18 md:mr-18 lg:ml-26 lg:mr-26 flex items-center justify-between">
            {/* left options */}
            <div className="flex flex-row">
              <MenuIcon className="size-5 mr-1" />
              <div className="flex items-center justify-between gap-1 md:gap-5 text-sm ">
                <a href="/listing">All category</a>
                <a href="/listing">Hot offers</a>
                <a href="/listing">Gift boxes</a>
                <a href="/listing">Projects</a>
                <a href="/listing">Menu item</a>
                <select name="" id="" className="outline-none">
                  <option value="">Help</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>
            </div>
            {/* right options */}
            <div className="flex items-center justify-between gap-7 text-sm ">
              <select name="" id="" className="outline-none">
                <option value="">English,USD</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>

              <select name="" id="" className="outline-none">
                <option value="">Ship to</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex container md:hidden items-center flex-col">
        {/* Top Section */}
        <div className="h-18.5 w-screen  flex  items-center border-b-1 border-gray-200">
          <div className="size-full ml-9 mr-9 flex items-center justify-between">
          {/* Menu and logo */}
          <div className="flex flex-row items-center">
            <MenuIcon className="size-6 mr-1" />
            <div className="w-28 flex  flex-row items-center">
              <img className="size-10 ml-2" src="/logo.png" alt="logo"></img>
              <h1 className="text-xl lg:text-2xl font-bold text-primary-brand ml-1">
                Brand
              </h1>
            </div>
          </div>
          {/* navigation icons */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center">
              <ShoppingCart className="size-4.5 text-gray-500" />
            </div>
            <div className="flex items-center">
                  <User className="size-4.5 text-gray-500" />
                </div>
          </div>
        </div>
        </div>
          {/* Bottom Section */}
          
      </div>
    </nav>
  );
};

export default Navbar;
