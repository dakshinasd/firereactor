import authReducer from './auth.reducer';
import projectReducer from './project.reducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer, 
    project: projectReducer,
    firestore: firestoreReducer
});

export default rootReducer;