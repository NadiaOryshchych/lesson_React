import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

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
    click: false
  }

  onToggleRandomChar = () => {
    this.setState({click: !this.state.click});
    console.log(this.state.click);
  }

  render() {
    const randomChar = !this.state.click ? <RandomChar /> : null;
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
          <Row>
            <Col md='6'>
              <ItemList />
            </Col>
            <Col md='6'>
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
