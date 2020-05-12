import React from "react";
import Card from "../card/card.component";

const Album = (props) => {
  console.log(props, "album");
  const {
    album: { albumTitle, photoCollection },
  } = props;

  return (
    <div>
      <h1>{albumTitle}</h1>
      {photoCollection.map((x) => (
        <Card key={x.id} card={x} />
      ))}
    </div>
  );
};

export default Album;
