import React from "react";
import "@fontsource/work-sans";
import Navigationbar from "./components/navigationbar/Navigationbar";
import MatchCard from "./components/matchCard/MatchCard";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <h1>Hello World</h1>
      <MatchCard />
    </div>
  );
}

export default App;
