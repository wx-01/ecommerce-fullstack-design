import React from "react";

const items = [
  {
    id: "1",
    name: "Soft chairs",
    price: "19",
    image: "/appliances/sofa.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "2",
    name: "Sofa & chair",
    price: "19",
    image: "/appliances/lamp.png",
    description: "",
    category: "",
    stock: "",
    discount: "-15%",
  },
  {
    id: "3",
    name: "Kitchen dishes",
    price: "19",
    image: "/appliances/matt.png",
    description: "",
    category: "",
    stock: "",
    discount: "-40%",
  },
  {
    id: "4",
    name: "Smart watches",
    price: "19",
    image: "/appliances/jar.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "5",
    name: "Kitchen mixer",
    price: "100",
    image: "/appliances/juicer.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "6",
    name: "Blenders",
    price: "39",
    image: "/appliances/coffe.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "7",
    name: "Home appliance",
    price: "19",
    image: "/appliances/rag.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "8",
    name: "Coffee maker",
    price: "10",
    image: "/appliances/flower.png",
    description: "",
    category: "",
    stock: "",
    discount: "-25%",
  },
];
const HomeItems = () => {
  return (
    <secton className="md:mt-4 w-full ">
      <a href="/listing" className="md:border md:rounded-sm border-gray-200 bg-foreground flex flex-col md:flex-row ">
        {/* Left section */}
        <div className="md:w-[230px] md:h-[220px] lg:w-[250px] xl:w-[280px] xl:h-[257px] p-3 md:p-4 md:bg-[url('/home.png')] bg-cover">
          <h1 className="font-semibold lg:text-lg xl:text-xl">
            Home and
            <br className="hidden md:block" /> outdoor
          </h1>
          <button className="hidden md:block btn-container p-1 text-sm text-black mt-3 ml-3 bg-foreground">
            Source now
          </button>
        </div>
        {/* right section */}
        <div className="w-full flex  md:grid md:grid-cols-4 overflow-x-auto">
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

export default HomeItems;
