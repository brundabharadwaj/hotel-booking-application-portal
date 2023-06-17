import React from "react";

const CardComponent = ({
  icon,
  title,
  description,
  onClick,
  style,
}: {
  icon: any;
  title: string;
  description: string;
  onClick: any;
  style: string;
}) => {
  return (
    <div
      className={`w-max h-32 flex flex-row items-center justify-around border rounded-md p-1 cursor-pointer hover:shadow-lg` + style}
      onClick={onClick}
    >
        <img className="ml-10 w-16 h-16" src={icon} alt={title} />
        <div className="flex flex-col ml-5 w-56">
          <span className="font-semibold text-2xl capitalize w-full">
            {title}
          </span>
          <p className="pt-2 w-full">{description}</p>
        </div>
    </div>
  );
};

export default CardComponent;
