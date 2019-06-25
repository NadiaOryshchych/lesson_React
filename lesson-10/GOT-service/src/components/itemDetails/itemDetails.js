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
const ErrorText = styled.span`
  color: darkred;
`;

const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <TermView className="term">{label}</TermView>
      <span>{
        item[field] ? item[field] : <ErrorText>! unknown !</ErrorText>
      }</span>
    </li>
  )
}

export {Field};

export default class ItemDetails extends Component {
  gotService = new GotService();

  state = {
    item: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItem();
    console.log('mounting');
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
    console.log('update');
  }

  // componentDidCatch() {
  //   console.log('error');
  //   this.setState({error: true})
  // } 

  onItemLoaded = (item) => {
    this.setState({
      item,
      loading: false
    })
  }

  // onError = (err) => {
  //   this.setState({
  //     error: true,
  //     loading: false
  //   });
  // }

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
      // .then(this.onItemLoaded)
      .catch(this.onError);
    // this.foo.bar = 0;
  }

  render() {
    const { char, loading, error } = this.state;

      // const errorMessage = error ?  <ErrorMessage/> : null;
      // const spinner = loading ? <Spinner/> : null;
      // const content = !(loading || error) ? <View char={char} /> : null;

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
    console.log(name);
    console.log(this.props.children);
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
