import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { List, Button, Divider } from "antd";

const mockItems = [
  {
    title: "Laptop HP",
    description: "Laptop en buen estado, ideal para trabajar.",
    state: "Usado - Buen estado",
    image: "https://m.media-amazon.com/images/I/419cAD-aGYL.jpg",
  },
  {
    title: "Televisor Samsung 42 pulgadas",
    description: "Televisor en perfecto estado. Incluye control remoto.",
    state: "Usado - Como nuevo",
    image: "https://intercompras.com/images/product/SAMSUNG_PL42C430.jpg",
  },
];

const ItemList = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate(`/add-item/${category}`);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ marginBottom: "16px" }}>Tus ítems en la categoría: {category}</h2>
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={mockItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={
                <>
                  <p>{item.description}</p>
                  <p style={{ color: "gray" }}>{item.state}</p>
                </>
              }
            />
            <img src={item.image} alt={item.title} style={{ height: "100px", objectFit: "cover" }} />
          </List.Item>
        )}
      />
      <Button type="primary" block style={{ marginTop: "16px" }} onClick={handleAddItem}>
        Agregar más ítems
      </Button>
    </div>
  );
};

export default ItemList;
