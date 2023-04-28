import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Code which runs according to a given condition a.k.a useEffect

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is infact logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user isn logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //The cleanup operations go here
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} /> 
          {/* This is the default route*/ }
          <Route path="/" element={<Home />} />
        </Routes>
      </div> 
    </Router>  
    );
}

export default App;