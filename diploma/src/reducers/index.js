const initialState = {
  coffeeList: [],
  loading: true,
  error: false
}

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'COFFEE_LIST_LOADED':
      return {
        coffeeList: action.payload,
        loading: false
      };
    case 'COFFEE_LIST_REQUESTED':
      return {
        ...state,
        loading: true
      };
    case 'LIST_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default reducer;