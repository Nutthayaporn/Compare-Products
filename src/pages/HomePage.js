import React, { useState } from "react";
import styled from "styled-components";

import { ProductCardList } from "components/ProductCardList";
import { ProductCompareTable } from "components/ProductCompareTable";

const products = [
  {
    id: 1,
    imageUrl: "https://placehold.it/720",
    name: "iPhone SE",
    description: "64GB",
    price: 14900,
    colors: [{ code: "blue" }],
  },
  {
    id: 2,
    imageUrl: "https://placehold.it/720",
    name: "iPhone 9",
    description: "64GB",
    price: 13900,
    colors: [{ code: "green" }],
  },
  {
    id: 3,
    imageUrl: "https://placehold.it/720",
    name: "iPhone 8",
    description: "64GB",
    price: 12900,
    colors: [{ code: "red" }],
  },
  {
    id: 4,
    imageUrl: "https://placehold.it/720",
    name: "iPhone 7",
    description: "64GB",
    price: 11900,
    colors: [{ code: "pink" }],
  },
];

function HomePage() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = (value) => {
    setSelectedProducts(value);
  };
  
  return (
    <div className="App">
      <div className="container">
        <ProductCardList
          products={products}
          selectedProducts={selectedProducts}
          onChange={handleChange}
        />
        <ProductCompareTable products={selectedProducts} />
      </div>
    </div>
  );
}

const StyledHomePage = styled(HomePage)`
  padding-top: 30px;

  ${ProductCompareTable} {
    margin-top: 30px;
  }
`;


export { StyledHomePage as HomePage };