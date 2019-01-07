import React from 'react';
import ReactDOM from 'react-dom';
//azhar//
import { Provider } from "react-redux";
import store from "./ReactRedux/store/index";
//azhar//
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
