import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <h1>Esta es la pag del producto: {id}</h1>
    </div>
  );
};

export default ProductItem;
