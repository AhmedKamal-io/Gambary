import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg my-6">
      <div className="grid grid-cols-3 grid-rows-5 gap-8 h-[600px]">
        {/* الصورة الأولى */}
        <div className="row-span-2 relative">
          <Image
            src={`/Image/Lebanon.jpg`}
            alt="Lebanon"
            fill
            className="object-cover shadow-xl shadow-[#4d7788]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-2xl font-bold text-white">Lebanon</h2>
          </div>
        </div>

        {/* الصورة الثانية */}
        <div className="row-span-3 col-start-2 relative row-start-2">
          <Image
            src={`/Image/Egypt.webp`}
            alt="Egypt"
            fill
            className="object-cover shadow-xl shadow-[#4d7788]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-2xl font-bold text-white">Egypt</h2>
          </div>
        </div>

        {/* الصورة الثالثة */}
        <div className="row-span-2 col-start-3 row-start-1 relative">
          <Image
            src={`/Image/Dubi.webp`}
            alt="Dubai"
            fill
            className="object-cover shadow-xl shadow-[#4d7788]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-2xl font-bold text-white">Dubai</h2>
          </div>
        </div>

        {/* الصورة الرابعة */}
        <div className="row-span-2 row-start-4 relative">
          <Image
            src={`/Image/Morooco.webp`}
            alt="Morocco"
            fill
            className="object-cover shadow-xl shadow-[#4d7788]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-2xl font-bold text-white">Morocco</h2>
          </div>
        </div>

        {/* الصورة الخامسة */}
        <div className="row-span-2 col-start-3 row-start-4 relative">
          <Image
            src={`/Image/Soudi.webp`}
            alt="Saudi"
            fill
            className="object-cover shadow-xl shadow-[#4d7788]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h2 className="text-2xl font-bold text-white">Saudi Arabia</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
