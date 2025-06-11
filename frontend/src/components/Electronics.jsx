import React from "react";

const items = [
  {
    id: "1",
    name: "Smart watches",
    price: "19",
    image: "/electronics/watch.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "2",
    name: "Cameras",
    price: "19",
    image: "/electronics/camera.png",
    description: "",
    category: "",
    stock: "",
    discount: "-15%",
  },
  {
    id: "3",
    name: "Headphones",
    price: "19",
    image: "/electronics/headphones2.png",
    description: "",
    category: "",
    stock: "",
    discount: "-40%",
  },
  {
    id: "4",
    name: "Electric kattle",
    price: "19",
    image: "/electronics/boiler.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "5",
    name: "Gaming set",
    price: "100",
    image: "/electronics/headphones1.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "6",
    name: "Laptops & PC",
    price: "39",
    image: "/electronics/laptop.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "7",
    name: "Tablets",
    price: "19",
    image: "/electronics/mobile2.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "8",
    name: "Smartphones",
    price: "10",
    image: "/electronics/mobile1.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
];
const Electronics = () => {
  return (
    <secton className="md:mt-4 w-full ">
      <a href="/listing" className="md:border md:rounded-sm border-gray-200 bg-foreground flex flex-col md:flex-row ">
        {/* Left section */}
        <div className="md:w-[230px] md:h-[220px]  lg:w-[250px] xl:w-[280px] xl:h-[257px] p-3 md:p-4 md:bg-[url('/consumer.png')] bg-cover">
          <h1 className="font-semibold lg:text-lg xl:text-xl">
            Consumer
            <br className="hidden md:block" /> electromics
          </h1>
          <button className="hidden md:block btn-container p-1 text-sm text-black mt-3 ml-3 bg-foreground">
            Source now
          </button>
        </div>
        {/* right section */}
        <div className="w-full flex overflow-x-auto  md:grid md:grid-cols-4 ">
          {items.map((item) => (
            <div
              key={item.id}
              className=" flex flex-row items-center border p-1 lg:p-2 border-gray-200 min-w-[140px]"
            >
              <div className="lg:mb-4">
                <h1 className="md:text-sm ">{item.name}</h1>
                <p className="text-xs pt-2 text-gray-500">
                  From <br />
                  USD {item.price}
                </p>
              </div>
              <div className="ml-auto md:pt-3">
                <img
                  src={item.image}
                  alt=""
                  className="size-12 lg:size-16 object-contain "
                />
              </div>
            </div>
          ))}
        </div>
      </a>
    </secton>
  );
};

export default Electronics;
