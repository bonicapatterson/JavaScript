import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue} from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);


  return (
   <nav nav className="header">
    {/* logo on the left --> img */}
    <Link to='/'>
    <img 
		className="header__logo" 
		src='https://i.imgur.com/i88IVd8.png' 
		alt="" 
    />
    </Link>

    {/* Search box */}
    <div className="header__search">
      <input type='text' className='header__searchInput' />
      <SearchIcon className='header__SearchIcon' style={{ color: "black",  backgroundColor: "orange" }} />
    </div>

    {/* 3 links */}
    <div className="header__nav">{/* this is the Navigation header class */}
      {/* link 1 */}
      <Link to="/login" className="header__link"> {/* This link is going to the login */}
        <div className="header__option"> {/* we'd like the ability to control each link (the 'hello' and 'signin') seperately */}
          <span className="header__optionLineOne">Hello Bonica</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </Link>

      {/* link 2 */}
      <Link to="/login" className="header__link"> {/* This link is going to the login */}
        <div className="header__option"> {/* we'd like the ability to control each link (the 'hello' and 'signin') seperately */}
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>

      {/* link 3 */}
      <Link to="/login" className="header__link"> {/* This link is going to the login */}
        <div className="header__option"> {/* we'd like the ability to control each link (the 'hello' and 'signin') seperately */}
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>

      {/* link 4 */}
      <Link to="/checkout" className="header__link">{/* This link is going to the Checkout */}
        <div className="header__optionBasket"> {/* we'd like the ability to control each link (the 'basket' and 'number of items in basket') seperately}
          {/* Shopping basket icon */}
          <ShoppingBasketIcon className='header__ShoppingBasketIcon' style={{ color: "white" }} /> {/* this is the basket icon imported from materialUI */}
          {/* The number of items in the basket */}
          <span className="header_optionLineTwo header__basketCount">
          {basket?.length}
          </span>{/* this is the number of items in the basket which we will work on later, for now we enter '0'*/}
        </div>
      </Link>
    </div>
    {/* Basket icon with number */}
    
  </nav>
  );
}

export default Header