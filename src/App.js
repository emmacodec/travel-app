import React from "react";
import Navbar from "./components/Navbar";
import Legend from "./components/Legend";
import Destinations from "./components/Destinations";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Legend />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
