import Cart from "./components/Cart";
import Product from "./components/Product";
import Axios from "axios";
import { useReducer, useState } from "react";
import cartReducer from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const getProducts = async () => {
    const { data } = await Axios.get("https://dummyjson.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useState(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
