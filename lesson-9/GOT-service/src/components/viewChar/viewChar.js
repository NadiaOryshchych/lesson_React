import React from 'react';
// import GotService from '../../services/gotService';

import styled from 'styled-components';

const CharName = styled.div `
  margin-bottom: 20px;
  text-align: center;
`;
const TermView = styled.span `
  font-weight: bold;
`;

const View = ({char}) => {
  const {name, gender, born, died, culture, id} = char;
  return (
    <>
      <CharName>Random Character: {name}</CharName>
      <div className='text-center'>{id}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Gender </TermView>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Born </TermView>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Died </TermView>
          <span>{died}9</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Culture </TermView>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  )
}

export default View;