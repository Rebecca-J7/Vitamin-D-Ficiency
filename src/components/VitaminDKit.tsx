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
      <div className="relative left-7 top-12 flex flex-row gap-5">
        <img src="hq720.jpg" className="h-80 w-80 rounded-xl object-cover" />
        <div className="flex flex-col">
          <p className="rounded-lg p-4 font-afacad text-3xl text-white underline underline-offset-1">
            Pill/Supplement Dispensor:
          </p>
          <ul className="max-w-5xl list-disc rounded-lg p-4 font-afacad text-xl text-white">
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
      </div>
      <div className="relative left-7 top-24 flex flex-row gap-5">
        <div className="flex flex-col">
          <p className="rounded-lg p-4 font-afacad text-3xl text-white underline underline-offset-1">
            Suntime:
          </p>
          <ul className="max-w-5xl list-disc rounded-lg p-4 font-afacad text-xl text-white">
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
        <img src="hq720.jpg" className="h-80 w-80 rounded-xl object-cover" />
      </div>
    </div>
  );
};

export default VitaminDKit;
