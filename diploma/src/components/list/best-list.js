import React, {Component} from 'react';
import BestListItem from '../list-item/best-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {bestListLoaded, coffeeListLoaded} from '../../actions';
import Spinner from '../spinner';

class CoffeeList extends Component {
  state = {
    loading: true,
    error: false
  }

  componentDidMount() {
    const {CoffeeService, bestListLoaded, coffeeListLoaded} = this.props;

    CoffeeService.getBestItems()
      .then(res => {
        bestListLoaded(res);
        this.setState({loading: false});
      })
      .catch(() => this.setState({error: true}));

    CoffeeService.getCoffeeItems()
      .then(res => {
        coffeeListLoaded(res);
        this.setState({loading: false});
      })
      .catch(() => this.setState({error: true}));
  }

  render() {
    const {coffeeItems} = this.props;
    const {loading, error} = this.state;

    return (
      error ? <div className="error">Error! Our coffee has not arrived from the server yet :(</div> : 
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
  coffeeListLoaded
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));