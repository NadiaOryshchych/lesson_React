import React, {Component} from 'react';
import BestListItem from '../list-item/best-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {bestListLoaded, coffeeListLoaded, listRequested, listError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeList extends Component {
  state = {
    loading: true,
    error: false
  }

  componentDidMount() {
    const {CoffeeService, bestListLoaded, coffeeListLoaded, listRequested, listError} = this.props;

    listRequested();
    CoffeeService.getBestItems()
      .then(res => bestListLoaded(res))
      .catch(listError());

    listRequested();
    CoffeeService.getCoffeeItems()
      .then(res => coffeeListLoaded(res))
      .catch(listError());
    
    this.setState({loading: false});
  }

  render() {
    const {coffeeItems} = this.props;
    const {loading, error} = this.state;

    return (
      error ? <Error/> : 
      loading ? <Spinner/> : 
      (coffeeItems.map(coffeeItem => {
        return <BestListItem key={coffeeItem.id} coffeeItem={coffeeItem} /> 
      }))
    )
  }
};

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.bestList,
    coffeeList: state.coffeeList
  }
}

const mapDispatchToProps = {
  bestListLoaded,
  coffeeListLoaded,
  listRequested,
  listError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));