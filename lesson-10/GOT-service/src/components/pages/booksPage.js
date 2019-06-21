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
    if (this.state.error) {
      return <ErrorMessage />
    }

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => item.name} />
    );

    const bookDetails = (
      <ItemDetails
        itemId={this.state.selectedBook}
        getData={this.gotService.getBook} >
          <Field field='numberOfPages' label='Number of pages' /> 
          <Field field='publiser' label='Publiser' /> 
          <Field field='released' label='Released' />
      </ItemDetails>
    );

    return (
      <RowBlock left = {itemList} right = {bookDetails} />
    )
  }
}