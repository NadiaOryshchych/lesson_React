import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import {Banner} from '../banners';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/';
import {withRouter} from 'react-router-dom';
import {coffeeListLoaded} from '../../actions';
import Spinner from '../spinner';

class CoffeeItem extends Component {
  state = {
    loading: true,
    error: false
  }
  
  componentDidMount() {
    const {CoffeeService, coffeeListLoaded} = this.props;
    CoffeeService.getCoffeeItems()
      .then(res => {
        coffeeListLoaded(res);
        this.setState({loading: false})
      })
      .catch(() => this.setState({error: true}))
  }

  renderItem = ({name, country, url, price, description}) => {
    return (
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
    )
  }

  render() {
    const {loading, error} = this.state;
    
    const {address} = this.props.match.params;

    const {coffeeItems} = this.props;

    const coffeeSelected = coffeeItems.find(item => item.address === address);

    const content =  error ? <div className="error">Error! Something goes wrong :(</div> :
      loading ? <Spinner/> :
      this.renderItem(coffeeSelected);
    
    return (
      <>
        <AppHeader/>
        <Banner classStyle={'banner'} title={'Our Coffee'}/>
        {content}
        <AppFooter/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeItems: state.coffeeList
  }
}

const mapDispatchToProps = {
  coffeeListLoaded
}

export default withRouter(WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItem)));