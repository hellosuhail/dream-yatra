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
import GiftCard from "./components/GiftCard";
import MyAccoundDetails from "./components/MyAccoundDetails";
import OffersDeals from "./components/OffersDeals";
import OfferNoFees from "./components/OfferNoFees";
import ContactUs from "./components/ContactUs";
import AllHotels from "./components/AllHotels";
import SeeHotelsDeals from "./components/SeeHotelsDeals";
import WelcomeAnimation from "./components/Welcome";
import HotelSearch from "./components/HotelSearch";
import Booking from "./components/HotelBooking";
import HotelReview from "./components/HotelReview";
import FlightList from "./components/FlightList";
import FlightDetails from "./components/FlightDetail";
import BusRouteTimng from "./components/Bus/BusRouteTimng";
import BusList from "./components/Bus/BusList";
import Viewseat from "./components/Bus/Viewseat";
import Passenger from "./components/Bus/Passenger";
import OfferTrems from "./components/Bus/OfferTrems";
import ViewDate from "./components/Cruise/ViewDate";
import BookingCruise from "./components/Cruise/BookingCruise";
import PartySize from "./components/Cruise/PartySize";
import SelectRoom from "./components/Cruise/SelectRoom";


function Layout() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/deals","/giftcard","/bus/Offers-terms","/offers&deals","/bus/fillter/viewseat/passenger","/hotels/deals","/hotels/bestdeals","/contact","/hotels/recommended","/hotels/booking"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);


  
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {/* <WelcomeAnimation/> */}
      <Routes>
        <Route path="/" element={<Flight />} />
        <Route path="/packages" element={<Pakages />} />
        <Route path="/deals" element={<Traveldeals />} />
        <Route path="/hotels" element={<Hotals />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/bus/fillter/:id" element={<BusList/>}/>
        <Route path="/bus/Offers-terms" element={<OfferTrems/>}/>
        <Route path="/bus/fillter/viewseat/:viewId" element={<Viewseat/>}/>
        <Route path="/bus/fillter/viewseat/passenger" element={<Passenger/>}/>
        <Route path="/cruise" element={<Cruise />} />
        <Route path="/cruise/date" element={<ViewDate />} />
        <Route path="/cruise/date/room-configuration" element={<PartySize/>}/>
        <Route path="/cruise/date/room-configuration/select-room" element={<SelectRoom/>}/>
        <Route path="/cruise/date/booking" element={<BookingCruise/>} />
        <Route path="/giftcard" element={<GiftCard/>}/>
        <Route path="/hotels/bestdeals" element={<AllHotels/>}/>
        <Route path="/hotels/recommended" element={<HotelSearch/>}/>
        <Route path="/hotels/deals" element={<SeeHotelsDeals/>}/>
        <Route path="/hotels/booking" element={<Booking/>}/>
        <Route path="/hotels/review/:id" element={<HotelReview/>}/>
        <Route path="/bankaccound" element={<MyAccoundDetails/>} />
        <Route path="/offers&deals" element={<OffersDeals/>} />
        <Route path="/nofees" element={<OfferNoFees/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/flight" element={<FlightList/>}/>
        <Route path="/flight-list/:flightId" element={<FlightDetails/>} />
        <Route path="/bus/online-booking/:Id" element={<BusRouteTimng/>} />
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
