import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './components/navigation/router';

ReactDOM.render(
    <React.StrictMode>
        <Router>
          <ReactRouter/>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();