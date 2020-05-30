import React from "react";
import { render } from "@testing-library/react";

import { ProductCard } from "components/ProductCard";

describe("ProductCard", () => {
  describe("When product card is selected", () => {
    test("The card should change color", () => {
      const { container } = render(
        <ProductCard
          imageUrl="https://placehold.it/720"
          name="iPhone SE"
          description="64GB"
          price={14900}
          isSelected={true}
        />
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
