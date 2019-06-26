import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomItemPage from '../randomItemPage';
import { CharacterPage, BooksPage, HousesPage, BooksItem } from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components';

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: gray;
  }
  iframe {
    margin: 20px 0;
  }
`;

const App = () => {
  return (
    <Router>
      <div className='app'> 
        <Container>
          <Header />
        </Container>
        <Container>
          
          <Route path='/' exact component={() => 
              <MainBlock>
                <h1>Welcome to GOT DB</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XzSeCOOlGis" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </MainBlock>
            }/>
          
          <RandomItemPage />

          <Route path='/characters' exact component={CharacterPage}/>
          <Route path='/houses' exact component={HousesPage}/>
          <Route path='/books' exact component={BooksPage}/>
          <Route path='/books/:id' render={
            ({match}) => {
              const {id} = match.params;
              return <BooksItem bookId={id}/>
            }
          }/>

        </Container>
      </div>
    </Router>
  );
};

export default App;
