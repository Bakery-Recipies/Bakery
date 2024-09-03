import React from "react";
import DishCard from "./pages/distCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/DishCard" element={<DishCard/>} />
      </Routes>
    </>
  );
}

export default App;
