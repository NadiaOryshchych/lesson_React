import React, {Component} from 'react';
import CoffeeList from '../list/coffee-list';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc';
import {coffeeListLoaded, listRequested, listError} from '../../actions';

class CoffeePage extends Component {
  state = {
    term: '',
    filter: ''
  }

  buttons = [
    {country: 'Brazil'},
    {country: 'Kenya'},
    {country: 'Columbia'}
  ]

  componentDidMount() {
    const {CoffeeService, coffeeListLoaded, listRequested, listError} = this.props;

    listRequested();
    CoffeeService.getCoffeeItems()
      .then(res => coffeeListLoaded(res))
      .catch(listError());
  }

  searchCoffee(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term) > -1
    });
  }
 
  onUpdateSearch = (e) => {
    this.setState({term: e.target.value});
  }

  filterCoffee(items, filter) {
    if (filter === 'Brazil') {
      return items.filter(item => item.country === 'Brazil');
    } else if (filter === 'Kenya') {
      return items.filter(item => item.country === 'Kenya');
    } else if (filter === 'Columbia') {
      return items.filter(item => item.country === 'Columbia');
    } else {
      return items
    }
  }

  onFilterSelect(filter) {
    this.setState({filter});
  }
   
  render() {
    
    const {term, filter} = this.state;
    const {coffeeItems} = this.props;

    const visibleList = this.filterCoffee(this.searchCoffee(coffeeItems, term), filter);

    const buttons = this.buttons.map(({country}) => {
      const active = filter === country;
      const classAdd = active ? 'shop__filter-btn-active' : 'shop__filter-btn-pass'
      return (
        <button 
          key={country} 
          className={`shop__filter-btn ${classAdd}`}
          onClick={() => this.onFilterSelect(country)} >
          {country}
        </button>
      )
    });

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
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"/>
              </div>
              <div className="col-lg-4">
                <div className="title">About our beans</div>
                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
                <div className="shop__text">
                  Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                  <br/><br/>
                  Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                  so questions. <br/>
                  As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                  met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                  is song that held help face.
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="row">
              <div className="col-lg-4 offset-2">
                <form action="#" className="shop__search">
                  <label className="shop__search-label" htmlFor="filter">Looking for</label>
                  <input 
                    id="filter" 
                    type="text" 
                    placeholder="start typing here..." 
                    className="shop__search-input"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="shop__filter">
                  <div className="shop__filter-label">
                    Or filter
                  </div>
                  <div className="shop__filter-group">
                    {buttons}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">
                  <CoffeeList coffeeList={visibleList}/>
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

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeePage));