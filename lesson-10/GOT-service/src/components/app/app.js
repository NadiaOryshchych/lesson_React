import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomItemPage from '../randomItemPage';
import { CharacterPage, BooksPage, HousesPage } from '../pages';
import ErrorMessage from '../errorMessage';

export default class App extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    console.log('error');
    this.setState({error: true})
  } 
 
  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }

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
  }
};
