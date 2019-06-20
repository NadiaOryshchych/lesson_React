import React, {Component} from 'react';
import GotService from '../../services/gotService';
import View from '../viewChar';
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

