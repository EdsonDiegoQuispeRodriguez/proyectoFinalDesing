import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col } from "antd";

const categories = [
  { name: "Tecnología", image: "https://retemex.mx/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-15-at-12.22.41-PM.jpeg" },
  { name: "Ropa", image: "https://img.freepik.com/vector-premium/coleccion-ropa-accesorios-coloridos-dibujados-mano_1280751-95670.jpg?semt=ais_hybrid" },
  { name: "Electrodomésticos", image: "https://electroomega.com.do/wp-content/uploads/2024/01/que-electrodomesticos-se-necesitan-en-una-casa-800x800.png" },
  { name: "Juguetes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2D-StWHf2AQ1Zti1EUxa1vclT_KsJ3dxVA&s" },
  { name: "Libros", image: "https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books-esp.jpg" },
  { name: "Deportes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHewbb9KsGU_Jt0vfr6mdFOJSXnZez8xX2w&s" },
  { name: "Muebles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAgadf5UvMWN0-ciahNwEcMENa1reXlk6nA&s" },
  { name: "Belleza", image: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/social_share_1024x768_scale/public/images/article/cover/2020/01/07/productos_belleza_2020.jpg?ramen_itok=iqwQftIcTf" },
  { name: "Joyería", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bNV74J7sTkPwnh8Kw6zBafxs2ysYusO0lw&s" },
  { name: "Mascotas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dM01U0j-Ix7RfTmgJ0JwzqWJFFKJ7Djnzg&s" },
];

const StorageCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ marginBottom: "24px" }}>Selecciona una categoría</h2>
      <Row gutter={[16, 16]}>
        {categories.map((cat, index) => (
          <Col xs={24} sm={12} md={12} lg={12} key={index}>
            <Card
              hoverable
              cover={<img alt={cat.name} src={cat.image} style={{ height: "150px", objectFit: "cover" }} />}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <Card.Meta title={cat.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StorageCategories;
