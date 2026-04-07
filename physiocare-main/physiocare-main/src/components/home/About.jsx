import SectionReveal from "../layout/SectionReveal";


const About = () => {
  return (
    <section id="about" className="bg-[#EAF8F9] py-20">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
            <p className="mt-2 text-teal-700 font-medium">
              “Evidence-Based Treatment” & <br className="sm:hidden" />
              “Personalized Care”
            </p>
          </div>

          {/* ================= TOP CONTENT ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            {/* IMAGE CARD */}
            <div className="relative max-w-lg mx-auto md:mx-0">
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-teal-500 rounded-xl"></div>
              <img
                src="/image/about.jpeg"
                alt="Physio consultation"
                className="relative rounded-xl w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="text-gray-700 leading-relaxed text-center md:text-left">
              <p>
                At Physio Care, we are dedicated to helping you move better,
                live pain-free, and regain confidence in your everyday life. Our
                expert physiotherapists provide personalized, evidence-based
                treatment designed to address the root cause of pain—not just
                the symptoms.
              </p>

              <p className="mt-4">
                Trusted by patients and guided by professional expertise, Physio
                Care is your partner in long-term recovery and better mobility.
              </p>
            </div>
          </div>

          {/* ================= BOTTOM CONTENT ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* TEXT */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-gray-900">
                SD Physio Care
              </h3>
              <p className="mt-2 text-lg font-medium text-gray-800">
                Restoring Movement. Renewing Life.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Founded by{" "}
                <span className="font-semibold text-teal-700">
                  Dr. Subhashini PT
                </span>
                , SD Physio Care is committed to delivering expert physiotherapy
                services with a strong focus on personalized treatment and
                long-term recovery.
              </p>

              <p className="mt-3 text-gray-700 leading-relaxed">
                As the{" "}
                <span className="font-semibold">
                  Founder & Chief Physiotherapist
                </span>
                , Dr. Subhashini brings professional expertise, compassionate
                care, and a patient-first approach to every treatment plan.
              </p>

              <p className="mt-4 italic text-teal-700">
                “Physiotherapy is not just treatment—it is a journey towards
                better movement and a healthier life.”
              </p>
            </div>

            {/* FOUNDER CARD */}
            <div className="flex justify-center md:justify-end">
              <div className="rounded-2xl shadow-xl p-8 max-w-lg w-full text-center bg-gradient-to-br from-teal-500 to-teal-600 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                <img
                  src="/image/profile.jpeg"
                  alt="Dr. Subhashini PT"
                  className="w-40 h-40 mx-auto rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />

                <h4 className="mt-5 text-xl font-semibold">
                  Dr. Subhashini PT
                </h4>

                <p className="mt-1 font-medium text-teal-100">
                  Founder & Chief Physiotherapist
                </p>

                <p className="mt-4 text-teal-50 text-sm leading-relaxed">
                  Evidence-based physiotherapy with a strong focus on
                  personalized care and long-term recovery, helping patients
                  regain confidence and mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default About;
