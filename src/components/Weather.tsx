"use client";

import { useEffect, useState } from "react";
import OutsideAct from "./OutsideAct";

const Weather = () => {
  const [temperature, setTemperature] = useState<string>("--");
  const [weatherType, setWeatherType] = useState<string>("");
  const API_KEY = "d10eacb6316aff9503f64c2b7c72c826"; // Replace with your key
  const CITY = "Riverside";
  const UNITS = "imperial"; // Fahrenheit

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`,
        );
        const data = await response.json();

        if (response.ok) {
          const temp = Math.round(data.main.temp);
          const type = data.weather[0].main;
          setTemperature(`${temp}°F`);
          setWeatherType(`${type}`);
        } else {
          console.error("API error:", data.message);
          setTemperature("N/A");
        }
      } catch (error) {
        console.error("Network error:", error);
        setTemperature("N/A");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div
      id="temperature"
      className="flex w-80 items-center justify-center rounded-2xl border-2 border-sky-950 bg-cyan-200 p-4 font-afacad text-blue-950 shadow-lg"
    >
      <div className="flex flex-col text-center">
        <div className="font-afacad text-4xl font-bold">{temperature}</div>
        <div className="font-afacad text-4xl font-bold">{weatherType}</div>
        <div className="font-afacad text-xl">
          Current Temperature in Riverside
        </div>
        {weatherType && (
          <OutsideAct
            temperature={parseInt(temperature)}
            weatherType={weatherType}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
