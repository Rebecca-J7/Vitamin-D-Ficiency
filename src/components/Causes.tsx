"use client";

const Causes = () => {
  return (
    <div
      id="symptoms/causes"
      className="absolute top-[750px] h-[620px] w-screen bg-cyan-700"
    >
      <p className="flex justify-center py-5 font-afacad text-5xl text-white">
        Vitamin D Deficieny
      </p>
      <div className="flex flex-row justify-center gap-56">
        <div className="flex max-w-lg flex-col gap-2">
          <p className="font-afacad text-3xl text-white underline underline-offset-1">
            {" "}
            Causes{" "}
          </p>
          <ul className="list-disc font-afacad text-xl text-white">
            <li>
              {" "}
              Not getting enough vitamin D in your diet and/or through sunlight.
            </li>
            <li> Your body isn’t properly absorbing or using vitamin D. </li>
            <li> Medical conditions & medication side effects. </li>
          </ul>
          <p className="font-afacad text-3xl text-white underline underline-offset-1">
            {" "}
            Common Affects{" "}
          </p>
          <ul className="list-disc font-afacad text-xl text-white">
            <li>
              {" "}
              Anyone can have vitamin D deficiency, including infants, children
              and adults.
            </li>
            <li>
              {" "}
              Vitamin D deficiency may be more common in people with higher skin
              melanin content and who wear clothing with extensive skin
              coverage, .{" "}
            </li>
            <li>
              {" "}
              Vitamin D deficiency is a common global issue: About 1 billion
              people worldwide have vitamin D deficiency, while 50% of the
              population has vitamin D insufficiency.
            </li>
            <li>
              {" "}
              Approximately 35% of adults in the United States have vitamin D
              deficiency.
            </li>
          </ul>
        </div>
        <div className="flex max-w-lg flex-col gap-2">
          <p className="font-afacad text-3xl text-white underline underline-offset-1">
            {" "}
            Symptoms
          </p>
          <ul className="list-disc font-afacad text-xl text-white">
            <li> Incorrect growth patterns due to bowed or bent bones.</li>
            <li>Fatigue.</li>
            <li> Muscle weakness, aches, or cramps.</li>
            <li> Bone pain.</li>
            <li> Demforimities in joints.</li>
            <li> Mood changes, like depression.</li>
          </ul>
          <p className="font-afacad text-3xl text-white underline underline-offset-1">
            {" "}
            Long-term Risks{" "}
          </p>
          <ul className="list-disc font-afacad text-xl text-white">
            <li>
              {" "}
              May lead to a decline in calcium and phosphorus absorption by your
              intestines leads to hypocalcemia or low calcium levels in your
              blood.
            </li>
            <li>
              {" "}
              May lead to secondary hyperparathyroidism or overactive
              parathyroid glands attempting to keep blood calcium levels normal.
            </li>
            <li>
              {" "}
              May lead to osteomalacia or osteoporosis which makes soft bones
              and puts you at an increased risk for bone fractures.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Causes;
