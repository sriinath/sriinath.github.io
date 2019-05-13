import * as React from "react";
import * as ReactDOM from "react-dom"

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunkMiddleware from 'redux-thunk'

import App from './Layout'
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);