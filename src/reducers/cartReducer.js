export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cart: [{ ...action.payload }, ...state.cart],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      break;
  }
}
