"use client";

const VitaminDKit = () => {
  return (
    <div
      id="kit"
      className="absolute top-[1800px] h-[900px] w-screen bg-cyan-700"
    >
      <p className="relative top-5 flex justify-center py-2 font-afacad text-5xl text-white">
        Vitamin-D-Ficiency Kit
      </p>
      <div className="relative left-28 top-12 flex flex-row gap-5">
        <img
          src="PillDispensor.jpg"
          className="h-80 w-80 rounded-xl object-cover"
        />
        <div className="flex flex-col">
          <p className="rounded-lg p-4 font-afacad text-3xl text-white underline underline-offset-1">
            Pill/Supplement Dispensor:
          </p>
          <ul className="max-w-3xl list-disc rounded-lg p-4 font-afacad text-xl text-white">
            <li>
              Our pill/supplement dispensor aids in helping you keep track of
              what time your pills (in this case vitamin D supplements) should
              dispense on a daily basis.
            </li>
            <li>
              {" "}
              Through our interactive keypad and LCD Display, you can set and
              see the time for when you want your pills to be delivered.
            </li>
            <li>
              {" "}
              Additionally, with a stepper motor and divided sections to hold
              the pills there is full rotation capacity so your capsule of pills
              for each day can be dispensed.
            </li>
          </ul>
        </div>
      </div>
      <div className="relative left-52 top-24 flex flex-row gap-5">
        <div className="flex flex-col">
          <p className="rounded-lg p-4 font-afacad text-3xl text-white underline underline-offset-1">
            Suntime Tracker:
          </p>
          <ul className="max-w-3xl list-disc rounded-lg p-4 font-afacad text-xl text-white">
            <li>
              {" "}
              The Suntime Tracker, assists in tracking the amount of time you
              are in sunlight for optimal vitamin D levels.{" "}
            </li>
            <li>
              {" "}
              The LCD display provides a real-time of feedback (in minutes or
              seconds) of how much time you have been recieving sunlight.
            </li>
            <li>
              {" "}
              After 30 minutes (the optimal conditions of sunlight to receive),
              it will notify the user through the LCD display and active buzzer
              sound that enough sunlight has been recieved.{" "}
            </li>
          </ul>
        </div>
        <img
          src="SuntimeTracker.jpg"
          className="h-80 w-80 rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default VitaminDKit;
