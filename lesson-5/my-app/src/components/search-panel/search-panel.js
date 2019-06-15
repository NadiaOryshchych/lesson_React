import React from 'react';

import styled from 'styled-components';

const SearchField = styled.input`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
`;

const SearchPanel = () => {
  return (
    <SearchField
      className='form-control'
      type='text'
      placeholder='Поиск по записям'
    />
  )
}

export default SearchPanel;