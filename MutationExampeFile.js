// This is just a demo file! It is now working code

import { gql, useMutation } from "@apollo/client";
import React from "react";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantity: Int!) {
    createProduct(name: $name, quantity: $quantity) {
      record {
        name // This is what data we want as a response
      }
    }
  }
`;
const MutationExampeFile = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  return (
    <div>
      <button
        onClick={() =>
          createProduct({ variables: { name: "Khichdi", quantity: 4 } })
        }
      >
        Create Product
      </button>
    </div>
  );
};

export default MutationExampeFile;
