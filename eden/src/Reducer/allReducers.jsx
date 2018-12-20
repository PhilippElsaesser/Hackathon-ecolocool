import { combineReducers } from 'redux';
import questionReducer from './questionReducer';


const allReducers = combineReducers({
  question: questionReducer,
});

export default allReducers;