import React from "react";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import { Box } from "@mui/material";

export const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
