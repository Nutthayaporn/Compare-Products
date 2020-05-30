import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { ProductCard } from "components/ProductCard";

import { productSlice } from "store";

function ProductCardList(props) {
  const { products, selectedProductIds, className } = props;

  const dispatch = useDispatch();
  return (
    <div className={className}>
      {products.map((product) => {
        return (
          <ProductCard
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            isSelected={selectedProductIds.includes(product.id)}
            onChange={(isSelected) => {
              if (!isSelected) {
                dispatch(
                  productSlice.actions.removeSelectedProduct(product.id)
                );
              } else {
                dispatch(productSlice.actions.addSelectedProduct(product.id));
              }
            }}
          />
        );
      })}
    </div>
  );
}

const StyledProductCardList = styled(ProductCardList)`
  display: flex;
  overflow-x: auto;

  > ${ProductCard} {
    flex: 0 0 200px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export { StyledProductCardList as ProductCardList };
