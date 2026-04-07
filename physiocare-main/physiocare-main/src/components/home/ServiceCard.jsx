const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="relative group rounded-xl p-[2px] overflow-hidden w-full max-w-xs">
      {/* Hover running border */}
      <div
        className="
          absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          before:absolute before:inset-[-200%]
          before:bg-[conic-gradient(from_0deg,#7FCDC2,transparent,#7FCDC2)]
          before:animate-[spin_5s_linear_infinite]
        "
      />

      {/* Card body */}
      <div className="relative z-10 bg-[#CFEFED] rounded-xl px-5 py-6 h-full">
        {/* Icon */}
        <div className="w-9 h-9 mb-4 rounded-md bg-white flex items-center justify-center">
          <img src={icon} alt="" className="w-5 h-5" />
        </div>

        <h4 className="font-medium text-gray-900 mb-2 text-sm">{title}</h4>

        <p className="text-xs text-gray-700 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
