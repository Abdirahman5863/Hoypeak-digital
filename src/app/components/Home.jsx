import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex h-screen  justify-center items-center bg-hero  text-[white]  bg-cover bg-no-repeat backdrop-blur">
      <div className="space-y-14 flex items-center flex-col">
        <p className="font-[300] text-[24px] leading-4 ">Effortless Business Growth</p>
        <p className=" sm:font-[600] sm:text-[50px] text-[36px] pl-6 flex flex-col justify-center  items-center"><span>
        We Generate Quote-Ready <span className="text-blue-500">Real estate </span>
        </span>
          
                <span>and <span className="text-blue-500">Construction </span>Leads for You</span> </p>
        <p className="font-[400] text-[25px] leading-4">No Heavy Lifting Required!</p>
        <div>
          <Link  href="#contact">
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-4 px-8  rounded-full font-[600] text-[25px] leading-4  hover:bg-blue-700"
          >
            Get More Leads
          </button></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
