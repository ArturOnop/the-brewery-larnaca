import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col relative justify-center" id="contact">
      <div className="mx-auto text-center my-8 mx-10">
        <div className="font-bold text-lg md:text-2xl text-red-600 uppercase">Find us here</div>
        <div className="mt-4 mx-2">77 Athenon Avenue, Finikoudes Promenade, Larnaca 6022, Cyprus</div>
      </div>
      <div className="mx-auto text-center mb-10 mx-10">
        <div className="font-bold text-lg md:text-2xl text-red-600 uppercase">Call us</div>
        <div className="mt-4 font-bold"><a href="tel:+3577004454">+357 7000 4454</a></div>
      </div>
      <div className="w-5/6 h-52 mx-auto">
        <iframe
          className="w-full h-full"
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20brewery%2C%20Larnaca&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          title="The brewery, Larnaca" aria-label="The brewery, Larnaca"/>
      </div>
    </div>
  );
};

export default Contact;