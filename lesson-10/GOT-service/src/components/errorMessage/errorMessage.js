import React from 'react';

import img from './error.jpg';
import styled from 'styled-components';

const ErrorText = styled.div`
  display: block;
  margin: 15px auto;
  padding: 5px;
  color: darkred;
  background-color: white;
  border: none;
  border-radius: 7px;
`;

const ErrorMessage = () => {
  return (
    <>
      {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img>  если импортирую с папки public */}
      <img src={img} alt='error'></img> {/* если импортирую с этой же папки */}
      <ErrorText className="text-center">Something goes wrong</ErrorText>
    </>
  )
}

export default ErrorMessage;