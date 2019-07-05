import React from 'react';
import {Link} from 'react-router-dom';
// import cartIcon from './shopping-cart-solid.svg';
import './app-header.sass';

const AppHeader = ({total}) => {
    return (
       <div className="container">
           <div className="row">
               <div className="col-lg-6">
                    <header>
                        <ul className="header">
                            <li className="header__item">
                                <Link to='/'>
                                    <img src="logo/Logo.svg" alt="logo" />
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to='/our-coffee'>Our coffee</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/for-your-pleasure'>For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </div>
        </div>
    )
};

export default AppHeader;