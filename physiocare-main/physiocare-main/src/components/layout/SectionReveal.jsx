import { motion } from "framer-motion";

const SectionReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
