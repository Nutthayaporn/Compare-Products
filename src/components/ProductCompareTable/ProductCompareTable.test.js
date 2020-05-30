import React from "react";
import { render } from "@testing-library/react";

import { ProductCompareTable } from "components/ProductCompareTable";

describe("ProductCompareTable", () => {
  describe("When selcted products more than one", () => {
    test("should render compare product table", () => {
      const selectedProducts = [1, 2];

      const { getByTestId } = render(
        <ProductCompareTable products={selectedProducts} />
      );

      expect(getByTestId("table")).toBeInTheDocument();
    });
  });
  describe("When no selcted products", () => {
    test("should not render compare product table", () => {
      const selectedProducts = [];

      const { queryByTestId } = render(
        <ProductCompareTable products={selectedProducts} />
      );

      expect(queryByTestId("table")).toBeNull();
    });
  });
});
