import React from "react";
import "@fontsource/work-sans";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Navigationbar from "./components/navigationbar/Navigationbar";
import { Navigate, Route, Routes } from "react-router-dom";
import AllMatchesPage from "./pages/all-matches/AllMatchesPage";
import NewMatchPage from "./pages/new-match/NewMatchPage";
import MyBoardgamesPage from "./pages/my-boardgames/MyBoardgamesPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Navigate to="/matches" />} />
        <Route path="/matches" element={<AllMatchesPage />} />
        <Route path="/my-matches/new-match" element={<NewMatchPage />} />
        <Route path="/my-boardgames" element={<MyBoardgamesPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
