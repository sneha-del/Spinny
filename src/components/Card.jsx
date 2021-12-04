import React from "react";

import { Badge } from "@material-ui/core";

import "./card.css";

const Card = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="media">
        <Badge
          badgeContent={data.score}
          color={data.score > 6 ? "primary" : "secondary"}
        />

        <img src={data.image_url} alt="superhero" height="300" width="200" />
        <div className="text">
          <h1 style={{ color: "white" }}>{data.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
