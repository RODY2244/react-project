const initialState = {
    orders: [],
  };
  
  const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_ORDERS':
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default ordersReducer;
  