import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const myStore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
