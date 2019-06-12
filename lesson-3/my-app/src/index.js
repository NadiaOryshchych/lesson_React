import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

ReactDOM.render(<App/>, document.getElementById('root'));


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
