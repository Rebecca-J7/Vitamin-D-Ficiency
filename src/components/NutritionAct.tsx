"use client";

import React, { useState, useEffect } from "react";

type FoodItem = {
  name: string;
  image: string;
  isVitaminD: boolean;
};

const originalFoodItems: FoodItem[] = [
  { name: "Pizza", image: "icons8-pizza-70.png", isVitaminD: false },
  { name: "Salmon", image: "icons8-salmon-70.png", isVitaminD: true },
  { name: "Eggs", image: "icons8-eggs-70.png", isVitaminD: true },
  { name: "Chocolate", image: "icons8-chocolate-69.png", isVitaminD: false },
  { name: "Mushrooms", image: "icons8-mushrooms-70.png", isVitaminD: true },
  { name: "Fortified Milk", image: "icons8-milk-70.png", isVitaminD: true },
  { name: "Ice Cream", image: "icons8-ice-cream-70.png", isVitaminD: false },
  {
    name: "Fortified Cereal",
    image: "icons8-cereal-70.png",
    isVitaminD: true,
  },
];

const NutritionAct = () => {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [foodItems, setFoodItems] = useState(originalFoodItems);

  // Shuffle function
  const shuffleArray = (array: FoodItem[]): FoodItem[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Shuffle the foodItems array on component mount
    setFoodItems(shuffleArray([...originalFoodItems]));
  }, []);

  const handleFoodSelect = (foodName: string, isVitaminD: boolean) => {
    if (!selectedFoods.includes(foodName)) {
      setSelectedFoods([...selectedFoods, foodName]);
    } else {
      setSelectedFoods(selectedFoods.filter((food) => food !== foodName));
    }
    // Give feedback based on selection
    if (isVitaminD) {
      setResult("Great! You selected a Vitamin D rich food.");
    } else {
      setResult("Hmm, this one doesn't have much Vitamin D. Try again!");
    }
  };

  return (
    <div className="space-y-3">
      <h2 className="text-center font-afacad text-3xl text-black">
        Which Foods Are High in Vitamin D?
      </h2>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2">
        {foodItems.map((food, index) => (
          <div
            key={index}
            className={`flex cursor-pointer flex-col items-center rounded-lg border-2 border-cyan-950 p-2 ${
              selectedFoods.includes(food.name)
                ? food.isVitaminD
                  ? "bg-green-200"
                  : "bg-red-200"
                : "bg-cyan-200"
            }`}
            onClick={() => handleFoodSelect(food.name, food.isVitaminD)}
          >
            <img
              src={food.image}
              alt={food.name}
              className="h-20 w-20 object-cover"
            />
            <p className="text-center font-afacad">{food.name}</p>
          </div>
        ))}
      </div>

      <div className="py-3 text-center font-afacad text-3xl font-medium text-black">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default NutritionAct;
