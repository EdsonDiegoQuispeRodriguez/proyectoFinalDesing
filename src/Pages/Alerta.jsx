import { Link, useSearchParams } from "react-router-dom";
import { alerts } from "../data/alerts";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";

const Alerta = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const placeName = searchParams.get("placeName");

  //const arrow = "⬅️";
  //const exit = "❌";

  const styleAlert =
    "rounded-full bg-[#ebf1fd] w-[25vw]  h-[25vw] p-4 flex justify-center items-center";

  return (
    <div className="w-screen h-screen bg-white">
      <div className="text-xl text-black flex justify-between py-3 px-5 mb-4">
        <span><Link to={'/'} ><ArrowLeftOutlined /></Link></span>
        <p>Reportar</p>
        <span><Link to={'/'} ><CloseOutlined /></Link></span>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 p-6">
        {alerts.map((alert, index) => (
          <Link to={`/detalleEvento?lat=${lat}&lng=${lng}&placeName=${placeName}&tipo=${alert.tipo}`} key={index} className={styleAlert}>
            <img src={`imgs/${alert.url}`} width={80} alt={`imgs/${alert.tipo}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Alerta;
