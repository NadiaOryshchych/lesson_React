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
const RandomCharName = styled.div `
  margin-bottom: 20px;
  text-align: center;
`;
const TermView = styled.span `
  font-weight: bold;
`;

const View = ({char}) => {
  const {name, gender, born, died, culture} = char;
  return (
    <>
      <RandomCharName>Random Character: {name}</RandomCharName>
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
    // console.log('mounting');
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    // console.log('unmounting');
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
      // console.log('render');
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

