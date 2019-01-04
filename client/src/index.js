import React from 'react';
import ReactDOM from 'react-dom';
//azhar//
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./ReactRedux/store/index";
import index from "./ReactRedux/index"
//azhar//
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
