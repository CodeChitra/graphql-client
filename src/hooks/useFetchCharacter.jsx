import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
    }
  }
`;
const useFetchCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  return {
    loading,
    error,
    data,
  };
};

export default useFetchCharacter;
