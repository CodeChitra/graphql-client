import { Route, Routes } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import Character from "./components/Character";
import Search from "./components/Search";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:id" element={<Character />} />
    </Routes>
  );
};

export default App;
