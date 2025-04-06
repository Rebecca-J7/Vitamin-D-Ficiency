"use client";

const About = () => {
  return (
    <div id="overview" className="absolute top-[300px] space-y-10">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-2">
          <p className="py-3 font-afacad text-5xl text-black">
            What is Vitamin D?
          </p>
          <div className="max-w-xl rounded-xl border-2 border-blue-950 bg-cyan-200 p-4 shadow-md">
            <p className="rounded-lg p-4 font-afacad text-2xl text-black">
              Vitamin D is an essential vitamin that your body uses for normal
              bone development and maintenance. Vitamin D also plays a role in
              your nervous system, musculoskeletal system and immune system.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="py-3 font-afacad text-5xl text-black">
            Why is Vitamin D important?
          </p>
          <div className="max-w-xl rounded-xl border-2 border-blue-950 bg-cyan-200 p-4 shadow-md">
            <p className="rounded-lg p-4 font-afacad text-2xl text-black">
              Vitamin D is one of many vitamins your body needs to stay healthy.
              It plays a crucial role in maintaining the balance of calcium in
              your blood and bones and in building and maintaining bones. More
              specifically, you need vitamin D so your body can use calcium and
              phosphorus to build bones and support healthy tissues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
