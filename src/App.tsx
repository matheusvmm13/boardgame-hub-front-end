import React from "react";
import "@fontsource/work-sans";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Navigationbar from "./components/navigationbar/Navigationbar";
import { Navigate, Route, Routes } from "react-router-dom";
import AllMatchesPage from "./pages/all-matches/AllMatchesPage";
import NewMatchPage from "./pages/new-match/NewMatchPage";
import AllBoardgamesPage from "./pages/all-boardgames/AllBoardgamesPage";
import MyMatchesPage from "./pages/my-matches/MyMatchesPage";

function App() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJpYyBMYW5nIiwiaWQiOiI2MjJhMzRlZjU1YzE1YjgyMGVkYzlhM2UiLCJpYXQiOjE2NDcwOTg1OTl9.mySIm1UGEEUtaZsa6pRVzTl3bTgssQfcIl2W_SOe6ho";
  localStorage.setItem("token", token);

  return (
    <ThemeProvider theme={theme}>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Navigate to="/matches" />} />
        <Route path="/matches" element={<AllMatchesPage />} />
        <Route path="/my-matches/new-match" element={<NewMatchPage />} />
        <Route path="/my-matches" element={<MyMatchesPage />} />
        <Route path="/all-boardgames" element={<AllBoardgamesPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
