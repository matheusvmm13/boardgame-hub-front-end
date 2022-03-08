import React from "react";
import "@fontsource/work-sans";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Navigationbar from "./components/navigationbar/Navigationbar";
import MatchCard from "./components/matchCard/MatchCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigationbar />
      <h1>Hello World</h1>
      <MatchCard />
    </ThemeProvider>
  );
}

export default App;
