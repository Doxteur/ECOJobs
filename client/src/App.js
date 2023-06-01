import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ListOffres from "./components/Offres/ListOffres";

function App() {
  return (
    <div className="relative bg-green-50 overflow-hidden max-h-screen">
      <Sidebar />
      <ListOffres />
    </div>
  );
}

export default App;
