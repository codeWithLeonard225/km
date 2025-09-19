const services = [
  {
    name: "Branding",
    img: "/images/branding.jpg",
    desc: "We help businesses build strong and lasting brand identities."
  },
  {
    name: "Content Production",
    img: "/images/content.jpg",
    desc: "Engaging and creative content that connects with your audience."
  },
  {
    name: "Professional Graphics Design",
    img: "/images/design.jpg",
    desc: "Stunning designs to visually communicate your brand’s message."
  },
  {
    name: "Digital Marketing",
    img: "/images/marketing.jpg",
    desc: "Targeted campaigns that boost your visibility and growth."
  },
  {
    name: "Professional Printing",
    img: "/images/printing.jpg",
    desc: "High-quality printing services for all your business needs."
  },
  {
    name: "TV Commercials",
    img: "/images/tv.jpg",
    desc: "Creative TV ads that capture attention and deliver results."
  },
  {
    name: "Audio Recording",
    img: "/images/audio.jpg",
    desc: "Crystal-clear audio production for any type of project."
  },
  {
    name: "Show Biz",
    img: "/images/showbiz.jpg",
    desc: "Entertainment solutions that keep audiences engaged."
  },
  {
    name: "Event Coverage",
    img: "/images/event.jpg",
    desc: "Professional coverage for your important events."
  },
  {
    name: "Documentary",
    img: "/images/documentary.jpg",
    desc: "Compelling documentaries that tell powerful stories."
  },
  {
    name: "Event Planning",
    img: "/images/planning.jpg",
    desc: "Seamless event planning for unforgettable experiences."
  },
  {
    name: "Media Consultancy",
    img: "/images/consultancy.jpg",
    desc: "Expert advice to improve your media strategy."
  },
  {
    name: "Talent Management",
    img: "/images/talent.jpg",
    desc: "Managing and growing talent to their full potential."
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          At <span className="font-semibold">Kreative Multimedia</span>, we add value to our clients’ brands by delivering
          innovative solutions that transform businesses and drive growth.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
