import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, About, Weather, Youtube, Contact } from "../page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
