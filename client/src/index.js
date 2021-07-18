import { AuthenticationContext } from 'context';
import React from 'react';
import ReactDOM from 'react-dom';
import Styles from 'styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
ReactDOM.render(
  <React.StrictMode>
    <AuthenticationContext>
      <Styles>
        <App />
      </Styles>
    </AuthenticationContext>
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
