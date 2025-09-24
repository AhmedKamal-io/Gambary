import React from "react";
import Grid from "@/Components/Grid";
const Location = () => {
  return (
    <section className="p-10 bg-gray-900 text-white text-center">
      <h1 className="text-4xl text-Assend Bigshadow">Our location</h1>
      <h2 className="text-3xl font-bold mb-6">Find Us</h2>
      <Grid />

      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.020501432881!2d31.23571131511553!3d30.044419981883664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c9f0a5e3f9%3A0x7c4c5070b4d2c5a4!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1695499123456!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
