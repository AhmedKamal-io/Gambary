import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-slate-300">
              We&apos;d love to hear from you! Whether you have a question,
              feedback, or just want to say hello, feel free to reach out.
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-Prime text-xl" />
              <span>info@example.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-Prime text-xl" />
              <span>+20 123 456 7890</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-Prime text-xl" />
              <span>Cairo, Egypt</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8">
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-Prime"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-Prime"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-Prime"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-Prime py-3 rounded-lg font-semibold hover:bg-PrimeFade1 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
