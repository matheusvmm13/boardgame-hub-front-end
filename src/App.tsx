import React from "react";
import "@fontsource/work-sans";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Navigationbar from "./components/navigationbar/Navigationbar";
import MatchCard from "./components/matchCard/MatchCard";
import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigationbar />
      <Header title={"Hello World Again"} />
      <MatchCard />
    </ThemeProvider>
  );
}

export default App;
