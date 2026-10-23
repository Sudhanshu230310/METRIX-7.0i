import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/common/footer";
import HomePage from "./components/Home/home";
import { Navbar } from "./components/common/navbar";
import MEBME from "./components/About/me&bme";
import IITRPR from "./components/About/iitRopar";
import Sbaoi from "./components/About/sbaoi";
import Stermi from "./components/About/stermi";
import { EventCalendar } from "./components/more/calendar";
import Abstract from "./components/abstract";
import Sponsorship from "./components/sponsorship";
import Committee from "./components/committee";
import Contact from "./components/more/contact";
import Accommodation from "./components/more/Accommodation";
import Geographicalview from "./components/geographical";
import Speakers from "./components/speakers";
import Schedule from "./components/more/Schedule";
import HowToReach from "./components/more/howToreach";


function App() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<EventCalendar />} />
            <Route path="/iitrpr" element={<IITRPR />} />
            <Route path="/me" element={<MEBME />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/geo" element={<Geographicalview />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/howtoreach" element={<HowToReach />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  );
}

export default App;