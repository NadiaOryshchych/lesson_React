import React, { Component } from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';

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

const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <TermView className="term">{label}</TermView>
      <span>{item[field]}</span>
    </li>
  )
}

export {Field};

export default class ItemDetails extends Component {
  gotService = new GotService();

  state = {
    item: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
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
    const { itemId } = this.props;

    if (!itemId) {
      return;
    }

    const {getData} = this.props; 

    getData(itemId)
      .then(item => {
        this.setState({ item });
      })
      .catch(this.onError);
    // this.foo.bar = 0;
  }

  render() {
    if (!this.state.item) {
      return <Spinner />;
    }

    const {nameList} = this.props;

    // if (this.state.char == null || this.state.char == undefined) {
    if (this.state.error) {
      return <div className = 'select-error' > Please select a {nameList} </div>
    }
    const {item} = this.state;
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
