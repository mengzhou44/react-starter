import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
ReactDOM.render(<Provider store={store} >
    <App />
</Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
