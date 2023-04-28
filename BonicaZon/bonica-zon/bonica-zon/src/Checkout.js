import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css';
import Subtotal from "./Subtotal";
import './Subtotal.css';



function Checkout() {
  const [{ basket }] = useStateValue();
    return (
      <div className="Lineup">
      <Header />
      <div className="checkout">
        <div className="checkout_left">

          <img 
          className="checkout__ad" 
          src="https://storage.googleapis.com/website-production/uploads/2023/01/audible-banner-ad-example-1024x130.png" 
          alt="" 
          />
        {basket?.length === 0 ? (
              <div>
                <h2>Your Shopping Basket is empty </h2>
                  <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                  </p> 
              </div>
            ) : (
              <div>
              <h2 className="Checkout__title">Your Shopping Basket</h2>

              {/* here is where I want to list out all items inn the basket */}
              {basket?.map((item) => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
              ))}
            </div>
            )}
            </div>
            {basket.length > 0 && (
              <div className="checkout_right"> 
              <Subtotal /> 
              </div>
            )}
            </div>
            </div>
            );
}

export default Checkout;