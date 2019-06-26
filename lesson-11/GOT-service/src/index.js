import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// class Example extends Component {
//   render() {
//     return this.props.children
//   }
// }
// ReactDOM.render(<Example>
//     <h1>Hello</h1> - это и есть props.children, которые можно исползовать внутри других компонентов
//   </Example>, document.getElementById('root'));
