"use client";

const Treatment = () => {
  return (
    <div id="treatment" className="absolute top-[1390px]">
      <p className="flex justify-center py-5 font-afacad text-5xl text-black">
        Management and Treatment
      </p>
      <div className="flex flex-row gap-5">
        <div className="max-w-md rounded-xl border-2 border-blue-950 bg-cyan-200 p-2 shadow-md">
          <p className="rounded-lg p-4 font-afacad text-xl text-black">
            Vitamin D Supplements: Work with your healthcare provider to find
            out if you need a vitamin supplement and how much to take, if
            needed. You can often obtain vitamin D3 supplements
            over-the-counter, but for severe deficiencies, a doctor may
            prescribe higher doses of vitamin D2.
          </p>
        </div>
        <div className="max-w-md rounded-xl border-2 border-blue-950 bg-cyan-200 p-2 shadow-md">
          <p className="rounded-lg p-4 font-afacad text-xl text-black">
            Dietary Changes:
          </p>
          <ul className="list-disc rounded-lg p-4 font-afacad text-xl text-black">
            <li>
              Vitamin D-Rich Foods: Incorporate foods like fatty fish (salmon,
              tuna, sardines), egg yolks, fortified milk, and breakfast cereals
              into your diet.{" "}
            </li>
            <li>
              Fortified Foods: Pay attention to fortified foods like milk,
              orange juice, and cereals, as they often contain added vitamin D.{" "}
            </li>
          </ul>
        </div>
        <div className="max-w-md rounded-xl border-2 border-blue-950 bg-cyan-200 p-2 shadow-md">
          <p className="rounded-lg p-4 font-afacad text-xl text-black">
            Sunlight Exposure:
          </p>
          <ul className="list-disc rounded-lg p-4 font-afacad text-xl text-black">
            <li>
              Natural Source: Sunlight is a natural source of vitamin D, as your
              skin produces vitamin D when exposed to ultraviolet B (UVB) rays.{" "}
            </li>
            <li>
              Safe Exposure: It's important to practice sun safety by using
              sunscreen and limiting exposure, especially during peak sun hours.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
