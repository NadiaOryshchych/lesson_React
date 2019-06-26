import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ListBlock = styled.ul `
  li {
    cursor: pointer;
  }
`;

export default class ItemList extends Component {
  state = {
    itemList: null,
    error: false
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then( (itemList) => {
        this.setState({
          itemList
        })
      })
      .catch(this.onError);
    ; 
  }

  componentDidCatch() {
    this.setState({error: true})
  } 

  renderItem(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);

      return (
        <li 
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)} >
          {label}
        </li>
      )
    });
  }

  render() {

    const {itemList, error} = this.state;

    if (!itemList) {
      return <Spinner/>
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const items = this.renderItem(itemList);

    return (
      <ListBlock className="item-list list-group">
        {errorMessage}
        {items}
      </ListBlock>
    );
  }
}