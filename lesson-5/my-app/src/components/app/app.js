import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';

const AppBlock = styled.div `
  margin: 0 auto;
  max-width: 800px;
`;

const SearchBlock = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.dataId = idGenerator();
    this.state = {
      data: [
        {label: 'Going to learn React', important: true, id: idGenerator()},
        {label: 'That is so good', important: false, id: idGenerator()},
        {label: 'I need a break...', important: false, id: idGenerator()}
      ]
      // dataNew: this.data.filter((item) => item.__proto__ === Object.prototype)
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  // const dataNew = data.filter((item) => typeof item === 'object');
  // const dataNew = data.filter((item) => item.__proto__ === Object.prototype);

  // filterItem() {
  //    this.setState(({data}) => {
  //     const dataNew = data.filter((item) => item.__proto__ === Object.prototype);
  //     return {
  //       data: dataNew
  //     }      
  //   });
  // }

  deleteItem(id) {
    // const {dataId} = this.state.data.id;
    // console.log(dataId);
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      // этот метод меняет елемент в state - этого делать нельзя!
      // data.splice(index, 1);
      // return {
      //   data: data
      // }
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      return {
        data: newArr
      }
      
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  render() {
    return (
      <AppBlock>
        <AppHeader/>
        <SearchBlock>
          <SearchPanel/>
          <PostStatusFilter/>
        </SearchBlock>
        <PostList 
          posts={this.state.data}
          onDelete={this.deleteItem} />
        <PostAddForm
          onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
