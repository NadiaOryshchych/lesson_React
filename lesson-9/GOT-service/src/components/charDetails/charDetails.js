import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
// import ErrorMessage from '../errorMessage';
import styled from 'styled-components';

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
`;
const CharDetailsHeader = styled.div `
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
      <CharDetailsHeader>{name}</CharDetailsHeader>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Gender</TermView>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Born</TermView>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Died</TermView>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermView className="term">Culture</TermView>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  )
}

export default class CharDetails extends Component {
  gotService = new GotService();

  state = {
    char: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
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

  updateChar() {
    const {charId} = this.props;
    if (!charId) {
      return
    }

    this.gotService.getCharacter(charId)
      .then((char) => { this.setState({char}) })
      .then(this.onCharLoaded)
      .catch(this.onError);
    // this.foo.bar = 0;
  }

  render() {
    const { char, loading } = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading) ? <View char={char} /> : null;

    console.log(char);

    // if (!this.state.char) {
    //   return <div className = 'select-error' > Please select a character </div>
    // }
    
    return (
      <CharDetailsBlock className="rounded">
        {spinner}
        {content}
      </CharDetailsBlock>
    );
  }   
}