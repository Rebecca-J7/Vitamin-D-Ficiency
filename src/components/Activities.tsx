"use client";
import Weather from "./Weather";
import NutritionAct from "./NutritionAct";

const Activities = () => {
  return (
    <div id="activities" className="absolute top-[2740px]">
      <p className="relative top-1 flex justify-center pb-10 font-afacad text-5xl text-black">
        Activities
      </p>
      <div className="flex flex-row gap-16">
        <Weather />
        <NutritionAct />
      </div>
    </div>
  );
};

export default Activities;
