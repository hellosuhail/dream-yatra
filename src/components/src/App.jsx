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
import GiftCard from "./components/GiftCard";
import MyAccoundDetails from "./components/MyAccoundDetails";
import OffersDeals from "./components/OffersDeals";
import OfferNoFees from "./components/OfferNoFees";


function Layout() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/deals","/giftcard","/offers&deals","/nofees","/makepayment"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);


  
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
        <Route path="/giftcard" element={<GiftCard/>}/>
        <Route path="/bankaccound" element={<MyAccoundDetails/>} />
        <Route path="/offers&deals" element={<OffersDeals/>} />
        <Route path="/nofees" element={<OfferNoFees/>} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
