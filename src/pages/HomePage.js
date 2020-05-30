import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { ProductCardList } from "components/ProductCardList";
import { ProductCompareTable } from "components/ProductCompareTable";

function HomePage(props) {
  const { className } = props;

  const products = useSelector((state) => state.products.products);
  const selectedProductIds = useSelector(
    (state) => state.products.selectedProductIds
  );

  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );
  return (
    <div className={className}>
      <div className="container">
        <h2>Please Select Products to Compare</h2>
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
  padding-top: 50px;
  h2 {
    margin-bottom: 30px;
  }

  ${ProductCompareTable} {
    margin-top: 40px;
  }
`;

export { StyledHomePage as HomePage };
