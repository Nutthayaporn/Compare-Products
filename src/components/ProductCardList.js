import React from "react";
import styled from "styled-components";

import { ProductCard } from "components/ProductCard";

function ProductCardList(props) {
  const { products, selectedProducts, className } = props;
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          isSelected={selectedProducts.some(
            (selectedProduct) => selectedProduct.id === product.id
          )}
          onChange={(isSelected) => {
            if (!isSelected) {
              props.onChange(
                selectedProducts.filter(({ id }) => id !== product.id)
              );
            } else {
              props.onChange(selectedProducts.concat(product));
            }
          }}
        />
      ))}
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
