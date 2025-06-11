import React from "react";

const items = [
  {
    id: "1",
    name: "Soft chairs",
    price: "19",
    image: "/appliances/sofa.png",
    description: "T-shirts with multiple colors, for men",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "2",
    name: "Sofa & chair",
    price: "19",
    image: "/appliances/lamp.png",
    description: "Jeans shorts for men blue color",
    category: "",
    stock: "",
    discount: "-15%",
  },
  {
    id: "3",
    name: "Kitchen dishes",
    price: "19",
    image: "/appliances/matt.png",
    description: "Brown winter coat medium size",
    category: "",
    stock: "",
    discount: "-40%",
  },
  {
    id: "4",
    name: "Smart watches",
    price: "19",
    image: "/appliances/jar.png",
    description: "Jeans bag for travel for men",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "5",
    name: "Kitchen mixer",
    price: "100",
    image: "/appliances/juicer.png",
    description: "Leather wallet",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "6",
    name: "Blenders",
    price: "39",
    image: "/appliances/coffe.png",
    description: "Canon camera black, 100x zoom",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "7",
    name: "Home appliance",
    price: "19",
    image: "/appliances/rag.png",
    description: "Headset for gaming with mic",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "8",
    name: "Coffee maker",
    price: "10",
    image: "/appliances/flower.png",
    description: "Smartwatch silver color modern",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "8",
    name: "Coffee maker",
    price: "10",
    image: "/appliances/flower.png",
    description: "Blue wallet for men leather metarfial",
    category: "",
    stock: "",
    discount: "-25%",
  },
  {
    id: "8",
    name: "Coffee maker",
    price: "10",
    image: "/appliances/flower.png",
    description: "Jeans bag for travel for men",
    category: "",
    stock: "",
    discount: "-25%",
  },
];
const Recommended = () => {
  return (
    <secton className="md:mt-4 w-full ">
      {/* Heading */}
      <h1 className="font-semibold lg:text-lg xl:text-xl px-2 py-2">Recommended items</h1>
      {/* items section */}
      <div className=" md:rounded-sm border-gray-200 flex flex-col md:flex-row ">
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 p-3 md:p-0">
          {items.map((item) => (
            <a href="/listing"
              key={item.id}
              className=" flex bg-foreground  flex-col  justify-center rounded-sm border  p-2 lg:p-2 border-gray-200"
            >
              <div className=" md:pt-3 flex justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="size-20 md:size-40  object-contain "
                />
              </div>
              <div className="lg:mb-2">
                <p className="text-sm font-semibold pt-2">${item.price}</p>
                <p className="md:text-sm text-gray-500 pt-2 text-wrap">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </secton>
  );
};

export default Recommended;
