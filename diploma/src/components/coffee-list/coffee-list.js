import React, {Component} from 'react';
import CoffeeListItem from '../coffee-list-item';
import {connect} from 'react-redux';
import WithCoffeeService from '../hoc/';
import {coffeeListLoaded, coffeeListRequested, listError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeList extends Component {
    componentDidMount() {
        const {CoffeeService, coffeeListLoaded, coffeeListRequested, listError} = this.props;

        coffeeListRequested();
        CoffeeService.getCoffeeItems()
            .then(res => coffeeListLoaded(res))
            .catch(listError());
    }

    render() {
        const {coffeeItems, loading, error} = this.props;
        console.log(coffeeItems);

        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <Error />
        }

        return (
            <div className="shop__wrapper">
                {
                    coffeeItems.map(coffeeItem => {
                        return <CoffeeListItem key={coffeeItem.id} coffeeItem={coffeeItem} />
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        coffeeItems: state.coffeeList,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    coffeeListLoaded,
    coffeeListRequested,
    listError
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         coffeeListLoaded: (newList) => {
//             dispatch({
//                 type: 'COFFEE_LIST_LOADED',
//                 payload: newList
//             })
//         }
//     }
// }

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeList));