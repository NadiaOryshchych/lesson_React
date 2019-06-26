import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import RandomChar from '../randomChar';
// import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ButtonShowHide = styled.button `
  display: block;
  margin: 15px auto;
  padding: 5px;
  background-color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

export default class RandomItemPage extends Component {
  // gotService = new GotService();

  // state = {
  //   selectedChar: 13,
  //   error: false
  // }

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
      return <ErrorMessage />
    }

    // const charDetails = (
    //   <ItemDetails 
    //     itemId={this.state.selectedChar}
    //     getData={this.gotService.getCharacter} >
    //       <Field field='gender' label='Gender' /> 
    //       <Field field='born' label='Born' /> 
    //       <Field field='died' label='Died' /> 
    //       <Field field='culture' label='Culture' /> 
    //   </ItemDetails>
    // );

    return (
      <Row>
        <Col lg={{size: 5, offset: 0}}>
          {randomChar}
        </Col>
        <Col>
          <ButtonShowHide onClick={this.onToggleRandomChar}> Show / Hide Random Character </ButtonShowHide>
        </Col>
      </Row>
    )
  }
}