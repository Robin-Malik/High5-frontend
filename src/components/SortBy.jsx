import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SortBy = () => {
    return (
        <div>
            <div className="flex items-center gap-2 justify-between">
                <div className="bg-[#CECECE] h-[1px] w-full"></div>
                <div className="xxl:w-1/5 xl:w-1/5 lg:w-[33%] md:w-1/5 sm:w-[40%] xs:w-[50%] ">
                    <p className="font-Lato text-[#7B7B7B] text-sm relative flex items-center">
                        Sort By:
                        <button className="peer font-Lato flex items-center gap-1 text-sm font-semibold pl-1">
                            Recent <span><AiFillCaretDown /></span>
                        </button>
                        <div className="hidden drop-shadow-[0px_2px_6px_#44444F1A] px-4 py-2 rounded-lg bg-white absolute top-[21px] right-[1px] peer-hover:flex hover:flex  flex-col text-end z-10">
                            <p className="text-sm font-Lato">Popular</p>
                            <p className="text-sm font-Lato">relevant</p>
                            <p className="text-sm font-Lato">Everything</p>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SortBy;
