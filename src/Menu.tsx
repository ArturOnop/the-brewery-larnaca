import React from "react";
import MenuCard from "./components/MenuCard";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col relative justify-center my-lato" id="menu">
      <div
        className="text-white flex flex-wrap flex-row w-5/6 gap-14 z-10 my-24 mx-auto justify-center items-stretch">
        <MenuCard
          link="https://drive.google.com/file/d/1z670KTOzbdbzGNjLzbxsDTm2QBfTN6G-/view?usp=sharing"
          img="https://lh3.googleusercontent.com/pw/AP1GczN5wKJm5LuxexeAsUtcxGR9Pp35dfQbo3JJAXiU71L2AODMvQIEmxPJvmD_WKiFj_8zanlcPPjgyUY36Lc48yDn3u_7Z6S9FSnrd-ejeJ-7iK5xPDI=w2400"
          title="BRUNCH"
          description="Step into a world of indulgence and delight with our exquisite brunch experience"
        />
        <MenuCard
          link="https://drive.google.com/file/d/1vl7_GTAp-H-VrC2fzhDjM6ZU6VT8GJ3F/view?usp=sharing"
          img="https://lh3.googleusercontent.com/pw/AP1GczN3dY1qoJUrMYxn1EIF6h32zyMU22AauBDaep2OPls15h74nxspZQxfNj0s6nZlS2C8NzeiieqDOmdSE-tPkLuDXepph_eWIjFtEa14b7l3hA653dM=w2400"
          title="LUNCH"
          description="Immerse yourself in a warm and inviting ambiance while savoring an exquisite menu filled
                                with a fusion of flavors"
        />
        <MenuCard
          link="https://drive.google.com/file/d/1NJBgiogDfvOTyqOYKiEIyWhkkopGLl5X/view?usp=sharing"
          img="https://lh3.googleusercontent.com/pw/AP1GczP8_9b0YEERqsZ2Z7AumTkEZ2hHNpDWNlGKDvMhfJzbZ9zMjXHfk_FO7BsYnkNyRtFJMJPLot6c2_yMVvYZJU4utJXMebOimX79dyu4d4lmhaKioWo=w2400"
          title="ALCOHOL"
          description="Raise a glass to good times and great company with our carefully curated beer and spirits menu"
        />
        <MenuCard
          link="https://drive.google.com/file/d/1i2D4Was4XiwKO_Txpx9vDx_RXGRcnd2K/view?usp=sharing"
          img="https://lh3.googleusercontent.com/pw/AP1GczNB1I8OFYdsb75hcB4IB0lPv3dIf4vX8fRY2Mrz0xI6CvSHjjADIILt-VZjSd5XdC3xIst82FnSvs7ViHNRk04uEw7ZaLus3YPYjgRBN8yMyj_vmt4=w2400"
          title="DRINKS"
          description="Experience the perfect balance of sweetness and refreshment with our desserts and drinks"
        />
      </div>
    </div>
  );
};

export default Menu;