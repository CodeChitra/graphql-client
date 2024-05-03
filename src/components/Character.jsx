import React from "react";
import useFetchCharacter from "../hooks/useFetchCharacter";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetchCharacter(id);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return <CharacterCard character={data.character} />;
};

export default Character;
