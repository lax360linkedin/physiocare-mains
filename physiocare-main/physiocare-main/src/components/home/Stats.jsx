import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ target, suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [startCount, setStartCount] = useState(false);

  return (
    <motion.section
      onViewportEnter={() => setStartCount(true)}
      viewport={{ once: true }}
      className="bg-[#CFEFED] rounded-2xl shadow-lg p-8 mt-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-3xl font-semibold text-[#1BA6A6]">
            <Counter target={25} suffix="+" start={startCount} />
          </p>
          <p className="text-sm text-gray-600 mt-1">Years Experience</p>
        </div>

        <div>
          <p className="text-3xl font-semibold text-[#1BA6A6]">
            <Counter target={1000} suffix="+" start={startCount} />
          </p>
          <p className="text-sm text-gray-600 mt-1">Patients Treated</p>
        </div>

        <div>
          <p className="text-3xl font-semibold text-[#1BA6A6]">
            <Counter target={15} suffix="+" start={startCount} />
          </p>
          <p className="text-sm text-gray-600 mt-1">Therapy Programs</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
