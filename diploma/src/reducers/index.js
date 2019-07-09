const initialState = {
  coffeeList: [],
  bestList: [],
  goodList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COFFEE_LIST_LOADED':
      return {
        ...state,
        coffeeList: action.payload
      };
    case 'BEST_LIST_LOADED':
      return {
        ...state,
        bestList: action.payload
      };
    case 'GOOD_LIST_LOADED':
      return {
        ...state,
        goodList: action.payload
      };
    default:
      return state;
  }
}

export default reducer;