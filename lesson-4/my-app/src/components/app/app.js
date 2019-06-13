import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

  const data = [
    1,
    {label: 'Going to learn React', important: true, id: 'qwqw'},
    {label: 'That is so good', important: false, id: 'erer'},
    {label: 'I need a break...', important: false, id: 'sdfs'}
  ];

  // const dataNew = data.filter((item) => typeof item === 'object');
  const dataNew = data.filter((item) => item.__proto__ === Object.prototype);
  console.log(data);
  console.log(dataNew);

  return (
    <div className='app'>
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={dataNew} />
      <PostAddForm/>
    </div>
  );
}

export default App;