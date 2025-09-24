import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <section className="relative h-screen w-full">
      <Image src="/Image/Sea.webp" alt="Sea" fill className="object-cover" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <Image
          src="/Image/Live1.webp"
          alt="Shrimp"
          width={350}
          height={350}
          className="rounded-2xl shadow-2xl border-2 border-Assend"
        />
        <h1 className="uppercase text-4xl text-nowrap  text-Assend Bigshadow ">
          taste through Simplicity
        </h1>
        <a
          href=""
          className="p-2 border-1 border-Blacky shadow-xl shadow-Blacky rounded-full bg-[#fb6404] text-xl"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Home;
