import React, {Component} from 'react';

import { Button } from 'reactstrap';

import styled from 'styled-components';

const AddFormBlock = styled.form `
  display: flex;
  margin-top: 20px;
  input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`;

export default class PostAddForm extends Component /* = ({onAdd}) => */ {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <AddFormBlock onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='О чем вы думаете сейчас?'
          className='form-control'
          onChange={this.onValueChange}
          value={this.state.text} />
        <Button
          outline color = 'secondary'
          type='submit'
          className='btn' >
          {/* onClick={() => onAdd('Hello')}> */}
            Добавить
        </Button>
      </AddFormBlock>
    )
  }
}
