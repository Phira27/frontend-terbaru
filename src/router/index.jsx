import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "../style.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Contents, Navbar } from "../components";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Pre";
import Footer from "../components/Footer/Footer";
import About from "../pages/About";
import HistoryPasirian from "../pages/HistoryPasirian";
import HistoryLumajang from "../pages/HistoryLumajang";
import HistorySenduro from "../pages/HistorySenduro";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/about" element={<About />} />
          <Route path="/history/pasirian" element={<HistoryPasirian />} />
          <Route path="/history/lumajang" element={<HistoryLumajang />} />
          <Route path="/history/senduro" element={<HistorySenduro />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
