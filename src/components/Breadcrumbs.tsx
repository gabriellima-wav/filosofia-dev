import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="font-inter p-4">
      <ol className="breadcrumb flex space-x-2">
        <li>
          <Link to="/" className="text-black hover:text-emerald-800">
            Início
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {index === pathnames.length - 1 ? (
                <span>{value}</span>
              ) : (
                <Link to={path} className="text-black hover:text-emerald-800">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
