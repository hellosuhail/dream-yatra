import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Flight from "./components/Routes/Flight";
import Footer from "./components/Footer";
import Pakages from "./components/Routes/Pakages";
import Hotals from "./components/Routes/Hotals";
import Bus from "./components/Routes/Bus";
import Cruise from "./components/Routes/Cruise";
import Traveldeals from "./components/Routes/Traveldeals";
import AuthModal from "./components/Login";
import FlightList from "./components/FlightList";
import { store } from "./store/store";
import { Provider } from "react-redux";
import FlightDetail from "./components/FlightDetail";


function Layout() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/deals", "/flight-list/:flightId","/flight-list"];
   const shouldHideNavbar =
    location.pathname.startsWith("/flight-list/") ||
    hideNavbarOnRoutes.includes(location.pathname);
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Flight />} />
        <Route path="/packages" element={<Pakages />} />
        <Route path="/deals" element={<Traveldeals />} />
        <Route path="/hotels" element={<Hotals />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/cruise" element={<Cruise />} />
        <Route path="/login" element={<AuthModal/>}/>
        <Route path="/flight-list" element={<FlightList/>}/>
        <Route path="/flight-list/:flightId" element={<FlightDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
     <Provider store={store}>
      <Router>
      <Layout />
      </Router>
    </Provider>
  );
}

export default App;
