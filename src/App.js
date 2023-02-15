import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

// initial store
const initialStore = {
  cart: cartItems,
  total: 1,
  amount: 5
};

const myStore = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <main>
      <Provider store={myStore}>
        <Navbar />
        <CartContainer />
      </Provider>
    </main>
  );
}

export default App;
