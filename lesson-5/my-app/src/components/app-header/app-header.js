import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26 px; }
  h2 {
    font-size: 1.2 rem;
    color: grey; }
`;

const AppHeader = () => {
  return (
    <Header>
      <h1>Nadia</h1>
      <h2>5 записей, из них понравились 0</h2>
    </Header>
  )
}

export default AppHeader;