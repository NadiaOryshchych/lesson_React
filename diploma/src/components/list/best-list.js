import React, {Component} from 'react';
import BestListItem from '../list-item/best-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {bestListLoaded, listRequested, listError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeList extends Component {
  componentDidMount() {
    const {CoffeeService, bestListLoaded, listRequested, listError} = this.props;

    listRequested();
    CoffeeService.getBestItems()
      .then(res => bestListLoaded(res))
      .catch(listError());
  }

  render() {
    const {coffeeItems, loading, error} = this.props;

    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <Error />
    }

    return (
      coffeeItems.map(coffeeItem => {
        return <BestListItem key={coffeeItem.id} coffeeItem={coffeeItem} />
      })
    )
  }
};

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.bestList,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  bestListLoaded,
  listRequested,
  listError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));