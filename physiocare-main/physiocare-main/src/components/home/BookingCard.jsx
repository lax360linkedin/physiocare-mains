import { useState } from "react";

const BookingCard = ({ image, title, desc, day, duration, price }) => {
  const [open, setOpen] = useState(false);

  const handleBook = () => {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* CARD */}
      <div
        className="
          bg-white/40 border border-[#7FCDC2]
          rounded-md overflow-hidden w-full max-w-[320px]
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-2
        "
      >
        {/* IMAGE (VISIBLE — NO CUTTING) */}
        <div className="h-[240px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 text-[#1BA6A6]">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

          <p className="text-xs mt-2 leading-relaxed">{desc}</p>

          <div className="border-t border-[#7FCDC2] my-4"></div>

          <div className="text-xs space-y-1">
            <p>{day}</p>
            <p>{duration}</p>
            <p>{price}</p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 bg-[#1BA6A6] text-white text-xs px-4 py-2 rounded hover:opacity-90 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[320px] text-center">
            <h3 className="font-semibold text-lg mb-3">Book Session</h3>
            <p className="text-sm text-gray-600 mb-6">
              Continue to contact section to complete booking.
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleBook}
                className="px-4 py-2 bg-[#1BA6A6] text-white rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingCard;
