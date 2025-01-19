import React, { useState } from "react";
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";

// Componente Comunidad
const Comunidad = ({ comunidad, onViewDetails }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-3">
        <Avatar src={comunidad.image} size={40} />
        <div className="ml-3">
          <p className="font-semibold">{comunidad.title}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-3">{comunidad.description}</p>

      {comunidad.interests && comunidad.interests.length > 0 && (
        <div className="mb-3">
          <p className="font-semibold text-sm">Intereses:</p>
          <ul className="list-disc ml-5 text-gray-700">
            {comunidad.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-around pt-2 border-t border-gray-200">
        <Link to="/inicio">
          <Button icon={<CommentOutlined />} type="link" >
            Ver Detalles
          </Button>
        </Link>
        <Button icon={<ShareAltOutlined />} type="link">
          Compartir
        </Button>
      </div>
    </div>
  );
};

// Componente Anuncio
const Anuncio = () => {
  const [filtro, setFiltro] = useState("todas");
  const navigate = useNavigate();

  const comunidades = [
    {
      id: 1,
      title: "Comunidad de intercambio tecnológico",
      description: "Únete a otros interesados en tecnología para intercambios.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEUhwNEDiM7AjMRFe_pDsQM9xo20Sd-QWJw&s",
      interests: ["Laptops", "Smartphones", "Accesorios tecnológicos"],
    },
    {
      id: 2,
      title: "Comunidad de trueques en deportes",
      description: "Encuentra intercambios deportivos locales.",
      image: "https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.jpg",
      interests: ["Bicicletas", "Equipos de camping", "Artículos deportivos"],
    },
    {
      id: 3,
      title: "Comunidad de libros",
      description: "Intercambia libros y conoce nuevos lectores.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLJUcKhHov5iK5OI05__qXox1jBLWimGayg&s",
      interests: ["Novelas", "Libros de autoayuda", "Libros académicos"],
    },
  ];

  const menu = (
    <Menu onClick={(e) => setFiltro(e.key)}>
      <Menu.Item key="todas">Todas</Menu.Item>
      <Menu.Item key="tecnologia">Tecnología</Menu.Item>
      <Menu.Item key="deportes">Deportes</Menu.Item>
      <Menu.Item key="libros">Libros</Menu.Item>
    </Menu>
  );

  const comunidadesFiltradas = comunidades.filter((comunidad) => {
    if (filtro === "todas") return true;
    if (filtro === "tecnologia") return comunidad.title.toLowerCase().includes("tecnológico");
    if (filtro === "deportes") return comunidad.title.toLowerCase().includes("deportes");
    if (filtro === "libros") return comunidad.title.toLowerCase().includes("libros");
    return false;
  });

  const handleViewDetails = (comunidad) => {
    navigate("/detalleComunidad", { state: { comunidad } });
  };

  return (
    <div className="w-screen h-screen p-4 bg-gray-100 overflow-y-auto">
      <div className="flex justify-end mb-4">
        <Dropdown overlay={menu} placement="bottomRight">
          <Button>Filtrar: {filtro}</Button>
        </Dropdown>
      </div>
      {comunidadesFiltradas.map((comunidad) => (
        <Comunidad key={comunidad.id} comunidad={comunidad} onViewDetails={handleViewDetails} />
      ))}
    </div>
  );
};

export default Anuncio;
