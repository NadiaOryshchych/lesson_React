import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomItemPage from '../randomItemPage';
import { CharacterPage, BooksPage, HousesPage } from '../pages';

const App = () => {
  return (
    <> 
      <Container>
        <Header />
      </Container>
      <Container>
        <RandomItemPage />
        <CharacterPage/>
        <BooksPage/>
        <HousesPage/>
      </Container>
    </>
  );
};

export default App;
