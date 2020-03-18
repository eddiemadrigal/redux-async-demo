import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { adviceReducer } from './reducers/adviceReducer';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(adviceReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>
    , document.getElementById('root')
);
    