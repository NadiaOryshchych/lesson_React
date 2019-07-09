import React, {Component} from 'react';
import coffeeService from '../../services/coffee-service';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/';
import {coffeeListLoaded, listRequested, listError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeItem extends Component {
  coffeeService = new coffeeService();

  state = {
    loading: true,
    error: false
  }
  
  componentDidMount() {
    const {CoffeeService, coffeeListLoaded, listRequested, listError} = this.props;
    // console.log(CoffeeService.getCoffeeItems());

    listRequested();
    CoffeeService.getCoffeeItems()
        .then(res => coffeeListLoaded(res))
        .catch(listError());

    const {coffeeItems} = this.props;
    console.log(coffeeItems);
    this.setState({loading: false})
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {

    const {loading, error} = this.state;

    if (error) {
      return <div className="error">Error! Something goes wrong :(</div>
    }
    if (loading) {
      console.log(loading);
      return <Spinner/>
    }
    
    const {coffeeItems, coffeeName} = this.props;
    console.log(coffeeItems);

    console.log(loading);
    const coffeeSelected = coffeeItems.find(item => item.address === coffeeName.address);
    console.log(coffeeSelected);
    
    const {name, country, url, price, description} = coffeeSelected;
    
    return (
      <>
        <div className="banner">
          <div className="container">
            <div className="row">
              <h1 className="title-big">Our Coffee</h1>
            </div>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-1">
                <div className="shop__img">
                  <img src={url} alt="coffee_item"/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="title">About "{name}"</div>
                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                <div className="shop__point">
                  <span>Country: </span>{country}
                </div>
                <div className="shop__point">
                  <span>Description: </span>{description}
                </div>
                <div className="shop__point">
                  <span>Price: </span>
                  <span className="shop__point-price">{price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.coffeeList,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  coffeeListLoaded,
  listRequested,
  listError
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItem));