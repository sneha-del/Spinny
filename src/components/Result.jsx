import React, { useState } from "react";
import Card from "./Card";
import "./result.css";

function Result(props) {
  const { superData = [] } = props;
  const [more, setMore] = useState(10);
  const showMoreItems = () => {
    setMore((prevValue) => prevValue + 10);
  };
  console.log(superData);
  return (
    <>
      <div className="results">
        {superData.slice(0, more).map((superhero) => (
          <Card data={superhero} />
        ))}
      </div>

      <button className="btn-load" onClick={showMoreItems}>
        Load More...
      </button>
    </>
  );
}

export default Result;
