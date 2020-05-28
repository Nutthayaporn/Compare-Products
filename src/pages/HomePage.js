import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { ProductCardList } from "components/ProductCardList";
import { ProductCompareTable } from "components/ProductCompareTable";

function HomePage() {
  const products = useSelector((state) => state.products.products);
  const selectedProductIds = useSelector(
    (state) => state.products.selectedProductIds
  );

  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );
  return (
    <div className="App">
      <div className="container">
        <h2>Please select two or more</h2>
        <ProductCardList
          products={products}
          selectedProductIds={selectedProductIds}
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
