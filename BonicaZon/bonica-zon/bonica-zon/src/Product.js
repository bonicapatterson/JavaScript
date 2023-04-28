import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
const [, dispatch] = useStateValue();

const addToBasket = () => {
// add item to basket...
dispatch({
  type: 'ADD_TO_BASKET',
  item: {
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
  },
});
  };

  return (
    <div className="product">
      {/* Here we are asking for the return of the product attributes */}
      <p>{title}</p> {/* we are asking for the title of the product */}
      <p className="product__price">
        {/* the name of the class is product__price */}
        <small>$</small> {/* we want the money symbol small */}
        <strong>{price}</strong> {/* we want the actual price bold */}
      </p>
      <div className="product__rating">
        {/* we are asking for the rating of the product. We're asking for an array, then for it to be filled empty,  */}
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐ </p>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick ={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

