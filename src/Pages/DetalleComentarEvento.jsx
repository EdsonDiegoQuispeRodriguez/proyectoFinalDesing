import React from "react";
import { Avatar, Button, Input, List } from "antd";
import { CameraOutlined, PictureOutlined, LikeOutlined, SendOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const { TextArea } = Input;

const DetalleComentarEvento = () => {
    const location = useLocation();
    const noticia = location.state?.noticia;

    if (!noticia) {
        return <p>No se encontró la noticia seleccionada.</p>;
    }

    return (
        <div className="w-screen h-screen p-4 bg-gray-100 overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold mb-2">{noticia.descripcion}</h2>

            <div className="grid grid-cols-2 gap-2 mb-3">
            {noticia.fotos.map((foto, index) => (
                <img key={index} src={foto} alt="Detalle de Noticia" className="w-full h-auto rounded-md" />
            ))}
            </div>

            <p><strong>Publicado por:</strong> {noticia.usuarioNombre}</p>
            <p><strong>Fecha:</strong> {new Date(noticia.fecha).toLocaleString()}</p>
            <p><strong>Ubicación:</strong> {`${noticia.ubicacion.departamento}, ${noticia.ubicacion.pais}`}</p>
            <p><strong>Coordenadas:</strong> {`${noticia.ubicacion.latitud}, ${noticia.ubicacion.longitud}`}</p>
            <Button type="link" onClick={() => window.open(`https://www.google.com/maps?q=${noticia.ubicacion.latitud},${noticia.ubicacion.longitud}`, "_blank")}>
            Ver en el mapa
            </Button>
        </div>

        <List
            className="bg-white rounded-lg shadow-md mb-4"
            itemLayout="horizontal"
            dataSource={noticia.comentarios}
            renderItem={(comentario) => (
            <List.Item actions={[<LikeOutlined key="like" />]}>
                <List.Item.Meta
                avatar={<Avatar src={comentario.usuarioFoto} />}
                title={comentario.usuarioNombre}
                description={comentario.comentario}
                />
                <span>{comentario.likes} likes</span>
            </List.Item>
            )}
        />

        <div className="flex space-x-3 p-4 bg-white rounded-lg shadow-md">
            <Button icon={<CameraOutlined />} type="primary" shape="circle" />
            <Button icon={<PictureOutlined />} type="primary" shape="circle" />
            <TextArea placeholder="Escribe un comentario..." rows={1} />
            <Button icon={<SendOutlined />} type="primary" />
        </div>
        </div>
    );
};

export default DetalleComentarEvento;
