import React from "react";
import Header from "./Header";
import Product from "./Product";
import "./Home.css";


function Home () {
    return (
          <div className="home">
          <Header />
            <img 
            className="home__image"
            src="https://i.imgur.com/H3QltbP.jpg" 
            alt="" 
            />
            {/* every product will contain a Product id, title, price, rating, image */}
            <div className="home__row1">
            <Product 
              id="123456"
              title="The Lean Startup"
              price={20.52}
              rating={5}
              image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <Product 
              id="123476"
              title="Women's Fluid Twill Tiered Dress"
              price={23.92}
              rating={3}
              image="https://m.media-amazon.com/images/I/719G4OX83BL._AC_UL1500_.jpg"
            /></div>

            <div className="home__row">
            <Product 
              id="123457"
              title="Crocs Unisex-Adult Classic Clogs"
              price={32.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81Vekenn4lL._AC_UL675_SR675,480_.jpg"
            />
            <Product 
              id="213456"
              title="Carhartt Men's Short-Sleeve Pocket T-Shirt"
              price={14.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/517RtJsGyHL._AC_UL675_SR675,480_.jpg"
            />
            <Product 
              id="222Dickies Men's Dri-tech Moisture Control Socks"
              price={12.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/9171uzu8PEL._AC_UL675_SR675,480_.jpg"
            />
            </div>
            <div className="home__row2">
            <Product 
              id="762294"
              title="Women's Slim-Fit Tank, Pack 2"
              price={14.20}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61Q13fPs1lL._AC_UL675_SR675,480_.jpg"
            />
            <Product 
              id="892212"
              title="MedPride Powder-Free Nitrile Exam GLoves, Medium, Box/100"
              price={9.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61YO+aQShHL._AC_UL675_SR675,480_.jpg"
            />
            </div>

            <div className="home__row3">
            <Product 
              id="645409"
              title="Fire TV Stick 4K Max Streaming, Alexa Voice Remote"
              price={34.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/41Xfz3eizpL._AC_UL675_SR675,480_.jpg"
            />

            </div>
            {/* Product */}
           {/* <Product /> */}
           </div>
        
    );
}

export default Home;