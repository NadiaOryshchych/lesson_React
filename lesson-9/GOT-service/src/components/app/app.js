import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ButtonShowHide = styled.button`
  display: block;
  margin: 15px auto;
  padding: 5px;
  background-color: white;
  border-color: gray;
  border-radius: 7px;
`;


export default class App extends Component {
  state = {
    toggleRandomChar: false,
    error: false
  }

  componentDidCatch() {
    console.log('error');
    this.setState({error: true})
  }

  onToggleRandomChar = () => {
    this.setState({toggleRandomChar: !this.state.toggleRandomChar});
  }
 
  render() {
    const randomChar = !this.state.toggleRandomChar ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <> 
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              {randomChar}
            </Col>
            <Col>
              <ButtonShowHide onClick={this.onToggleRandomChar}> Show / Hide Random Character </ButtonShowHide>
            </Col>
          </Row>
          <CharacterPage/>
        </Container>
      </>
    );
  }
};
