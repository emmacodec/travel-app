import React from "react";
import Navbar from "./components/Navbar";
import Legend from "./components/Legend";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Select from "./components/Select";
import WatchOut from "./components/WatchOut";

function App() {
  return (
    <div>
      <Navbar />
      <Legend />
      <Destinations />
      <Search />
      <Select />
      <WatchOut />
    </div>
  );
}

export default App;
