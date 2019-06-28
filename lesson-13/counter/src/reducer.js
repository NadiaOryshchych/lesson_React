const reducer = (state = 23, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return 0;
    default:
      return state;
  }
}

export default reducer;