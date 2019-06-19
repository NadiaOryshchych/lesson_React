import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import GotService from './services/gotService';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

const got = new GotService();
got.getAllCharacters()
  .then(res => {
    res.forEach(item => console.log(item.name));
  });
got.getCharacter(130)
  .then(res => console.log(res));

got.getAllBooks()
  .then(res => {
    res.forEach(item => console.log(item.name));
  });
got.getBook(1)
  .then(res => console.log(res));

got.getAllHouses()
  .then(res => {
    res.forEach(item => console.log(item.name));
  });
got.getHouse(3)
  .then(res => console.log(res));