import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Blacky text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Title */}
        <div>
          <div className="Flexy gap-4">
            <h2 className="text-2xl font-bold text-[#fb6404]">gambary</h2>
            <Image src={`/Image/Logo.webp`} alt="" width={80} height={80} />
          </div>
          <p className="text-slate-400 mt-3">
            Serving delicious food with passion and love. Fresh ingredients,
            authentic taste.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <a href="#" className="hover:text-Prime">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-Prime">
                Menu
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-Prime">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-Prime">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-Prime transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-Prime transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-Prime transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-Prime transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Gambary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
