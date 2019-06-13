import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

ReactDOM.render(<App/>, document.getElementById('root'));
// ----------------------------------------------------------------------------------------
// LESSON 3

// const Header = () => {
//   // const scr = '<sript>alert("Error!")</sript>';
//   return <h2>Hello World!</h2>
// }

// const Field = () => {
//   const holder = 'Enter here';
//   const styleField = {
//     width: '300px'
//   }
//   return <input 
//               style={styleField}
//               type='text' 
//               placeholder={holder} 
//               autoComplete=''
//               className='first'
//               htmlFor=''/>
// }

// const Btn = () => {
//   const text = 'Log in';
//   const logged = true;
//   return <button>{logged ? 'Enter' : text}</button>
// }

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Field/>
//       <Btn/>
//     </div>
//   )
// }

// ----------------------------------------------------------------------------------------
//LESSON 4

// // function WhoAmI(props) {
// //   return  (
// //     <>
// //       <h1>My name is {props.name}, surname - {props.surname}</h1>
// //       <a href={props.link}>My profile</a>
// //     </>
// //   )
// // }

// // function WhoAmI({ name, surname, link }) {
// //   return (
// //     <>
// //       <h1>My name is {name}, surname - {surname}</h1>
// //       <a href={link}>My profile</a>
// //     </>
// //   )
// // }

// class WhoAmI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     // привязывает обработчик событий (контект вызова) к конкретному экземпляру
//     // 1-й способ использовать функцию как обработчик событий - bind
//     // this.nextYear = this.nextYear.bind(this);
//     // 2-й способ - записать собитые (функцию) в конструкторе
//     this.nextYear = () => {
//       this.setState(state => ({
//         years: ++state.years
//       }))
//     }
//   }
//   // (ещё новая технология)
//   // 3-й способ - class fields - позволяет записывать свойства и методы вне конструктора
//   // state = {
//   //   years: 26
//   // }
//   // nextYear = () => {
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }

//   // nextYear() {
//   //   // this.state.years++ // это выводит ошибку

//   //   // 1-й способ
//   //   // setState - дает возможность обратится к конктерному елементу объекта state
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }

//   render() {
//     const { name, surname, link } = this.props;
//     const { years } = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>+</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name='John' surname='Smith' link='facebook.com' />
//       <WhoAmI name='Ivan' surname='Smith' link='twitter.com' />
//       <WhoAmI name='Alex' surname='Shepard' link='facebook.com' />
//     </>
//   )
// }