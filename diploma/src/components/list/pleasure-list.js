import React, {Component} from 'react';
import PleasureListItem from '../list-item/pleasure-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {goodListLoaded, listRequested, listError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeList extends Component {
  componentDidMount() {
    const {CoffeeService, goodListLoaded, listRequested, listError} = this.props;

    listRequested();
    CoffeeService.getGoodsItems()
      .then(res => goodListLoaded(res))
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
        return <PleasureListItem key={coffeeItem.id} coffeeItem={coffeeItem} />
      })
    )
  }
};

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.goodList,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  goodListLoaded,
  listRequested,
  listError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));