import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const RandomCharBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  img {
    width: 100%;
  }
`;
const ItemName = styled.div `
  margin-bottom: 20px;
  text-align: center;
`;
const TermView = styled.span `
  font-weight: bold;
`;
const ErrorText = styled.span `
  color: darkred;
`;

const View = ({char}) => {
  const {name, gender, born, died, culture, id} = char;
  return (
    <>
      <ItemName>Random Character: {name}</ItemName>
      <div className='text-center'>{id}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Gender </TermView>
          <span>{
            gender ? gender : <ErrorText>! unknown !</ErrorText>
          }</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Born </TermView>
          <span>{
            born ? born : <ErrorText>! unknown !</ErrorText>
          }</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Died </TermView>
          <span>{
            died ? died : <ErrorText>! unknown !</ErrorText>
          }</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Culture </TermView>
          <span>{
            culture ? culture : <ErrorText>! unknown !</ErrorText>
          }</span>
        </li>
      </ul>
    </>
  )
}

export default class RandomChar extends Component {
  gotService = new GotService();

  state = {
    char: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false 
    });
  }

  updateChar = () => {
    const id = Math.floor(Math.random()*140 + 25); // диапазон с 25 по 140 персонаж
    // const id = 11100000;
    this.gotService.getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

    render() {
      const { char, loading, error } = this.state;

      const errorMessage = error ?  <ErrorMessage/> : null;
      const spinner = loading ? <Spinner/> : null;
      const content = !(loading || error) ? <View char={char} /> : null;

      return (
        <RandomCharBlock className="rounded">
          {errorMessage}
          {spinner}
          {content}
        </RandomCharBlock>
      );
    }
}

