import React, { FC, ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
interface IPROPS {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const Item: FC<IPROPS> = ({ children, className, href = "#" }) => {
  const [isActive, setActive] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname === href);
  }, [location]);
  return (
    <div
      className={`relative cursor-pointer flex  flex-col justify-start align-middle transition-all duration-300 p-2 my-3  mx-4 ${className}`}
    >
      <Link
        className={`flex justify-start items-center gap-5 text-sm md:text-base ${
          isActive ? "text-blue-500" : ""
        }`}
        to={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default Item;
