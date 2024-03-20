import React from "react";

const About = () => {
  return (
    <div className="min-h-screen grid gap-0 grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 text-center"
         id="about">
      <div>
        <img className="object-cover h-full"
             src="https://lh3.googleusercontent.com/pw/AP1GczNnofqnfJqgdj61338XJdRMVWUZWfULdfoyTBlkNj7x0z620_gCKgUsQnRU4Q50BguEGmp2rrbTTk9I1c-NeXMUJv1UL80I4WAFXEHEqwI0gqQUHVY=w2400"/>
      </div>
      <div className="bg-stone-500 flex flex-col text-[#f7f7f7] items-center">
        <div className="text-4xl mt-20 mx-4 my-cursive">
          A Journey Full
          <br/>
          <span className="text-red-200 tracking-wider">Of Tastes</span>
        </div>
        <div className="text-lg my-10 mx-10 my-lato">
          With 13 years of presence in the most iconic street of Larnaca, The Brewery continues to gain the
          impressions due to the quality of its services and its range of products.
        </div>
      </div>
      <div className="bg-blue-900 flex flex-col text-[#f7f7f7] items-center">
        <div className="text-4xl mt-20 mx-4 my-cursive">
          Unique Concept
          <br/>
          <span className="text-red-200 tracking-wider">Unique Flavours</span>
        </div>
        <div className="text-lg my-10 mx-10 my-lato">
          The Brewery has recently changed its exterior space and brought a new and fresh air to the coastal
          front of Phinikoudes. With a unique concept and beautiful furnishings combined with wood and green
          plants, The Brewery in Larnaca reminds nothing of its previous version.
        </div>
      </div>
      <div>
        <img className="object-cover h-full"
             src="https://lh3.googleusercontent.com/pw/AP1GczPaeYRp36oA7U7tYvHmB5gOoYBlM7WS-8P87fwrswUR2qZt9RW_lhVvIK5ut9uLgFKOYilP2_1pukEoSoQdRFBa58pyEQ_ZCf3nop72EogWcw9bCqw=w2400"/>
      </div>
    </div>
  );
};

export default About;