import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Button, Carousel, Tag, Card } from "antd";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const categories = [
  "Tecnología",
  "Ropa",
  "Electrodomésticos",
  "Juguetes",
  "Libros",
  "Deportes",
  "Muebles",
  "Belleza",
  "Joyería",
  "Mascotas",
];

const sampleContent = {
    rankings: [
      {
        title: "Laptop usada - Modelo HP",
        description: "Busco cambiar esta laptop por una tablet.",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_762896-MPE47608448806_092021-T.webp",
        interests: ["Tablet", "Monitor", "Teléfono"],
      },
      {
        title: "Cámara digital Canon",
        description: "Cambio cámara Canon con accesorios por celular.",
        image: "https://i1.adis.ws/i/canon/powershot-g7-x-mark-iii-frt_800x800_51bd55c6-758d-11e9-8f40-f8b156c1dc4d_51bd55c0-758d-11e9-a137-f8b156c1dc4d?w=800&h=800",
        interests: ["Celular", "Lentes fotográficos", "Drone"],
      },
      {
        title: "Televisor Smart 42 pulgadas",
        description: "Intercambio televisor por consola de videojuegos.",
        image: "https://oechsle.vteximg.com.br/arquivos/ids/16139290-1000-1000/image-c7dbcb10c1624d68958e18d8efd7bf4b.jpg?v=638298265935230000",
        interests: ["Consola de videojuegos", "Proyector", "Home Theater"],
      },
    ],
    comunidades: [
      {
        title: "Comunidad de intercambio tecnológico",
        description: "Únete a otros interesados en tecnología para intercambios.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEUhwNEDiM7AjMRFe_pDsQM9xo20Sd-QWJw&s",
        interests: ["Laptops", "Smartphones", "Accesorios tecnológicos"],
      },
      {
        title: "Comunidad de trueques en deportes",
        description: "Encuentra intercambios deportivos locales.",
        image: "https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.jpg",
        interests: ["Bicicletas", "Equipos de camping", "Artículos deportivos"],
      },
      {
        title: "Comunidad de libros",
        description: "Intercambia libros y conoce nuevos lectores.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLJUcKhHov5iK5OI05__qXox1jBLWimGayg&s",
        interests: ["Novelas", "Libros de autoayuda", "Libros académicos"],
      },
    ],
    promos: [
      {
        title: "Descuento del 50% en tecnología",
        description: "Aplica en intercambios seleccionados.",
        image: "https://previews.123rf.com/images/icreative3d/icreative3d1607/icreative3d160700061/59249246-descuento-del-50-por-ciento-de-descuento-ilustraci%C3%B3n-3d-sobre-fondo-blanco.jpg",
        interests: ["Tablets", "Accesorios electrónicos", "Monitores"],
      },
      {
        title: "Promoción de juguetes",
        description: "Intercambia y obtén un juguete extra gratis.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWQjEnWhxIaNxg3CihY0epcWNXyBhn65tpg&s",
        interests: ["Juguetes educativos", "Juegos de mesa", "Figuras de acción"],
      },
      {
        title: "Trueques con envío gratuito",
        description: "Promoción válida por tiempo limitado.",
        image: "https://media.licdn.com/dms/image/v2/C5612AQHVezFVcdhJpg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1590792575313?e=2147483647&v=beta&t=8t_AYcjAdXiiIUIIfdVuli2AFp_3UW8eaiICq1hf4i0",
        interests: ["Artículos para el hogar", "Ropa", "Electrodomésticos"],
      },
    ],
  };
  

const Inicio = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/perfil">Mi Perfil</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Configuración
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        Cerrar Sesión
      </Menu.Item>
    </Menu>
  );

  const renderCarousel = (title, content) => (
    <div style={{ marginBottom: "32px", position: "relative" }}>
      <h3 style={{ marginBottom: "16px" }}>{title}</h3>
      <Carousel autoplay dots style={{ padding: "0 16px" }}>
        {content.map((item, index) => (
          <div key={index} style={{ padding: "0 16px" }}>
            <Link to="/producto-detalle" state={{ product: item }}>
                <Card
                    hoverable
                    style={{
                        margin: "0 auto",
                        width: "90%", // Ancho relativo para vistas móviles
                        maxWidth: "300px",
                    }}
                    cover={
                        <div
                        style={{
                            width: "100%",
                            height: "200px", // Altura fija
                            overflow: "hidden",
                        }}
                        >
                        <img
                            alt={item.title}
                            src={item.image}
                            style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // Ajusta la imagen para llenar el contenedor
                            }}
                        />
                        </div>
                    }
                    >
                    <Card.Meta title={item.title} description={item.description} />
                </Card>
            </Link>
          </div>
        ))}
      </Carousel>
      <Button
        type="link"
        className="view-all"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        Ver todo
      </Button>
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} trigger={null} width={200} style={{ display: collapsed ? "none" : "block" }}>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            { label: "Opción 1", key: "1" },
            { label: "Opción 2", key: "2" },
            { label: "Opción 3", key: "3" },
            { label: "Opción 4", key: "4" },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={toggleMenu} />
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Avatar size="large" icon={<UserOutlined />} className="cursor-pointer" />
          </Dropdown>
        </Header>
        <Content style={{ padding: "16px", paddingBottom: "80px" }}>
          <div className="category-list" style={{ overflowX: "auto", whiteSpace: "nowrap", marginBottom: "16px" }}>
            {categories.map((category) => (
              <Tag
                key={category}
                color={selectedCategories.includes(category) ? "blue" : "default"}
                style={{ cursor: "pointer", marginRight: "8px" }}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </Tag>
            ))}
          </div>

          <div className="carousel-section">
            {renderCarousel("Rankings", sampleContent.rankings)}
            {renderCarousel("Comunidades", sampleContent.comunidades)}
            {renderCarousel("Promos", sampleContent.promos)}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Inicio;
