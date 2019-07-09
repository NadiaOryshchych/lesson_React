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
