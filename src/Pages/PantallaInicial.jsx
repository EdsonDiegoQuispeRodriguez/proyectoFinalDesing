import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const PantallaInicial = ({ history }) => {
  const handleStart = () => {
    history.push("/selector");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center" style={{backgroundColor: "rgb(250, 247, 240)"}}>
      <div>
        <h1 className="text-4xl font-bold text-blue-700">Bienvenido a:</h1>
        <img src="/imgs/POSTGRADO/logo 2.0.jpg" alt="Cambia Pe"  style={{with: "100%"}}/>
      </div>
      <Link to={"/selector"}>
        <Button type="primary" size="large" onClick={handleStart}>
            EMPEZAR
        </Button>
      </Link>
    </div>
  );
};

export default PantallaInicial;
