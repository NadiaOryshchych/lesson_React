const initialState = {
  coffeeList: [],
  bestList: [],
  goodList: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COFFEE_LIST_LOADED':
      console.log(action.payload);
      return {
        ...state,
        coffeeList: action.payload,
        // loading: false,
        error: false
      };
    case 'BEST_LIST_LOADED':
      return {
        ...state,
        bestList: action.payload,
        // loading: false,
        error: false
      };
    case 'GOOD_LIST_LOADED':
      return {
        ...state,
        goodList: action.payload,
        // loading: false,
        error: false
      };
    case 'LIST_REQUESTED':
      return {
        ...state,
        // loading: true
      };
    case 'LIST_ERROR':
      return {
        ...state,
        // loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default reducer;