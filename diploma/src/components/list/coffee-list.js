import React, {Component} from 'react';
import CoffeeListItem from '../list-item/coffee-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {coffeeListLoaded} from '../../actions';
import Spinner from '../spinner';

class CoffeeList extends Component {
  state = {
    loading: true,
    error: false
  }

  componentDidMount() {
    const {CoffeeService, coffeeListLoaded} = this.props;

    CoffeeService.getCoffeeItems()
      .then(res => {
        coffeeListLoaded(res);
        this.setState({loading: false});
      })
      .catch(() => this.setState({error: true}));
  }

  render() {
    const {coffeeList} = this.props;
    const {loading, error} = this.state;
    return (
      error ? <div className="error">Error! Our coffee has not arrived from the server yet :(</div> : 
      loading ? <Spinner/> : 
      (coffeeList.map(coffeeItem => {
        return <CoffeeListItem key={coffeeItem.id} coffeeItem={coffeeItem} /> 
      }))
    )
  }
};

const mapDispatchToProps = {
  coffeeListLoaded
}

export default WithCoffeeService()(connect(undefined, mapDispatchToProps)(CoffeeList));