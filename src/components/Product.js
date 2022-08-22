import React from "react";

function Product({ state, dispatch }) {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
        background: "#ccc",
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "30%",
            marginTop: 10,
            padding: 10,
            border: "1px solid gray",
          }}
        >
          <img
            src={prod.thumbnail}
            alt='thumbnail'
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>

          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                background: "red",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: {
                    id: prod.id,
                  },
                })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                background: "green",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    price: prod.price,
                  },
                })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Product;
