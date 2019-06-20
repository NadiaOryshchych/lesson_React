import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
// import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ListBlock = styled.ul `
  li {
    cursor: pointer;
  }
`;

export default class ItemList extends Component {
  gotService = new GotService();

  state = {
    charList: null,
    loading: true
  }

  componentDidMount() {
    this.gotService.getAllCharacters()
      .then( (charList) => {
        this.setState({
          charList
        })
      })
      .then(this.onCharLoaded)
    ; 
    // console.log(this.state.charList)
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    })
  }

  renderItem(arr) {
    return arr.map((item, i) => {
      return (
        <li 
          key={i}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(271 + i)} >
          {item.name}
        </li>
      )
    })
  }

  render() {
    const {charList, loading} = this.state;

    if (!charList) {
      return <Spinner/>
    }
    // const spinner = (loading) ? <Spinner/> : null;
    const items = this.renderItem(charList);

    return (
      <ListBlock className="item-list list-group">
        {/* {spinner} */}
        {items}
      </ListBlock>
    );
  }
}