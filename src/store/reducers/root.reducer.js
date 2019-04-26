import authReducer from './auth.reducer';
import projectReducer from './project.reducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer, 
    project: projectReducer
});

export default rootReducer;