import React from 'react';
import { Logobar, Navbar, Sidebar } from "../components";
import { Routes, Route } from "react-router-dom";
import HistorySenduro from "../pages/HistorySenduro";
import HistoryPasirian from "./HistoryDawuhan";
import HistoryLumajang from "../pages/HistoryLumajang";

const History = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Logobar />
        </div>
        <div className="row-span-11">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-4 grid grid-rows-12 h-screen">
        <div className="row-span-1">
          <Navbar />
        </div>
        {/* Routes for HistorySenduro, HistoryPasirian, HistoryLumajang */}
        <Routes>
          <Route path="/history/senduro" element={<HistorySenduro />} />
          <Route path="/history/pasirian" element={<HistoryPasirian />} />
          <Route path="/history/lumajang" element={<HistoryLumajang />} />
        </Routes>
      </div>
    </div>
  );
};

export default History;
