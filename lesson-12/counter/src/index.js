import {createStore} from 'redux';

const reducer = (state = 23, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return action.value;
    default:
      return state;
  }
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rst = (value) => ({type: 'RST', value});

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('rst').addEventListener('click', () => {
  const value = 0;
  store.dispatch(rst(value));
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);