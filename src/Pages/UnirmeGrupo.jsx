import { Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UnirmeGrupo = () => {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState("");
  
    const handleUnirseGrupo = () => {
      // Aquí puedes agregar la lógica para unirse al grupo
      navigate("/grupos");
    };
  
    return (
      <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4">Unirme a Grupo</h2>
        <Input
          placeholder="Código (AAA-AAA)"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value.toUpperCase())}
          className="mb-4"
        />
        <Button type="primary" onClick={handleUnirseGrupo}>
          Unirme al Grupo
        </Button>
      </div>
    );
  };
  
  export default UnirmeGrupo;
  