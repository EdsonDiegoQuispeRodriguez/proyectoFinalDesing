import React from "react";
import { Card, Row, Col, Rate } from "antd";

const Ranking = () => {
  const rankings = [
    {
      title: "iPhone 12 - 64GB",
      description: "Busco intercambiar este iPhone por un modelo más reciente o por una tablet.",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_740855-MLA45719698644_042021-F.webp",
      rating: 4.8,
      owner: "Carlos Gómez",
    },
    {
      title: "Bicicleta de montaña Trek X-Caliber",
      description: "Cambio mi bicicleta por una elíptica o una consola de videojuegos.",
      image: "https://trekperu.pe/wp-content/uploads/2024/09/xcaliber8_22_35069_a_primary-b2b67590-119b-4918-bdff-05498fd0e34d.png",
      rating: 4.7,
      owner: "María López",
    },
    {
      title: "Laptop ASUS VivoBook 15",
      description: "Laptop casi nueva. Busco intercambiarla por un monitor o un escritorio gamer.",
      image: "https://p1-ofp.static.pub//medias/26050595576_LOQ15IRX9WHBKLTLunaGreyIMG_202309261024281706028907959.png",
      rating: 4.5,
      owner: "Juan Pérez",
    },
    {
      title: "Cámara GoPro Hero 9",
      description: "Intercambio esta cámara por un dron o un estabilizador de video.",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_810015-MPE74835011517_022024-F.webp",
      rating: 4.6,
      owner: "Lucía Ramírez",
    },
    {
      title: "Televisor Samsung QLED 55''",
      description: "Televisor en excelente estado. Busco intercambiarlo por una barra de sonido de calidad.",
      image: "https://hiraoka.com.pe/media/catalog/product/2/_/2_325_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560",
      rating: 4.9,
      owner: "Roberto Castillo",
    },
  ];

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ marginBottom: "24px" }}>Ranking de Productos</h2>
      <Row gutter={[16, 16]}>
        {rankings.map((item, index) => (
          <Col xs={24} sm={12} md={12} lg={12} key={index}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} style={{ height: "200px", objectFit: "cover" }} />}
              style={{ borderRadius: "8px" }}
            >
              <Card.Meta
                title={
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{item.title}</span>
                    <Rate allowHalf disabled defaultValue={item.rating} style={{ fontSize: "14px" }} />
                  </div>
                }
                description={
                  <div>
                    <p style={{ marginBottom: "8px" }}>{item.description}</p>
                    <small>Propietario: {item.owner}</small>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Ranking;
