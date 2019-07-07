import React, {Component} from 'react';
import CoffeeListItem from '../list-item/coffee-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {coffeeListLoaded, listRequested, listError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeList extends Component {
  componentDidMount() {
    const {CoffeeService, coffeeListLoaded, listRequested, listError} = this.props;

    listRequested();
    CoffeeService.getCoffeeItems()
      .then(res => coffeeListLoaded(res))
      .catch(listError());
  }

  render() {
    const {coffeeList, loading, error} = this.props;

    if (loading) {
      return <Spinner/>
    }
    if (error) {
      return <Error />
    }

    return (
      coffeeList.map(coffeeItem => {
        return <CoffeeListItem key={coffeeItem.id} coffeeItem={coffeeItem} />
      })
    )
  }
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  coffeeListLoaded,
  listRequested,
  listError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));