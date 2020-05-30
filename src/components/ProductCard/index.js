import React from "react";
import styled from "styled-components";

function ProductCard(props) {
  const { imageUrl, name, description, price, isSelected, className } = props;

  const priceText = price?.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
  });

  return (
    <div
      className={className}
      onClick={() => !isSelected && props.onChange(!isSelected)}
      tabIndex={1}
    >
      <figure className="image" data-testid="background-image">
        <img src={imageUrl} alt={name} />
        <button
          className="btn btn-outline-light remove-button"
          onClick={() => props.onChange(!isSelected)}
        >
          Remove
        </button>
      </figure>
      <div className="info-block">
        <div className="info">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
        <h5 className="price">{priceText}</h5>
      </div>
    </div>
  );
}

const StyledProductCard = styled(ProductCard)`
  border: 1px solid #eeeff1;
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

    > .image > .remove-button {
      display: ${(props) => props.isSelected && "block"};
    }
  }

  > .image {
    position: relative;
    margin: 0;
    padding-bottom: 110%;
    background-color: ${(props) => props.isSelected && "#02c488"};
    overflow: hidden;

    > img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      object-fit: cover;
      object-position: center;

      width: 100%;
      height: 100%;
      opacity: ${(props) => (props.isSelected ? 0.7 : 1)};
      transition: all 0.4s;

      &:hover {
        transform: ${(props) => (props.isSelected ? 'scale(1)' : 'scale(1.2)')};
      }
    }

    > .remove-button {
      display: none;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      font-size: 14px;
      font-weight: bold;
    }
  }

  > .info-block {
    display: flex;
    justify-content: space-between;

    padding: 15px 10px;
  }

  > .info-block > .info {
    text-align: left;
    > .description {
      color: lightgray;
      font-size: 12px;
    }
  }

  > .info-block > .price {
    margin: 0;
    padding-left: 10px;

    color: #02c488;
    font-weight: bold;
  }
`;

export { StyledProductCard as ProductCard };
