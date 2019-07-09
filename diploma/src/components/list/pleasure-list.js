import React, {Component} from 'react';
import PleasureListItem from '../list-item/pleasure-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {goodListLoaded} from '../../actions';
import Spinner from '../spinner';

class GoodList extends Component {
  state = {
    loading: true,
    error: false
  }

  componentDidMount() {
    const {CoffeeService, goodListLoaded} = this.props;

    CoffeeService.getGoodsItems()
      .then(res => {
        goodListLoaded(res);
        this.setState({loading: false});
      })
      .catch(() => this.setState({error: true}));
  }

  render() {
    const {coffeeItems} = this.props;
    const {loading, error} = this.state;

    return (
      error ? <div className="error">Error! Our good stuff has not arrived from the server yet :(</div> : 
      loading ? <Spinner/> : 
      (coffeeItems.map(coffeeItem => {
        return <PleasureListItem key={coffeeItem.id} coffeeItem={coffeeItem} /> 
      }))
    )
  }
};

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.goodList
  }
}

const mapDispatchToProps = {
  goodListLoaded
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(GoodList));