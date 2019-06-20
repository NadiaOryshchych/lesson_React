import React, { Component } from 'react';
import GotService from '../../services/gotService';
import View from '../viewChar';
import Spinner from '../spinner';

import styled from 'styled-components';

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  img {
    width: 100%;
  }
`;

export default class CharDetails extends Component {
  gotService = new GotService();

  state = {
    char: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  updateChar() {
    const { charId } = this.props;

    if (!charId) {
      return;
    }
    this.gotService.getCharacter(charId)
      .then(char => {
        this.setState({ char });
      })
      .catch(this.onError);
    // this.foo.bar = 0;
  }

  render() {
    if (!this.state.char) {
      return <Spinner />;
    }

    // if (this.state.char == null || this.state.char == undefined) {
    if (this.state.error) {
      return <div className = 'select-error' > Please select a character </div>
    }

    return (
      <CharDetailsBlock className="rounded">
        <View char={this.state.char} />
      </CharDetailsBlock>
    );
  }
}
