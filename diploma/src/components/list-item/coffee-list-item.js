import React from 'react';
import {Link} from 'react-router-dom'; 

const CoffeeListItem = ({coffeeItem}) => {
  const {name, address, country, url, price} = coffeeItem;
  return (
    <Link to={`/${address}`}>
      <div className="shop__item">
        <img src={url} alt="coffee"/>
        <div className="shop__item-title">{name}</div>
        <div className="shop__item-country">{country}</div>
        <div className="shop__item-price">{price}</div>
      </div>
    </Link> 
  )
}

export default CoffeeListItem;


// const Field = ({item, field, label}) => {
//   let elem = item[field];

//   if (Array.isArray(item[field])) {
//     if (item[field][0].length == 0) {
//       elem = <ErrorText>! unknown !</ErrorText>
//     }
//     if (item[field][0].length != 0) {
//       elem = item[field][0];
//     }
//   } 
  
//   if(!item[field]) {
//     elem = <ErrorText>! unknown !</ErrorText>
//   } 

//   return (
//     <li className="list-group-item d-flex justify-content-between">
//       <TermView className="term">{label}</TermView>
//       <span>{elem}</span>
//     </li>
//   )
// }