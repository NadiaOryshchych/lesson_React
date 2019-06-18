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
    this.state = {
      data: [
        {label: 'Going to learn React', important: false, like: false, id: idGenerator()},
        {label: 'That is so good', important: false, like: false, id: idGenerator()},
        {label: 'I need a break...', important: false, like: false, id: idGenerator()}
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  deleteItem(id) {
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
      id: idGenerator()
    }
    // const dataNew = data.filter((item) => typeof item === 'object');
    // const dataNew = data.filter((item) => item.__proto__ === Object.prototype);
    this.setState(({data}) => {
      if (newItem.__proto__ === Object.prototype && newItem.label !== '') {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      }
    });
  }

  changeItem(id, action) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, [action]: !old[action]};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      } 
    });
    
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const newArr = [...data];
    //   newArr[index][action] = !newArr[index][action];
    //   return {
    //     data: newArr
    //   }
    // });
  }

  onToggleImportant(id) {
    this.changeItem(id, 'important');
  }

  onToggleLiked(id) {
    this.changeItem(id, 'like');
  }

  searchPosts(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter( (item) => {
      return item.label.toLowerCase().indexOf(term) > -1
    });
  }

  filterPosts(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items
    }
  }

  onUpdateSearch(term) {
    this.setState({term});
  }

  onFilterSelect(filter) {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);

    return (
      <AppBlock>
        <AppHeader
          liked={liked}
          allPosts={allPosts} />
        <SearchBlock>
          <SearchPanel 
            onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </SearchBlock>
        <PostList 
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm
          onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
