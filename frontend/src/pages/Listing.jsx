import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import NewsLetter from "../components/NewsLetter";
import FilterSection from "../components/FilterSection";
import {
  ChevronDownIcon,
  DividerHorizontalIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import ItemsList from "../components/ItemsList";


const categories = ["Mobile accessory", "Electronics", "Smartphones", "Clothing"];
const brands = ["Apple", "Samsung", "Sony", "LG"];
const features = ["Mettalic", "Plastic cover", "8GB Ram", "Super Power","Large Memory"];
const price = [];

const Listing = () => {
  
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkedFeatures, setCheckedFeatures] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState([]);
  
  
  return (
    <>
      <main className="pt-19 md:relative  flex flex-col items-center justify-center md:pt-27  md:ml-18 md:mr-18 lg:ml-26 lg:mr-26">
        <div className="w-full">
          {/* top */}
          <div className="w-full flex items-center justify-start py-3 text-gray-400 ">
            <h1>Home &gt; Clothings &gt; Men's Wear &gt; Summer Clothing</h1>
          </div>
          <div className="flex flex-row gap-2">
            {/* left section */}
           <div className="w-1/5">
       <Accordion.Root type="multiple">
          <Accordion.Item  value="category"  className="border-t border-t-gray-400">
            <Accordion.Header>
              <Accordion.Trigger className="flex items-center w-full justify-between">
                <span>Category</span>
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {categories.map((category) => (
                <div className="flex flex-row items-center gap-2 text-sm text-gray-500" key={category}>
                 {category} 
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

      <FilterSection
        title="Brand"
        options={brands}
        checked={checkedBrands}
        setChecked={setCheckedBrands}
      />
        <FilterSection
        title="Features"
        options={features}
        checked={checkedFeatures}
        setChecked={setCheckedFeatures}
      />
        <FilterSection
        title="Price"
        options={price}
        checked={checkedPrice}
        setChecked={setCheckedPrice}
      />
            {/* right section */}
            <div className="w-3/4">
            {/* product list */}
            <ItemsList />
            </div>
          </div>
          </div>
        </div>
      </main>
      <NewsLetter />
    </>
  );
};

export default Listing;
