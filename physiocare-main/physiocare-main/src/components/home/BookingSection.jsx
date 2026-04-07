import SectionReveal from "../layout/SectionReveal";
import BookingCard from "./BookingCard";

const BookingSection = () => {
  return (
    <section id="booking" className="bg-[#EAF8F9] py-24">
      <SectionReveal>
        <div className="max-w-6xl mx-auto px-6">
          {/* TITLE */}
          <h2 className="text-center text-2xl font-serif text-gray-800 mb-14">
            Book Your Session
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            <BookingCard
              image="/image/clinic/clinic1.jpg"
              title="Neurological Rehabilitation"
              desc="Personalized therapy programs designed to improve mobility, balance, and strength for patients recovering from neurological conditions."
            />

            <BookingCard
              image="/image/clinic/clinic2.jpeg"
              title="Manual Therapy"
              desc="Hands-on treatment techniques to relieve pain, improve joint movement, and restore muscle flexibility."
            />

            <BookingCard
              image="/image/clinic/clinic3.jpg"
              title="Sports Injury Rehabilitation"
              desc="Specialized physiotherapy to help athletes recover safely, rebuild strength, and return to peak performance."
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default BookingSection;
