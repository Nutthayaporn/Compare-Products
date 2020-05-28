import React from "react";
import styled from "styled-components";

function ProductCompareTable(props) {
  const { products, className } = props;
  return (
    <table className={`table ${className}`} data-testid="table">
      <thead>
        <tr>
          <th scope="col" />
          {products.map((compareProduct, index) => {
            return (
              <th scope="col" key={index}>
                {compareProduct?.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="table-active">
            Price
          </th>
          {products.map((product, index) => {
            const priceText = product.price?.toLocaleString("en-US", {
              currency: "USD",
              style: "currency",
              minimumFractionDigits: 0,
            });
            return <td key={index}>{priceText}</td>;
          })}
        </tr>
        <tr>
          <th scope="row" className="table-active">
            Colors
          </th>
          {products.map((product, index) => {
            return (
              <td className="td-color" key={index}>
                {product?.colors.map((color, index2) => (
                  <div
                    className="color"
                    key={index2}
                    style={{ backgroundColor: color.code }}
                  />
                ))}
              </td>
            );
          })}
        </tr>
        <tr>
          <th scope="row" className="table-active">
            Conditions
          </th>
          {products.map((product, index) => {
            return <td key={index}>{product?.condition}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}

const StyledProductCompareTable = styled(ProductCompareTable)`
  table > .table-active {
    background-color: #f9f9f9;
  }

  tbody > tr > td > .color {
    display: inline-block;

    width: 15px;
    height: 15px;
    border-radius: 50%;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;
export { StyledProductCompareTable as ProductCompareTable };
