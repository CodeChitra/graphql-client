import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div>
      <img src={character.image} />
      <h2>{character.name}</h2>
    </div>
  );
};

export default CharacterCard;
