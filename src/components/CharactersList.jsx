import { Link } from "react-router-dom";
import useFetchCharacters from "../hooks/useFetchCharacters";
import CharacterCard from "./CharacterCard";
import "./CharactersList.css";
const CharactersList = () => {
  const { loading, error, data } = useFetchCharacters();
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something Went Wrong!</div>;
  }
  return (
    <div className="main">
      <ul className="list">
        {data?.characters.results.map((char) => (
          <Link key={char.id} to={`/${char.id}`}>
            <CharacterCard character={char} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
