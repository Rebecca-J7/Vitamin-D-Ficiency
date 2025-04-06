"use client";
import React from "react";

type Props = {
  temperature: number;
  weatherType: string; // e.g., "Clear", "Clouds", "Rain"
};

export default function OutsideAct({ temperature, weatherType }: Props) {
  let message = "";
  let emoji = "";

  if (weatherType === "Clear" && temperature >= 60) {
    message = "It’s sunny and warm — perfect for soaking up some Vitamin D! 🌞";
    emoji = "🌞";
  } else if (weatherType === "Clouds" || temperature < 60) {
    message =
      "It might be a bit chilly or cloudy. Try getting Vitamin D from food today!";
    emoji = "☁️";
  } else if (weatherType === "Rain") {
    message =
      "Rainy day! Stay cozy indoors and boost Vitamin D with supplements or diet. 🌧️";
    emoji = "🌧️";
  } else {
    message =
      "Check conditions before heading out — your Vitamin D still matters!";
    emoji = "❔";
  }

  return (
    <div className="mx-auto mt-6 max-w-md rounded-xl bg-white p-6 text-center text-gray-800 shadow-md">
      <div className="mb-2 text-4xl">{emoji}</div>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
