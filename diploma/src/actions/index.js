const coffeeListLoaded = (newList) => {
  return {
    type: 'COFFEE_LIST_LOADED',
    payload: newList
  };
};

const coffeeListRequested = (newList) => {
  return {
    type: 'COFFEE_LIST_REQUESTED',
    payload: newList
  };
};

const listError = () => {
  return {
    type: 'LIST_ERROR'
  };
};

export {
  coffeeListLoaded, 
  coffeeListRequested,
  listError
};