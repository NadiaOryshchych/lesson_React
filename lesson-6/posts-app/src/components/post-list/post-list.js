import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <ListGroupItem key={id}>
        < PostListItem 
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)} />
      </ListGroupItem>
    )
  });

  return (
    <ListGroup className='app-list'>
      {/* императивный подход - не удобный и не правильный*/}
      {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}

      {/* згенерируем автоматически массив, который пришел с сервера */}
      {elements}
    </ListGroup>
  )
}

export default PostList;