import ServiceCard from "./ServiceCard";
import Stats from "./Stats";
import SectionReveal from "../layout/SectionReveal";

/* ICONS */
import icon1 from "../../assets/our service icons/Component 7.svg";
import icon2 from "../../assets/our service icons/Component 7 (1).svg";
import icon3 from "../../assets/our service icons/Component 7 (2).svg";
import icon4 from "../../assets/our service icons/Component 7 (3).svg";
import icon5 from "../../assets/our service icons/Component 7 (6).svg";
import icon6 from "../../assets/our service icons/Component 7 (7).svg";

const Services = () => {
  return (
    <section id="services" className="bg-[#E6F6F4] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center text-2xl font-semibold mb-12">
          Our Services
        </h2>

        {/* SERVICES + IMAGES */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT SIDE SERVICES */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 place-items-center">
            <ServiceCard
              title="Neurological Rehab"
              desc="Therapy for stroke, MS, and other neurological conditions."
              icon={icon1}
            />
            <ServiceCard
              title="Post-Op Rehab"
              desc="Comprehensive recovery programs following orthopedic surgeries."
              icon={icon2}
            />
            <ServiceCard
              title="Pediatric Physio"
              desc="Therapy for neurological and developmental conditions."
              icon={icon3}
            />
            <ServiceCard
              title="Chronic Pain"
              desc="Long-term pain management therapeutic interventions."
              icon={icon4}
            />
            <ServiceCard
              title="Sports Injury"
              desc="Specialized care for athletes to return safely."
              icon={icon5}
            />

            {/* NEW SERVICES */}
            <ServiceCard
              title="Women’s Health Physio"
              desc="Specialized physiotherapy support for women’s health conditions."
              icon={icon1}
            />
            <ServiceCard
              title="Breastfeeding Awareness"
              desc="Guidance and therapeutic care for breastfeeding support."
              icon={icon2}
            />
            <ServiceCard
              title="Pregnancy & Lamaze Classes"
              desc="Prenatal physiotherapy and breathing techniques for delivery preparation."
              icon={icon3}
            />
            <ServiceCard
              title="Fat Reduction Therapy"
              desc="Safe slimming treatments combined with physiotherapy techniques."
              icon={icon4}
            />
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-2 auto-rows-[220px]">
            <img
              src="/image/services/Rectangle 11.jpeg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 12.jpg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 13.jpeg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 14.jpg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 15.jpg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 16.jpg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 17.jpg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
            <img
              src="/image/services/Rectangle 18.jpeg"
              className="rounded-xl w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        {/* WELLNESS SECTION */}
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-14 items-center mt-20">
            {/* IMAGE */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/image/team/profile pic.jpg"
                alt="Founder"
                className="rounded-2xl w-full max-w-[380px] shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                Dedicated to Your <br /> Physical Wellness
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in{" "}
                <span className="font-medium text-[#1BA6A6]">2025</span>, SD
                PhysioCare is built on a strong foundation of clinical
                expertise, compassionate care, and years of collaborative
                physiotherapy practice across multiple healthcare environments.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our approach focuses on personalized rehabilitation programs
                designed to restore mobility, reduce pain, and improve overall
                quality of life. We believe physiotherapy is not just about
                recovery — it’s about helping individuals move with confidence
                and live healthier every day.
              </p>

              <Stats />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Services;
