import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import dayReducer from './dayReducer';
import canvasCounterReducer from './canvasCounterReducer'
import popUpReducer from './popUpReducer'


const allReducers = combineReducers({
  questionReducer: questionReducer,
  dayReducer: dayReducer,
  canvasCounterReducer: canvasCounterReducer,
  popUpReducer: popUpReducer,
});

export default allReducers;