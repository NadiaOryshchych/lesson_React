import React from 'react';

import img from './error.jpg';

const ErrorMessage = () => {
  return (
    <>
      {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img>  если импортирую с папки public */}
      <img src={img} alt='error'></img> {/* если импортирую с этой же папки */}
      <div className="text-center">Something goes wrong</div>
    </>
  )
}

export default ErrorMessage;