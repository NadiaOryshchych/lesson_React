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

export {
  coffeeListLoaded, 
  bestListLoaded,
  goodListLoaded
};