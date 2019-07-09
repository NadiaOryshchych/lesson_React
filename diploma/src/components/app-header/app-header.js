import React from 'react';
import {Link} from 'react-router-dom';
import './app-header.sass';

const AppHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
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
          </div>
        </div>
      </div>
    </header>
  )
};

export default AppHeader;