import React from "react";
import { Card, Row, Col, Tag, Button } from "antd";

const Promos = () => {
  const promos = [
    {
      title: "Descuento del 30% en tecnología",
      description: "Aplica en intercambios seleccionados de laptops, tablets y celulares.",
      image: "https://media.istockphoto.com/id/1386183544/es/foto/treinta-y-30-por-ciento-signo-rojo-brillante-del-treinta-por-ciento-aislado-sobre-blanco.jpg?s=612x612&w=0&k=20&c=6FYGzV88aAfF5oHyDCnDCCv1U8EnUe7xtnV89Eav-mE=",
      expires: "31 de enero de 2025",
      promoCode: "TECH30",
    },
    {
      title: "2x1 en juguetes educativos",
      description: "Intercambia dos juguetes y obtén el segundo gratis. Válido solo esta semana.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLl8SNkZ6b3oHkIbzWyAeH94IEZhuNZ8tJw&s",
      expires: "28 de enero de 2025",
      promoCode: "FUN2025",
    },
    {
      title: "Envío gratuito en ropa",
      description: "Promoción válida en intercambios de prendas seleccionadas. Sin mínimo de gasto.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1Bv37ntRA9jXzpXHPL_6cVA5b8dybrHI8Q&s",
      expires: "15 de febrero de 2025",
      promoCode: "FREESHIP",
    },
    {
      title: "50% de descuento en muebles",
      description: "Intercambia tus muebles y obtén el descuento en servicios de transporte.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-lh4WtaihIJEt8A72QC0mUH1AcHLExl2cg&s",
      expires: "10 de febrero de 2025",
      promoCode: "FURNITURE50",
    },
    {
      title: "Regalo sorpresa en libros",
      description: "Por cada intercambio de libros, recibirás un libro sorpresa adicional.",
      image: "https://i.ytimg.com/vi/3Y22FjwnKos/maxresdefault.jpg",
      expires: "5 de febrero de 2025",
      promoCode: "BOOKGIFT",
    },
  ];

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ marginBottom: "24px" }}>Promociones Especiales</h2>
      <Row gutter={[16, 16]}>
        {promos.map((promo, index) => (
          <Col xs={24} sm={12} md={12} lg={12} key={index}>
            <Card
              hoverable
              cover={<img alt={promo.title} src={promo.image} style={{ height: "200px", objectFit: "cover" }} />}
              style={{ borderRadius: "8px" }}
            >
              <Card.Meta
                title={promo.title}
                description={
                  <div>
                    <p style={{ marginBottom: "8px" }}>{promo.description}</p>
                    <Tag color="blue">Expira: {promo.expires}</Tag>
                    <Tag color="green">Código: {promo.promoCode}</Tag>
                  </div>
                }
              />
              <Button type="primary" style={{ marginTop: "12px" }}>
                Ver más detalles
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Promos;
