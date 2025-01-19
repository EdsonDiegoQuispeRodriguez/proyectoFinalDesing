import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Descriptions, Avatar, Rate, Button, Modal, List, Tag } from "antd";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [warehouseProducts, setWarehouseProducts] = useState([
    {
      id: 1,
      title: "Bicicleta Montaña",
      description: "Perfecta para rutas largas.",
      image: "https://www.jafibike.com.pe/wp-content/uploads/SAVA-200-gris-verde.jpg",
    },
    {
      id: 2,
      title: "Monitor Gamer",
      description: "Monitor 27 pulgadas 144Hz.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5a9iN16fr3vbn-qXtpeNG_9QM2WtwXxwUA&s",
    },
    {
      id: 3,
      title: "Consola de Videojuegos",
      description: "Consola PS4 en perfecto estado.",
      image: "https://http2.mlstatic.com/D_NQ_NP_605367-MLA32083841704_092019-O.webp",
    },
  ]);
  const [status, setStatus] = useState("Empezado"); // Estados: "Empezado", "Por confirmar", "Confirmado"

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  const addProduct = (product) => {
    if (!selectedProducts.some((item) => item.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeProduct = (id) => {
    setSelectedProducts(selectedProducts.filter((product) => product.id !== id));
  };

  const handleOfferProducts = () => {
    setStatus("Por confirmar");
  };

  if (!product) {
    return <p>No se encontró información del producto.</p>;
  }

  return (
    <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto", paddingBottom: "100px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Producto a Intercambiar</h2>

      <Card
        hoverable
        cover={<img alt={product.title} src={product.image} />}
        style={{ marginBottom: "16px" }}
      >
        <Card.Meta title={product.title} description={product.description} />
      </Card>

      <Descriptions title="Detalles del Producto" bordered column={1} style={{ marginBottom: "16px" }}>
        <Descriptions.Item label="Estado">Usado - Excelente estado</Descriptions.Item>
        <Descriptions.Item label="Intereses de intercambio">
          {Array.isArray(product.interests) && product.interests.length > 0 ? (
            product.interests.map((interest, index) => (
              <span key={index} style={{ display: "block" }}>
                - {interest}
              </span>
            ))
          ) : (
            <span>No se especificaron intereses de intercambio.</span>
          )}
        </Descriptions.Item>
      </Descriptions>

      <div style={{ marginBottom: "16px" }}>
        <h3>Productos para ofrecer:</h3>
        <div>
          {selectedProducts.map((item) => (
            <Card
              key={item.id}
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Meta
                avatar={<img src={item.image} alt={item.title} style={{ width: "50px" }} />}
                title={item.title}
                description={item.description}
              />
              <Button danger onClick={() => removeProduct(item.id)}>
                Eliminar
              </Button>
            </Card>
          ))}
        </div>
        <Button type="primary" onClick={showModal}>
          Ver mi Almacén
        </Button>
      </div>

      <Button
        type="primary"
        style={{ marginBottom: "16px" }}
        onClick={handleOfferProducts}
        disabled={selectedProducts.length === 0}
      >
        Ofrecer producto(s)
      </Button>

      <Tag
        color={status === "Empezado" ? "default" : status === "Por confirmar" ? "gold" : "green"}
        style={{ fontSize: "16px" }}
      >
        Estado: {status}
      </Tag>

      <Modal
        title="Mi Almacén"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Añadir productos"
        cancelText="Cerrar"
      >
        <List
          dataSource={warehouseProducts}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              style={{ cursor: "pointer" }}
              onClick={() => addProduct(item)}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default ProductDetails;
