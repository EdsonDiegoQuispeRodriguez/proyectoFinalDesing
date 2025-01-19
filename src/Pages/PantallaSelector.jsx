import React, { useState } from "react";
import { Select, Button, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;

const PantallaSelector = ({ history }) => {
  const [city, setCity] = useState(null);
  const [age, setAge] = useState(null);
  const [preferences, setPreferences] = useState([]);

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

  const handleSelectPreference = (category) => {
    if (!preferences.includes(category)) {
      setPreferences([...preferences, category]);
    }
  };

  const handleContinue = () => {
    if (city && age && preferences.length > 0) {
      history.push("/inicio");
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-4">Completa tu información</h2>

      <div className="mb-4">
        <h3>Selecciona tu ciudad</h3>
        <Select
          placeholder="Selecciona tu ciudad"
          style={{ width: "100%" }}
          onChange={(value) => setCity(value)}
        >
          {["Lima", "Arequipa", "Trujillo", "Cusco", "Piura", "Chiclayo", "Iquitos", "Tacna", "Puno", "Huancayo"].map(
            (city) => (
              <Option key={city} value={city}>
                {city}
              </Option>
            )
          )}
        </Select>
      </div>

      <div className="mb-4">
        <h3>Selecciona tu edad</h3>
        <Select
          placeholder="Selecciona tu edad"
          style={{ width: "100%" }}
          onChange={(value) => setAge(value)}
        >
          {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
            <Option key={age} value={age}>
              {age} años
            </Option>
          ))}
        </Select>
      </div>

      <div className="mb-4">
        <h3>Selecciona tus preferencias</h3>
        <Row gutter={[8, 8]}>
          {categories.map((category) => (
            <Col span={12} key={category}>
              <Card
                hoverable
                className={preferences.includes(category) ? "bg-blue-100" : ""}
                onClick={() => handleSelectPreference(category)}
              >
                {category}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
        <Link to={"/inicio"}>
            <Button type="primary" block size="large" onClick={handleContinue}>
                CONTINUAR
            </Button>
        </Link>
    </div>
  );
};

export default PantallaSelector;
