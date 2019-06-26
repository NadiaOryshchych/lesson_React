import React, {Component} from 'react';
import Spinner from '../spinner';
import gotService from '../../services/gotService';
import PropTypes from 'prop-types'; 

import styled from 'styled-components';

const ListBlock = styled.ul `
  li {
    cursor: pointer;
  }
`;

/* export default */ class ItemList extends Component {
  
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  }

  renderItem(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);

      return (
        <li 
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)} >
          {label}
        </li>
      )
    });
  }

  render() {
    const {data} = this.props;

    const items = this.renderItem(data);

    return (
      <ListBlock className="item-list list-group">
        {items}
      </ListBlock>
    );
  }
}

// КОМПОНЕНТЫ ВЫСШЕГО ПОРЯДКА

// const f = (a) => {
//   console.log(a);
//   return (b) => {
//     console.log(a + b)
//   }
// }
// f(1)(2);

const withData = (View, getData) => {
  // return ItemList;
  return class extends Component {

    state = {
      data: null
    }

    static defaultProps = {
      onItemSelected: () => {}
    }

    static propTypes = {
      onItemSelected: PropTypes.func
    }

    componentDidMount() {
      getData()
        .then( (data) => {
          this.setState({
            data
          })
        })
        .catch(this.onError);
      ; 
    }

    render() {    
      const {data} = this.state;

      if (!data ) {
        return <Spinner/>
      }

      return <View {...this.props} data={data} />
    }
  }
}

const {getAllCharacters} = new gotService()
export default withData(ItemList, getAllCharacters);