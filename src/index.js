import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const Body = () => {
//   return(
//     <div id='body'>
//       <Navbar />
//       <Card
//         img='./public/images/image1.webp'
//         title='Turn your usual into free faves*'
//         button='Join Starbucks Rewards'
//       />
//       <Footer />
//     </div>
//   )
// }

// const Card = (props) => {
//   return(
//     <div className="card">
//       <div className='card-img'>
//         <img src={props.img} alt='image1'/>
//       </div>
//       <div className='card-text'>
//         <h5>{props.title}</h5>
//         <a className='btn-white' href='https//google.com'>{props.button}</a>
//       </div>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
