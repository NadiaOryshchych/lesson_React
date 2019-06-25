import React, { Component } from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ItemDetailsBlock = styled.div`
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
const ErrorText = styled.span`
  color: darkred;
`;

const Field = ({item, field, label}) => {
  let elem = item[field];

  if (Array.isArray(item[field])) {
    if (item[field][0].length == 0) {
      elem = <ErrorText>! unknown !</ErrorText>
    }
    if (item[field][0].length != 0) {
      elem = item[field][0];
    }
  } 
  
  if(!item[field]) {
    elem = <ErrorText>! unknown !</ErrorText>
  } 

  return (
    <li className="list-group-item d-flex justify-content-between">
      <TermView className="term">{label}</TermView>
      <span>{elem}</span>
    </li>
  )
}

export {Field};

export default class ItemDetails extends Component {
  gotService = new GotService();

  state = {
    item: {},
    error: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  componentDidCatch() {
    this.setState({error: true})
  } 

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  updateItem() {
    const { itemId } = this.props;

    if (!itemId) {
      return;
    }

    const {getData} = this.props; 

    getData(itemId)
      .then( item => {
        this.setState({ item });
      })
      .catch(this.onError);
  }

  render() {
    const { item, error } = this.state;

    if (!item) {
      return <Spinner />;
    }

    if (error) {
      return (
        <ItemDetailsBlock className="rounded">
          <ErrorMessage/> 
        </ItemDetailsBlock>
      )
    }
    const {name, id} = item;
    return (
      <ItemDetailsBlock className="rounded">
        <ItemName>{name}</ItemName>
        <div className='text-center'>{id}</div>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item})
            })
          }
        </ul>
      </ItemDetailsBlock>
    );
  }
}
