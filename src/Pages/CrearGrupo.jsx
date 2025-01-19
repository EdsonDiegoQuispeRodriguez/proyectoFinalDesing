import { Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearGrupo = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
  
    const handleCrearGrupo = () => {
      // Aquí puedes agregar la lógica para crear el grupo
      navigate("/grupos");
    };
  
    return (
      <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4">Crear Grupo</h2>
        <Input
          placeholder="Nombre del grupo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mb-4"
        />
        <Button type="primary" onClick={handleCrearGrupo}>
          Crear Grupo
        </Button>
      </div>
    );
  };
  
  export default CrearGrupo;
  