import React from "react";

const items = [
  {
    id:"1",
    name:"Smart watches",
    price:"",
    image:"/electronics/watch.png",
    description:"",
    category:"",
    stock:"",
    discount:"-25%"},
    {
    id:"2",
    name:"Laptops",
    price:"",
    image:"/electronics/laptop.png",
    description:"",
    category:"",
    stock:"",
  discount:"-15%"},
    {
    id:"3",
    name:"GoPro cameras",
    price:"",
    image:"/electronics/camera.png",
    description:"",
    category:"",
    stock:"",
  discount:"-40%"},
    {
    id:"4",
    name:"Headphones",
    price:"",
    image:"/electronics/headphones1.png",
    description:"",
    category:"",
    stock:"",
  discount:"-25%"},
    {
    id:"5",
    name:"Canon cameras",
    price:"",
    image:"/electronics/mobile3.png",
    description:"",
    category:"",
    stock:"",
  discount:"-25%"},
  
]
const DealsSection = () => {
  return (
    <secton className="md:mt-4 w-full ">
      <div className="md:border md:rounded-sm border-gray-200 bg-foreground flex flex-col md:flex-row ">
            {/* Left section */}
            <div className="md:w-[230px] md:h-[187px] lg:w-[250px] xl:w-[280px] xl:h-[240px] p-3 md:p-4 ">
                    <h1 className="font-semibold lg:text-lg xl:text-xl">Deals and offers</h1>
                    <h2 className="text-sm text-gray-500 ">Hygiene equipments</h2>
            </div>
             {/* right section */}
             <div className="flex overflow-x-auto w-full">
              {items.map((item) =>(
                <div key={item.id} className="min-w-[140px] md:w-1/5 h-full flex flex-col items-center border-l p-3 md:p-4  border-gray-200">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <span className= "btn-container rounded-xl mt-1 pl-2 pr-2 text-xs bg-red-200 text-red-600">{item.discount}</span>
                </div>
              ))}
             </div>
      </div>
    </secton>
  );
};

export default DealsSection;
