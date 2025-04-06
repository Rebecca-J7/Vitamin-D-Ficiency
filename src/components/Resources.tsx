"use client";

const Resources = () => {
  return (
    <div
      id="resources"
      className="absolute top-[3300px] h-[600px] w-screen bg-cyan-700"
    >
      <p className="flex justify-center py-5 font-afacad text-5xl text-white">
        Resources
      </p>
      <div className="relative left-20 flex flex-row gap-20">
        <div className="flex flex-col gap-1">
          <p className="py-5 font-afacad text-4xl text-white underline underline-offset-1">
            Articles
          </p>
          <ul className="max-w-2xl list-disc font-afacad text-2xl text-white underline underline-offset-1">
            <li>
              {" "}
              <a
                href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
                target="_blank"
              >
                US Department of Health - Vitamin D
              </a>
            </li>
            <li>
              <a
                href="https://my.clevelandclinic.org/health/diseases/15050-vitamin-d-vitamin-d-deficiency#overview"
                target="_blank"
              >
                Cleveland Clinic - Vitamin D Deficiency
              </a>
            </li>
            <li>
              <a
                href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials/food-sources-select-nutrients/food-sources-vitamin-d"
                target="_blank"
              >
                Dietary Guidelines For Americans - Food Sources of Vitamin D
              </a>
            </li>
            <li>
              <a
                href="https://medlineplus.gov/vitaminddeficiency.html"
                target="_blank"
              >
                National Library of Medicine - Vitamin D Deficiency
              </a>
            </li>
            <li>
              <a
                href="https://nutritionsource.hsph.harvard.edu/vitamin-d/"
                target="_blank"
              >
                Harvard School of Public Health - The Nutrition Source: Vitamin
                D
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <p className="py-5 font-afacad text-4xl text-white underline underline-offset-1">
            Reminders
          </p>
          <ul className="max-w-xl list-disc font-afacad text-2xl text-white">
            <li>
              {" "}
              Note that because ultraviolet rays can cause skin cancer, it is
              important to avoid excessive sun exposure, wear sunscreen, and in
              general, tanning beds should not be used.
            </li>
            <li>
              {" "}
              Always tell your healthcare provider about your medications and
              any supplements and/or herbs you take.
            </li>
            <li>
              {" "}
              Your provider can order a blood test to measure your levels of
              vitamin D. The most common is the 25-hydroxyvitamin D, known as
              25(OH)D for short.
            </li>
            <li>
              {" "}
              The goals of treatment and prevention for vitamin D deficiency are
              the same: to reach and then maintain an adequate vitamin D level
              in your body. Work with your healthcare provider to find out if
              you need a vitamin supplement and how much to take, if needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
