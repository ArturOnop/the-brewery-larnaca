import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-[#f7f7f7] font-bold" id="footer">
      <aside className="items-center grid-flow-col justify-self-center md:justify-self-start">
        <a href="#home" className="text-lg">The Brewery Larnaca</a>
      </aside>
      <nav className="grid-flow-col md:gap-4 md:place-self-center justify-self-center md:justify-self-end">
        <a href="https://www.facebook.com/thebrewerylarnaca" target="_blank">
          <img src="../public/face.png" className="w-8 h-8"/>

        </a>
        <a href="https://www.instagram.com/thebrewery_larnaca" target="_blank">
          <img src="../public/inst.webp" className="w-9 h-9"/>
        </a>
        <a className="mt-2" href="https://www.foody.com.cy/delivery/larnaka/the-brewery-larnaca" target="_blank">
          <img src="../public/foody.png" className="w-22 h-7"/>
        </a>
        <a className="mt-1" href="https://wolt.com/en/cyp/larnaca/restaurant/the-brewery" target="_blank">
          <img src="../public/wolt.png" className="w-22 h-8"/>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
