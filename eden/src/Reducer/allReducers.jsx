import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import dayReducer from './dayReducer';


const allReducers = combineReducers({
  question: questionReducer,
  dayReducer: dayReducer,
});

export default allReducers;