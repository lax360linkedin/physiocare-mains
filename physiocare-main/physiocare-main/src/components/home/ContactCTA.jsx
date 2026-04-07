import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactCTA = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");

    const message = `Hello SD PhysioCare,
I would like to book an appointment.

Name: ${name}
Email: ${email}
Phone: ${phone}`;

    const whatsappNumber = "919344086228";

    const whatsappURL =
      "https://api.whatsapp.com/send?phone=" +
      whatsappNumber +
      "&text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setShowPopup(true);
    e.target.reset();

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className="bg-[#EAF8F9] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-serif text-gray-800 mb-6">
            Get in Touch
          </h2>

          <p className="text-[#1BA6A6] mb-8">
            Ready to start your recovery? Contact us to schedule an appointment
            or ask any questions about our treatments.
          </p>

          <div className="space-y-6 text-gray-700">
            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/place/12%C2%B055'37.5%22N+80%C2%B011'40.7%22E/@12.9270921,80.1920742,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-[#1BA6A6] transition"
            >
              <MapPin size={18} />
              <span>
                2A, Surya Nagar, Medavakkam, Pallikaranai, Chennai - 600100
              </span>
            </a>
            {/* PHONE 2 */}
            <a
              href="https://api.whatsapp.com/send?phone=919344086228&text=Hello%20SD%20PhysioCare,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#1BA6A6] transition"
            >
              <Phone size={18} />
              +91 93440 86228
            </a>

            {/* PHONE 1 */}
            <a
              href="https://api.whatsapp.com/send?phone=919980808345&text=Hello%20SD%20PhysioCare,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[#1BA6A6] transition"
            >
              <Phone size={18} />
              +91 99808 08345
            </a>

            {/* EMAIL */}
            <a
              href="mailto:sdphysiocarepallikaranai@gmail.com"
              className="flex items-center gap-3 hover:text-[#1BA6A6] transition"
            >
              <Mail size={18} />
              sdphysiocarepallikaranai@gmail.com
            </a>

            {/* HOURS */}
            <div className="flex items-center gap-3">
              <Clock size={18} />
              Mon–Sat: 9AM–9PM | Sun: 9AM–1PM
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-white
            border border-[#1BA6A6]
            p-10 rounded-2xl shadow-xl
          "
        >
          <h3 className="text-3xl font-serif text-[#1BA6A6] mb-6 text-center">
            Book Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Full name"
              required
              className="
                w-full px-4 py-3
                border border-gray-300
                rounded-md
                focus:border-[#1BA6A6]
                outline-none
              "
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="
                w-full px-4 py-3
                border border-gray-300
                rounded-md
                focus:border-[#1BA6A6]
                outline-none
              "
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              required
              className="
                w-full px-4 py-3
                border border-gray-300
                rounded-md
                focus:border-[#1BA6A6]
                outline-none
              "
            />

            <button
              className="
                w-full bg-[#1BA6A6]
                text-white py-3 rounded-full
                hover:opacity-90 transition
              "
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Message sent to WhatsApp!
        </div>
      )}
    </section>
  );
};

export default ContactCTA;
