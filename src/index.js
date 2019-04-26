import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fb';


import './index.css';
import rootReducer from './store/reducers/root.reducer';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbConfig),
        reduxFirestore(fbConfig)
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

