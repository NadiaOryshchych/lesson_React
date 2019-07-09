import React from 'react';
import {Link} from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="preview">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title-big">Everything You Love About Coffee</h1>
            <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"/>
            <div className="preview__subtitle">We makes every day full of energy and taste</div>
            <div className="preview__subtitle">Want to try our beans?</div>
            <Link to='/our-coffee' className="preview__btn">More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Banner = ({classStyle, title}) => {
  return (
    <div className={classStyle}>
      <div className="container">
        <div className="row">
          <h1 className="title-big">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export { MainBanner, Banner };
