import React from "react";

const DealsSection = () => {
  return (
    <secton className="md:mt-4 w-full px-4 mb-200">
      <div className="md:border md:rounded-sm border-gray-200 bg-foreground flex flex-col md:flex-row p-3 md:p-4 gap-4">
            {/* Left section */}
            <div className="md:w-[200px] md:h-[187px] xl:w-[280px] xl:h-[257px]">
                    <h1 className="font-semibold text-xl">Deals and offers</h1>
                    <h2 className="text-sm text-gray-500 ">Hygiene equipments</h2>
            </div>
             {/* right section */}
             <div className="w-full">
              

             </div>
      </div>
    </secton>
  );
};

export default DealsSection;
