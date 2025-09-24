import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Ahmed Kamal",
    role: "Customer",
    image: "/Image/User1.webp",
    text: "The food was absolutely wonderful! Fresh, flavorful, and beautifully presented. I’ll definitely come back again.",
  },
  {
    name: "Sara Mohamed",
    role: "Food Blogger",
    image: "/Image/User2.webp",
    text: "An amazing dining experience. The staff were friendly, and every dish had a unique taste that stood out.",
  },
  {
    name: "Omar Ali",
    role: "Regular Guest",
    image: "/Image/User3.webp",
    text: "Best restaurant in town! Great atmosphere, excellent service, and the seafood pasta is a must-try.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-Assend py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          What Our Customers Say
        </h2>
        <p className="text-slate-500 mb-12">
          Real feedback from our valued guests who enjoyed their dining
          experience.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border-1 border-Blacky relative hover:scale-105 transition-transform duration-300 shadow-lg shadow-Blacky"
            >
              <FaQuoteLeft className="text-Prime text-2xl absolute -top-4 -left-3" />
              <p className="text-slate-700 mb-6 text-sm leading-relaxed">
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-900">{t.name}</h4>
                  <span className="text-slate-500 text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
