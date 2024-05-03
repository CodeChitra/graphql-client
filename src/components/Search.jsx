import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [input, setInput] = useState("");
  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION
  );

  return (
    <div>
      <h1>Get Character Locations</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter Character Name"
        value={input}
      />
      <button
        onClick={() =>
          getLocations({
            variables: {
              name: input,
            },
          })
        }
      >
        Get Loactions
      </button>
      <div>
        {error && <div>Something went wrong</div>}
        {loading && <div>Loading....</div>}
        {data && (
          <div>
            <ul>
              {data.characters.results.map((loc) => (
                <li key={loc.location.id}>{loc.location.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
