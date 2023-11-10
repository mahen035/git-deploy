import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Component1 from './components/context/Component1';
import CountComponent from './components/ref/CountComponent';
import InputRef from './components/ref/InputRef';
import StateChange from './components/ref/StateChange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <MyApp /> */}
    {/* <Counter /> */}
    {/* <Component1/> */}
    {/* <CountComponent/> */}
    {/* <InputRef/> */}
    <StateChange/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
