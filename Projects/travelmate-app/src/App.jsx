import LocationInfo from "./components/LocationInfo";
import NetworkStatus from "./components/NetworkStatus";
import CanvasPad from "./components/CanvasPad";
import TravelTips from "./components/TravelTips";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-[1400px] p-4 bg-gray-900 text-white">
      <Header />
      <NetworkStatus />
      <LocationInfo />
      <CanvasPad />
      <TravelTips />
    </div>
  );
}

export default App;
