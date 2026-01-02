import React, { useState, useEffect } from 'react';
import {
  Menu, X, Instagram, Facebook, Linkedin, Mail,
  Phone, MapPin, ArrowRight, Star, Calendar,
  CheckCircle, ChevronRight, Clock, Shield
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={setCurrentPage} />;
      case 'portfolio': return <PortfolioPage />;
      case 'booking': return <BookingPage />;
      case 'testimonials': return <TestimonialsPage />;
      default: return <HomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans text-stone-800 bg-stone-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <div className="w-10 h-10 bg-stone-900 flex items-center justify-center mr-3">
                <span className="text-white font-serif text-xl italic">G</span>
              </div>
              <span className="font-serif text-2xl tracking-widest text-stone-900">GHARWALLAA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink label="Home" active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
              <NavLink label="Portfolio" active={currentPage === 'portfolio'} onClick={() => setCurrentPage('portfolio')} />
              <NavLink label="Testimonials" active={currentPage === 'testimonials'} onClick={() => setCurrentPage('testimonials')} />
              <button
                onClick={() => setCurrentPage('booking')}
                className="bg-stone-900 text-white px-6 py-2.5 hover:bg-stone-700 transition-all duration-300 text-sm tracking-wide"
              >
                BOOK CONSULTATION
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-800 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <MobileNavLink label="Home" onClick={() => setCurrentPage('home')} />
              <MobileNavLink label="Portfolio" onClick={() => setCurrentPage('portfolio')} />
              <MobileNavLink label="Testimonials" onClick={() => setCurrentPage('testimonials')} />
              <MobileNavLink label="Book Appointment" onClick={() => setCurrentPage('booking')} isButton />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white flex items-center justify-center mr-2">
                  <span className="text-stone-900 font-serif text-lg italic">G</span>
                </div>
                <span className="font-serif text-xl tracking-widest text-white">GHARWALLAA</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Transforming spaces into living art. We specialize in minimalist luxury and functional beauty for residential and commercial properties.
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
              </div>
            </div>

            <div>
              <h4 className="text-white font-serif tracking-widest mb-6">EXPLORE</h4>
              <ul className="space-y-3 text-sm">
                <FooterLink label="Our Story" />
                <FooterLink label="Services" />
                <FooterLink label="Portfolio" onClick={() => setCurrentPage('portfolio')} />
                <FooterLink label="Careers" />
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif tracking-widest mb-6">SERVICES</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition-colors">Residential Design</li>
                <li className="hover:text-white transition-colors">Commercial Renovation</li>
                <li className="hover:text-white transition-colors">Space Planning</li>
                <li className="hover:text-white transition-colors">Furniture Sourcing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif tracking-widest mb-6">CONTACT</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" />
                  <span>3075 Road No 2 MIG Phase 2,<br />BHEL, Hyderabad - 502032</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0" />
                  <span>hello@gharwallaa.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2024 Gharwallaa Interiors. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Page Components ---

const HomePage = ({ navigate }) => (
  <>
    {/* Hero Section */}
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Elevate Your Living Space
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto opacity-90">
          Award-winning interior design focusing on sustainable luxury and timeless aesthetics.
        </p>
        <button
          onClick={() => navigate('portfolio')}
          className="bg-white text-stone-900 px-8 py-4 hover:bg-stone-100 transition-colors font-medium tracking-wide"
        >
          VIEW OUR WORK
        </button>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-stone-500 tracking-widest text-sm font-semibold mb-4 block">WHO WE ARE</span>
          <h2 className="font-serif text-4xl mb-6 text-stone-900">Designing spaces that tell your unique story.</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            At Gharwallaa, we believe that your home should be a reflection of who you are. Our team of expert designers works closely with you to create environments that are not only visually stunning but also deeply personal and functional.
          </p>
          <div className="flex space-x-8 mt-8">
            <Stat number="150+" label="Projects Done" />
            <Stat number="12" label="Years Exp." />
            <Stat number="100%" label="Satisfaction" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-sm mt-8"
            alt="Detail 1"
          />
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-sm"
            alt="Detail 2"
          />
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="bg-stone-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-stone-900">Our Expertise</h2>
          <div className="h-1 w-20 bg-stone-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Residential Design"
            desc="Full-service design for homes, from concept to final styling."
            icon={<Shield size={24} />}
          />
          <ServiceCard
            title="Commercial Spaces"
            desc="Creating productive and inspiring environments for businesses."
            icon={<MapPin size={24} />}
          />
          <ServiceCard
            title="Renovation Planning"
            desc="Structural changes and spatial planning for major overhauls."
            icon={<CheckCircle size={24} />}
          />
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-24 px-4 bg-stone-900 text-white text-center">
      <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to transform your space?</h2>
      <p className="text-stone-400 mb-10 max-w-xl mx-auto">
        Book a consultation today and let's start the journey to your dream interior.
      </p>
      <button
        onClick={() => navigate('booking')}
        className="border border-white text-white px-8 py-3 hover:bg-white hover:text-stone-900 transition-all duration-300"
      >
        BOOK AN APPOINTMENT
      </button>
    </section>
  </>
);

const PortfolioPage = () => {
  const projects = [
    { id: 1, title: "Modern Loft", category: "Residential", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Coastal Villa", category: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Urban Office", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Minimalist Kitchen", category: "Renovation", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Scandinavian Living", category: "Residential", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Luxury Bath", category: "Renovation", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Selected Works</h1>
        <p className="text-stone-500 max-w-2xl mx-auto">
          A curation of our finest projects, showcasing a diversity of styles and creative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-all duration-300 flex items-center justify-center">
              <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white font-serif text-2xl mb-2">{project.title}</h3>
                <span className="text-stone-300 text-sm uppercase tracking-wider">{project.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const testimonials = [
    { id: 1, name: "Sarah Jenkins", role: "Homeowner", text: "Gharwallaa completely transformed our outdated living room into a modern sanctuary. The attention to detail was incredible." },
    { id: 2, name: "Michael Ross", role: "CEO, TechStart", text: "We hired them for our office renovation. They balanced functionality with style perfectly. Our productivity has actually increased!" },
    { id: 3, name: "Elena Rodriguez", role: "Apartment Owner", text: "I have a small space and didn't know how to make it work. Their team found storage solutions I never dreamed of." }
  ];

  return (
    <div className="bg-stone-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-stone-500 tracking-widest text-sm font-semibold mb-4 block">TESTIMONIALS</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Client Stories</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-10 shadow-sm border border-stone-100 flex flex-col">
              <div className="text-stone-300 mb-6">
                <Star size={24} fill="currentColor" className="inline-block" />
                <Star size={24} fill="currentColor" className="inline-block" />
                <Star size={24} fill="currentColor" className="inline-block" />
                <Star size={24} fill="currentColor" className="inline-block" />
                <Star size={24} fill="currentColor" className="inline-block" />
              </div>
              <p className="text-stone-600 italic mb-8 flex-grow leading-relaxed">"{t.text}"</p>
              <div className="border-t border-stone-100 pt-6">
                <h4 className="font-serif text-lg text-stone-900">{t.name}</h4>
                <span className="text-stone-400 text-sm uppercase tracking-wide">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg bg-white p-12 shadow-lg border-t-4 border-green-500">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="font-serif text-3xl mb-4">Request Received!</h2>
          <p className="text-stone-600 mb-8">
            Thank you for reaching out. Our team will review your request and get back to you within 24 hours to confirm your appointment.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-stone-900 border-b border-stone-900 pb-1 hover:opacity-70 transition-opacity"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-stone-500 tracking-widest text-sm font-semibold mb-4 block">CONTACT US</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900 leading-tight">Let's discuss your next project.</h1>
          <p className="text-stone-600 mb-10 leading-relaxed">
            Fill out the form to schedule a complimentary 30-minute discovery call. We'll discuss your vision, budget, and timeline to see if we're a good match.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-stone-100 p-3 rounded-full mr-4">
                <Clock className="text-stone-700" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900">Office Hours</h4>
                <p className="text-stone-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-stone-100 p-3 rounded-full mr-4">
                <Mail className="text-stone-700" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-stone-900">Email</h4>
                <p className="text-stone-500 text-sm">consultations@gharwallaa.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 shadow-lg border border-stone-100">
          <h3 className="font-serif text-2xl mb-6">Book an Appointment</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">First Name</label>
                <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-stone-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Last Name</label>
                <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-stone-500 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Email Address</label>
              <input required type="email" className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-stone-500 transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Project Type</label>
                <select className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-stone-500 transition-colors">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Preferred Date</label>
                <input type="date" className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-stone-500 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Tell us about your project</label>
              <textarea rows="4" className="w-full bg-stone-50 border border-stone-200 p-3 focus:outline-none focus:border-stone-500 transition-colors"></textarea>
            </div>

            <button type="submit" className="w-full bg-stone-900 text-white py-4 hover:bg-stone-700 transition-colors tracking-widest text-sm uppercase font-semibold">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---

const NavLink = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-sm tracking-wide transition-colors ${active ? 'text-stone-900 font-semibold' : 'text-stone-500 hover:text-stone-900'}`}
  >
    {label}
  </button>
);

const MobileNavLink = ({ label, onClick, isButton }) => (
  <button
    onClick={onClick}
    className={`block w-full text-left px-4 py-3 text-lg font-medium border-b border-stone-50 ${isButton ? 'bg-stone-900 text-white mt-4 text-center border-none' : 'text-stone-800 hover:bg-stone-50'}`}
  >
    {label}
  </button>
);

const FooterLink = ({ label, onClick }) => (
  <li
    onClick={onClick}
    className="hover:text-white transition-colors cursor-pointer"
  >
    {label}
  </li>
);

const SocialIcon = ({ icon }) => (
  <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all cursor-pointer">
    {icon}
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <h3 className="text-3xl font-serif text-stone-900">{number}</h3>
    <p className="text-stone-500 text-xs uppercase tracking-wider mt-1">{label}</p>
  </div>
);

const ServiceCard = ({ title, desc, icon }) => (
  <div className="bg-white p-8 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group">
    <div className="text-stone-400 group-hover:text-stone-900 transition-colors mb-6">
      {icon}
    </div>
    <h3 className="font-serif text-xl mb-3 text-stone-900">{title}</h3>
    <p className="text-stone-500 leading-relaxed text-sm">{desc}</p>
    <div className="mt-6 flex items-center text-stone-900 text-sm font-medium cursor-pointer group-hover:underline">
      Learn More <ChevronRight size={16} className="ml-1" />
    </div>
  </div>
);

export default App;
