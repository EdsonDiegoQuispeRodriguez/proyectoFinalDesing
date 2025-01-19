import React, { useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Modal, Select } from "antd";
import Webcam from "react-webcam";

const exchangeOptions = [
  "Celular",
  "Laptop",
  "Tablet",
  "Juguetes",
  "Ropa",
  "Zapatillas",
  "Muebles",
  "Cámara",
];

const AddItem = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [interests, setInterests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [facingMode, setFacingMode] = useState("user"); // Alternar entre "user" y "environment"
  const webcamRef = useRef(null);

  // Modal de intercambio
  const handleAddInterest = () => {
    setIsModalOpen(true);
  };

  const handleModalOk = (value) => {
    setInterests([...interests, value]);
    setIsModalOpen(false);
  };

  // Guardar ítem
  const handleSave = () => {
    console.log("Ítem guardado:", form.getFieldsValue(), { interests, images });
    navigate(-1); // Volver a la pantalla anterior
  };

  // Funciones de cámara
  const handleCameraClick = () => {
    setIsCameraOpen(true);
  };

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImages) => [...prevImages, imageSrc]);
    setIsCameraOpen(false);
  }, [webcamRef]);

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2>Agregar nuevo ítem a {category}</h2>
      <Form form={form} layout="vertical" onFinish={handleSave}>
        <Form.Item label="Título" name="title" rules={[{ required: true, message: "Ingresa el título" }]}>
          <Input placeholder="Ej. Bicicleta de montaña" />
        </Form.Item>
        <Form.Item label="Descripción" name="description" rules={[{ required: true, message: "Ingresa una descripción" }]}>
          <Input.TextArea rows={4} placeholder="Describe tu ítem" />
        </Form.Item>
        <Form.Item label="Estado" name="state" rules={[{ required: true, message: "Ingresa el estado del ítem" }]}>
          <Input placeholder="Ej. Usado - Buen estado" />
        </Form.Item>
        <Form.Item label="Opciones de intercambio">
          {interests.map((interest, index) => (
            <span key={index} style={{ marginRight: "8px" }}>
              {interest}
            </span>
          ))}
          <Button type="dashed" onClick={handleAddInterest} style={{ marginLeft: "8px" }}>
            +
          </Button>
        </Form.Item>
        <Form.Item label="Fotos tomadas">
          <Button type="dashed" onClick={handleCameraClick} style={{ marginBottom: "16px" }}>
            Tomar foto
          </Button>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {images.map((image, index) => (
              <div key={index} style={{ position: "relative", width: "80px", height: "80px" }}>
                <img src={image} alt={`captured ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button
                  onClick={() => handleDeleteImage(index)}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Guardar
        </Button>
      </Form>
      {/* Modal de opciones de intercambio */}
      <Modal
        title="Seleccionar opción de intercambio"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Selecciona un ítem"
          options={exchangeOptions.map((option) => ({ value: option }))}
          onChange={handleModalOk}
        />
      </Modal>
      {/* Vista de la cámara */}
      {isCameraOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.8)", zIndex: 1000, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
            videoConstraints={{ facingMode }}
          />
          <Button onClick={toggleCamera} type="default" style={{ marginTop: "16px" }}>
            Cambiar cámara
          </Button>
          <Button onClick={capturePhoto} type="primary" style={{ marginTop: "16px" }}>
            Capturar
          </Button>
          <Button onClick={() => setIsCameraOpen(false)} style={{ marginTop: "8px" }}>
            Cerrar Cámara
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
