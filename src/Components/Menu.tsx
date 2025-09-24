import React from "react";
import Image from "next/image";

const MenuCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="Flexy flex-col bg-WhiteyFade1 backdrop-blur-lg rounded-2xl p-3 shadow-lg shadow-Assend w-[250px] h-[382px] hover:scale-105 transition-transform duration-300">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="rounded-2xl shadow-lg shadow-Assend"
      />
      <h3 className="text-Blacky text-xl my-3">{title}</h3>
      <p className="text-center text-sm text-BlackyFade1">{description}</p>
    </div>
  );
};

const Menu = () => {
  const items = [
    {
      title: "Bashamel",
      image: "/Image/bashamel.webp",
      description: "Delicious baked pasta with creamy béchamel sauce.",
    },
    {
      title: "Cresby",
      image: "/Image/cresby.webp",
      description: "Crispy bites served with fresh herbs and spices.",
    },
    {
      title: "Pizza",
      image: "/Image/pizza.jpeg",
      description: "Classic cheesy pizza topped with fresh vegetables.",
    },
    {
      title: "Salad",
      image: "/Image/salad.webp",
      description: "Healthy salad mix with fresh veggies and dressing.",
    },
    {
      title: "Sandwich",
      image: "/Image/sandiwitsh1.webp",
      description: "Tasty sandwich filled with fresh ingredients.",
    },
    {
      title: "Sandwich",
      image: "/Image/sandiwitsh2.webp",
      description: "Another style of sandwich with special sauces.",
    },
    {
      title: "Shawy",
      image: "/Image/shawy.webp",
      description: "Grilled meat with authentic spices and flavors.",
    },
    {
      title: "Soup",
      image: "/Image/soup.webp",
      description: "Warm soup with a touch of cream and herbs.",
    },
    {
      title: "Spaggity",
      image: "/Image/spaggity.webp",
      description: "Classic spaghetti with rich tomato sauce.",
    },
    {
      title: "Tajin",
      image: "/Image/tajin.jpg",
      description: "Moroccan tajine with slow-cooked flavors.",
    },
  ];

  return (
    <section className="p-10 relative">
      <div className="min-h-screen w-full relative  bg-blue-800">
        <div
          className="absolute inset-0 z-1 rounded-2xl p-8"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #0f172a",
          }}
        />

        {/* Content */}
        <div className="Flexy flex-col p-8 z-10 ">
          <h1 className="text-5xl z-20 text-Assend Bigshadow">Menu</h1>

          {/* cards */}
          <div className="Flexy flex-wrap gap-12 mt-8 z-20">
            <div className="Flexy flex-wrap gap-10 justify-center">
              {items.map((item, index) => (
                <MenuCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={`/Image/Deep.webp`}
        alt=""
        className="object cover z-0"
        fill
      />
    </section>
  );
};

export default Menu;
