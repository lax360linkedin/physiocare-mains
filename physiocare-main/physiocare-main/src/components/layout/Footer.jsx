import { Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1BA6A6] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">SD PhysioCare</h2>

          <p className="text-sm leading-relaxed text-white/90">
            Helping you move better, live pain-free, and regain confidence
            through expert physiotherapy and personalized care.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h3 className="font-medium">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {["home", "about", "services", "booking", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:underline capitalize">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4 text-sm">
          <h3 className="font-medium">Contact</h3>

          <a
            href="https://www.google.com/maps/place/12%C2%B055'37.5%22N+80%C2%B011'40.7%22E/@12.9270921,80.1920742,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 hover:opacity-90 transition"
          >
            <MapPin size={18} />
            <span>
              2A, Surya Nagar, Medavakkam,
              <br />
              Pallikaranai, Chennai - 600100
            </span>
          </a>

          <a
            href="tel:+919344086228"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <Phone size={18} />
            +91 93440 86228
          </a>

          <a
            href="tel:+919980808345"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <Phone size={18} />
            +91 99808 08345
          </a>

          <a
            href="mailto:sdphysiocarepallikaranai@gmail.com"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <Mail size={18} />
            sdphysiocarepallikaranai@gmail.com
          </a>

          <div className="flex items-center gap-3">
            <Clock size={18} />
            Mon–Sat: 9AM–9PM | Sun: 9AM–1PM
          </div>
        </div>

        {/* SOCIAL */}
        <div className="space-y-4">
          <h3 className="font-medium">Follow Us</h3>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/sd-physio-care-chennai-0769ba3a3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-[#1BA6A6] transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/sd_physiocare_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-[#1BA6A6] transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="mailto:sdphysiocarepallikaranai@gmail.com"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-[#1BA6A6] transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/30 text-center py-4 text-sm text-white/90">
        © {new Date().getFullYear()} SD PhysioCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
