import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field } from '../itemDetails';
import styled from 'styled-components';

const BookBlock = styled.div`
  /* background: url('./img/dragon.jpg') center no-repeat;
  background-size: cover; */
  background-color: gray;
  border-radius: 5px;
  padding: 20px 200px;
`;

export default class BooksItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <BookBlock>
        <ItemDetails
          nameList={'book'}
          itemId={this.props.bookId}
          getData={this.gotService.getBook} >
            <Field field='numberOfPages' label='Number of pages' /> 
            <Field field='authors' label='Authors' /> 
            <Field field='publisher' label='Publisher' /> 
            <Field field='released' label='Released' />
        </ItemDetails>
      </BookBlock>
    )
  }
}