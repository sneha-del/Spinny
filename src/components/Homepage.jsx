import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";
import "./homepage.css";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [superData, setSuperData] = useState([]);

  async function apiGet() {
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`);
    const data = await res.json();
    console.log(data.results);
    setSuperData(data.results);
    // setShowFavHeroes(false);
  }

  function handle(e) {
    const searchTerm = e.target.value;
    setInput(searchTerm);
    apiGet();
  }

  return (
    <div className="Homepage">
      <Search input={input} handle={handle} />
      <Result superData={superData} />
    </div>
  );
};

export default Homepage;
