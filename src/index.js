import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import storeRedux from "./Redux/storeRedux";

ReactDOM.render(
  <React.StrictMode>
      {/*<Provider store={storeRedux}>*/}
          <App />
      {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
