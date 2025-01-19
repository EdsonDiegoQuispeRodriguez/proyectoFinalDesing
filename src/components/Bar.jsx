import React from "react";
import { Link } from "react-router-dom";
import { TrophyOutlined, TeamOutlined, HomeOutlined, TagOutlined, ShopOutlined } from "@ant-design/icons";

const Bar = () => {
  const options = [
    { name: "Ranking", icon: <TrophyOutlined />, path: "ranking" },
    { name: "Comunidad", icon: <TeamOutlined />, path: "Anuncio" },
    { name: "Inicio", icon: <HomeOutlined />, path: "inicio" },
    { name: "Promos", icon: <TagOutlined />, path: "promos" },
    { name: "Almacén", icon: <ShopOutlined />, path: "almacen" },
  ];

  return (
    <div className="bg-white fixed bottom-0 flex w-full justify-around p-3 shadow-lg">
      {options.map((option, index) => (
        <Link
          key={index}
          to={`/${option.path}`}
          className="flex flex-col justify-center items-center text-gray-700 hover:text-blue-500"
        >
          <div className="text-xl">{option.icon}</div>
          <span className="text-sm">{option.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Bar;
