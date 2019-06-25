import React, {Component} from 'react';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';

export default class BooksPage extends Component {
  gotService = new GotService();

  state = {
    selectedBook: 1,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id
    })
  }

  render() {

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => item.name} />
    );

    const bookDetails = (
      <ItemDetails
        nameList={'book'}
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook} >
          <Field field='numberOfPages' label='Number of pages' /> 
          <Field field='authors' label='Authors' /> 
          <Field field='publisher' label='Publisher' /> 
          <Field field='released' label='Released' />
      </ItemDetails>
    );

    return (
      <RowBlock 
        left = { !this.state.error ? itemList : <ErrorMessage/> }
        right = { !this.state.error ? bookDetails : <ErrorMessage/> }
      />
    )
  }
}