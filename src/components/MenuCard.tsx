import React from "react";

interface MenuCardProps {
  link: string,
  img: string,
  title: string,
  description: string
}

const MenuCard: React.FC<MenuCardProps> = ({link, img, title, description}) => {
  return (
    <a href={link} target="_blank">
      <div className="flex card max-w-80 h-80 bg-base-100 shadow-xl image-full h-full">
        <figure><img className="h-full w-full" src={img} alt="Menu"/></figure>
        <div className="card-body h-fit self-center">
          <h2 className="card-title mx-auto text-stone-200">{title}</h2>
          <p className="text-center mt-2 text-stone-200">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default MenuCard;