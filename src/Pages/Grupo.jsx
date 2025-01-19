import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Dropdown, Button, Input, List, Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";

// Componente para la pantalla principal de Grupos
const Grupo = () => {
  const navigate = useNavigate();
  const grupos = [
    { nombre: "Grupo 1", miembros: 10, imagen: "https://via.placeholder.com/50" },
    { nombre: "Grupo 2", miembros: 15, imagen: "https://via.placeholder.com/50" },
    { nombre: "Grupo 3", miembros: 8, imagen: "https://via.placeholder.com/50" },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate("/crear-grupo")}>
        + Crear nuevo grupo
      </Menu.Item>
      <Menu.Item key="2" onClick={() => navigate("/unirme-grupo")}>
        Unirme a un grupo
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-screen h-screen bg-white">
      <div className="text-xl text-black flex justify-between py-3 px-5 mb-4">
        <span>Grupos</span>
        <Dropdown overlay={menu} trigger={['click']}>
          <MoreOutlined style={{ fontSize: "24px" }} />
        </Dropdown>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={grupos}
        renderItem={(grupo) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={grupo.imagen} />}
              title={grupo.nombre}
              description={`${grupo.miembros} miembros`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Grupo;
