import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;
    const categoryIcon = `./img/${category}.png`;

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span>
                <img className="menu__categoryIcon" src={categoryIcon} alt={category}></img>
            </div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;
