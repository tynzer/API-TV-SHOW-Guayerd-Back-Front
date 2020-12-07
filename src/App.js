import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import TvShow from "./components/TvShow";

const App = () => {
  const [tvShowInfo, setTvShowInfo] = useState("");

  const srcTvShowInfo = (srcTvShowInfo) => {
    setTvShowInfo(srcTvShowInfo);
  };

  return (
    <div>
      <NavBar></NavBar>
      <Search srcTvShowInfo={srcTvShowInfo}></Search>
      <TvShow sendTvShowInfo={tvShowInfo}></TvShow>
    </div>
  );
};

export default App;
