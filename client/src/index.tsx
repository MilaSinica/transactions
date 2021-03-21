import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import NewCustomer from './scenes/NewCustomer';
import Transactions from './scenes/Transactions';
import reportWebVitals from './reportWebVitals';
import ShowMerchant from './scenes/ShowMerchant';
import ShowCustomer from './scenes/ShowCustomer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='container' style={{margin: '2rem'}}>
        <Route exact={true} path='/' component={Transactions} />
        <Route exact={true} path='/merchants/:id' component={ShowMerchant} />
        <Route exact={true} path='/merchants/:id/new' component={NewCustomer} />
        <Route exact={true} path='/customers/:id' component={ShowCustomer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


document.body.style.backgroundColor = '#ebebeb';
