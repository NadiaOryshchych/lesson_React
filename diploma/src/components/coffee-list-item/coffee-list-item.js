import React from 'react';

const CoffeeListItem = ({coffeeItem}) => {
  const {name, country, url, price, id, description} = coffeeItem;
  return (
    <div className="shop__item">
      <img src={url} alt="coffee"/>
      <div className="shop__item-title">{name}</div>
      <div className="shop__item-country">{country}</div>
      <div className="shop__item-price">{price}</div>
    </div>
  )
}

export default CoffeeListItem;