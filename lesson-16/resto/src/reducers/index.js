const initialState = {
  menu: [],
  items: [],
  loading: true,
  error: false,
  total: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false
      };
    case 'MENU_ERROR':
      return {
        ...state,
        menu: state.menu,
        loading: false,
        error: true
      };
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        counter: 1
      };
      const twin = state.items.find(item => item.id === id);
      if (twin) {
        twin.counter++;
        const items = [...state.items];
        return {
          ...state,
          items,
          total: (state.total + parseInt(newItem.price))
        }
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            newItem
          ],
          total: (state.total + parseInt(newItem.price))
        }
      }
    case 'ITEM_REMOVE_FROM_CART':
      // const idx = action.payload;
      // const itemIndex = state.items.findIndex(item => item.id === idx);
      // const delItem = state.items.find(item => item.id === idx);
      // return {
      //   ...state,
      //   items: [
      //     ...state.items.slice(0, itemIndex),
      //     ...state.items.slice(itemIndex + 1)
      //   ],
      //   total: state.total - (delItem.price * delItem.counter)
      // }
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      console.log(itemIndex);
      const lol = state.items.find(item => item.id === idx);
      console.log(lol);
      console.log(lol.counter);
      if (lol.counter !== 1) {
        lol.counter--;
        return {
          ...state,
          items: [...state.items],
          total: state.total - lol.price
        }
      } else {
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex),
            ...state.items.slice(itemIndex + 1)
          ],
          total: state.total - lol.price
        }
      }
    default:
      return state;
  }
}

export default reducer;