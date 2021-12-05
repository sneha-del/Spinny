import React from "react";
import "./search.css";
import { FcFilmReel } from "react-icons/fc";

function Search(props) {
  // const {} = props;
  console.log(props);
  const { handle, input } = props;

  return (
    <div className="search-box">
      <div className="search-div">
        <FcFilmReel size="100px" />
        <input
          type="text"
          placeholder="search .."
          value={input}
          className="search-bar"
          onChange={handle}
        />
        <FcFilmReel
          size="100px"
          style={{ float: "right", marginTop: "-150px" }}
        />
        {/* <button>Go</button> */}
        {/* <button onClick={apiGet}>Fetch API</button> */}
      </div>
    </div>
  );
}

export default Search;
