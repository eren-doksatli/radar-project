import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import DetailModal from "./components/DetailModal";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => dispatch(getFlights()), 5000);
  }, []);

  const openModal = (id) => {
    setDetailId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailId(null);
  };
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? "" : "active"}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {isModalOpen && <DetailModal close={closeModal} detailId={detailId} />}
    </>
  );
};

export default App;
