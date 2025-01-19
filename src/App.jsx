import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PantallaInicial from "./Pages/PantallaInicial";
import PantallaSelector from "./Pages/PantallaSelector";
import Inicio from "./Pages/Inicio";
import Ranking from "./Pages/Ranking";
import Grupo from "./Pages/Grupo";
import Bar from "./components/Bar";
import Comunidades from "./Pages/Comunidades";
import Promos from "./Pages/Promos";
import Almacen from "./Pages/Almacen";
import ProductDetails from "./Pages/ProductDetails";
import DetalleEvento from "./Pages/DetalleEvento";
import Anuncio from "./Pages/Anuncio";
import StorageCategories from "./Pages/StorageCategories";
import AddItem from "./Pages/AddItem";
import ItemList from "./Pages/ItemList";

function App() {
  const location = useLocation();

  // Determina si mostrar el Bar y otras UI específicas
  const shouldShowBar = ["/inicio", "/ranking", "/grupos", "/comunidades", "/promos", "/almacen", "/producto-detalle","/Anuncio","/Ranking","/Promos","/category","/StorageCategories"].includes(location.pathname);

  return (
    <div className="relative h-[100vh]">
      <Routes>
        {/* Ruta inicial */}
        <Route path="/" element={<PantallaInicial />} />

        {/* Ruta de selección de ciudad, edad y preferencias */}
        <Route path="/selector" element={<PantallaSelector />} />

        {/* Pantalla principal con Bar y menú */}
        <Route path="/inicio" element={<Inicio />} />

        {/* Otras pantallas */}
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/grupos" element={<Grupo />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/almacen" element={<Almacen />} />
        <Route path="/producto-detalle" element={<ProductDetails />} />
        <Route path="/DetalleEvento" element={<DetalleEvento />} />
        <Route path="/Anuncio" element={<Anuncio />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/Promos" element={<Promos />} />
        <Route path="/Almacen" element={<Almacen />} />
        <Route path="/Promos" element={<Promos />} />
        <Route path="/category/:category" element={<ItemList />} />
        <Route path="/add-item/:category" element={<AddItem />} />
        <Route path="/StorageCategories" element={<StorageCategories />} />
      </Routes>

      {/* Mostrar Bar solo en pantallas específicas */}
      {shouldShowBar && <Bar />}
    </div>
  );
}

export default App;
