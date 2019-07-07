import React from 'react';

const PleasureListItem = ({coffeeItem}) => {
  const {name, url, price} = coffeeItem;
  return (
    <div className="shop__item">
      <img src={url} alt="coffee"/>
      <div className="shop__item-title">{name}</div>
      <div className="shop__item-price">{price}</div>
  </div>
  )
}

export default PleasureListItem;