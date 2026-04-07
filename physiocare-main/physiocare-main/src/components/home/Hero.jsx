import { motion } from "framer-motion";
import { Calendar, Activity } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#F4FBFB] to-white overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#81DBDF] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Restore Movement.
            <br />
            Relieve Pain.
            <br />
            Live Better.
          </h1>

          <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-lg">
            SD PhysioCare provides personalized physiotherapy treatments
            designed to improve mobility, reduce pain, and help you return to
            your daily life with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none">
            {/* BOOK BUTTON */}
            <a
              href="#contact"
              className="
      flex items-center justify-center gap-2
      w-full sm:w-auto
      bg-[#1BA6A6] text-white
      px-6 py-3
      rounded-lg shadow-md
      hover:shadow-xl hover:scale-105
      transition
    "
            >
              <Calendar size={18} />
              Book Appointment
            </a>

            {/* SERVICES BUTTON */}
            <a
              href="#services"
              className="
      flex items-center justify-center gap-2
      w-full sm:w-auto
      border border-[#1BA6A6] text-[#1BA6A6]
      px-6 py-3
      rounded-lg
      hover:bg-[#1BA6A6] hover:text-white
      transition
    "
            >
              <Activity size={18} />
              Our Services
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center"
        >
          {/* SOFT GLOW */}
          <div className="absolute -inset-4 bg-[#81DBDF] rounded-3xl blur-2xl opacity-20"></div>

          {/* IMAGE CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full h-[420px] md:h-[520px]">
            <img
              src="/image/hero/heroImage.png"
              alt="Physiotherapy session"
              className="
    w-full h-full
    object-cover object-left
    transition-transform duration-700
    group-hover:scale-105
  "
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-6 -left-6 bg-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-sm font-semibold text-gray-800">
              1000+ Patients Treated
            </p>
            <p className="text-xs text-gray-500">Trusted Physiotherapy Care</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
