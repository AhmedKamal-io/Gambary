import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <section className="GStory Flexy flex-col gap-9 w-full p-15 rounded-t-[20%] mt-10 text-center text-white border-t-5 border-black">
      <h1 className="text-lg text-Assend Bigshadow">our story</h1>
      <h2 className="text-6xl text-Assend Bigshadow">Begins At Sea</h2>
      <div className="Flexy gap-6 my-4">
        <Image
          className="rounded-2xl Bigshadow w-1/2"
          src={"/Image/Fishing.jpg"}
          alt=""
          width={500}
          height={500}
        />
        <div className="Flexy w-1/2 flex-col gap-6">
          <p className="text-xl  Bigshadow">
            At sunrise, skilled fishermen set out to sea, casting their nets
            into the clear waters. With patience and care, they harvest fresh
            shrimp, ensuring each catch is handled with respect for the ocean
          </p>
          <a href="" className="p-4 rounded-full bg-[#fb6404] text-xl">
            Show Locations
          </a>
        </div>
      </div>
      <div className="Flexy gap-6 my-2">
        <div className="Flexy w-1/2 flex-col gap-6">
          <p className="text-xl  Bigshadow">
            The shrimp are quickly sorted and placed on ice to keep their
            natural freshness. From the boat, they travel directly to trusted
            suppliers, where every detail of storage and quality is carefully
            maintained.
          </p>
          <a href="" className="p-4 rounded-full bg-[#fb6404] text-xl">
            Join Events
          </a>
        </div>
        <Image
          className="rounded-2xl Bigshadow w-1/2"
          src={"/Image/net.jpg"}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="Flexy gap-6 text-xl my-5">
        <Image
          className="rounded-2xl Bigshadow w-1/2"
          src={"/Image/Freazing.webp"}
          alt=""
          width={500}
          height={500}
        />
        <div className="w-1/2 Flexy flex-col">
          <p className=" Bigshadow">
            Once delivered to the kitchen, the shrimp are inspected again by
            chefs who value freshness above all. Every piece is chosen with
            precision to guarantee only the best reaches the preparation table.
          </p>
          <a href="" className="p-4 rounded-full bg-[#fb6404] text-xl">
            get menu
          </a>
        </div>
      </div>
      <div className="Flexy gap-6 my-4">
        <div className="Flexy w-1/2 flex-col gap-6">
          <p className="text-xl  Bigshadow ">
            Finally, the shrimp are transformed into flavorful dishes, crafted
            with passion and creativity. From sea to plate, every step of the
            journey brings authentic taste and unforgettable dining moments.
          </p>
          <a href="" className="p-4 rounded-full bg-[#fb6404] text-xl">
            Contact Us
          </a>
        </div>
        <Image
          src={"/Image/raw.jpg"}
          alt=""
          width={500}
          height={500}
          className="rounded-2xl Bigshadow w-1/2"
        />
      </div>

      <div className="text-center my-10 Flexy flex-col gap-5 border-b-1 border-Assend">
        <Image
          src={"/Image/maqly.webp"}
          alt=""
          width={500}
          height={500}
          className="rounded-full ring-2 ring-Assend ring-offset-8 outline-8 outline-transparent Bigshadow "
        />
        <h2 className="text-4xl text-Assend Bigshadow my-5">
          Simplicity is our tradition
        </h2>
      </div>
    </section>
  );
};

export default Story;
