const coffeeListLoaded = (newList) => {
  return {
    type: 'COFFEE_LIST_LOADED',
    payload: newList
  };
};

const bestListLoaded = (newList) => {
  return {
    type: 'BEST_LIST_LOADED',
    payload: newList
  };
};

const goodListLoaded = (newList) => {
  return {
    type: 'GOOD_LIST_LOADED',
    payload: newList
  };
};

const listRequested = (newList) => {
  return {
    type: 'LIST_REQUESTED',
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
  bestListLoaded,
  goodListLoaded,
  listRequested,
  listError
};