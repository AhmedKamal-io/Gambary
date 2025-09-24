import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f172a]/60 shadow-md">
      <div className="container mx-auto flex justify-between items-center pl-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={`/Image/Logo.webp`} alt="logo" width={60} height={60} />
          <h1 className="text-2xl font-bold text-[#fb6404] Bigshadow">
            Gambary
          </h1>
        </div>

        {/* Links + Button */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <div className="hidden md:flex gap-6 text-sm md:text-base text-white">
            <a href="#" className="hover:text-[#fb6404] transition">
              Locations
            </a>
            <a href="#" className="hover:text-[#fb6404] transition">
              About
            </a>
            <a href="#" className="hover:text-[#fb6404] transition">
              Contact
            </a>
            <a href="#" className="hover:text-[#fb6404] transition">
              Events
            </a>
            <a href="#" className="hover:text-[#fb6404] transition">
              Careers
            </a>
            <a href="#" className="hover:text-[#fb6404] transition">
              Language
            </a>
          </div>

          {/* Reservation Button */}
          <a
            href="#"
            className="bg-Assend text-Blacky px-4 py-2  text-sm md:text-base font-semibold shadow-md hover:bg-[#e25800] transition"
          >
            RESERVATIONS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
