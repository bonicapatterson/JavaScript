import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return <div className="subtotal">
    {/* Price */}

    <CurrencyFormat
    renderText={(value) => (
        <>
            <p>
            {/*Need to verify the line below */}
            Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                {/*Need to verify the line below */}
                <input type="checkbox" /> This order contains a gift
            </small>
        </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}

    />
    <button>Proceed to Checkout</button>
    </div>
    ;
}

export default Subtotal;