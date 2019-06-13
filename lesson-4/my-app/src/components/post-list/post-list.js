import React from 'react';

import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className='list-group-item'>
        {/* < PostListItem 
          label = {item.label}
          important = {item.important}
        /> */}
        < PostListItem {...itemProps} />
      </li>
    )
  });

  return (
    <ul className='app-list list-group'>
      {/* императивный подход - не удобный и не правильный*/}
      {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}

      {/* згенерируем автоматически массив, который пришел с сервера */}
      {elements}
    </ul>
  )
}

export default PostList;